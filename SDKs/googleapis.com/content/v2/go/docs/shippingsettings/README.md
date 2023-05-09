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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ShippingsettingsCustomBatchRequest: &shared.ShippingsettingsCustomBatchRequest{
            Entries: []shared.ShippingsettingsCustomBatchRequestEntry{
                shared.ShippingsettingsCustomBatchRequestEntry{
                    AccountID: sdk.String("dolore"),
                    BatchID: sdk.Int64(865677),
                    MerchantID: sdk.String("facilis"),
                    Method: sdk.String("cupiditate"),
                    ShippingSettings: &shared.ShippingSettings{
                        AccountID: sdk.String("nemo"),
                        PostalCodeGroups: []shared.PostalCodeGroup{
                            shared.PostalCodeGroup{
                                Country: sdk.String("Hungary"),
                                Name: sdk.String("Vincent Ernser"),
                                PostalCodeRanges: []shared.PostalCodeRange{
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("molestiae"),
                                        PostalCodeRangeEnd: sdk.String("dolore"),
                                    },
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("ullam"),
                                        PostalCodeRangeEnd: sdk.String("velit"),
                                    },
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("adipisci"),
                                        PostalCodeRangeEnd: sdk.String("cupiditate"),
                                    },
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("occaecati"),
                                        PostalCodeRangeEnd: sdk.String("numquam"),
                                    },
                                },
                            },
                            shared.PostalCodeGroup{
                                Country: sdk.String("Swaziland"),
                                Name: sdk.String("Dianne Skiles"),
                                PostalCodeRanges: []shared.PostalCodeRange{
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("vel"),
                                        PostalCodeRangeEnd: sdk.String("necessitatibus"),
                                    },
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("iste"),
                                        PostalCodeRangeEnd: sdk.String("nesciunt"),
                                    },
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("corrupti"),
                                        PostalCodeRangeEnd: sdk.String("cupiditate"),
                                    },
                                },
                            },
                            shared.PostalCodeGroup{
                                Country: sdk.String("Virgin Islands, British"),
                                Name: sdk.String("Lee Roberts"),
                                PostalCodeRanges: []shared.PostalCodeRange{
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("commodi"),
                                        PostalCodeRangeEnd: sdk.String("commodi"),
                                    },
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("fugit"),
                                        PostalCodeRangeEnd: sdk.String("ullam"),
                                    },
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("ullam"),
                                        PostalCodeRangeEnd: sdk.String("doloremque"),
                                    },
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("est"),
                                        PostalCodeRangeEnd: sdk.String("qui"),
                                    },
                                },
                            },
                        },
                        Services: []shared.Service{
                            shared.Service{
                                Active: sdk.Bool(false),
                                Currency: sdk.String("adipisci"),
                                DeliveryCountry: sdk.String("totam"),
                                DeliveryTime: &shared.DeliveryTime{
                                    CutoffTime: &shared.CutoffTime{
                                        Hour: sdk.Int64(183504),
                                        Minute: sdk.Int64(648166),
                                        Timezone: sdk.String("eligendi"),
                                    },
                                    HandlingBusinessDayConfig: &shared.BusinessDayConfig{
                                        BusinessDays: []string{
                                            "deleniti",
                                            "dolor",
                                        },
                                    },
                                    HolidayCutoffs: []shared.HolidayCutoff{
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("reiciendis"),
                                            DeadlineHour: sdk.Int64(820462),
                                            DeadlineTimezone: sdk.String("odit"),
                                            HolidayID: sdk.String("consectetur"),
                                            VisibleFromDate: sdk.String("inventore"),
                                        },
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("minima"),
                                            DeadlineHour: sdk.Int64(703651),
                                            DeadlineTimezone: sdk.String("facilis"),
                                            HolidayID: sdk.String("deserunt"),
                                            VisibleFromDate: sdk.String("nisi"),
                                        },
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("ipsam"),
                                            DeadlineHour: sdk.Int64(29270),
                                            DeadlineTimezone: sdk.String("illo"),
                                            HolidayID: sdk.String("iure"),
                                            VisibleFromDate: sdk.String("incidunt"),
                                        },
                                    },
                                    MaxHandlingTimeInDays: sdk.Int64(908274),
                                    MaxTransitTimeInDays: sdk.Int64(62224),
                                    MinHandlingTimeInDays: sdk.Int64(409021),
                                    MinTransitTimeInDays: sdk.Int64(989122),
                                    TransitBusinessDayConfig: &shared.BusinessDayConfig{
                                        BusinessDays: []string{
                                            "quidem",
                                            "asperiores",
                                        },
                                    },
                                    TransitTimeTable: &shared.TransitTable{
                                        PostalCodeGroupNames: []string{
                                            "deserunt",
                                            "repudiandae",
                                        },
                                        Rows: []shared.TransitTableTransitTimeRow{
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(102019),
                                                        MinTransitTimeInDays: sdk.Int64(711275),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(787850),
                                                        MinTransitTimeInDays: sdk.Int64(506770),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(708075),
                                                        MinTransitTimeInDays: sdk.Int64(826478),
                                                    },
                                                },
                                            },
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(982447),
                                                        MinTransitTimeInDays: sdk.Int64(217275),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(412128),
                                                        MinTransitTimeInDays: sdk.Int64(114924),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(147297),
                                                        MinTransitTimeInDays: sdk.Int64(724073),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(401844),
                                                        MinTransitTimeInDays: sdk.Int64(203396),
                                                    },
                                                },
                                            },
                                        },
                                        TransitTimeLabels: []string{
                                            "eos",
                                            "alias",
                                            "ad",
                                            "a",
                                        },
                                    },
                                    WarehouseBasedDeliveryTimes: []shared.WarehouseBasedDeliveryTime{
                                        shared.WarehouseBasedDeliveryTime{
                                            Carrier: sdk.String("id"),
                                            CarrierService: sdk.String("atque"),
                                            OriginAdministrativeArea: sdk.String("quaerat"),
                                            OriginCity: sdk.String("aperiam"),
                                            OriginCountry: sdk.String("dignissimos"),
                                            OriginPostalCode: sdk.String("quam"),
                                            OriginStreetAddress: sdk.String("modi"),
                                            WarehouseName: sdk.String("fuga"),
                                        },
                                        shared.WarehouseBasedDeliveryTime{
                                            Carrier: sdk.String("iure"),
                                            CarrierService: sdk.String("deleniti"),
                                            OriginAdministrativeArea: sdk.String("officia"),
                                            OriginCity: sdk.String("sint"),
                                            OriginCountry: sdk.String("laborum"),
                                            OriginPostalCode: sdk.String("dolor"),
                                            OriginStreetAddress: sdk.String("ad"),
                                            WarehouseName: sdk.String("illum"),
                                        },
                                        shared.WarehouseBasedDeliveryTime{
                                            Carrier: sdk.String("sit"),
                                            CarrierService: sdk.String("molestias"),
                                            OriginAdministrativeArea: sdk.String("voluptas"),
                                            OriginCity: sdk.String("expedita"),
                                            OriginCountry: sdk.String("voluptas"),
                                            OriginPostalCode: sdk.String("maiores"),
                                            OriginStreetAddress: sdk.String("ea"),
                                            WarehouseName: sdk.String("vel"),
                                        },
                                        shared.WarehouseBasedDeliveryTime{
                                            Carrier: sdk.String("delectus"),
                                            CarrierService: sdk.String("accusamus"),
                                            OriginAdministrativeArea: sdk.String("reiciendis"),
                                            OriginCity: sdk.String("consequatur"),
                                            OriginCountry: sdk.String("sed"),
                                            OriginPostalCode: sdk.String("accusantium"),
                                            OriginStreetAddress: sdk.String("voluptates"),
                                            WarehouseName: sdk.String("provident"),
                                        },
                                    },
                                },
                                Eligibility: sdk.String("maiores"),
                                MinimumOrderValue: &shared.Price{
                                    Currency: sdk.String("quaerat"),
                                    Value: sdk.String("numquam"),
                                },
                                MinimumOrderValueTable: &shared.MinimumOrderValueTable{
                                    StoreCodeSetWithMovs: []shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                        shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                            StoreCodes: []string{
                                                "incidunt",
                                                "dolores",
                                                "enim",
                                            },
                                            Value: &shared.Price{
                                                Currency: sdk.String("nihil"),
                                                Value: sdk.String("libero"),
                                            },
                                        },
                                    },
                                },
                                Name: sdk.String("Marshall Daugherty"),
                                PickupService: &shared.PickupCarrierService{
                                    CarrierName: sdk.String("repellendus"),
                                    ServiceName: sdk.String("cum"),
                                },
                                RateGroups: []shared.RateGroup{
                                    shared.RateGroup{
                                        ApplicableShippingLabels: []string{
                                            "commodi",
                                            "similique",
                                            "autem",
                                        },
                                        CarrierRates: []shared.CarrierRate{
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("recusandae"),
                                                CarrierService: sdk.String("sapiente"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("id"),
                                                    Value: sdk.String("odit"),
                                                },
                                                Name: sdk.String("Sheryl Littel"),
                                                OriginPostalCode: sdk.String("atque"),
                                                PercentageAdjustment: sdk.String("doloribus"),
                                            },
                                        },
                                        MainTable: &shared.Table{
                                            ColumnHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "similique",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "eveniet",
                                                            "nam",
                                                            "animi",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "voluptate",
                                                            "voluptatibus",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "nulla",
                                                            "dolorem",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "a",
                                                    "perferendis",
                                                    "quaerat",
                                                    "excepturi",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "dolore",
                                                    "voluptatem",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("laboriosam"),
                                                        Value: sdk.String("culpa"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("dicta"),
                                                        Value: sdk.String("atque"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("ratione"),
                                                        Value: sdk.String("vitae"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("quisquam"),
                                                        Value: sdk.String("atque"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("culpa"),
                                                        Value: sdk.String("temporibus"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("a"),
                                                        Value: sdk.String("ad"),
                                                    },
                                                },
                                            },
                                            Name: sdk.String("Sam Wisoky"),
                                            RowHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "possimus",
                                                            "praesentium",
                                                            "neque",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "animi",
                                                    "debitis",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "voluptatem",
                                                    "quisquam",
                                                    "vitae",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("architecto"),
                                                        Value: sdk.String("sint"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("eligendi"),
                                                        Value: sdk.String("occaecati"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("quis"),
                                                        Value: sdk.String("tempore"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("officia"),
                                                        Value: sdk.String("iste"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("quas"),
                                                        Value: sdk.String("laboriosam"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("ducimus"),
                                                        Value: sdk.String("voluptatum"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("sapiente"),
                                                        Value: sdk.String("deserunt"),
                                                    },
                                                },
                                            },
                                            Rows: []shared.Row{
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("iure"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("sint"),
                                                                Value: sdk.String("autem"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("iste"),
                                                            SubtableName: sdk.String("cupiditate"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("ab"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("fuga"),
                                                                Value: sdk.String("a"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("dolor"),
                                                            SubtableName: sdk.String("voluptatum"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("molestias"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("quod"),
                                                                Value: sdk.String("repudiandae"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("eaque"),
                                                            SubtableName: sdk.String("consectetur"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("autem"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("vitae"),
                                                                Value: sdk.String("numquam"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("incidunt"),
                                                            SubtableName: sdk.String("modi"),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        Name: sdk.String("Sylvester Kling"),
                                        SingleValue: &shared.Value{
                                            CarrierRateName: sdk.String("reprehenderit"),
                                            FlatRate: &shared.Price{
                                                Currency: sdk.String("animi"),
                                                Value: sdk.String("consequatur"),
                                            },
                                            NoShipping: sdk.Bool(false),
                                            PricePercentage: sdk.String("voluptates"),
                                            SubtableName: sdk.String("delectus"),
                                        },
                                        Subtables: []shared.Table{
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "ipsum",
                                                                "laboriosam",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "sed",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "debitis",
                                                                "a",
                                                                "itaque",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "repellat",
                                                                "cupiditate",
                                                                "adipisci",
                                                                "aliquam",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "veniam",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "necessitatibus",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("dignissimos"),
                                                            Value: sdk.String("itaque"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("explicabo"),
                                                            Value: sdk.String("ullam"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("non"),
                                                            Value: sdk.String("delectus"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("incidunt"),
                                                            Value: sdk.String("quod"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("ullam"),
                                                            Value: sdk.String("quam"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Grady Nitzsche"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "consequatur",
                                                                "delectus",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "dolore",
                                                        "nemo",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "quo",
                                                        "maxime",
                                                        "delectus",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("laboriosam"),
                                                            Value: sdk.String("quam"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("fuga"),
                                                            Value: sdk.String("officia"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("cupiditate"),
                                                            Value: sdk.String("soluta"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("tempore"),
                                                            Value: sdk.String("culpa"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("fugiat"),
                                                            Value: sdk.String("inventore"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("atque"),
                                                            Value: sdk.String("ad"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("ut"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("nesciunt"),
                                                                    Value: sdk.String("ab"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("quibusdam"),
                                                                SubtableName: sdk.String("suscipit"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("quidem"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("delectus"),
                                                                    Value: sdk.String("nemo"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("cumque"),
                                                                SubtableName: sdk.String("voluptatum"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("sequi"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("atque"),
                                                                    Value: sdk.String("maiores"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("expedita"),
                                                                SubtableName: sdk.String("rerum"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("totam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quod"),
                                                                    Value: sdk.String("aspernatur"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("eaque"),
                                                                SubtableName: sdk.String("impedit"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("ex"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("odio"),
                                                                    Value: sdk.String("delectus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("minus"),
                                                                SubtableName: sdk.String("ut"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("distinctio"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("eius"),
                                                                    Value: sdk.String("eos"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("veniam"),
                                                                SubtableName: sdk.String("repudiandae"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("sint"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("occaecati"),
                                                                    Value: sdk.String("debitis"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("laboriosam"),
                                                                SubtableName: sdk.String("eos"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("incidunt"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("porro"),
                                                                    Value: sdk.String("occaecati"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("reiciendis"),
                                                                SubtableName: sdk.String("voluptate"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("in"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("omnis"),
                                                                    Value: sdk.String("possimus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("tenetur"),
                                                                SubtableName: sdk.String("recusandae"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("expedita"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("iusto"),
                                                                    Value: sdk.String("esse"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("harum"),
                                                                SubtableName: sdk.String("ad"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("quod"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("ratione"),
                                                                    Value: sdk.String("totam"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("vero"),
                                                                SubtableName: sdk.String("dolore"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    shared.RateGroup{
                                        ApplicableShippingLabels: []string{
                                            "officia",
                                            "maiores",
                                            "cupiditate",
                                        },
                                        CarrierRates: []shared.CarrierRate{
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("saepe"),
                                                CarrierService: sdk.String("enim"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("eaque"),
                                                    Value: sdk.String("ex"),
                                                },
                                                Name: sdk.String("Brendan Lesch MD"),
                                                OriginPostalCode: sdk.String("nostrum"),
                                                PercentageAdjustment: sdk.String("tempora"),
                                            },
                                        },
                                        MainTable: &shared.Table{
                                            ColumnHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "odio",
                                                            "nostrum",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "veritatis",
                                                            "autem",
                                                            "earum",
                                                            "minima",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "possimus",
                                                            "nesciunt",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "nostrum",
                                                    "fuga",
                                                    "sequi",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "numquam",
                                                    "laborum",
                                                    "eligendi",
                                                    "autem",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("sunt"),
                                                        Value: sdk.String("rerum"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("provident"),
                                                        Value: sdk.String("necessitatibus"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("fugit"),
                                                        Value: sdk.String("autem"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("optio"),
                                                        Value: sdk.String("eveniet"),
                                                    },
                                                },
                                            },
                                            Name: sdk.String("Guy Will"),
                                            RowHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "molestias",
                                                            "dolore",
                                                            "et",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "maiores",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "velit",
                                                            "tempore",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "hic",
                                                            "blanditiis",
                                                            "vitae",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "atque",
                                                    "velit",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "nam",
                                                    "aperiam",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("mollitia"),
                                                        Value: sdk.String("asperiores"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("quibusdam"),
                                                        Value: sdk.String("quam"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("deleniti"),
                                                        Value: sdk.String("rem"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("vel"),
                                                        Value: sdk.String("eos"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("labore"),
                                                        Value: sdk.String("sunt"),
                                                    },
                                                },
                                            },
                                            Rows: []shared.Row{
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("accusamus"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("distinctio"),
                                                                Value: sdk.String("incidunt"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("labore"),
                                                            SubtableName: sdk.String("blanditiis"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("ducimus"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("consectetur"),
                                                                Value: sdk.String("sapiente"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("quis"),
                                                            SubtableName: sdk.String("accusantium"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("ratione"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("consectetur"),
                                                                Value: sdk.String("asperiores"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("architecto"),
                                                            SubtableName: sdk.String("sint"),
                                                        },
                                                    },
                                                },
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("tempore"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("asperiores"),
                                                                Value: sdk.String("quasi"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("consequuntur"),
                                                            SubtableName: sdk.String("nemo"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("nobis"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("debitis"),
                                                                Value: sdk.String("labore"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("veritatis"),
                                                            SubtableName: sdk.String("minima"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("magni"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("itaque"),
                                                                Value: sdk.String("error"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("expedita"),
                                                            SubtableName: sdk.String("error"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("placeat"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("temporibus"),
                                                                Value: sdk.String("voluptate"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("earum"),
                                                            SubtableName: sdk.String("minima"),
                                                        },
                                                    },
                                                },
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("odit"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("eius"),
                                                                Value: sdk.String("error"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("vel"),
                                                            SubtableName: sdk.String("dolorum"),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        Name: sdk.String("Mrs. Lorena Bernier"),
                                        SingleValue: &shared.Value{
                                            CarrierRateName: sdk.String("iusto"),
                                            FlatRate: &shared.Price{
                                                Currency: sdk.String("corrupti"),
                                                Value: sdk.String("non"),
                                            },
                                            NoShipping: sdk.Bool(false),
                                            PricePercentage: sdk.String("esse"),
                                            SubtableName: sdk.String("vero"),
                                        },
                                        Subtables: []shared.Table{
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "recusandae",
                                                                "architecto",
                                                                "voluptatibus",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "in",
                                                                "repellat",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "cumque",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "optio",
                                                        "quo",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("tempora"),
                                                            Value: sdk.String("libero"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("suscipit"),
                                                            Value: sdk.String("illum"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("iusto"),
                                                            Value: sdk.String("aliquid"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("sint"),
                                                            Value: sdk.String("aliquid"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("sapiente"),
                                                            Value: sdk.String("consectetur"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("eligendi"),
                                                            Value: sdk.String("ullam"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("nihil"),
                                                            Value: sdk.String("eius"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("dignissimos"),
                                                            Value: sdk.String("corporis"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Alice Fay"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "magnam",
                                                                "maiores",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "dicta",
                                                                "hic",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "libero",
                                                                "consequatur",
                                                                "totam",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "quo",
                                                                "dolor",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "omnis",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "officiis",
                                                        "dicta",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("consectetur"),
                                                            Value: sdk.String("deserunt"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("odit"),
                                                            Value: sdk.String("incidunt"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("corporis"),
                                                            Value: sdk.String("quaerat"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("ducimus"),
                                                            Value: sdk.String("tenetur"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("excepturi"),
                                                            Value: sdk.String("modi"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("eius"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("placeat"),
                                                                    Value: sdk.String("fugit"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("facere"),
                                                                SubtableName: sdk.String("ipsam"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("nobis"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("porro"),
                                                                    Value: sdk.String("labore"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("perspiciatis"),
                                                                SubtableName: sdk.String("ducimus"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("qui"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("consectetur"),
                                                                    Value: sdk.String("ratione"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("saepe"),
                                                                SubtableName: sdk.String("iure"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("cum"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("fugiat"),
                                                                    Value: sdk.String("rem"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("voluptatibus"),
                                                                SubtableName: sdk.String("officiis"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("corporis"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("repellendus"),
                                                                    Value: sdk.String("aut"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("voluptatem"),
                                                                SubtableName: sdk.String("libero"),
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
                                                                "officiis",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "magni",
                                                                "sit",
                                                                "velit",
                                                                "voluptatum",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "neque",
                                                                "aspernatur",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "corporis",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "aut",
                                                        "impedit",
                                                        "quod",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("architecto"),
                                                            Value: sdk.String("voluptatem"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("perspiciatis"),
                                                            Value: sdk.String("ea"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("eius"),
                                                            Value: sdk.String("aperiam"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("voluptatem"),
                                                            Value: sdk.String("non"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("sequi"),
                                                            Value: sdk.String("rerum"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Mrs. Raquel Hayes"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "ullam",
                                                                "maiores",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "reprehenderit",
                                                                "eos",
                                                                "assumenda",
                                                                "cumque",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "quae",
                                                                "nihil",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "assumenda",
                                                                "consequatur",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "placeat",
                                                        "adipisci",
                                                        "tenetur",
                                                        "non",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "corrupti",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("earum"),
                                                            Value: sdk.String("impedit"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("dicta"),
                                                            Value: sdk.String("corporis"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("impedit"),
                                                            Value: sdk.String("eveniet"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("cum"),
                                                            Value: sdk.String("dolore"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("ea"),
                                                            Value: sdk.String("officiis"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("quasi"),
                                                            Value: sdk.String("accusamus"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("animi"),
                                                            Value: sdk.String("necessitatibus"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("voluptatem"),
                                                            Value: sdk.String("maiores"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("fuga"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("itaque"),
                                                                    Value: sdk.String("possimus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("tenetur"),
                                                                SubtableName: sdk.String("sed"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("deserunt"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("eligendi"),
                                                                    Value: sdk.String("id"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("distinctio"),
                                                                SubtableName: sdk.String("corporis"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("soluta"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("cupiditate"),
                                                                    Value: sdk.String("unde"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("et"),
                                                                SubtableName: sdk.String("quisquam"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("unde"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("sed"),
                                                                    Value: sdk.String("suscipit"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("facere"),
                                                                SubtableName: sdk.String("pariatur"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("nam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quaerat"),
                                                                    Value: sdk.String("corrupti"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("sint"),
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
                                                                "vero",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "numquam",
                                                                "fugit",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "optio",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "recusandae",
                                                        "commodi",
                                                        "possimus",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("veniam"),
                                                            Value: sdk.String("sit"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("fugit"),
                                                            Value: sdk.String("a"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("consequatur"),
                                                            Value: sdk.String("vero"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("error"),
                                                            Value: sdk.String("ratione"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("perferendis"),
                                                            Value: sdk.String("distinctio"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("voluptas"),
                                                            Value: sdk.String("sint"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Christian Parker"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "explicabo",
                                                                "delectus",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "deleniti",
                                                                "enim",
                                                                "sit",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "natus",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "tempora",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "quasi",
                                                        "veritatis",
                                                        "ex",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "quas",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("perferendis"),
                                                            Value: sdk.String("esse"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("blanditiis"),
                                                            Value: sdk.String("laudantium"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("voluptates"),
                                                            Value: sdk.String("minus"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("autem"),
                                                            Value: sdk.String("vel"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("consectetur"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("soluta"),
                                                                    Value: sdk.String("tenetur"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("necessitatibus"),
                                                                SubtableName: sdk.String("perspiciatis"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("suscipit"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("ullam"),
                                                                    Value: sdk.String("unde"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("debitis"),
                                                                SubtableName: sdk.String("quidem"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("magnam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("doloremque"),
                                                                    Value: sdk.String("accusamus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("quod"),
                                                                SubtableName: sdk.String("sunt"),
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
                                                                "est",
                                                                "earum",
                                                                "nihil",
                                                                "nostrum",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "perferendis",
                                                                "nam",
                                                                "ullam",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "eos",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "modi",
                                                        "illum",
                                                        "error",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("reprehenderit"),
                                                            Value: sdk.String("eligendi"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("culpa"),
                                                            Value: sdk.String("culpa"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("a"),
                                                            Value: sdk.String("magnam"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("eius"),
                                                            Value: sdk.String("ad"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Bernadette Hahn"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "cupiditate",
                                                                "tempore",
                                                                "odit",
                                                                "est",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "ipsum",
                                                        "explicabo",
                                                        "nulla",
                                                        "est",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "necessitatibus",
                                                        "voluptatum",
                                                        "quasi",
                                                        "mollitia",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("blanditiis"),
                                                            Value: sdk.String("sapiente"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("ut"),
                                                            Value: sdk.String("incidunt"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("labore"),
                                                            Value: sdk.String("ut"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("nihil"),
                                                            Value: sdk.String("ratione"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("tenetur"),
                                                            Value: sdk.String("saepe"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("tempora"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quam"),
                                                                    Value: sdk.String("consectetur"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("nemo"),
                                                                SubtableName: sdk.String("nesciunt"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("earum"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("eum"),
                                                                    Value: sdk.String("dolor"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("placeat"),
                                                                SubtableName: sdk.String("quos"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("sed"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("eaque"),
                                                                    Value: sdk.String("natus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("ratione"),
                                                                SubtableName: sdk.String("nihil"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("unde"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("deserunt"),
                                                                    Value: sdk.String("id"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("ex"),
                                                                SubtableName: sdk.String("occaecati"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("at"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("ad"),
                                                                    Value: sdk.String("asperiores"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("nam"),
                                                                SubtableName: sdk.String("cumque"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("sapiente"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quam"),
                                                                    Value: sdk.String("occaecati"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("repellendus"),
                                                                SubtableName: sdk.String("culpa"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("dicta"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("rem"),
                                                                    Value: sdk.String("fuga"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("odio"),
                                                                SubtableName: sdk.String("totam"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("magni"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("eos"),
                                                                    Value: sdk.String("harum"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("voluptatibus"),
                                                                SubtableName: sdk.String("omnis"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("quos"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("natus"),
                                                                    Value: sdk.String("aliquam"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("vero"),
                                                                SubtableName: sdk.String("nisi"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("praesentium"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("eum"),
                                                                    Value: sdk.String("vitae"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("animi"),
                                                                SubtableName: sdk.String("possimus"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("ullam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quaerat"),
                                                                    Value: sdk.String("maiores"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("iste"),
                                                                SubtableName: sdk.String("accusamus"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("ipsam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("fugiat"),
                                                                    Value: sdk.String("odio"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("ullam"),
                                                                SubtableName: sdk.String("inventore"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("eligendi"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("occaecati"),
                                                                    Value: sdk.String("doloribus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("necessitatibus"),
                                                                SubtableName: sdk.String("rem"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    shared.RateGroup{
                                        ApplicableShippingLabels: []string{
                                            "nihil",
                                            "veniam",
                                            "aut",
                                            "magni",
                                        },
                                        CarrierRates: []shared.CarrierRate{
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("voluptatibus"),
                                                CarrierService: sdk.String("nulla"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("quod"),
                                                    Value: sdk.String("non"),
                                                },
                                                Name: sdk.String("Veronica Abshire"),
                                                OriginPostalCode: sdk.String("illo"),
                                                PercentageAdjustment: sdk.String("a"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("et"),
                                                CarrierService: sdk.String("molestiae"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("autem"),
                                                    Value: sdk.String("dolore"),
                                                },
                                                Name: sdk.String("Bernice Jaskolski"),
                                                OriginPostalCode: sdk.String("molestias"),
                                                PercentageAdjustment: sdk.String("voluptatibus"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("ipsum"),
                                                CarrierService: sdk.String("hic"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("quidem"),
                                                    Value: sdk.String("odit"),
                                                },
                                                Name: sdk.String("Dr. Eloise Cronin"),
                                                OriginPostalCode: sdk.String("aliquid"),
                                                PercentageAdjustment: sdk.String("consequuntur"),
                                            },
                                        },
                                        MainTable: &shared.Table{
                                            ColumnHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "reprehenderit",
                                                            "soluta",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "vel",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "maxime",
                                                    "vel",
                                                    "distinctio",
                                                    "cupiditate",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "quis",
                                                    "deleniti",
                                                    "iusto",
                                                    "quod",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("ad"),
                                                        Value: sdk.String("magni"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("nostrum"),
                                                        Value: sdk.String("minus"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("aliquid"),
                                                        Value: sdk.String("quam"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("ea"),
                                                        Value: sdk.String("numquam"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("fuga"),
                                                        Value: sdk.String("totam"),
                                                    },
                                                },
                                            },
                                            Name: sdk.String("Joyce Cremin"),
                                            RowHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "in",
                                                            "libero",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "cumque",
                                                    "quia",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "porro",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("distinctio"),
                                                        Value: sdk.String("numquam"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("fugit"),
                                                        Value: sdk.String("amet"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("culpa"),
                                                        Value: sdk.String("facilis"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("minus"),
                                                        Value: sdk.String("vero"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("omnis"),
                                                        Value: sdk.String("et"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("earum"),
                                                        Value: sdk.String("fuga"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("est"),
                                                        Value: sdk.String("distinctio"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("fugiat"),
                                                        Value: sdk.String("nulla"),
                                                    },
                                                },
                                            },
                                            Rows: []shared.Row{
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("officiis"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("esse"),
                                                                Value: sdk.String("vitae"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("delectus"),
                                                            SubtableName: sdk.String("laboriosam"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("minus"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("labore"),
                                                                Value: sdk.String("quas"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("sed"),
                                                            SubtableName: sdk.String("veniam"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("sed"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("quibusdam"),
                                                                Value: sdk.String("reprehenderit"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("voluptate"),
                                                            SubtableName: sdk.String("reprehenderit"),
                                                        },
                                                    },
                                                },
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("eveniet"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("voluptate"),
                                                                Value: sdk.String("hic"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("at"),
                                                            SubtableName: sdk.String("perferendis"),
                                                        },
                                                    },
                                                },
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("eius"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("aut"),
                                                                Value: sdk.String("consequatur"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("iste"),
                                                            SubtableName: sdk.String("accusamus"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("repellat"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("voluptatum"),
                                                                Value: sdk.String("facere"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("consequuntur"),
                                                            SubtableName: sdk.String("natus"),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        Name: sdk.String("Noah Bernier"),
                                        SingleValue: &shared.Value{
                                            CarrierRateName: sdk.String("ducimus"),
                                            FlatRate: &shared.Price{
                                                Currency: sdk.String("aut"),
                                                Value: sdk.String("provident"),
                                            },
                                            NoShipping: sdk.Bool(false),
                                            PricePercentage: sdk.String("voluptate"),
                                            SubtableName: sdk.String("tempore"),
                                        },
                                        Subtables: []shared.Table{
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "ipsa",
                                                                "quos",
                                                                "quo",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "in",
                                                                "doloribus",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "eum",
                                                                "cumque",
                                                                "odio",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "similique",
                                                                "quia",
                                                                "architecto",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "accusamus",
                                                        "illo",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "harum",
                                                        "laborum",
                                                        "a",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("minus"),
                                                            Value: sdk.String("officia"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("laboriosam"),
                                                            Value: sdk.String("illo"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("cupiditate"),
                                                            Value: sdk.String("veritatis"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("aliquam"),
                                                            Value: sdk.String("excepturi"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("dicta"),
                                                            Value: sdk.String("magnam"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("doloremque"),
                                                            Value: sdk.String("cum"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("suscipit"),
                                                            Value: sdk.String("eius"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Toby Lubowitz"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "consequatur",
                                                                "itaque",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "voluptatem",
                                                        "dolor",
                                                        "distinctio",
                                                        "quaerat",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "neque",
                                                        "nihil",
                                                        "recusandae",
                                                        "numquam",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("mollitia"),
                                                            Value: sdk.String("blanditiis"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("suscipit"),
                                                            Value: sdk.String("quas"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("quis"),
                                                            Value: sdk.String("enim"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("iste"),
                                                            Value: sdk.String("ea"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("autem"),
                                                            Value: sdk.String("voluptate"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("animi"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("dolorum"),
                                                                    Value: sdk.String("voluptas"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("temporibus"),
                                                                SubtableName: sdk.String("porro"),
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
                                                                "autem",
                                                                "praesentium",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "quisquam",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "in",
                                                                "eaque",
                                                                "delectus",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "minus",
                                                        "tenetur",
                                                        "assumenda",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "a",
                                                        "tempore",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("earum"),
                                                            Value: sdk.String("occaecati"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("dicta"),
                                                            Value: sdk.String("quidem"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("laborum"),
                                                            Value: sdk.String("molestias"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("a"),
                                                            Value: sdk.String("dignissimos"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("labore"),
                                                            Value: sdk.String("laudantium"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Jeanne VonRueden"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "ipsa",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "repellendus",
                                                        "soluta",
                                                        "aut",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "amet",
                                                        "iure",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("sint"),
                                                            Value: sdk.String("voluptates"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("nihil"),
                                                            Value: sdk.String("ad"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("eligendi"),
                                                            Value: sdk.String("fuga"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("consequatur"),
                                                            Value: sdk.String("sit"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("earum"),
                                                            Value: sdk.String("quis"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("dolorem"),
                                                            Value: sdk.String("omnis"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("et"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("illo"),
                                                                    Value: sdk.String("est"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("quia"),
                                                                SubtableName: sdk.String("veniam"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("est"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("rem"),
                                                                    Value: sdk.String("cum"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("maiores"),
                                                                SubtableName: sdk.String("provident"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("sunt"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("maiores"),
                                                                    Value: sdk.String("excepturi"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("ducimus"),
                                                                SubtableName: sdk.String("dolore"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("aspernatur"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("molestias"),
                                                                    Value: sdk.String("fuga"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("at"),
                                                                SubtableName: sdk.String("unde"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    shared.RateGroup{
                                        ApplicableShippingLabels: []string{
                                            "provident",
                                            "hic",
                                            "corrupti",
                                        },
                                        CarrierRates: []shared.CarrierRate{
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("earum"),
                                                CarrierService: sdk.String("praesentium"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("explicabo"),
                                                    Value: sdk.String("odit"),
                                                },
                                                Name: sdk.String("Julie Cremin"),
                                                OriginPostalCode: sdk.String("ullam"),
                                                PercentageAdjustment: sdk.String("provident"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("possimus"),
                                                CarrierService: sdk.String("iste"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("blanditiis"),
                                                    Value: sdk.String("consectetur"),
                                                },
                                                Name: sdk.String("Lance Zieme"),
                                                OriginPostalCode: sdk.String("voluptate"),
                                                PercentageAdjustment: sdk.String("cupiditate"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("maxime"),
                                                CarrierService: sdk.String("assumenda"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("nihil"),
                                                    Value: sdk.String("sed"),
                                                },
                                                Name: sdk.String("Drew Cummerata"),
                                                OriginPostalCode: sdk.String("dolore"),
                                                PercentageAdjustment: sdk.String("possimus"),
                                            },
                                        },
                                        MainTable: &shared.Table{
                                            ColumnHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "sunt",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "eos",
                                                            "omnis",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "qui",
                                                            "similique",
                                                            "eligendi",
                                                            "numquam",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "necessitatibus",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "exercitationem",
                                                    "nihil",
                                                    "quia",
                                                    "quis",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("dicta"),
                                                        Value: sdk.String("dicta"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("eum"),
                                                        Value: sdk.String("sint"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("id"),
                                                        Value: sdk.String("nobis"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("quasi"),
                                                        Value: sdk.String("itaque"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("vitae"),
                                                        Value: sdk.String("temporibus"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("voluptatum"),
                                                        Value: sdk.String("deserunt"),
                                                    },
                                                },
                                            },
                                            Name: sdk.String("Rita Rutherford"),
                                            RowHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "labore",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "eos",
                                                            "quibusdam",
                                                            "repellat",
                                                            "mollitia",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "officia",
                                                            "sunt",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "quam",
                                                            "a",
                                                            "iure",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "recusandae",
                                                    "iste",
                                                    "aspernatur",
                                                    "aspernatur",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "ipsam",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("delectus"),
                                                        Value: sdk.String("saepe"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("in"),
                                                        Value: sdk.String("architecto"),
                                                    },
                                                },
                                            },
                                            Rows: []shared.Row{
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("perspiciatis"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("error"),
                                                                Value: sdk.String("deleniti"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("enim"),
                                                            SubtableName: sdk.String("nesciunt"),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        Name: sdk.String("Stuart Witting"),
                                        SingleValue: &shared.Value{
                                            CarrierRateName: sdk.String("adipisci"),
                                            FlatRate: &shared.Price{
                                                Currency: sdk.String("pariatur"),
                                                Value: sdk.String("praesentium"),
                                            },
                                            NoShipping: sdk.Bool(false),
                                            PricePercentage: sdk.String("nemo"),
                                            SubtableName: sdk.String("dolore"),
                                        },
                                        Subtables: []shared.Table{
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "accusamus",
                                                                "voluptates",
                                                                "quia",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "ut",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "laboriosam",
                                                        "accusantium",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("aliquam"),
                                                            Value: sdk.String("dolorem"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("expedita"),
                                                            Value: sdk.String("impedit"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("minima"),
                                                            Value: sdk.String("magnam"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Olga Lindgren DVM"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "accusamus",
                                                                "totam",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "at",
                                                                "culpa",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "laudantium",
                                                        "dolorem",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "officiis",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("libero"),
                                                            Value: sdk.String("fugiat"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("voluptas"),
                                                            Value: sdk.String("et"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("odio"),
                                                            Value: sdk.String("eligendi"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("harum"),
                                                            Value: sdk.String("aperiam"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("architecto"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("culpa"),
                                                                    Value: sdk.String("aliquam"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("ut"),
                                                                SubtableName: sdk.String("quidem"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("doloribus"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("sit"),
                                                                    Value: sdk.String("architecto"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("tempore"),
                                                                SubtableName: sdk.String("deserunt"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("corrupti"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("voluptate"),
                                                                    Value: sdk.String("alias"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("iure"),
                                                                SubtableName: sdk.String("temporibus"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("incidunt"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("ea"),
                                                                    Value: sdk.String("alias"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("laudantium"),
                                                                SubtableName: sdk.String("qui"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("libero"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("maiores"),
                                                                    Value: sdk.String("nam"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("pariatur"),
                                                                SubtableName: sdk.String("quod"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("modi"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("vitae"),
                                                                    Value: sdk.String("delectus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("delectus"),
                                                                SubtableName: sdk.String("nemo"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("magnam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("officiis"),
                                                                    Value: sdk.String("sed"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("mollitia"),
                                                                SubtableName: sdk.String("saepe"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("labore"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("doloribus"),
                                                                    Value: sdk.String("facilis"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("minima"),
                                                                SubtableName: sdk.String("impedit"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("facilis"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("amet"),
                                                                    Value: sdk.String("quis"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("fugiat"),
                                                                SubtableName: sdk.String("beatae"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("dignissimos"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("nisi"),
                                                                    Value: sdk.String("consectetur"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("quos"),
                                                                SubtableName: sdk.String("delectus"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("repudiandae"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("facere"),
                                                                    Value: sdk.String("distinctio"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("ducimus"),
                                                                SubtableName: sdk.String("atque"),
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
                                                                "provident",
                                                                "accusamus",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "impedit",
                                                        "minima",
                                                        "cumque",
                                                        "rerum",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "vel",
                                                        "doloremque",
                                                        "delectus",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("impedit"),
                                                            Value: sdk.String("illum"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("ullam"),
                                                            Value: sdk.String("praesentium"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("perferendis"),
                                                            Value: sdk.String("soluta"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("molestiae"),
                                                            Value: sdk.String("nesciunt"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("quas"),
                                                            Value: sdk.String("sunt"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("aperiam"),
                                                            Value: sdk.String("itaque"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Kristie Treutel"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "magni",
                                                                "excepturi",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "cumque",
                                                                "pariatur",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "rerum",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "illum",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("amet"),
                                                            Value: sdk.String("expedita"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("libero"),
                                                            Value: sdk.String("impedit"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("repudiandae"),
                                                            Value: sdk.String("dolores"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("ut"),
                                                            Value: sdk.String("nihil"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("voluptate"),
                                                            Value: sdk.String("aliquid"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("blanditiis"),
                                                            Value: sdk.String("labore"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("repudiandae"),
                                                            Value: sdk.String("reiciendis"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("voluptatem"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("beatae"),
                                                                    Value: sdk.String("qui"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("laboriosam"),
                                                                SubtableName: sdk.String("temporibus"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("in"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("veritatis"),
                                                                    Value: sdk.String("nobis"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("voluptatibus"),
                                                                SubtableName: sdk.String("tenetur"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("facere"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("aut"),
                                                                    Value: sdk.String("itaque"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("rerum"),
                                                                SubtableName: sdk.String("molestiae"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("quaerat"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("distinctio"),
                                                                    Value: sdk.String("blanditiis"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("quaerat"),
                                                                SubtableName: sdk.String("odit"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("ab"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("unde"),
                                                                    Value: sdk.String("nemo"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("dolorem"),
                                                                SubtableName: sdk.String("rerum"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("tempora"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quidem"),
                                                                    Value: sdk.String("nulla"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("nesciunt"),
                                                                SubtableName: sdk.String("quisquam"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("labore"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("sequi"),
                                                                    Value: sdk.String("veritatis"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("veniam"),
                                                                SubtableName: sdk.String("unde"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("adipisci"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("velit"),
                                                                    Value: sdk.String("accusamus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("veniam"),
                                                                SubtableName: sdk.String("provident"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("nostrum"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("dolor"),
                                                                    Value: sdk.String("quod"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("consequatur"),
                                                                SubtableName: sdk.String("accusantium"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("dicta"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("illo"),
                                                                    Value: sdk.String("amet"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("occaecati"),
                                                                SubtableName: sdk.String("quos"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("aliquid"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("sequi"),
                                                                    Value: sdk.String("culpa"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("fuga"),
                                                                SubtableName: sdk.String("modi"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                ShipmentType: sdk.String("et"),
                            },
                            shared.Service{
                                Active: sdk.Bool(false),
                                Currency: sdk.String("eveniet"),
                                DeliveryCountry: sdk.String("aliquid"),
                                DeliveryTime: &shared.DeliveryTime{
                                    CutoffTime: &shared.CutoffTime{
                                        Hour: sdk.Int64(760942),
                                        Minute: sdk.Int64(236588),
                                        Timezone: sdk.String("ab"),
                                    },
                                    HandlingBusinessDayConfig: &shared.BusinessDayConfig{
                                        BusinessDays: []string{
                                            "porro",
                                            "explicabo",
                                            "reiciendis",
                                            "dicta",
                                        },
                                    },
                                    HolidayCutoffs: []shared.HolidayCutoff{
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("porro"),
                                            DeadlineHour: sdk.Int64(735484),
                                            DeadlineTimezone: sdk.String("ullam"),
                                            HolidayID: sdk.String("sunt"),
                                            VisibleFromDate: sdk.String("quisquam"),
                                        },
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("sint"),
                                            DeadlineHour: sdk.Int64(664694),
                                            DeadlineTimezone: sdk.String("ut"),
                                            HolidayID: sdk.String("et"),
                                            VisibleFromDate: sdk.String("reiciendis"),
                                        },
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("reiciendis"),
                                            DeadlineHour: sdk.Int64(717486),
                                            DeadlineTimezone: sdk.String("itaque"),
                                            HolidayID: sdk.String("iste"),
                                            VisibleFromDate: sdk.String("quod"),
                                        },
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("quidem"),
                                            DeadlineHour: sdk.Int64(838374),
                                            DeadlineTimezone: sdk.String("iure"),
                                            HolidayID: sdk.String("natus"),
                                            VisibleFromDate: sdk.String("ipsam"),
                                        },
                                    },
                                    MaxHandlingTimeInDays: sdk.Int64(920057),
                                    MaxTransitTimeInDays: sdk.Int64(935800),
                                    MinHandlingTimeInDays: sdk.Int64(415787),
                                    MinTransitTimeInDays: sdk.Int64(331927),
                                    TransitBusinessDayConfig: &shared.BusinessDayConfig{
                                        BusinessDays: []string{
                                            "doloremque",
                                            "esse",
                                            "aliquid",
                                            "porro",
                                        },
                                    },
                                    TransitTimeTable: &shared.TransitTable{
                                        PostalCodeGroupNames: []string{
                                            "molestiae",
                                            "mollitia",
                                            "quidem",
                                            "delectus",
                                        },
                                        Rows: []shared.TransitTableTransitTimeRow{
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(381197),
                                                        MinTransitTimeInDays: sdk.Int64(911547),
                                                    },
                                                },
                                            },
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(368849),
                                                        MinTransitTimeInDays: sdk.Int64(781777),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(474003),
                                                        MinTransitTimeInDays: sdk.Int64(81455),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(428482),
                                                        MinTransitTimeInDays: sdk.Int64(264090),
                                                    },
                                                },
                                            },
                                        },
                                        TransitTimeLabels: []string{
                                            "provident",
                                        },
                                    },
                                    WarehouseBasedDeliveryTimes: []shared.WarehouseBasedDeliveryTime{
                                        shared.WarehouseBasedDeliveryTime{
                                            Carrier: sdk.String("dolore"),
                                            CarrierService: sdk.String("soluta"),
                                            OriginAdministrativeArea: sdk.String("occaecati"),
                                            OriginCity: sdk.String("sit"),
                                            OriginCountry: sdk.String("asperiores"),
                                            OriginPostalCode: sdk.String("aspernatur"),
                                            OriginStreetAddress: sdk.String("officiis"),
                                            WarehouseName: sdk.String("sit"),
                                        },
                                    },
                                },
                                Eligibility: sdk.String("occaecati"),
                                MinimumOrderValue: &shared.Price{
                                    Currency: sdk.String("nulla"),
                                    Value: sdk.String("ab"),
                                },
                                MinimumOrderValueTable: &shared.MinimumOrderValueTable{
                                    StoreCodeSetWithMovs: []shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                        shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                            StoreCodes: []string{
                                                "magni",
                                                "a",
                                                "cumque",
                                                "explicabo",
                                            },
                                            Value: &shared.Price{
                                                Currency: sdk.String("delectus"),
                                                Value: sdk.String("natus"),
                                            },
                                        },
                                        shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                            StoreCodes: []string{
                                                "fugit",
                                                "repudiandae",
                                                "vitae",
                                                "consequatur",
                                            },
                                            Value: &shared.Price{
                                                Currency: sdk.String("nemo"),
                                                Value: sdk.String("provident"),
                                            },
                                        },
                                        shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                            StoreCodes: []string{
                                                "numquam",
                                                "tempore",
                                            },
                                            Value: &shared.Price{
                                                Currency: sdk.String("molestias"),
                                                Value: sdk.String("amet"),
                                            },
                                        },
                                    },
                                },
                                Name: sdk.String("Angel Cremin"),
                                PickupService: &shared.PickupCarrierService{
                                    CarrierName: sdk.String("id"),
                                    ServiceName: sdk.String("ducimus"),
                                },
                                RateGroups: []shared.RateGroup{
                                    shared.RateGroup{
                                        ApplicableShippingLabels: []string{
                                            "occaecati",
                                            "doloremque",
                                            "blanditiis",
                                            "magnam",
                                        },
                                        CarrierRates: []shared.CarrierRate{
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("fugiat"),
                                                CarrierService: sdk.String("laboriosam"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("id"),
                                                    Value: sdk.String("itaque"),
                                                },
                                                Name: sdk.String("Alex Olson"),
                                                OriginPostalCode: sdk.String("soluta"),
                                                PercentageAdjustment: sdk.String("dignissimos"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("nemo"),
                                                CarrierService: sdk.String("neque"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("esse"),
                                                    Value: sdk.String("placeat"),
                                                },
                                                Name: sdk.String("Andy Davis"),
                                                OriginPostalCode: sdk.String("maxime"),
                                                PercentageAdjustment: sdk.String("excepturi"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("sapiente"),
                                                CarrierService: sdk.String("maiores"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("exercitationem"),
                                                    Value: sdk.String("ducimus"),
                                                },
                                                Name: sdk.String("Cora Bode"),
                                                OriginPostalCode: sdk.String("harum"),
                                                PercentageAdjustment: sdk.String("sapiente"),
                                            },
                                        },
                                        MainTable: &shared.Table{
                                            ColumnHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "vero",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "eum",
                                                            "quasi",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "accusantium",
                                                            "quo",
                                                            "id",
                                                            "tempora",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "labore",
                                                    "quis",
                                                    "aliquid",
                                                    "vero",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "dicta",
                                                    "sit",
                                                    "adipisci",
                                                    "inventore",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("iure"),
                                                        Value: sdk.String("praesentium"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("perspiciatis"),
                                                        Value: sdk.String("omnis"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("hic"),
                                                        Value: sdk.String("accusantium"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("minus"),
                                                        Value: sdk.String("explicabo"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("ipsa"),
                                                        Value: sdk.String("quasi"),
                                                    },
                                                },
                                            },
                                            Name: sdk.String("Randy Collier"),
                                            RowHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "quod",
                                                            "quod",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "nemo",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "modi",
                                                    "similique",
                                                    "quasi",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "ut",
                                                    "possimus",
                                                    "nihil",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("facere"),
                                                        Value: sdk.String("omnis"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("voluptate"),
                                                        Value: sdk.String("vitae"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("cumque"),
                                                        Value: sdk.String("atque"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("explicabo"),
                                                        Value: sdk.String("sit"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("eligendi"),
                                                        Value: sdk.String("commodi"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("enim"),
                                                        Value: sdk.String("harum"),
                                                    },
                                                },
                                            },
                                            Rows: []shared.Row{
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("in"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("rerum"),
                                                                Value: sdk.String("distinctio"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("blanditiis"),
                                                            SubtableName: sdk.String("saepe"),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        Name: sdk.String("Jacquelyn Ryan"),
                                        SingleValue: &shared.Value{
                                            CarrierRateName: sdk.String("ullam"),
                                            FlatRate: &shared.Price{
                                                Currency: sdk.String("veritatis"),
                                                Value: sdk.String("quas"),
                                            },
                                            NoShipping: sdk.Bool(false),
                                            PricePercentage: sdk.String("molestiae"),
                                            SubtableName: sdk.String("officiis"),
                                        },
                                        Subtables: []shared.Table{
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "consequatur",
                                                                "ut",
                                                                "laborum",
                                                                "hic",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "corrupti",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "ad",
                                                                "quibusdam",
                                                                "facere",
                                                                "pariatur",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "labore",
                                                                "commodi",
                                                                "mollitia",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "quasi",
                                                        "quo",
                                                        "voluptatibus",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "ea",
                                                        "facere",
                                                        "corrupti",
                                                        "magni",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("assumenda"),
                                                            Value: sdk.String("culpa"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("ipsa"),
                                                            Value: sdk.String("inventore"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("nesciunt"),
                                                            Value: sdk.String("et"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("inventore"),
                                                            Value: sdk.String("vitae"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("qui"),
                                                            Value: sdk.String("unde"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("ex"),
                                                            Value: sdk.String("quaerat"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Jessie Hahn"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "blanditiis",
                                                                "et",
                                                                "delectus",
                                                                "explicabo",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "perferendis",
                                                        "magnam",
                                                        "aspernatur",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "nemo",
                                                        "laboriosam",
                                                        "iste",
                                                        "quidem",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("culpa"),
                                                            Value: sdk.String("reiciendis"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("a"),
                                                            Value: sdk.String("consequatur"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("dolorum"),
                                                            Value: sdk.String("fugit"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("eos"),
                                                            Value: sdk.String("veritatis"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("vel"),
                                                            Value: sdk.String("placeat"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("libero"),
                                                            Value: sdk.String("saepe"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("veritatis"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("harum"),
                                                                    Value: sdk.String("cumque"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("ab"),
                                                                SubtableName: sdk.String("ex"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("dolor"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("officiis"),
                                                                    Value: sdk.String("sed"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("quam"),
                                                                SubtableName: sdk.String("unde"),
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
                                                                "libero",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "blanditiis",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "vero",
                                                                "dolorum",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "occaecati",
                                                        "consequuntur",
                                                        "veniam",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "repellendus",
                                                        "eaque",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("asperiores"),
                                                            Value: sdk.String("eius"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("ipsa"),
                                                            Value: sdk.String("quas"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("iusto"),
                                                            Value: sdk.String("laborum"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("in"),
                                                            Value: sdk.String("numquam"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Kari Labadie"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "placeat",
                                                                "tempore",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "earum",
                                                                "debitis",
                                                                "impedit",
                                                                "reiciendis",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "tempore",
                                                                "provident",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "soluta",
                                                        "maxime",
                                                        "commodi",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "corporis",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("aspernatur"),
                                                            Value: sdk.String("eveniet"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("tempore"),
                                                            Value: sdk.String("asperiores"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("delectus"),
                                                            Value: sdk.String("enim"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("ipsam"),
                                                            Value: sdk.String("porro"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("dolores"),
                                                            Value: sdk.String("iste"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("labore"),
                                                            Value: sdk.String("porro"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("consequatur"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("nobis"),
                                                                    Value: sdk.String("accusantium"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("ea"),
                                                                SubtableName: sdk.String("laborum"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("et"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("fugit"),
                                                                    Value: sdk.String("quos"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("molestiae"),
                                                                SubtableName: sdk.String("voluptate"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                ShipmentType: sdk.String("autem"),
                            },
                            shared.Service{
                                Active: sdk.Bool(false),
                                Currency: sdk.String("numquam"),
                                DeliveryCountry: sdk.String("voluptates"),
                                DeliveryTime: &shared.DeliveryTime{
                                    CutoffTime: &shared.CutoffTime{
                                        Hour: sdk.Int64(892114),
                                        Minute: sdk.Int64(937743),
                                        Timezone: sdk.String("suscipit"),
                                    },
                                    HandlingBusinessDayConfig: &shared.BusinessDayConfig{
                                        BusinessDays: []string{
                                            "doloremque",
                                            "porro",
                                            "suscipit",
                                            "temporibus",
                                        },
                                    },
                                    HolidayCutoffs: []shared.HolidayCutoff{
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("itaque"),
                                            DeadlineHour: sdk.Int64(861638),
                                            DeadlineTimezone: sdk.String("excepturi"),
                                            HolidayID: sdk.String("quod"),
                                            VisibleFromDate: sdk.String("in"),
                                        },
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("nesciunt"),
                                            DeadlineHour: sdk.Int64(836479),
                                            DeadlineTimezone: sdk.String("temporibus"),
                                            HolidayID: sdk.String("eum"),
                                            VisibleFromDate: sdk.String("non"),
                                        },
                                    },
                                    MaxHandlingTimeInDays: sdk.Int64(285544),
                                    MaxTransitTimeInDays: sdk.Int64(341934),
                                    MinHandlingTimeInDays: sdk.Int64(492227),
                                    MinTransitTimeInDays: sdk.Int64(76818),
                                    TransitBusinessDayConfig: &shared.BusinessDayConfig{
                                        BusinessDays: []string{
                                            "ipsa",
                                            "occaecati",
                                        },
                                    },
                                    TransitTimeTable: &shared.TransitTable{
                                        PostalCodeGroupNames: []string{
                                            "blanditiis",
                                            "recusandae",
                                            "deleniti",
                                        },
                                        Rows: []shared.TransitTableTransitTimeRow{
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(844094),
                                                        MinTransitTimeInDays: sdk.Int64(238167),
                                                    },
                                                },
                                            },
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(330908),
                                                        MinTransitTimeInDays: sdk.Int64(664679),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(102182),
                                                        MinTransitTimeInDays: sdk.Int64(978229),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(598497),
                                                        MinTransitTimeInDays: sdk.Int64(802188),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(169072),
                                                        MinTransitTimeInDays: sdk.Int64(274844),
                                                    },
                                                },
                                            },
                                        },
                                        TransitTimeLabels: []string{
                                            "quisquam",
                                        },
                                    },
                                    WarehouseBasedDeliveryTimes: []shared.WarehouseBasedDeliveryTime{
                                        shared.WarehouseBasedDeliveryTime{
                                            Carrier: sdk.String("quidem"),
                                            CarrierService: sdk.String("iure"),
                                            OriginAdministrativeArea: sdk.String("aliquid"),
                                            OriginCity: sdk.String("culpa"),
                                            OriginCountry: sdk.String("illo"),
                                            OriginPostalCode: sdk.String("reiciendis"),
                                            OriginStreetAddress: sdk.String("ipsum"),
                                            WarehouseName: sdk.String("doloremque"),
                                        },
                                        shared.WarehouseBasedDeliveryTime{
                                            Carrier: sdk.String("quod"),
                                            CarrierService: sdk.String("dignissimos"),
                                            OriginAdministrativeArea: sdk.String("non"),
                                            OriginCity: sdk.String("facere"),
                                            OriginCountry: sdk.String("repellat"),
                                            OriginPostalCode: sdk.String("exercitationem"),
                                            OriginStreetAddress: sdk.String("quidem"),
                                            WarehouseName: sdk.String("ea"),
                                        },
                                    },
                                },
                                Eligibility: sdk.String("molestiae"),
                                MinimumOrderValue: &shared.Price{
                                    Currency: sdk.String("vitae"),
                                    Value: sdk.String("excepturi"),
                                },
                                MinimumOrderValueTable: &shared.MinimumOrderValueTable{
                                    StoreCodeSetWithMovs: []shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                        shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                            StoreCodes: []string{
                                                "eaque",
                                                "reiciendis",
                                                "magnam",
                                            },
                                            Value: &shared.Price{
                                                Currency: sdk.String("consequuntur"),
                                                Value: sdk.String("est"),
                                            },
                                        },
                                        shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                            StoreCodes: []string{
                                                "nobis",
                                                "expedita",
                                            },
                                            Value: &shared.Price{
                                                Currency: sdk.String("modi"),
                                                Value: sdk.String("adipisci"),
                                            },
                                        },
                                        shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                            StoreCodes: []string{
                                                "at",
                                                "rem",
                                                "exercitationem",
                                            },
                                            Value: &shared.Price{
                                                Currency: sdk.String("tempore"),
                                                Value: sdk.String("eos"),
                                            },
                                        },
                                    },
                                },
                                Name: sdk.String("Kimberly Hansen PhD"),
                                PickupService: &shared.PickupCarrierService{
                                    CarrierName: sdk.String("reprehenderit"),
                                    ServiceName: sdk.String("tempora"),
                                },
                                RateGroups: []shared.RateGroup{
                                    shared.RateGroup{
                                        ApplicableShippingLabels: []string{
                                            "sequi",
                                            "eligendi",
                                            "consequuntur",
                                            "quae",
                                        },
                                        CarrierRates: []shared.CarrierRate{
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("sint"),
                                                CarrierService: sdk.String("minus"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("excepturi"),
                                                    Value: sdk.String("porro"),
                                                },
                                                Name: sdk.String("Shawna Harvey"),
                                                OriginPostalCode: sdk.String("officiis"),
                                                PercentageAdjustment: sdk.String("aperiam"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("itaque"),
                                                CarrierService: sdk.String("sed"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("corporis"),
                                                    Value: sdk.String("consequuntur"),
                                                },
                                                Name: sdk.String("Yolanda Hayes PhD"),
                                                OriginPostalCode: sdk.String("ex"),
                                                PercentageAdjustment: sdk.String("consequuntur"),
                                            },
                                        },
                                        MainTable: &shared.Table{
                                            ColumnHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "possimus",
                                                            "laborum",
                                                            "optio",
                                                            "debitis",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "reiciendis",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "sunt",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "inventore",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "quod",
                                                    "repudiandae",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "aspernatur",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("sint"),
                                                        Value: sdk.String("accusamus"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("earum"),
                                                        Value: sdk.String("consequuntur"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("enim"),
                                                        Value: sdk.String("minus"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("quibusdam"),
                                                        Value: sdk.String("accusantium"),
                                                    },
                                                },
                                            },
                                            Name: sdk.String("Dennis Moen"),
                                            RowHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "doloribus",
                                                            "magnam",
                                                            "adipisci",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "necessitatibus",
                                                            "velit",
                                                            "sint",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "nisi",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "impedit",
                                                    "facilis",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("error"),
                                                        Value: sdk.String("quaerat"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("delectus"),
                                                        Value: sdk.String("molestiae"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("deserunt"),
                                                        Value: sdk.String("laborum"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("odit"),
                                                        Value: sdk.String("rerum"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("magnam"),
                                                        Value: sdk.String("et"),
                                                    },
                                                },
                                            },
                                            Rows: []shared.Row{
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("nisi"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("perspiciatis"),
                                                                Value: sdk.String("nostrum"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("temporibus"),
                                                            SubtableName: sdk.String("et"),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        Name: sdk.String("Charlie Jacobs"),
                                        SingleValue: &shared.Value{
                                            CarrierRateName: sdk.String("repellat"),
                                            FlatRate: &shared.Price{
                                                Currency: sdk.String("placeat"),
                                                Value: sdk.String("eligendi"),
                                            },
                                            NoShipping: sdk.Bool(false),
                                            PricePercentage: sdk.String("quaerat"),
                                            SubtableName: sdk.String("veniam"),
                                        },
                                        Subtables: []shared.Table{
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "dicta",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "maxime",
                                                                "dolores",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "quam",
                                                        "molestiae",
                                                        "aliquid",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "eum",
                                                        "consectetur",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("tempora"),
                                                            Value: sdk.String("aspernatur"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("incidunt"),
                                                            Value: sdk.String("alias"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("adipisci"),
                                                            Value: sdk.String("atque"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Aubrey Raynor"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "accusamus",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "deleniti",
                                                                "inventore",
                                                                "perspiciatis",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "corporis",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "molestiae",
                                                        "adipisci",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("perspiciatis"),
                                                            Value: sdk.String("optio"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("itaque"),
                                                            Value: sdk.String("at"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("nam"),
                                                            Value: sdk.String("id"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("in"),
                                                            Value: sdk.String("a"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("quibusdam"),
                                                            Value: sdk.String("culpa"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("dolor"),
                                                            Value: sdk.String("occaecati"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("exercitationem"),
                                                            Value: sdk.String("unde"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("vel"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("laboriosam"),
                                                                    Value: sdk.String("soluta"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("minus"),
                                                                SubtableName: sdk.String("magni"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("mollitia"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("officiis"),
                                                                    Value: sdk.String("aliquam"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("quas"),
                                                                SubtableName: sdk.String("aut"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("autem"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("dolorem"),
                                                                    Value: sdk.String("explicabo"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("rerum"),
                                                                SubtableName: sdk.String("iste"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("occaecati"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("enim"),
                                                                    Value: sdk.String("tempora"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("libero"),
                                                                SubtableName: sdk.String("iure"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("id"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("qui"),
                                                                    Value: sdk.String("explicabo"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("accusantium"),
                                                                SubtableName: sdk.String("eum"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("nesciunt"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("commodi"),
                                                                    Value: sdk.String("molestias"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("atque"),
                                                                SubtableName: sdk.String("explicabo"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("totam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("ipsam"),
                                                                    Value: sdk.String("nemo"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("sequi"),
                                                                SubtableName: sdk.String("optio"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("libero"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("ab"),
                                                                    Value: sdk.String("alias"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("accusantium"),
                                                                SubtableName: sdk.String("doloremque"),
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
                                                                "necessitatibus",
                                                                "reiciendis",
                                                                "incidunt",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "dolores",
                                                                "illo",
                                                                "recusandae",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "magni",
                                                        "sit",
                                                        "voluptas",
                                                        "nesciunt",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "molestiae",
                                                        "eius",
                                                        "perspiciatis",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("ex"),
                                                            Value: sdk.String("aliquid"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("quisquam"),
                                                            Value: sdk.String("rem"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("eveniet"),
                                                            Value: sdk.String("eveniet"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("voluptatem"),
                                                            Value: sdk.String("repellat"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Ms. Kelli Williamson"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "facere",
                                                                "eius",
                                                                "doloremque",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "aut",
                                                                "sequi",
                                                                "reiciendis",
                                                                "neque",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "saepe",
                                                                "nobis",
                                                                "est",
                                                                "quia",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "molestiae",
                                                        "facilis",
                                                        "earum",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "itaque",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("consequatur"),
                                                            Value: sdk.String("harum"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("nobis"),
                                                            Value: sdk.String("numquam"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("consequatur"),
                                                            Value: sdk.String("temporibus"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("quos"),
                                                            Value: sdk.String("commodi"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("blanditiis"),
                                                            Value: sdk.String("voluptatibus"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("nulla"),
                                                            Value: sdk.String("nemo"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("ratione"),
                                                            Value: sdk.String("dolore"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("impedit"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("libero"),
                                                                    Value: sdk.String("dolor"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("nesciunt"),
                                                                SubtableName: sdk.String("vitae"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("pariatur"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("numquam"),
                                                                    Value: sdk.String("provident"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("quia"),
                                                                SubtableName: sdk.String("reiciendis"),
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
                                                                "et",
                                                                "qui",
                                                                "iusto",
                                                                "a",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "aperiam",
                                                                "saepe",
                                                                "voluptatem",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "hic",
                                                        "beatae",
                                                        "delectus",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "fugit",
                                                        "inventore",
                                                        "reprehenderit",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("dignissimos"),
                                                            Value: sdk.String("voluptatum"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("nulla"),
                                                            Value: sdk.String("consequatur"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("similique"),
                                                            Value: sdk.String("eligendi"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("officia"),
                                                            Value: sdk.String("odio"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("voluptate"),
                                                            Value: sdk.String("mollitia"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("repudiandae"),
                                                            Value: sdk.String("tempore"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("voluptate"),
                                                            Value: sdk.String("cum"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Miss Mary Crooks"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "quaerat",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "rerum",
                                                        "laboriosam",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "repudiandae",
                                                        "unde",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("voluptatibus"),
                                                            Value: sdk.String("facilis"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("doloremque"),
                                                            Value: sdk.String("officiis"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("nisi"),
                                                            Value: sdk.String("reprehenderit"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("alias"),
                                                            Value: sdk.String("provident"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("ut"),
                                                            Value: sdk.String("hic"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("facere"),
                                                            Value: sdk.String("tenetur"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("saepe"),
                                                            Value: sdk.String("assumenda"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("dolore"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("sit"),
                                                                    Value: sdk.String("recusandae"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("a"),
                                                                SubtableName: sdk.String("exercitationem"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("neque"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("mollitia"),
                                                                    Value: sdk.String("velit"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("ut"),
                                                                SubtableName: sdk.String("est"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("rerum"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("blanditiis"),
                                                                    Value: sdk.String("sapiente"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("recusandae"),
                                                                SubtableName: sdk.String("perspiciatis"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    shared.RateGroup{
                                        ApplicableShippingLabels: []string{
                                            "reprehenderit",
                                            "dolorem",
                                            "sunt",
                                        },
                                        CarrierRates: []shared.CarrierRate{
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("nulla"),
                                                CarrierService: sdk.String("cumque"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("aperiam"),
                                                    Value: sdk.String("ad"),
                                                },
                                                Name: sdk.String("Willard Hauck"),
                                                OriginPostalCode: sdk.String("consequuntur"),
                                                PercentageAdjustment: sdk.String("illum"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("delectus"),
                                                CarrierService: sdk.String("rerum"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("voluptate"),
                                                    Value: sdk.String("perferendis"),
                                                },
                                                Name: sdk.String("Kerry Dickens"),
                                                OriginPostalCode: sdk.String("non"),
                                                PercentageAdjustment: sdk.String("magni"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("sint"),
                                                CarrierService: sdk.String("consequatur"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("illum"),
                                                    Value: sdk.String("adipisci"),
                                                },
                                                Name: sdk.String("Carla Hayes PhD"),
                                                OriginPostalCode: sdk.String("quo"),
                                                PercentageAdjustment: sdk.String("culpa"),
                                            },
                                        },
                                        MainTable: &shared.Table{
                                            ColumnHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "eveniet",
                                                            "doloribus",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "iste",
                                                    "tempora",
                                                    "ad",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "harum",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("ducimus"),
                                                        Value: sdk.String("nisi"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("accusamus"),
                                                        Value: sdk.String("officiis"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("necessitatibus"),
                                                        Value: sdk.String("nam"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("nemo"),
                                                        Value: sdk.String("veritatis"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("impedit"),
                                                        Value: sdk.String("modi"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("possimus"),
                                                        Value: sdk.String("similique"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("architecto"),
                                                        Value: sdk.String("asperiores"),
                                                    },
                                                },
                                            },
                                            Name: sdk.String("Marcos Ernser"),
                                            RowHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "delectus",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "laboriosam",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "dolore",
                                                    "itaque",
                                                    "enim",
                                                    "nam",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("consequuntur"),
                                                        Value: sdk.String("sapiente"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("alias"),
                                                        Value: sdk.String("doloribus"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("dolore"),
                                                        Value: sdk.String("corrupti"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("exercitationem"),
                                                        Value: sdk.String("commodi"),
                                                    },
                                                },
                                            },
                                            Rows: []shared.Row{
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
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("amet"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("aut"),
                                                                Value: sdk.String("molestias"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("quaerat"),
                                                            SubtableName: sdk.String("repellat"),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        Name: sdk.String("Pete O'Conner"),
                                        SingleValue: &shared.Value{
                                            CarrierRateName: sdk.String("cumque"),
                                            FlatRate: &shared.Price{
                                                Currency: sdk.String("vero"),
                                                Value: sdk.String("a"),
                                            },
                                            NoShipping: sdk.Bool(false),
                                            PricePercentage: sdk.String("tenetur"),
                                            SubtableName: sdk.String("ipsam"),
                                        },
                                        Subtables: []shared.Table{
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "illo",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "debitis",
                                                                "enim",
                                                                "quasi",
                                                                "accusamus",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "aspernatur",
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
                                },
                                ShipmentType: sdk.String("earum"),
                            },
                        },
                        Warehouses: []shared.Warehouse{
                            shared.Warehouse{
                                BusinessDayConfig: &shared.BusinessDayConfig{
                                    BusinessDays: []string{
                                        "debitis",
                                        "eum",
                                        "non",
                                        "nam",
                                    },
                                },
                                CutoffTime: &shared.WarehouseCutoffTime{
                                    Hour: sdk.Int(958686),
                                    Minute: sdk.Int(784353),
                                },
                                HandlingDays: sdk.String("impedit"),
                                Name: sdk.String("Megan Kertzmann"),
                                ShippingAddress: &shared.Address{
                                    AdministrativeArea: sdk.String("quaerat"),
                                    City: sdk.String("North Eugeniafield"),
                                    Country: sdk.String("Vietnam"),
                                    PostalCode: sdk.String("46410-3789"),
                                    StreetAddress: sdk.String("consequuntur"),
                                },
                            },
                            shared.Warehouse{
                                BusinessDayConfig: &shared.BusinessDayConfig{
                                    BusinessDays: []string{
                                        "aperiam",
                                        "animi",
                                        "ratione",
                                    },
                                },
                                CutoffTime: &shared.WarehouseCutoffTime{
                                    Hour: sdk.Int(932044),
                                    Minute: sdk.Int(250180),
                                },
                                HandlingDays: sdk.String("quia"),
                                Name: sdk.String("Jack O'Connell Jr."),
                                ShippingAddress: &shared.Address{
                                    AdministrativeArea: sdk.String("perferendis"),
                                    City: sdk.String("Mission"),
                                    Country: sdk.String("Panama"),
                                    PostalCode: sdk.String("71860-2335"),
                                    StreetAddress: sdk.String("ea"),
                                },
                            },
                            shared.Warehouse{
                                BusinessDayConfig: &shared.BusinessDayConfig{
                                    BusinessDays: []string{
                                        "dicta",
                                        "quas",
                                        "delectus",
                                        "sint",
                                    },
                                },
                                CutoffTime: &shared.WarehouseCutoffTime{
                                    Hour: sdk.Int(973765),
                                    Minute: sdk.Int(573053),
                                },
                                HandlingDays: sdk.String("reprehenderit"),
                                Name: sdk.String("Jesus Reilly"),
                                ShippingAddress: &shared.Address{
                                    AdministrativeArea: sdk.String("facere"),
                                    City: sdk.String("Lake Yolandaport"),
                                    Country: sdk.String("Svalbard & Jan Mayen Islands"),
                                    PostalCode: sdk.String("47652"),
                                    StreetAddress: sdk.String("id"),
                                },
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("unde"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("expedita"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("quasi"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("numquam"),
        AccountID: "velit",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("blanditiis"),
        MerchantID: "quam",
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("ea"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("assumenda"),
        MerchantID: "modi",
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("repellendus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("ipsa"),
        MerchantID: "quo",
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("doloremque"),
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
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("eos"),
        MerchantID: "sed",
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("dolorem"),
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
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("aliquam"),
        MaxResults: sdk.Int64(973256),
        MerchantID: "fuga",
        OauthToken: sdk.String("deserunt"),
        PageToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("cumque"),
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
            AccountID: sdk.String("odio"),
            PostalCodeGroups: []shared.PostalCodeGroup{
                shared.PostalCodeGroup{
                    Country: sdk.String("Bouvet Island (Bouvetoya)"),
                    Name: sdk.String("Ignacio Sporer"),
                    PostalCodeRanges: []shared.PostalCodeRange{
                        shared.PostalCodeRange{
                            PostalCodeRangeBegin: sdk.String("nostrum"),
                            PostalCodeRangeEnd: sdk.String("doloremque"),
                        },
                    },
                },
                shared.PostalCodeGroup{
                    Country: sdk.String("South Georgia and the South Sandwich Islands"),
                    Name: sdk.String("Olga Stracke"),
                    PostalCodeRanges: []shared.PostalCodeRange{
                        shared.PostalCodeRange{
                            PostalCodeRangeBegin: sdk.String("repudiandae"),
                            PostalCodeRangeEnd: sdk.String("ab"),
                        },
                        shared.PostalCodeRange{
                            PostalCodeRangeBegin: sdk.String("praesentium"),
                            PostalCodeRangeEnd: sdk.String("nostrum"),
                        },
                        shared.PostalCodeRange{
                            PostalCodeRangeBegin: sdk.String("labore"),
                            PostalCodeRangeEnd: sdk.String("iusto"),
                        },
                        shared.PostalCodeRange{
                            PostalCodeRangeBegin: sdk.String("sunt"),
                            PostalCodeRangeEnd: sdk.String("tenetur"),
                        },
                    },
                },
                shared.PostalCodeGroup{
                    Country: sdk.String("Moldova"),
                    Name: sdk.String("Terence Kassulke III"),
                    PostalCodeRanges: []shared.PostalCodeRange{
                        shared.PostalCodeRange{
                            PostalCodeRangeBegin: sdk.String("error"),
                            PostalCodeRangeEnd: sdk.String("deleniti"),
                        },
                        shared.PostalCodeRange{
                            PostalCodeRangeBegin: sdk.String("tempore"),
                            PostalCodeRangeEnd: sdk.String("saepe"),
                        },
                    },
                },
                shared.PostalCodeGroup{
                    Country: sdk.String("Dominica"),
                    Name: sdk.String("Juanita Hagenes"),
                    PostalCodeRanges: []shared.PostalCodeRange{
                        shared.PostalCodeRange{
                            PostalCodeRangeBegin: sdk.String("blanditiis"),
                            PostalCodeRangeEnd: sdk.String("libero"),
                        },
                        shared.PostalCodeRange{
                            PostalCodeRangeBegin: sdk.String("sequi"),
                            PostalCodeRangeEnd: sdk.String("laborum"),
                        },
                        shared.PostalCodeRange{
                            PostalCodeRangeBegin: sdk.String("fugit"),
                            PostalCodeRangeEnd: sdk.String("totam"),
                        },
                        shared.PostalCodeRange{
                            PostalCodeRangeBegin: sdk.String("dignissimos"),
                            PostalCodeRangeEnd: sdk.String("corporis"),
                        },
                    },
                },
            },
            Services: []shared.Service{
                shared.Service{
                    Active: sdk.Bool(false),
                    Currency: sdk.String("nisi"),
                    DeliveryCountry: sdk.String("quo"),
                    DeliveryTime: &shared.DeliveryTime{
                        CutoffTime: &shared.CutoffTime{
                            Hour: sdk.Int64(79348),
                            Minute: sdk.Int64(975804),
                            Timezone: sdk.String("officiis"),
                        },
                        HandlingBusinessDayConfig: &shared.BusinessDayConfig{
                            BusinessDays: []string{
                                "perferendis",
                                "nisi",
                            },
                        },
                        HolidayCutoffs: []shared.HolidayCutoff{
                            shared.HolidayCutoff{
                                DeadlineDate: sdk.String("alias"),
                                DeadlineHour: sdk.Int64(455550),
                                DeadlineTimezone: sdk.String("repellendus"),
                                HolidayID: sdk.String("qui"),
                                VisibleFromDate: sdk.String("deserunt"),
                            },
                            shared.HolidayCutoff{
                                DeadlineDate: sdk.String("error"),
                                DeadlineHour: sdk.Int64(769922),
                                DeadlineTimezone: sdk.String("laudantium"),
                                HolidayID: sdk.String("nihil"),
                                VisibleFromDate: sdk.String("officia"),
                            },
                            shared.HolidayCutoff{
                                DeadlineDate: sdk.String("repudiandae"),
                                DeadlineHour: sdk.Int64(365771),
                                DeadlineTimezone: sdk.String("voluptatem"),
                                HolidayID: sdk.String("quod"),
                                VisibleFromDate: sdk.String("vitae"),
                            },
                            shared.HolidayCutoff{
                                DeadlineDate: sdk.String("vel"),
                                DeadlineHour: sdk.Int64(376017),
                                DeadlineTimezone: sdk.String("laboriosam"),
                                HolidayID: sdk.String("veritatis"),
                                VisibleFromDate: sdk.String("similique"),
                            },
                        },
                        MaxHandlingTimeInDays: sdk.Int64(87887),
                        MaxTransitTimeInDays: sdk.Int64(836084),
                        MinHandlingTimeInDays: sdk.Int64(566873),
                        MinTransitTimeInDays: sdk.Int64(87702),
                        TransitBusinessDayConfig: &shared.BusinessDayConfig{
                            BusinessDays: []string{
                                "iure",
                            },
                        },
                        TransitTimeTable: &shared.TransitTable{
                            PostalCodeGroupNames: []string{
                                "molestiae",
                                "itaque",
                                "voluptatum",
                            },
                            Rows: []shared.TransitTableTransitTimeRow{
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(248430),
                                            MinTransitTimeInDays: sdk.Int64(183631),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(89663),
                                            MinTransitTimeInDays: sdk.Int64(228493),
                                        },
                                    },
                                },
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(246653),
                                            MinTransitTimeInDays: sdk.Int64(994496),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(414172),
                                            MinTransitTimeInDays: sdk.Int64(374495),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(553805),
                                            MinTransitTimeInDays: sdk.Int64(460677),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(331817),
                                            MinTransitTimeInDays: sdk.Int64(145333),
                                        },
                                    },
                                },
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(710181),
                                            MinTransitTimeInDays: sdk.Int64(475859),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(421834),
                                            MinTransitTimeInDays: sdk.Int64(305833),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(803015),
                                            MinTransitTimeInDays: sdk.Int64(345637),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(577297),
                                            MinTransitTimeInDays: sdk.Int64(989278),
                                        },
                                    },
                                },
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(661531),
                                            MinTransitTimeInDays: sdk.Int64(334954),
                                        },
                                    },
                                },
                            },
                            TransitTimeLabels: []string{
                                "placeat",
                                "necessitatibus",
                            },
                        },
                        WarehouseBasedDeliveryTimes: []shared.WarehouseBasedDeliveryTime{
                            shared.WarehouseBasedDeliveryTime{
                                Carrier: sdk.String("cumque"),
                                CarrierService: sdk.String("culpa"),
                                OriginAdministrativeArea: sdk.String("pariatur"),
                                OriginCity: sdk.String("laborum"),
                                OriginCountry: sdk.String("consequuntur"),
                                OriginPostalCode: sdk.String("omnis"),
                                OriginStreetAddress: sdk.String("maxime"),
                                WarehouseName: sdk.String("officia"),
                            },
                            shared.WarehouseBasedDeliveryTime{
                                Carrier: sdk.String("iusto"),
                                CarrierService: sdk.String("natus"),
                                OriginAdministrativeArea: sdk.String("ab"),
                                OriginCity: sdk.String("deleniti"),
                                OriginCountry: sdk.String("et"),
                                OriginPostalCode: sdk.String("eligendi"),
                                OriginStreetAddress: sdk.String("sint"),
                                WarehouseName: sdk.String("ipsam"),
                            },
                            shared.WarehouseBasedDeliveryTime{
                                Carrier: sdk.String("laboriosam"),
                                CarrierService: sdk.String("molestiae"),
                                OriginAdministrativeArea: sdk.String("ab"),
                                OriginCity: sdk.String("ex"),
                                OriginCountry: sdk.String("iure"),
                                OriginPostalCode: sdk.String("dolorem"),
                                OriginStreetAddress: sdk.String("minus"),
                                WarehouseName: sdk.String("ad"),
                            },
                        },
                    },
                    Eligibility: sdk.String("ipsum"),
                    MinimumOrderValue: &shared.Price{
                        Currency: sdk.String("ipsa"),
                        Value: sdk.String("nam"),
                    },
                    MinimumOrderValueTable: &shared.MinimumOrderValueTable{
                        StoreCodeSetWithMovs: []shared.MinimumOrderValueTableStoreCodeSetWithMov{
                            shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                StoreCodes: []string{
                                    "nisi",
                                    "minima",
                                },
                                Value: &shared.Price{
                                    Currency: sdk.String("et"),
                                    Value: sdk.String("autem"),
                                },
                            },
                            shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                StoreCodes: []string{
                                    "culpa",
                                },
                                Value: &shared.Price{
                                    Currency: sdk.String("non"),
                                    Value: sdk.String("suscipit"),
                                },
                            },
                        },
                    },
                    Name: sdk.String("Mr. Margie Heller"),
                    PickupService: &shared.PickupCarrierService{
                        CarrierName: sdk.String("tempore"),
                        ServiceName: sdk.String("fugit"),
                    },
                    RateGroups: []shared.RateGroup{
                        shared.RateGroup{
                            ApplicableShippingLabels: []string{
                                "sunt",
                            },
                            CarrierRates: []shared.CarrierRate{
                                shared.CarrierRate{
                                    CarrierName: sdk.String("perspiciatis"),
                                    CarrierService: sdk.String("asperiores"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("eos"),
                                        Value: sdk.String("saepe"),
                                    },
                                    Name: sdk.String("Tamara Cruickshank"),
                                    OriginPostalCode: sdk.String("reprehenderit"),
                                    PercentageAdjustment: sdk.String("quidem"),
                                },
                                shared.CarrierRate{
                                    CarrierName: sdk.String("quas"),
                                    CarrierService: sdk.String("officia"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("modi"),
                                        Value: sdk.String("alias"),
                                    },
                                    Name: sdk.String("Kim Bailey"),
                                    OriginPostalCode: sdk.String("dolorum"),
                                    PercentageAdjustment: sdk.String("libero"),
                                },
                                shared.CarrierRate{
                                    CarrierName: sdk.String("voluptatem"),
                                    CarrierService: sdk.String("at"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("nisi"),
                                        Value: sdk.String("quis"),
                                    },
                                    Name: sdk.String("Lorena Schumm"),
                                    OriginPostalCode: sdk.String("eos"),
                                    PercentageAdjustment: sdk.String("laborum"),
                                },
                            },
                            MainTable: &shared.Table{
                                ColumnHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "pariatur",
                                                "aspernatur",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "itaque",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "perspiciatis",
                                                "accusantium",
                                                "debitis",
                                                "animi",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
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
                                Name: sdk.String("Randal Kris"),
                                RowHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "nostrum",
                                                "tempora",
                                                "maiores",
                                                "facere",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "exercitationem",
                                                "saepe",
                                                "deserunt",
                                                "sint",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "dolore",
                                                "sequi",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "occaecati",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "illum",
                                        "laborum",
                                        "sapiente",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "eius",
                                        "dolores",
                                        "dolorum",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("assumenda"),
                                            Value: sdk.String("iure"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("dolorem"),
                                            Value: sdk.String("neque"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("laudantium"),
                                            Value: sdk.String("quos"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("incidunt"),
                                            Value: sdk.String("pariatur"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("deleniti"),
                                            Value: sdk.String("aut"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("nesciunt"),
                                            Value: sdk.String("error"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("necessitatibus"),
                                            Value: sdk.String("culpa"),
                                        },
                                    },
                                },
                                Rows: []shared.Row{
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("iste"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("harum"),
                                                    Value: sdk.String("sunt"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("atque"),
                                                SubtableName: sdk.String("similique"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("qui"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("tempora"),
                                                    Value: sdk.String("modi"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("sapiente"),
                                                SubtableName: sdk.String("possimus"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("nisi"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("ab"),
                                                    Value: sdk.String("omnis"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("aut"),
                                                SubtableName: sdk.String("ipsum"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("iste"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("nulla"),
                                                    Value: sdk.String("dolorum"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("maxime"),
                                                SubtableName: sdk.String("assumenda"),
                                            },
                                        },
                                    },
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("voluptatum"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("eveniet"),
                                                    Value: sdk.String("quibusdam"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("doloremque"),
                                                SubtableName: sdk.String("assumenda"),
                                            },
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Dr. Brent Koch"),
                            SingleValue: &shared.Value{
                                CarrierRateName: sdk.String("quam"),
                                FlatRate: &shared.Price{
                                    Currency: sdk.String("delectus"),
                                    Value: sdk.String("quae"),
                                },
                                NoShipping: sdk.Bool(false),
                                PricePercentage: sdk.String("vero"),
                                SubtableName: sdk.String("amet"),
                            },
                            Subtables: []shared.Table{
                                shared.Table{
                                    ColumnHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "veniam",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "consequuntur",
                                                    "aut",
                                                    "maxime",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "aperiam",
                                                    "repellendus",
                                                    "ab",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "magnam",
                                                    "natus",
                                                    "aperiam",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "repellat",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "harum",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("totam"),
                                                Value: sdk.String("provident"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("maxime"),
                                                Value: sdk.String("totam"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("id"),
                                                Value: sdk.String("neque"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("dolores"),
                                                Value: sdk.String("vel"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("occaecati"),
                                                Value: sdk.String("pariatur"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Alvin Prosacco"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "eaque",
                                                    "quia",
                                                    "facilis",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "atque",
                                                    "illo",
                                                    "dolorum",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "incidunt",
                                            "maiores",
                                            "ea",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "sequi",
                                            "nisi",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("tempora"),
                                                Value: sdk.String("mollitia"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("quas"),
                                                Value: sdk.String("hic"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("id"),
                                                Value: sdk.String("asperiores"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("commodi"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("natus"),
                                                        Value: sdk.String("beatae"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("placeat"),
                                                    SubtableName: sdk.String("molestiae"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("dolor"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("quia"),
                                                        Value: sdk.String("nulla"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("occaecati"),
                                                    SubtableName: sdk.String("doloribus"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("libero"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("culpa"),
                                                        Value: sdk.String("tenetur"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("molestias"),
                                                    SubtableName: sdk.String("magnam"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("voluptate"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("aliquid"),
                                                        Value: sdk.String("officia"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("qui"),
                                                    SubtableName: sdk.String("animi"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("quas"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("possimus"),
                                                        Value: sdk.String("optio"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("quo"),
                                                    SubtableName: sdk.String("ullam"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("ipsa"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("placeat"),
                                                        Value: sdk.String("quas"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("culpa"),
                                                    SubtableName: sdk.String("consectetur"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("nostrum"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("dicta"),
                                                        Value: sdk.String("eos"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("porro"),
                                                    SubtableName: sdk.String("iusto"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("dolorem"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("voluptate"),
                                                        Value: sdk.String("blanditiis"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("dolore"),
                                                    SubtableName: sdk.String("rem"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("dolorem"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("alias"),
                                                        Value: sdk.String("dignissimos"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("minima"),
                                                    SubtableName: sdk.String("eaque"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("mollitia"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("alias"),
                                                        Value: sdk.String("sit"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("accusamus"),
                                                    SubtableName: sdk.String("sint"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("commodi"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("voluptas"),
                                                        Value: sdk.String("eveniet"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("eligendi"),
                                                    SubtableName: sdk.String("ducimus"),
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
                                                    "possimus",
                                                    "dolore",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "inventore",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "quaerat",
                                            "nesciunt",
                                            "omnis",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("optio"),
                                                Value: sdk.String("molestiae"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("atque"),
                                                Value: sdk.String("dolor"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("optio"),
                                                Value: sdk.String("cupiditate"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("dolor"),
                                                Value: sdk.String("cupiditate"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Sheldon Stiedemann"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "nobis",
                                                    "quam",
                                                    "placeat",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "non",
                                            "placeat",
                                            "veniam",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "similique",
                                            "corrupti",
                                            "aliquid",
                                            "aliquam",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("animi"),
                                                Value: sdk.String("ducimus"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("perferendis"),
                                                Value: sdk.String("impedit"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("reiciendis"),
                                                Value: sdk.String("quibusdam"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("pariatur"),
                                                Value: sdk.String("commodi"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("iste"),
                                                Value: sdk.String("corrupti"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("in"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("consequuntur"),
                                                        Value: sdk.String("voluptatem"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("voluptas"),
                                                    SubtableName: sdk.String("magnam"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("ad"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("quae"),
                                                        Value: sdk.String("ipsa"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("iure"),
                                                    SubtableName: sdk.String("voluptate"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("illum"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("et"),
                                                        Value: sdk.String("perspiciatis"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("accusamus"),
                                                    SubtableName: sdk.String("laborum"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("ratione"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("facere"),
                                                        Value: sdk.String("eius"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("perspiciatis"),
                                                    SubtableName: sdk.String("consequuntur"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("earum"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("quibusdam"),
                                                        Value: sdk.String("inventore"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("ut"),
                                                    SubtableName: sdk.String("tempore"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("molestias"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("fuga"),
                                                        Value: sdk.String("odit"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("minus"),
                                                    SubtableName: sdk.String("sunt"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("exercitationem"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("magnam"),
                                                        Value: sdk.String("veniam"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("quaerat"),
                                                    SubtableName: sdk.String("minima"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("officiis"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("unde"),
                                                        Value: sdk.String("ullam"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("enim"),
                                                    SubtableName: sdk.String("facere"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("cumque"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("cumque"),
                                                        Value: sdk.String("et"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("praesentium"),
                                                    SubtableName: sdk.String("minima"),
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
                                                    "magnam",
                                                    "unde",
                                                    "consequatur",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "eligendi",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "cumque",
                                                    "quaerat",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "culpa",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "explicabo",
                                            "nulla",
                                            "laborum",
                                            "animi",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "totam",
                                            "incidunt",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("nobis"),
                                                Value: sdk.String("culpa"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("ratione"),
                                                Value: sdk.String("illum"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("sed"),
                                                Value: sdk.String("amet"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("voluptates"),
                                                Value: sdk.String("nulla"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Julio Ernser Sr."),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "vitae",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "non",
                                                    "laudantium",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "rerum",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "ducimus",
                                            "eveniet",
                                            "repellendus",
                                            "enim",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "veniam",
                                            "voluptatem",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("vel"),
                                                Value: sdk.String("aspernatur"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("veritatis"),
                                                Value: sdk.String("porro"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("deleniti"),
                                                Value: sdk.String("doloribus"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("magnam"),
                                                Value: sdk.String("nulla"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("provident"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("voluptas"),
                                                        Value: sdk.String("nostrum"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("eum"),
                                                    SubtableName: sdk.String("modi"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("fugit"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("accusantium"),
                                                        Value: sdk.String("fuga"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("doloremque"),
                                                    SubtableName: sdk.String("reprehenderit"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("dicta"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("veritatis"),
                                                        Value: sdk.String("similique"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("omnis"),
                                                    SubtableName: sdk.String("commodi"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("dicta"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("illum"),
                                                        Value: sdk.String("aspernatur"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("ut"),
                                                    SubtableName: sdk.String("deserunt"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("dignissimos"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("nulla"),
                                                        Value: sdk.String("facilis"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("libero"),
                                                    SubtableName: sdk.String("corrupti"),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.RateGroup{
                            ApplicableShippingLabels: []string{
                                "enim",
                                "velit",
                                "sed",
                                "assumenda",
                            },
                            CarrierRates: []shared.CarrierRate{
                                shared.CarrierRate{
                                    CarrierName: sdk.String("perspiciatis"),
                                    CarrierService: sdk.String("odit"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("eligendi"),
                                        Value: sdk.String("earum"),
                                    },
                                    Name: sdk.String("Leah Casper"),
                                    OriginPostalCode: sdk.String("nam"),
                                    PercentageAdjustment: sdk.String("exercitationem"),
                                },
                                shared.CarrierRate{
                                    CarrierName: sdk.String("architecto"),
                                    CarrierService: sdk.String("consequuntur"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("impedit"),
                                        Value: sdk.String("deleniti"),
                                    },
                                    Name: sdk.String("Jennie Cole DDS"),
                                    OriginPostalCode: sdk.String("asperiores"),
                                    PercentageAdjustment: sdk.String("corporis"),
                                },
                                shared.CarrierRate{
                                    CarrierName: sdk.String("tempora"),
                                    CarrierService: sdk.String("voluptatum"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("a"),
                                        Value: sdk.String("corrupti"),
                                    },
                                    Name: sdk.String("Irvin Kuvalis MD"),
                                    OriginPostalCode: sdk.String("a"),
                                    PercentageAdjustment: sdk.String("alias"),
                                },
                            },
                            MainTable: &shared.Table{
                                ColumnHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "totam",
                                                "officiis",
                                                "dicta",
                                                "maiores",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "perferendis",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "nulla",
                                                "corporis",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "quas",
                                        "sequi",
                                        "illo",
                                        "temporibus",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "aperiam",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("ab"),
                                            Value: sdk.String("voluptatem"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("provident"),
                                            Value: sdk.String("ipsa"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("delectus"),
                                            Value: sdk.String("voluptas"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("quae"),
                                            Value: sdk.String("voluptas"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("laboriosam"),
                                            Value: sdk.String("ducimus"),
                                        },
                                    },
                                },
                                Name: sdk.String("Nettie Dibbert"),
                                RowHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "minus",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "molestiae",
                                                "iure",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "repellendus",
                                                "impedit",
                                                "itaque",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "quaerat",
                                        "explicabo",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "accusantium",
                                        "excepturi",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("odit"),
                                            Value: sdk.String("beatae"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("exercitationem"),
                                            Value: sdk.String("officiis"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("eaque"),
                                            Value: sdk.String("blanditiis"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("aut"),
                                            Value: sdk.String("vitae"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("tempora"),
                                            Value: sdk.String("molestias"),
                                        },
                                    },
                                },
                                Rows: []shared.Row{
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("minima"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("doloribus"),
                                                    Value: sdk.String("suscipit"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("sequi"),
                                                SubtableName: sdk.String("debitis"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("neque"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("mollitia"),
                                                    Value: sdk.String("tenetur"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("non"),
                                                SubtableName: sdk.String("pariatur"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("vero"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("natus"),
                                                    Value: sdk.String("quibusdam"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("quibusdam"),
                                                SubtableName: sdk.String("officia"),
                                            },
                                        },
                                    },
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("velit"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("vero"),
                                                    Value: sdk.String("placeat"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("pariatur"),
                                                SubtableName: sdk.String("vel"),
                                            },
                                        },
                                    },
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("incidunt"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("praesentium"),
                                                    Value: sdk.String("ipsum"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("itaque"),
                                                SubtableName: sdk.String("non"),
                                            },
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Cory Olson"),
                            SingleValue: &shared.Value{
                                CarrierRateName: sdk.String("saepe"),
                                FlatRate: &shared.Price{
                                    Currency: sdk.String("modi"),
                                    Value: sdk.String("assumenda"),
                                },
                                NoShipping: sdk.Bool(false),
                                PricePercentage: sdk.String("maiores"),
                                SubtableName: sdk.String("neque"),
                            },
                            Subtables: []shared.Table{
                                shared.Table{
                                    ColumnHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "nostrum",
                                                    "libero",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "omnis",
                                                    "veniam",
                                                    "nostrum",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "aliquam",
                                                    "vitae",
                                                    "ipsum",
                                                    "recusandae",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "ipsum",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "numquam",
                                            "praesentium",
                                            "dolores",
                                        },
                                        PostalCodeGroupNames: []string{
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
                },
                shared.Service{
                    Active: sdk.Bool(false),
                    Currency: sdk.String("tempore"),
                    DeliveryCountry: sdk.String("odio"),
                    DeliveryTime: &shared.DeliveryTime{
                        CutoffTime: &shared.CutoffTime{
                            Hour: sdk.Int64(444318),
                            Minute: sdk.Int64(556257),
                            Timezone: sdk.String("voluptates"),
                        },
                        HandlingBusinessDayConfig: &shared.BusinessDayConfig{
                            BusinessDays: []string{
                                "nam",
                                "nisi",
                                "officiis",
                            },
                        },
                        HolidayCutoffs: []shared.HolidayCutoff{
                            shared.HolidayCutoff{
                                DeadlineDate: sdk.String("fugiat"),
                                DeadlineHour: sdk.Int64(135597),
                                DeadlineTimezone: sdk.String("impedit"),
                                HolidayID: sdk.String("voluptatibus"),
                                VisibleFromDate: sdk.String("ad"),
                            },
                        },
                        MaxHandlingTimeInDays: sdk.Int64(51717),
                        MaxTransitTimeInDays: sdk.Int64(136851),
                        MinHandlingTimeInDays: sdk.Int64(711620),
                        MinTransitTimeInDays: sdk.Int64(673290),
                        TransitBusinessDayConfig: &shared.BusinessDayConfig{
                            BusinessDays: []string{
                                "rerum",
                                "explicabo",
                                "eligendi",
                                "nam",
                            },
                        },
                        TransitTimeTable: &shared.TransitTable{
                            PostalCodeGroupNames: []string{
                                "aliquam",
                                "aliquid",
                                "adipisci",
                                "ipsam",
                            },
                            Rows: []shared.TransitTableTransitTimeRow{
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(909354),
                                            MinTransitTimeInDays: sdk.Int64(433083),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(347050),
                                            MinTransitTimeInDays: sdk.Int64(871888),
                                        },
                                    },
                                },
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(1914),
                                            MinTransitTimeInDays: sdk.Int64(175937),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(550066),
                                            MinTransitTimeInDays: sdk.Int64(789760),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(223692),
                                            MinTransitTimeInDays: sdk.Int64(881240),
                                        },
                                    },
                                },
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(318672),
                                            MinTransitTimeInDays: sdk.Int64(86220),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(652967),
                                            MinTransitTimeInDays: sdk.Int64(84708),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(876418),
                                            MinTransitTimeInDays: sdk.Int64(189986),
                                        },
                                    },
                                },
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
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
                },
                shared.Service{
                    Active: sdk.Bool(false),
                    Currency: sdk.String("tempore"),
                    DeliveryCountry: sdk.String("recusandae"),
                    DeliveryTime: &shared.DeliveryTime{
                        CutoffTime: &shared.CutoffTime{
                            Hour: sdk.Int64(687883),
                            Minute: sdk.Int64(394435),
                            Timezone: sdk.String("blanditiis"),
                        },
                        HandlingBusinessDayConfig: &shared.BusinessDayConfig{
                            BusinessDays: []string{
                                "doloremque",
                                "doloribus",
                                "vel",
                            },
                        },
                        HolidayCutoffs: []shared.HolidayCutoff{
                            shared.HolidayCutoff{
                                DeadlineDate: sdk.String("ducimus"),
                                DeadlineHour: sdk.Int64(692401),
                                DeadlineTimezone: sdk.String("in"),
                                HolidayID: sdk.String("at"),
                                VisibleFromDate: sdk.String("alias"),
                            },
                            shared.HolidayCutoff{
                                DeadlineDate: sdk.String("consectetur"),
                                DeadlineHour: sdk.Int64(652429),
                                DeadlineTimezone: sdk.String("beatae"),
                                HolidayID: sdk.String("numquam"),
                                VisibleFromDate: sdk.String("praesentium"),
                            },
                        },
                        MaxHandlingTimeInDays: sdk.Int64(44658),
                        MaxTransitTimeInDays: sdk.Int64(940676),
                        MinHandlingTimeInDays: sdk.Int64(503469),
                        MinTransitTimeInDays: sdk.Int64(870212),
                        TransitBusinessDayConfig: &shared.BusinessDayConfig{
                            BusinessDays: []string{
                                "ipsum",
                                "voluptatem",
                                "tenetur",
                                "aut",
                            },
                        },
                        TransitTimeTable: &shared.TransitTable{
                            PostalCodeGroupNames: []string{
                                "cupiditate",
                                "fugiat",
                            },
                            Rows: []shared.TransitTableTransitTimeRow{
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(15706),
                                            MinTransitTimeInDays: sdk.Int64(412568),
                                        },
                                    },
                                },
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(543317),
                                            MinTransitTimeInDays: sdk.Int64(836395),
                                        },
                                    },
                                },
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(452638),
                                            MinTransitTimeInDays: sdk.Int64(894242),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(124387),
                                            MinTransitTimeInDays: sdk.Int64(320689),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(155920),
                                            MinTransitTimeInDays: sdk.Int64(132721),
                                        },
                                    },
                                },
                            },
                            TransitTimeLabels: []string{
                                "molestiae",
                                "minima",
                                "et",
                            },
                        },
                        WarehouseBasedDeliveryTimes: []shared.WarehouseBasedDeliveryTime{
                            shared.WarehouseBasedDeliveryTime{
                                Carrier: sdk.String("quibusdam"),
                                CarrierService: sdk.String("culpa"),
                                OriginAdministrativeArea: sdk.String("voluptatum"),
                                OriginCity: sdk.String("voluptatem"),
                                OriginCountry: sdk.String("amet"),
                                OriginPostalCode: sdk.String("vitae"),
                                OriginStreetAddress: sdk.String("explicabo"),
                                WarehouseName: sdk.String("quia"),
                            },
                        },
                    },
                    Eligibility: sdk.String("provident"),
                    MinimumOrderValue: &shared.Price{
                        Currency: sdk.String("fugit"),
                        Value: sdk.String("nobis"),
                    },
                    MinimumOrderValueTable: &shared.MinimumOrderValueTable{
                        StoreCodeSetWithMovs: []shared.MinimumOrderValueTableStoreCodeSetWithMov{
                            shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                StoreCodes: []string{
                                    "quasi",
                                    "porro",
                                },
                                Value: &shared.Price{
                                    Currency: sdk.String("sed"),
                                    Value: sdk.String("laborum"),
                                },
                            },
                            shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                StoreCodes: []string{
                                    "eaque",
                                    "odit",
                                },
                                Value: &shared.Price{
                                    Currency: sdk.String("distinctio"),
                                    Value: sdk.String("soluta"),
                                },
                            },
                            shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                StoreCodes: []string{
                                    "odio",
                                    "repudiandae",
                                    "accusamus",
                                },
                                Value: &shared.Price{
                                    Currency: sdk.String("quasi"),
                                    Value: sdk.String("accusantium"),
                                },
                            },
                            shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                StoreCodes: []string{
                                    "fugiat",
                                },
                                Value: &shared.Price{
                                    Currency: sdk.String("id"),
                                    Value: sdk.String("sed"),
                                },
                            },
                        },
                    },
                    Name: sdk.String("Rolando Durgan"),
                    PickupService: &shared.PickupCarrierService{
                        CarrierName: sdk.String("praesentium"),
                        ServiceName: sdk.String("officiis"),
                    },
                    RateGroups: []shared.RateGroup{
                        shared.RateGroup{
                            ApplicableShippingLabels: []string{
                                "libero",
                            },
                            CarrierRates: []shared.CarrierRate{
                                shared.CarrierRate{
                                    CarrierName: sdk.String("dolorem"),
                                    CarrierService: sdk.String("adipisci"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("voluptates"),
                                        Value: sdk.String("similique"),
                                    },
                                    Name: sdk.String("Willis Graham"),
                                    OriginPostalCode: sdk.String("quae"),
                                    PercentageAdjustment: sdk.String("dolores"),
                                },
                                shared.CarrierRate{
                                    CarrierName: sdk.String("dolorum"),
                                    CarrierService: sdk.String("quod"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("sunt"),
                                        Value: sdk.String("iure"),
                                    },
                                    Name: sdk.String("Amber Rogahn DDS"),
                                    OriginPostalCode: sdk.String("placeat"),
                                    PercentageAdjustment: sdk.String("cupiditate"),
                                },
                                shared.CarrierRate{
                                    CarrierName: sdk.String("asperiores"),
                                    CarrierService: sdk.String("maxime"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("ex"),
                                        Value: sdk.String("dicta"),
                                    },
                                    Name: sdk.String("Neal Ward"),
                                    OriginPostalCode: sdk.String("harum"),
                                    PercentageAdjustment: sdk.String("quaerat"),
                                },
                                shared.CarrierRate{
                                    CarrierName: sdk.String("delectus"),
                                    CarrierService: sdk.String("sit"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("porro"),
                                        Value: sdk.String("labore"),
                                    },
                                    Name: sdk.String("Clarence Rodriguez"),
                                    OriginPostalCode: sdk.String("ut"),
                                    PercentageAdjustment: sdk.String("incidunt"),
                                },
                            },
                            MainTable: &shared.Table{
                                ColumnHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "rem",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "explicabo",
                                                "odit",
                                                "laboriosam",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "est",
                                                "est",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "debitis",
                                                "esse",
                                                "omnis",
                                                "repudiandae",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "minus",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "illo",
                                        "est",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("sequi"),
                                            Value: sdk.String("et"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("tempore"),
                                            Value: sdk.String("voluptates"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("cumque"),
                                            Value: sdk.String("distinctio"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("rem"),
                                            Value: sdk.String("consectetur"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("magni"),
                                            Value: sdk.String("dolor"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("esse"),
                                            Value: sdk.String("deleniti"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("mollitia"),
                                            Value: sdk.String("debitis"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("neque"),
                                            Value: sdk.String("facilis"),
                                        },
                                    },
                                },
                                Name: sdk.String("Simon Cormier"),
                                RowHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "ad",
                                                "aperiam",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "unde",
                                                "rem",
                                                "iure",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "aliquam",
                                                "natus",
                                                "ad",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "dolorum",
                                        "quod",
                                        "nihil",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "ducimus",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("eaque"),
                                            Value: sdk.String("ex"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("rerum"),
                                            Value: sdk.String("magni"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("laudantium"),
                                            Value: sdk.String("repudiandae"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("minus"),
                                            Value: sdk.String("porro"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("autem"),
                                            Value: sdk.String("eius"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("unde"),
                                            Value: sdk.String("sunt"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("amet"),
                                            Value: sdk.String("laudantium"),
                                        },
                                    },
                                },
                                Rows: []shared.Row{
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("aliquid"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("qui"),
                                                    Value: sdk.String("eligendi"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("perspiciatis"),
                                                SubtableName: sdk.String("eum"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("sint"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("eligendi"),
                                                    Value: sdk.String("incidunt"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("quisquam"),
                                                SubtableName: sdk.String("quod"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("laboriosam"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("quidem"),
                                                    Value: sdk.String("reprehenderit"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("praesentium"),
                                                SubtableName: sdk.String("totam"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("error"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("alias"),
                                                    Value: sdk.String("deserunt"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("sequi"),
                                                SubtableName: sdk.String("sapiente"),
                                            },
                                        },
                                    },
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("nesciunt"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("optio"),
                                                    Value: sdk.String("corrupti"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("inventore"),
                                                SubtableName: sdk.String("quibusdam"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("culpa"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("dicta"),
                                                    Value: sdk.String("perferendis"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("asperiores"),
                                                SubtableName: sdk.String("deleniti"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("optio"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("consequuntur"),
                                                    Value: sdk.String("non"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("fugiat"),
                                                SubtableName: sdk.String("voluptatibus"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("iste"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("amet"),
                                                    Value: sdk.String("quae"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("pariatur"),
                                                SubtableName: sdk.String("officia"),
                                            },
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Henrietta Schuppe"),
                            SingleValue: &shared.Value{
                                CarrierRateName: sdk.String("vitae"),
                                FlatRate: &shared.Price{
                                    Currency: sdk.String("repellat"),
                                    Value: sdk.String("est"),
                                },
                                NoShipping: sdk.Bool(false),
                                PricePercentage: sdk.String("facere"),
                                SubtableName: sdk.String("iste"),
                            },
                            Subtables: []shared.Table{
                                shared.Table{
                                    ColumnHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "minus",
                                                    "sint",
                                                    "aliquam",
                                                    "consectetur",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "dicta",
                                                    "nesciunt",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "esse",
                                                    "magni",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "quibusdam",
                                            "veritatis",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "velit",
                                            "quia",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("nam"),
                                                Value: sdk.String("quos"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("ratione"),
                                                Value: sdk.String("fuga"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Jeanne Schumm"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "alias",
                                                    "hic",
                                                    "tenetur",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "consequatur",
                                            "accusamus",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "occaecati",
                                            "fuga",
                                            "ex",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("nostrum"),
                                                Value: sdk.String("atque"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("saepe"),
                                                Value: sdk.String("eum"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("fuga"),
                                                Value: sdk.String("non"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("nam"),
                                                Value: sdk.String("totam"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("ut"),
                                                Value: sdk.String("non"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("totam"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("explicabo"),
                                                        Value: sdk.String("quibusdam"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("harum"),
                                                    SubtableName: sdk.String("itaque"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
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
                                                shared.Value{
                                                    CarrierRateName: sdk.String("cupiditate"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("aliquam"),
                                                        Value: sdk.String("suscipit"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("atque"),
                                                    SubtableName: sdk.String("minus"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("debitis"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("neque"),
                                                        Value: sdk.String("doloremque"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("tempora"),
                                                    SubtableName: sdk.String("quibusdam"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("quas"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("magnam"),
                                                        Value: sdk.String("cupiditate"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("expedita"),
                                                    SubtableName: sdk.String("sapiente"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("deleniti"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("explicabo"),
                                                        Value: sdk.String("veritatis"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("incidunt"),
                                                    SubtableName: sdk.String("eligendi"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("amet"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("ipsum"),
                                                        Value: sdk.String("nihil"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("hic"),
                                                    SubtableName: sdk.String("occaecati"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("libero"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("cum"),
                                                        Value: sdk.String("eaque"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("porro"),
                                                    SubtableName: sdk.String("vel"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("omnis"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("recusandae"),
                                                        Value: sdk.String("adipisci"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("quam"),
                                                    SubtableName: sdk.String("fugit"),
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
                                                    "vitae",
                                                    "non",
                                                    "labore",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "tempore",
                                                    "deserunt",
                                                },
                                            },
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
                                        },
                                        NumberOfItems: []string{
                                            "facere",
                                            "reprehenderit",
                                            "laborum",
                                            "officia",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "suscipit",
                                            "explicabo",
                                            "recusandae",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("iusto"),
                                                Value: sdk.String("aspernatur"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("ea"),
                                                Value: sdk.String("architecto"),
                                            },
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
                                    Name: sdk.String("Lionel Connelly"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "cupiditate",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "ex",
                                                    "tempore",
                                                    "minima",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "modi",
                                            "expedita",
                                            "quaerat",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "recusandae",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("sapiente"),
                                                Value: sdk.String("iusto"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("quasi"),
                                                Value: sdk.String("odit"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("tempore"),
                                                Value: sdk.String("ducimus"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("animi"),
                                                Value: sdk.String("ducimus"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("expedita"),
                                                Value: sdk.String("voluptatem"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("adipisci"),
                                                Value: sdk.String("tempora"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("modi"),
                                                Value: sdk.String("soluta"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("vitae"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("sit"),
                                                        Value: sdk.String("autem"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("rem"),
                                                    SubtableName: sdk.String("deleniti"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("illum"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("necessitatibus"),
                                                        Value: sdk.String("vero"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("facilis"),
                                                    SubtableName: sdk.String("necessitatibus"),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    ShipmentType: sdk.String("asperiores"),
                },
                shared.Service{
                    Active: sdk.Bool(false),
                    Currency: sdk.String("rem"),
                    DeliveryCountry: sdk.String("perspiciatis"),
                    DeliveryTime: &shared.DeliveryTime{
                        CutoffTime: &shared.CutoffTime{
                            Hour: sdk.Int64(466968),
                            Minute: sdk.Int64(938917),
                            Timezone: sdk.String("velit"),
                        },
                        HandlingBusinessDayConfig: &shared.BusinessDayConfig{
                            BusinessDays: []string{
                                "pariatur",
                                "voluptatem",
                                "quod",
                                "minus",
                            },
                        },
                        HolidayCutoffs: []shared.HolidayCutoff{
                            shared.HolidayCutoff{
                                DeadlineDate: sdk.String("dolor"),
                                DeadlineHour: sdk.Int64(225945),
                                DeadlineTimezone: sdk.String("tenetur"),
                                HolidayID: sdk.String("quasi"),
                                VisibleFromDate: sdk.String("dicta"),
                            },
                            shared.HolidayCutoff{
                                DeadlineDate: sdk.String("rerum"),
                                DeadlineHour: sdk.Int64(205473),
                                DeadlineTimezone: sdk.String("voluptates"),
                                HolidayID: sdk.String("aliquam"),
                                VisibleFromDate: sdk.String("voluptates"),
                            },
                            shared.HolidayCutoff{
                                DeadlineDate: sdk.String("alias"),
                                DeadlineHour: sdk.Int64(528631),
                                DeadlineTimezone: sdk.String("aut"),
                                HolidayID: sdk.String("officia"),
                                VisibleFromDate: sdk.String("officia"),
                            },
                            shared.HolidayCutoff{
                                DeadlineDate: sdk.String("vitae"),
                                DeadlineHour: sdk.Int64(55884),
                                DeadlineTimezone: sdk.String("incidunt"),
                                HolidayID: sdk.String("architecto"),
                                VisibleFromDate: sdk.String("deleniti"),
                            },
                        },
                        MaxHandlingTimeInDays: sdk.Int64(433555),
                        MaxTransitTimeInDays: sdk.Int64(880769),
                        MinHandlingTimeInDays: sdk.Int64(759059),
                        MinTransitTimeInDays: sdk.Int64(484140),
                        TransitBusinessDayConfig: &shared.BusinessDayConfig{
                            BusinessDays: []string{
                                "provident",
                                "officiis",
                            },
                        },
                        TransitTimeTable: &shared.TransitTable{
                            PostalCodeGroupNames: []string{
                                "eos",
                            },
                            Rows: []shared.TransitTableTransitTimeRow{
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(492427),
                                            MinTransitTimeInDays: sdk.Int64(43838),
                                        },
                                    },
                                },
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(806261),
                                            MinTransitTimeInDays: sdk.Int64(338971),
                                        },
                                    },
                                },
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(513307),
                                            MinTransitTimeInDays: sdk.Int64(927894),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(138514),
                                            MinTransitTimeInDays: sdk.Int64(857075),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(196647),
                                            MinTransitTimeInDays: sdk.Int64(6100),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(915897),
                                            MinTransitTimeInDays: sdk.Int64(634486),
                                        },
                                    },
                                },
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(213399),
                                            MinTransitTimeInDays: sdk.Int64(122302),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(56528),
                                            MinTransitTimeInDays: sdk.Int64(278998),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(979892),
                                            MinTransitTimeInDays: sdk.Int64(635584),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(295740),
                                            MinTransitTimeInDays: sdk.Int64(259753),
                                        },
                                    },
                                },
                            },
                            TransitTimeLabels: []string{
                                "alias",
                                "molestiae",
                            },
                        },
                        WarehouseBasedDeliveryTimes: []shared.WarehouseBasedDeliveryTime{
                            shared.WarehouseBasedDeliveryTime{
                                Carrier: sdk.String("voluptatibus"),
                                CarrierService: sdk.String("sequi"),
                                OriginAdministrativeArea: sdk.String("ducimus"),
                                OriginCity: sdk.String("minima"),
                                OriginCountry: sdk.String("libero"),
                                OriginPostalCode: sdk.String("ut"),
                                OriginStreetAddress: sdk.String("tempora"),
                                WarehouseName: sdk.String("sed"),
                            },
                            shared.WarehouseBasedDeliveryTime{
                                Carrier: sdk.String("quas"),
                                CarrierService: sdk.String("aspernatur"),
                                OriginAdministrativeArea: sdk.String("laudantium"),
                                OriginCity: sdk.String("fugit"),
                                OriginCountry: sdk.String("et"),
                                OriginPostalCode: sdk.String("reiciendis"),
                                OriginStreetAddress: sdk.String("nulla"),
                                WarehouseName: sdk.String("libero"),
                            },
                            shared.WarehouseBasedDeliveryTime{
                                Carrier: sdk.String("sed"),
                                CarrierService: sdk.String("hic"),
                                OriginAdministrativeArea: sdk.String("eum"),
                                OriginCity: sdk.String("sint"),
                                OriginCountry: sdk.String("eveniet"),
                                OriginPostalCode: sdk.String("veniam"),
                                OriginStreetAddress: sdk.String("unde"),
                                WarehouseName: sdk.String("consequuntur"),
                            },
                        },
                    },
                    Eligibility: sdk.String("laboriosam"),
                    MinimumOrderValue: &shared.Price{
                        Currency: sdk.String("iusto"),
                        Value: sdk.String("quisquam"),
                    },
                    MinimumOrderValueTable: &shared.MinimumOrderValueTable{
                        StoreCodeSetWithMovs: []shared.MinimumOrderValueTableStoreCodeSetWithMov{
                            shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                StoreCodes: []string{
                                    "quo",
                                },
                                Value: &shared.Price{
                                    Currency: sdk.String("optio"),
                                    Value: sdk.String("voluptatum"),
                                },
                            },
                            shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                StoreCodes: []string{
                                    "sequi",
                                    "quo",
                                    "facere",
                                    "labore",
                                },
                                Value: &shared.Price{
                                    Currency: sdk.String("fugit"),
                                    Value: sdk.String("quis"),
                                },
                            },
                        },
                    },
                    Name: sdk.String("Jake Baumbach"),
                    PickupService: &shared.PickupCarrierService{
                        CarrierName: sdk.String("deleniti"),
                        ServiceName: sdk.String("laborum"),
                    },
                    RateGroups: []shared.RateGroup{
                        shared.RateGroup{
                            ApplicableShippingLabels: []string{
                                "placeat",
                            },
                            CarrierRates: []shared.CarrierRate{
                                shared.CarrierRate{
                                    CarrierName: sdk.String("aut"),
                                    CarrierService: sdk.String("atque"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("repellat"),
                                        Value: sdk.String("eveniet"),
                                    },
                                    Name: sdk.String("Miss Claudia Hermiston"),
                                    OriginPostalCode: sdk.String("perferendis"),
                                    PercentageAdjustment: sdk.String("incidunt"),
                                },
                                shared.CarrierRate{
                                    CarrierName: sdk.String("ducimus"),
                                    CarrierService: sdk.String("quod"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("aut"),
                                        Value: sdk.String("numquam"),
                                    },
                                    Name: sdk.String("Mrs. Belinda VonRueden"),
                                    OriginPostalCode: sdk.String("hic"),
                                    PercentageAdjustment: sdk.String("natus"),
                                },
                                shared.CarrierRate{
                                    CarrierName: sdk.String("laboriosam"),
                                    CarrierService: sdk.String("quasi"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("excepturi"),
                                        Value: sdk.String("distinctio"),
                                    },
                                    Name: sdk.String("Harvey Skiles PhD"),
                                    OriginPostalCode: sdk.String("corporis"),
                                    PercentageAdjustment: sdk.String("laborum"),
                                },
                            },
                            MainTable: &shared.Table{
                                ColumnHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "voluptatibus",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "modi",
                                        "nesciunt",
                                        "autem",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "commodi",
                                        "sed",
                                        "exercitationem",
                                        "natus",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("velit"),
                                            Value: sdk.String("adipisci"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("natus"),
                                            Value: sdk.String("minima"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("minus"),
                                            Value: sdk.String("provident"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("quibusdam"),
                                            Value: sdk.String("explicabo"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("adipisci"),
                                            Value: sdk.String("iusto"),
                                        },
                                    },
                                },
                                Name: sdk.String("Belinda Koepp"),
                                RowHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "facilis",
                                                "exercitationem",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "tempore",
                                                "magnam",
                                                "maiores",
                                                "quis",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "voluptatem",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "quos",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "reiciendis",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("tempore"),
                                            Value: sdk.String("vero"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("asperiores"),
                                            Value: sdk.String("ea"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("voluptate"),
                                            Value: sdk.String("aliquid"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("nobis"),
                                            Value: sdk.String("reprehenderit"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("accusantium"),
                                            Value: sdk.String("autem"),
                                        },
                                    },
                                },
                                Rows: []shared.Row{
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("facilis"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("in"),
                                                    Value: sdk.String("ad"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("voluptatem"),
                                                SubtableName: sdk.String("sit"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("enim"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("qui"),
                                                    Value: sdk.String("dolorum"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("ad"),
                                                SubtableName: sdk.String("nisi"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("dolore"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("in"),
                                                    Value: sdk.String("officiis"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("fugiat"),
                                                SubtableName: sdk.String("minus"),
                                            },
                                        },
                                    },
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("sequi"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("natus"),
                                                    Value: sdk.String("saepe"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("quibusdam"),
                                                SubtableName: sdk.String("corrupti"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("maxime"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("aliquam"),
                                                    Value: sdk.String("adipisci"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("explicabo"),
                                                SubtableName: sdk.String("eaque"),
                                            },
                                        },
                                    },
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("incidunt"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("quae"),
                                                    Value: sdk.String("eos"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("eius"),
                                                SubtableName: sdk.String("voluptatem"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("temporibus"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("aliquam"),
                                                    Value: sdk.String("incidunt"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("totam"),
                                                SubtableName: sdk.String("iusto"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("mollitia"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("porro"),
                                                    Value: sdk.String("voluptas"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("provident"),
                                                SubtableName: sdk.String("neque"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("expedita"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("excepturi"),
                                                    Value: sdk.String("quaerat"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("nobis"),
                                                SubtableName: sdk.String("nesciunt"),
                                            },
                                        },
                                    },
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("unde"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("fugiat"),
                                                    Value: sdk.String("magni"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("modi"),
                                                SubtableName: sdk.String("atque"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("blanditiis"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("quibusdam"),
                                                    Value: sdk.String("odio"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("unde"),
                                                SubtableName: sdk.String("ad"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("officia"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("fuga"),
                                                    Value: sdk.String("incidunt"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("aspernatur"),
                                                SubtableName: sdk.String("asperiores"),
                                            },
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Theodore Bashirian"),
                            SingleValue: &shared.Value{
                                CarrierRateName: sdk.String("laboriosam"),
                                FlatRate: &shared.Price{
                                    Currency: sdk.String("omnis"),
                                    Value: sdk.String("tenetur"),
                                },
                                NoShipping: sdk.Bool(false),
                                PricePercentage: sdk.String("vel"),
                                SubtableName: sdk.String("iste"),
                            },
                            Subtables: []shared.Table{
                                shared.Table{
                                    ColumnHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "voluptas",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "fugit",
                                            "inventore",
                                            "odit",
                                            "labore",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "dolore",
                                            "ullam",
                                            "aut",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("quasi"),
                                                Value: sdk.String("natus"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("fugiat"),
                                                Value: sdk.String("odio"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("quo"),
                                                Value: sdk.String("ipsum"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("et"),
                                                Value: sdk.String("harum"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("magnam"),
                                                Value: sdk.String("illo"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("atque"),
                                                Value: sdk.String("magnam"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Dr. Barbara Huel Jr."),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "ipsa",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "perferendis",
                                            "qui",
                                            "velit",
                                            "repellendus",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "error",
                                            "ipsa",
                                            "beatae",
                                            "doloribus",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("animi"),
                                                Value: sdk.String("delectus"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("pariatur"),
                                                Value: sdk.String("eos"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("commodi"),
                                                Value: sdk.String("quo"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("aliquam"),
                                                Value: sdk.String("magnam"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("praesentium"),
                                                Value: sdk.String("numquam"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("itaque"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("molestias"),
                                                        Value: sdk.String("assumenda"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("praesentium"),
                                                    SubtableName: sdk.String("occaecati"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("eos"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("veniam"),
                                                        Value: sdk.String("amet"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("nobis"),
                                                    SubtableName: sdk.String("quos"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("provident"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("ea"),
                                                        Value: sdk.String("consequuntur"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("delectus"),
                                                    SubtableName: sdk.String("quaerat"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("excepturi"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("eum"),
                                                        Value: sdk.String("rerum"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("a"),
                                                    SubtableName: sdk.String("ad"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("et"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("eveniet"),
                                                        Value: sdk.String("tempora"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("ea"),
                                                    SubtableName: sdk.String("exercitationem"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("sed"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("fugiat"),
                                                        Value: sdk.String("dolorem"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("cumque"),
                                                    SubtableName: sdk.String("nesciunt"),
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
                                                    "at",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "quae",
                                                    "quam",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "atque",
                                            "animi",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "quaerat",
                                            "excepturi",
                                            "ab",
                                            "eos",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("voluptate"),
                                                Value: sdk.String("odio"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("magni"),
                                                Value: sdk.String("enim"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("commodi"),
                                                Value: sdk.String("magni"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("et"),
                                                Value: sdk.String("iste"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("aut"),
                                                Value: sdk.String("occaecati"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("vero"),
                                                Value: sdk.String("error"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Melissa Greenholt"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "recusandae",
                                                    "ad",
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
                                        },
                                        NumberOfItems: []string{
                                            "odio",
                                            "voluptatem",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "delectus",
                                            "et",
                                            "optio",
                                            "a",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("unde"),
                                                Value: sdk.String("consectetur"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("qui"),
                                                Value: sdk.String("aliquid"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("enim"),
                                                Value: sdk.String("explicabo"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("repudiandae"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("ex"),
                                                        Value: sdk.String("ex"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("harum"),
                                                    SubtableName: sdk.String("cum"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("quia"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("laboriosam"),
                                                        Value: sdk.String("deleniti"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("molestias"),
                                                    SubtableName: sdk.String("dignissimos"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("facere"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("provident"),
                                                        Value: sdk.String("omnis"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("dolorum"),
                                                    SubtableName: sdk.String("qui"),
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
                                                    "amet",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "suscipit",
                                                    "odio",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "accusamus",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "velit",
                                                    "earum",
                                                    "recusandae",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "impedit",
                                            "reiciendis",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "perspiciatis",
                                            "delectus",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("ipsam"),
                                                Value: sdk.String("voluptatum"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("officia"),
                                                Value: sdk.String("earum"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("est"),
                                                Value: sdk.String("quisquam"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("officia"),
                                                Value: sdk.String("officiis"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Andrea Durgan"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "maiores",
                                                    "ducimus",
                                                    "rerum",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "architecto",
                                            "quod",
                                            "minus",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "quam",
                                            "nihil",
                                            "inventore",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("maxime"),
                                                Value: sdk.String("deleniti"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("accusantium"),
                                                Value: sdk.String("sed"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("quisquam"),
                                                Value: sdk.String("sint"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("voluptates"),
                                                Value: sdk.String("alias"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("placeat"),
                                                Value: sdk.String("in"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("possimus"),
                                                Value: sdk.String("iste"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("dolores"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("consectetur"),
                                                        Value: sdk.String("repellat"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("quae"),
                                                    SubtableName: sdk.String("animi"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("autem"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("sequi"),
                                                        Value: sdk.String("officiis"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("nulla"),
                                                    SubtableName: sdk.String("occaecati"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("optio"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("asperiores"),
                                                        Value: sdk.String("et"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("nobis"),
                                                    SubtableName: sdk.String("quas"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("nemo"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("commodi"),
                                                        Value: sdk.String("soluta"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("quo"),
                                                    SubtableName: sdk.String("libero"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("quaerat"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("inventore"),
                                                        Value: sdk.String("accusamus"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("maiores"),
                                                    SubtableName: sdk.String("odit"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("numquam"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("nemo"),
                                                        Value: sdk.String("numquam"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("culpa"),
                                                    SubtableName: sdk.String("aliquam"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("iusto"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("voluptatibus"),
                                                        Value: sdk.String("dolorum"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("maxime"),
                                                    SubtableName: sdk.String("repellat"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("inventore"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("autem"),
                                                        Value: sdk.String("optio"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("fugiat"),
                                                    SubtableName: sdk.String("facere"),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.RateGroup{
                            ApplicableShippingLabels: []string{
                                "ut",
                                "dolore",
                            },
                            CarrierRates: []shared.CarrierRate{
                                shared.CarrierRate{
                                    CarrierName: sdk.String("officia"),
                                    CarrierService: sdk.String("reprehenderit"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("nemo"),
                                        Value: sdk.String("nisi"),
                                    },
                                    Name: sdk.String("Maxine Kub"),
                                    OriginPostalCode: sdk.String("dignissimos"),
                                    PercentageAdjustment: sdk.String("quibusdam"),
                                },
                                shared.CarrierRate{
                                    CarrierName: sdk.String("placeat"),
                                    CarrierService: sdk.String("natus"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("accusamus"),
                                        Value: sdk.String("repellat"),
                                    },
                                    Name: sdk.String("Domingo Green"),
                                    OriginPostalCode: sdk.String("impedit"),
                                    PercentageAdjustment: sdk.String("autem"),
                                },
                            },
                            MainTable: &shared.Table{
                                ColumnHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "ea",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "consequatur",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "nesciunt",
                                        "et",
                                        "dolor",
                                        "voluptatum",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("nesciunt"),
                                            Value: sdk.String("doloremque"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("at"),
                                            Value: sdk.String("tenetur"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("sequi"),
                                            Value: sdk.String("temporibus"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("cum"),
                                            Value: sdk.String("sit"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("aspernatur"),
                                            Value: sdk.String("earum"),
                                        },
                                    },
                                },
                                Name: sdk.String("Orlando Heller"),
                                RowHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "rem",
                                                "repellat",
                                                "suscipit",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "consequuntur",
                                                "repudiandae",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "libero",
                                                "perspiciatis",
                                                "illum",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "praesentium",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "deleniti",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "corrupti",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("molestias"),
                                            Value: sdk.String("aperiam"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("fugit"),
                                            Value: sdk.String("labore"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("cum"),
                                            Value: sdk.String("sed"),
                                        },
                                    },
                                },
                                Rows: []shared.Row{
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("facere"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("est"),
                                                    Value: sdk.String("soluta"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("neque"),
                                                SubtableName: sdk.String("perferendis"),
                                            },
                                        },
                                    },
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("excepturi"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("dicta"),
                                                    Value: sdk.String("iure"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("doloribus"),
                                                SubtableName: sdk.String("corporis"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("alias"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("asperiores"),
                                                    Value: sdk.String("quibusdam"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("animi"),
                                                SubtableName: sdk.String("alias"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("non"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("porro"),
                                                    Value: sdk.String("voluptatum"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("libero"),
                                                SubtableName: sdk.String("quasi"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("quidem"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("soluta"),
                                                    Value: sdk.String("exercitationem"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("exercitationem"),
                                                SubtableName: sdk.String("similique"),
                                            },
                                        },
                                    },
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("unde"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("consequuntur"),
                                                    Value: sdk.String("cum"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("aut"),
                                                SubtableName: sdk.String("expedita"),
                                            },
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Alfred Rempel"),
                            SingleValue: &shared.Value{
                                CarrierRateName: sdk.String("quaerat"),
                                FlatRate: &shared.Price{
                                    Currency: sdk.String("aliquam"),
                                    Value: sdk.String("laboriosam"),
                                },
                                NoShipping: sdk.Bool(false),
                                PricePercentage: sdk.String("nisi"),
                                SubtableName: sdk.String("labore"),
                            },
                            Subtables: []shared.Table{
                                shared.Table{
                                    ColumnHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "repellendus",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "non",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "laudantium",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "facilis",
                                            "consequatur",
                                            "assumenda",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "libero",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("architecto"),
                                                Value: sdk.String("in"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("fuga"),
                                                Value: sdk.String("tenetur"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("saepe"),
                                                Value: sdk.String("eveniet"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("incidunt"),
                                                Value: sdk.String("soluta"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("voluptas"),
                                                Value: sdk.String("delectus"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Abraham Mayert"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "nihil",
                                                    "recusandae",
                                                    "illum",
                                                    "laborum",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "consectetur",
                                                    "provident",
                                                    "possimus",
                                                    "illo",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "tenetur",
                                            "rerum",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "odio",
                                            "nisi",
                                            "hic",
                                            "assumenda",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("eum"),
                                                Value: sdk.String("quia"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("sequi"),
                                                Value: sdk.String("doloremque"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("dolor"),
                                                Value: sdk.String("debitis"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("consectetur"),
                                                Value: sdk.String("aperiam"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("quidem"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("excepturi"),
                                                        Value: sdk.String("ipsum"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("accusamus"),
                                                    SubtableName: sdk.String("consectetur"),
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
                                                    "et",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "placeat",
                                                    "sapiente",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "nemo",
                                            "soluta",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "sequi",
                                            "ab",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("ullam"),
                                                Value: sdk.String("ullam"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("porro"),
                                                Value: sdk.String("optio"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Justin Schaefer II"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "culpa",
                                                    "illum",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "minus",
                                                    "sint",
                                                    "occaecati",
                                                    "voluptatem",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "maxime",
                                                    "ad",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "provident",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "cum",
                                            "atque",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "labore",
                                            "praesentium",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("officiis"),
                                                Value: sdk.String("voluptatibus"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("mollitia"),
                                                Value: sdk.String("quam"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("deleniti"),
                                                Value: sdk.String("a"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("ab"),
                                                Value: sdk.String("voluptates"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("facere"),
                                                Value: sdk.String("nesciunt"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("perferendis"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("beatae"),
                                                        Value: sdk.String("saepe"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("voluptatem"),
                                                    SubtableName: sdk.String("sint"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("corporis"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("explicabo"),
                                                        Value: sdk.String("distinctio"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("harum"),
                                                    SubtableName: sdk.String("quidem"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("tempora"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("minus"),
                                                        Value: sdk.String("harum"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("quidem"),
                                                    SubtableName: sdk.String("inventore"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("voluptatibus"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("odio"),
                                                        Value: sdk.String("ab"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("neque"),
                                                    SubtableName: sdk.String("pariatur"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("excepturi"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("enim"),
                                                        Value: sdk.String("culpa"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("dolore"),
                                                    SubtableName: sdk.String("sunt"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("nisi"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("molestias"),
                                                        Value: sdk.String("impedit"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("quasi"),
                                                    SubtableName: sdk.String("nesciunt"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("in"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("quia"),
                                                        Value: sdk.String("odio"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("dicta"),
                                                    SubtableName: sdk.String("eveniet"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("vitae"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("quos"),
                                                        Value: sdk.String("eveniet"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("officia"),
                                                    SubtableName: sdk.String("perspiciatis"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("debitis"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("non"),
                                                        Value: sdk.String("veniam"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("illo"),
                                                    SubtableName: sdk.String("illo"),
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
                                                    "fugit",
                                                    "optio",
                                                    "quo",
                                                    "minima",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "tenetur",
                                                    "libero",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "aliquid",
                                                    "alias",
                                                    "rerum",
                                                    "beatae",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "quam",
                                            "molestias",
                                            "eveniet",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "eos",
                                            "cupiditate",
                                            "est",
                                            "occaecati",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("quaerat"),
                                                Value: sdk.String("itaque"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("itaque"),
                                                Value: sdk.String("animi"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("totam"),
                                                Value: sdk.String("ullam"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("nisi"),
                                                Value: sdk.String("nemo"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("optio"),
                                                Value: sdk.String("fugit"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("at"),
                                                Value: sdk.String("modi"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("delectus"),
                                                Value: sdk.String("aliquam"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Armando Macejkovic"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "aspernatur",
                                                    "nihil",
                                                    "quas",
                                                    "tenetur",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "unde",
                                                    "autem",
                                                    "ea",
                                                    "molestiae",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "labore",
                                            "autem",
                                            "placeat",
                                            "corporis",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "possimus",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("voluptatibus"),
                                                Value: sdk.String("repellat"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("fuga"),
                                                Value: sdk.String("ad"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("corrupti"),
                                                Value: sdk.String("temporibus"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("minus"),
                                                Value: sdk.String("voluptates"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("ratione"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("quaerat"),
                                                        Value: sdk.String("minus"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("natus"),
                                                    SubtableName: sdk.String("nostrum"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("tempore"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("natus"),
                                                        Value: sdk.String("facilis"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("assumenda"),
                                                    SubtableName: sdk.String("repellat"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("odit"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("vitae"),
                                                        Value: sdk.String("error"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("alias"),
                                                    SubtableName: sdk.String("id"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("vero"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("excepturi"),
                                                        Value: sdk.String("expedita"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("harum"),
                                                    SubtableName: sdk.String("quisquam"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("eligendi"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("magni"),
                                                        Value: sdk.String("dignissimos"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("aspernatur"),
                                                    SubtableName: sdk.String("ullam"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("saepe"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("impedit"),
                                                        Value: sdk.String("magni"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("suscipit"),
                                                    SubtableName: sdk.String("ipsam"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("quisquam"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("debitis"),
                                                        Value: sdk.String("ipsa"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("quia"),
                                                    SubtableName: sdk.String("totam"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("consequatur"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("corrupti"),
                                                        Value: sdk.String("numquam"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("alias"),
                                                    SubtableName: sdk.String("quod"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("nisi"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("excepturi"),
                                                        Value: sdk.String("eveniet"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("tenetur"),
                                                    SubtableName: sdk.String("vel"),
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
                                                    "modi",
                                                    "enim",
                                                    "cumque",
                                                    "blanditiis",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "quibusdam",
                                                    "possimus",
                                                    "maiores",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "optio",
                                                    "voluptate",
                                                    "nostrum",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "enim",
                                            "ipsa",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "quaerat",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("aperiam"),
                                                Value: sdk.String("optio"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("commodi"),
                                                Value: sdk.String("amet"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("quia"),
                                                Value: sdk.String("facilis"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Dr. Carmen McKenzie"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "vitae",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "adipisci",
                                                    "itaque",
                                                    "unde",
                                                    "beatae",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "quas",
                                                    "maiores",
                                                    "voluptate",
                                                    "libero",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "ea",
                                                    "error",
                                                    "at",
                                                    "incidunt",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "alias",
                                            "est",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "dignissimos",
                                            "debitis",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("saepe"),
                                                Value: sdk.String("tempore"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("sunt"),
                                                Value: sdk.String("nisi"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("nulla"),
                                                Value: sdk.String("architecto"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("accusantium"),
                                                Value: sdk.String("a"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("repudiandae"),
                                                Value: sdk.String("delectus"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("neque"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("ab"),
                                                        Value: sdk.String("quisquam"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("nihil"),
                                                    SubtableName: sdk.String("quisquam"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("aperiam"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("delectus"),
                                                        Value: sdk.String("aut"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("repellat"),
                                                    SubtableName: sdk.String("molestias"),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.RateGroup{
                            ApplicableShippingLabels: []string{
                                "dolorem",
                                "sapiente",
                            },
                            CarrierRates: []shared.CarrierRate{
                                shared.CarrierRate{
                                    CarrierName: sdk.String("facere"),
                                    CarrierService: sdk.String("veniam"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("eligendi"),
                                        Value: sdk.String("aspernatur"),
                                    },
                                    Name: sdk.String("Melba Stark"),
                                    OriginPostalCode: sdk.String("quae"),
                                    PercentageAdjustment: sdk.String("tempore"),
                                },
                                shared.CarrierRate{
                                    CarrierName: sdk.String("incidunt"),
                                    CarrierService: sdk.String("deserunt"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("non"),
                                        Value: sdk.String("officia"),
                                    },
                                    Name: sdk.String("Lori Hermiston"),
                                    OriginPostalCode: sdk.String("amet"),
                                    PercentageAdjustment: sdk.String("ipsa"),
                                },
                                shared.CarrierRate{
                                    CarrierName: sdk.String("consequuntur"),
                                    CarrierService: sdk.String("ullam"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("molestiae"),
                                        Value: sdk.String("architecto"),
                                    },
                                    Name: sdk.String("Ebony Grant"),
                                    OriginPostalCode: sdk.String("iusto"),
                                    PercentageAdjustment: sdk.String("recusandae"),
                                },
                            },
                            MainTable: &shared.Table{
                                ColumnHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "porro",
                                                "enim",
                                                "tempora",
                                                "voluptatum",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "itaque",
                                                "sit",
                                                "excepturi",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "numquam",
                                        "architecto",
                                        "fuga",
                                        "iusto",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "dolores",
                                        "inventore",
                                        "ipsam",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("officia"),
                                            Value: sdk.String("et"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("odit"),
                                            Value: sdk.String("similique"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("labore"),
                                            Value: sdk.String("harum"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("dolorum"),
                                            Value: sdk.String("provident"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("ipsam"),
                                            Value: sdk.String("provident"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("omnis"),
                                            Value: sdk.String("rem"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("quos"),
                                            Value: sdk.String("beatae"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("perspiciatis"),
                                            Value: sdk.String("fugit"),
                                        },
                                    },
                                },
                                Name: sdk.String("Miss Darrin Shanahan"),
                                RowHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "ullam",
                                                "dolorem",
                                                "vero",
                                                "esse",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "dignissimos",
                                                "facere",
                                                "eius",
                                                "accusamus",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "nisi",
                                        "recusandae",
                                        "deleniti",
                                        "nobis",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "consequatur",
                                        "distinctio",
                                        "similique",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("consectetur"),
                                            Value: sdk.String("molestias"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("modi"),
                                            Value: sdk.String("saepe"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("qui"),
                                            Value: sdk.String("dolor"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("sint"),
                                            Value: sdk.String("ea"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("ipsa"),
                                            Value: sdk.String("sequi"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("maiores"),
                                            Value: sdk.String("itaque"),
                                        },
                                    },
                                },
                                Rows: []shared.Row{
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("sunt"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("quo"),
                                                    Value: sdk.String("veniam"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("sit"),
                                                SubtableName: sdk.String("deleniti"),
                                            },
                                        },
                                    },
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("dolore"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("possimus"),
                                                    Value: sdk.String("dicta"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("deleniti"),
                                                SubtableName: sdk.String("perspiciatis"),
                                            },
                                        },
                                    },
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("dolor"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("eum"),
                                                    Value: sdk.String("culpa"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("iure"),
                                                SubtableName: sdk.String("harum"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("sunt"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("facere"),
                                                    Value: sdk.String("dolores"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("in"),
                                                SubtableName: sdk.String("repudiandae"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("rerum"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("esse"),
                                                    Value: sdk.String("accusantium"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("nihil"),
                                                SubtableName: sdk.String("similique"),
                                            },
                                        },
                                    },
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("iure"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("aut"),
                                                    Value: sdk.String("placeat"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("voluptatum"),
                                                SubtableName: sdk.String("doloribus"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("officiis"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("dolore"),
                                                    Value: sdk.String("commodi"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("debitis"),
                                                SubtableName: sdk.String("commodi"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("beatae"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("voluptate"),
                                                    Value: sdk.String("voluptate"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("fugiat"),
                                                SubtableName: sdk.String("quidem"),
                                            },
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Jody Rogahn"),
                            SingleValue: &shared.Value{
                                CarrierRateName: sdk.String("dignissimos"),
                                FlatRate: &shared.Price{
                                    Currency: sdk.String("eaque"),
                                    Value: sdk.String("voluptatibus"),
                                },
                                NoShipping: sdk.Bool(false),
                                PricePercentage: sdk.String("voluptatibus"),
                                SubtableName: sdk.String("cum"),
                            },
                            Subtables: []shared.Table{
                                shared.Table{
                                    ColumnHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "ducimus",
                                                    "aperiam",
                                                    "repudiandae",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "odio",
                                                    "nihil",
                                                    "ipsa",
                                                    "eveniet",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "autem",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "occaecati",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("debitis"),
                                                Value: sdk.String("voluptatibus"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("esse"),
                                                Value: sdk.String("maxime"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("doloremque"),
                                                Value: sdk.String("vel"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Ricardo Brown PhD"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "blanditiis",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "inventore",
                                            "modi",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "consequuntur",
                                            "perferendis",
                                            "est",
                                            "ipsum",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("perspiciatis"),
                                                Value: sdk.String("corrupti"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("ea"),
                                                Value: sdk.String("sequi"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("esse"),
                                                Value: sdk.String("nobis"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("est"),
                                                Value: sdk.String("totam"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("maxime"),
                                                Value: sdk.String("adipisci"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("delectus"),
                                                Value: sdk.String("repudiandae"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("ad"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("molestiae"),
                                                        Value: sdk.String("ut"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("possimus"),
                                                    SubtableName: sdk.String("harum"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("culpa"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("reiciendis"),
                                                        Value: sdk.String("natus"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("labore"),
                                                    SubtableName: sdk.String("officia"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("placeat"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("sint"),
                                                        Value: sdk.String("rem"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("a"),
                                                    SubtableName: sdk.String("illo"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("velit"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("est"),
                                                        Value: sdk.String("delectus"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("magni"),
                                                    SubtableName: sdk.String("rem"),
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
                                                    "quia",
                                                    "porro",
                                                    "sapiente",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "expedita",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "eius",
                                                    "voluptatibus",
                                                    "neque",
                                                    "pariatur",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "quibusdam",
                                                    "amet",
                                                    "minima",
                                                    "ea",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "esse",
                                            "officiis",
                                            "sunt",
                                            "modi",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "dolores",
                                            "beatae",
                                            "eligendi",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("occaecati"),
                                                Value: sdk.String("voluptatum"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("beatae"),
                                                Value: sdk.String("natus"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("aliquid"),
                                                Value: sdk.String("assumenda"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("veniam"),
                                                Value: sdk.String("quis"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("delectus"),
                                                Value: sdk.String("autem"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("iste"),
                                                Value: sdk.String("mollitia"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("sunt"),
                                                Value: sdk.String("quod"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Shelley Kunze"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "non",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "praesentium",
                                                    "beatae",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "eos",
                                                    "dolor",
                                                    "eligendi",
                                                    "dolorem",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "fuga",
                                                    "voluptate",
                                                    "porro",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "officiis",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "in",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("distinctio"),
                                                Value: sdk.String("quasi"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("dolores"),
                                                Value: sdk.String("impedit"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("enim"),
                                                Value: sdk.String("nam"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("culpa"),
                                                Value: sdk.String("laudantium"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("corporis"),
                                                Value: sdk.String("a"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("eos"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("quo"),
                                                        Value: sdk.String("fugiat"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("enim"),
                                                    SubtableName: sdk.String("optio"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("est"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("ex"),
                                                        Value: sdk.String("hic"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("nobis"),
                                                    SubtableName: sdk.String("repellat"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("necessitatibus"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("quisquam"),
                                                        Value: sdk.String("perspiciatis"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("amet"),
                                                    SubtableName: sdk.String("consequuntur"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("fuga"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("a"),
                                                        Value: sdk.String("aliquid"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("voluptatum"),
                                                    SubtableName: sdk.String("sunt"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("illum"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("ea"),
                                                        Value: sdk.String("veniam"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("nam"),
                                                    SubtableName: sdk.String("delectus"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("placeat"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("saepe"),
                                                        Value: sdk.String("quod"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("odit"),
                                                    SubtableName: sdk.String("assumenda"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("at"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("ea"),
                                                        Value: sdk.String("provident"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("inventore"),
                                                    SubtableName: sdk.String("ea"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("repellat"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("quam"),
                                                        Value: sdk.String("delectus"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("minus"),
                                                    SubtableName: sdk.String("nihil"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("quibusdam"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("assumenda"),
                                                        Value: sdk.String("animi"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("molestiae"),
                                                    SubtableName: sdk.String("ipsa"),
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
                                                    "aliquid",
                                                    "sit",
                                                    "vero",
                                                    "laboriosam",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "reprehenderit",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "praesentium",
                                                    "natus",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "fugiat",
                                                    "autem",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "quisquam",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "tempora",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("facere"),
                                                Value: sdk.String("excepturi"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("aut"),
                                                Value: sdk.String("aspernatur"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("odit"),
                                                Value: sdk.String("molestiae"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("recusandae"),
                                                Value: sdk.String("neque"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("nobis"),
                                                Value: sdk.String("eaque"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("facere"),
                                                Value: sdk.String("iste"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Miss Tamara Wisoky"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "quae",
                                                    "similique",
                                                    "quidem",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "provident",
                                                    "dignissimos",
                                                    "nostrum",
                                                    "beatae",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "vitae",
                                            "doloremque",
                                            "commodi",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "qui",
                                            "ratione",
                                            "repudiandae",
                                            "accusantium",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("debitis"),
                                                Value: sdk.String("voluptas"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("laudantium"),
                                                Value: sdk.String("sunt"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("veniam"),
                                                Value: sdk.String("similique"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("id"),
                                                Value: sdk.String("officiis"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("earum"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("nobis"),
                                                        Value: sdk.String("repellendus"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("necessitatibus"),
                                                    SubtableName: sdk.String("unde"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("voluptates"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("in"),
                                                        Value: sdk.String("odit"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("iste"),
                                                    SubtableName: sdk.String("eligendi"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("error"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("nulla"),
                                                        Value: sdk.String("tempora"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("maiores"),
                                                    SubtableName: sdk.String("eos"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("totam"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("fuga"),
                                                        Value: sdk.String("aliquam"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("tempora"),
                                                    SubtableName: sdk.String("laboriosam"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("quaerat"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("alias"),
                                                        Value: sdk.String("quisquam"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("fuga"),
                                                    SubtableName: sdk.String("commodi"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("ipsa"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("illum"),
                                                        Value: sdk.String("tempore"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("nihil"),
                                                    SubtableName: sdk.String("neque"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("est"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("consequuntur"),
                                                        Value: sdk.String("a"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("unde"),
                                                    SubtableName: sdk.String("dolorem"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("labore"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("autem"),
                                                        Value: sdk.String("in"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("at"),
                                                    SubtableName: sdk.String("quisquam"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("quae"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("possimus"),
                                                        Value: sdk.String("praesentium"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("facere"),
                                                    SubtableName: sdk.String("fuga"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("minima"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("voluptas"),
                                                        Value: sdk.String("et"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("explicabo"),
                                                    SubtableName: sdk.String("sed"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("aut"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("quia"),
                                                        Value: sdk.String("laboriosam"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("laborum"),
                                                    SubtableName: sdk.String("soluta"),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    ShipmentType: sdk.String("quas"),
                },
            },
            Warehouses: []shared.Warehouse{
                shared.Warehouse{
                    BusinessDayConfig: &shared.BusinessDayConfig{
                        BusinessDays: []string{
                            "quam",
                        },
                    },
                    CutoffTime: &shared.WarehouseCutoffTime{
                        Hour: sdk.Int(450820),
                        Minute: sdk.Int(294917),
                    },
                    HandlingDays: sdk.String("praesentium"),
                    Name: sdk.String("Roxanne Bosco"),
                    ShippingAddress: &shared.Address{
                        AdministrativeArea: sdk.String("voluptas"),
                        City: sdk.String("Wiegandfurt"),
                        Country: sdk.String("Libyan Arab Jamahiriya"),
                        PostalCode: sdk.String("86460"),
                        StreetAddress: sdk.String("blanditiis"),
                    },
                },
                shared.Warehouse{
                    BusinessDayConfig: &shared.BusinessDayConfig{
                        BusinessDays: []string{
                            "hic",
                            "maxime",
                            "numquam",
                        },
                    },
                    CutoffTime: &shared.WarehouseCutoffTime{
                        Hour: sdk.Int(283848),
                        Minute: sdk.Int(851916),
                    },
                    HandlingDays: sdk.String("facilis"),
                    Name: sdk.String("Constance Gibson"),
                    ShippingAddress: &shared.Address{
                        AdministrativeArea: sdk.String("ipsa"),
                        City: sdk.String("Grand Forks"),
                        Country: sdk.String("Serbia"),
                        PostalCode: sdk.String("47380-7779"),
                        StreetAddress: sdk.String("repellendus"),
                    },
                },
                shared.Warehouse{
                    BusinessDayConfig: &shared.BusinessDayConfig{
                        BusinessDays: []string{
                            "possimus",
                            "consectetur",
                            "dolor",
                            "modi",
                        },
                    },
                    CutoffTime: &shared.WarehouseCutoffTime{
                        Hour: sdk.Int(707258),
                        Minute: sdk.Int(422803),
                    },
                    HandlingDays: sdk.String("repellat"),
                    Name: sdk.String("Beverly Feeney"),
                    ShippingAddress: &shared.Address{
                        AdministrativeArea: sdk.String("repudiandae"),
                        City: sdk.String("O'Haracester"),
                        Country: sdk.String("Grenada"),
                        PostalCode: sdk.String("69939"),
                        StreetAddress: sdk.String("voluptatem"),
                    },
                },
                shared.Warehouse{
                    BusinessDayConfig: &shared.BusinessDayConfig{
                        BusinessDays: []string{
                            "officia",
                            "quas",
                            "cum",
                            "sint",
                        },
                    },
                    CutoffTime: &shared.WarehouseCutoffTime{
                        Hour: sdk.Int(670961),
                        Minute: sdk.Int(959477),
                    },
                    HandlingDays: sdk.String("nisi"),
                    Name: sdk.String("Drew Aufderhar"),
                    ShippingAddress: &shared.Address{
                        AdministrativeArea: sdk.String("deleniti"),
                        City: sdk.String("Fort Jed"),
                        Country: sdk.String("Reunion"),
                        PostalCode: sdk.String("02779"),
                        StreetAddress: sdk.String("magni"),
                    },
                },
            },
        },
        AccessToken: sdk.String("assumenda"),
        AccountID: "et",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ea"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("placeat"),
        MerchantID: "illo",
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("pariatur"),
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
