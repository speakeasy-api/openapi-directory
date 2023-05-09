# Conversion

### Available Operations

* [DoubleclicksearchConversionGet](#doubleclicksearchconversionget) - Retrieves a list of conversions from a DoubleClick Search engine account.
* [DoubleclicksearchConversionGetByCustomerID](#doubleclicksearchconversiongetbycustomerid) - Retrieves a list of conversions from a DoubleClick Search engine account.
* [DoubleclicksearchConversionInsert](#doubleclicksearchconversioninsert) - Inserts a batch of new conversions into DoubleClick Search.
* [DoubleclicksearchConversionUpdate](#doubleclicksearchconversionupdate) - Updates a batch of conversions in DoubleClick Search.
* [DoubleclicksearchConversionUpdateAvailability](#doubleclicksearchconversionupdateavailability) - Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

## DoubleclicksearchConversionGet

Retrieves a list of conversions from a DoubleClick Search engine account.

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
    res, err := s.Conversion.DoubleclicksearchConversionGet(ctx, operations.DoubleclicksearchConversionGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        AdGroupID: sdk.String("excepturi"),
        AdID: sdk.String("nisi"),
        AdvertiserID: "recusandae",
        AgencyID: "temporibus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        CampaignID: sdk.String("veritatis"),
        CriterionID: sdk.String("deserunt"),
        CustomerID: sdk.String("perferendis"),
        EndDate: 368241,
        EngineAccountID: "repellendus",
        Fields: sdk.String("sapiente"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        RowCount: 870088,
        StartDate: 978619,
        StartRow: 473608,
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
    }, operations.DoubleclicksearchConversionGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversionList != nil {
        // handle response
    }
}
```

## DoubleclicksearchConversionGetByCustomerID

Retrieves a list of conversions from a DoubleClick Search engine account.

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
    res, err := s.Conversion.DoubleclicksearchConversionGetByCustomerID(ctx, operations.DoubleclicksearchConversionGetByCustomerIDRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("totam"),
        AdGroupID: sdk.String("porro"),
        AdID: sdk.String("dolorum"),
        AdvertiserID: sdk.String("dicta"),
        AgencyID: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        CampaignID: sdk.String("fugit"),
        CriterionID: sdk.String("deleniti"),
        CustomerID: "hic",
        EndDate: 758616,
        EngineAccountID: sdk.String("totam"),
        Fields: sdk.String("beatae"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        RowCount: 186332,
        StartDate: 774234,
        StartRow: 736918,
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.DoubleclicksearchConversionGetByCustomerIDSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversionList != nil {
        // handle response
    }
}
```

## DoubleclicksearchConversionInsert

Inserts a batch of new conversions into DoubleClick Search.

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
    res, err := s.Conversion.DoubleclicksearchConversionInsert(ctx, operations.DoubleclicksearchConversionInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConversionList: &shared.ConversionList{
            Conversion: []shared.Conversion{
                shared.Conversion{
                    AdGroupID: sdk.String("perferendis"),
                    AdID: sdk.String("ad"),
                    AdvertiserID: sdk.String("natus"),
                    AgencyID: sdk.String("sed"),
                    AttributionModel: sdk.String("iste"),
                    CampaignID: sdk.String("dolor"),
                    Channel: sdk.String("natus"),
                    ClickID: sdk.String("laboriosam"),
                    ConversionID: sdk.String("hic"),
                    ConversionModifiedTimestamp: sdk.String("saepe"),
                    ConversionTimestamp: sdk.String("fuga"),
                    CountMillis: sdk.String("in"),
                    CriterionID: sdk.String("corporis"),
                    CurrencyCode: sdk.String("iste"),
                    CustomDimension: []shared.CustomDimension{
                        shared.CustomDimension{
                            Name: sdk.String("Dr. Rickey Boyle"),
                            Value: sdk.String("mollitia"),
                        },
                        shared.CustomDimension{
                            Name: sdk.String("Ernest Ebert"),
                            Value: sdk.String("nobis"),
                        },
                    },
                    CustomMetric: []shared.CustomMetric{
                        shared.CustomMetric{
                            Name: sdk.String("Corey Hane III"),
                            Value: sdk.Float64(6342.74),
                        },
                        shared.CustomMetric{
                            Name: sdk.String("Darrin Brakus"),
                            Value: sdk.Float64(6350.59),
                        },
                    },
                    CustomerID: sdk.String("consequuntur"),
                    DeviceType: sdk.String("repellat"),
                    DsConversionID: sdk.String("mollitia"),
                    EngineAccountID: sdk.String("occaecati"),
                    FloodlightOrderID: sdk.String("numquam"),
                    InventoryAccountID: sdk.String("commodi"),
                    ProductCountry: sdk.String("quam"),
                    ProductGroupID: sdk.String("molestiae"),
                    ProductID: sdk.String("velit"),
                    ProductLanguage: sdk.String("error"),
                    QuantityMillis: sdk.String("quia"),
                    RevenueMicros: sdk.String("quis"),
                    SegmentationID: sdk.String("vitae"),
                    SegmentationName: sdk.String("laborum"),
                    SegmentationType: sdk.String("animi"),
                    State: sdk.String("enim"),
                    StoreID: sdk.String("odit"),
                    Type: sdk.String("quo"),
                },
            },
            Kind: sdk.String("sequi"),
        },
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.DoubleclicksearchConversionInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversionList != nil {
        // handle response
    }
}
```

## DoubleclicksearchConversionUpdate

Updates a batch of conversions in DoubleClick Search.

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
    res, err := s.Conversion.DoubleclicksearchConversionUpdate(ctx, operations.DoubleclicksearchConversionUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConversionList: &shared.ConversionList{
            Conversion: []shared.Conversion{
                shared.Conversion{
                    AdGroupID: sdk.String("voluptatibus"),
                    AdID: sdk.String("vero"),
                    AdvertiserID: sdk.String("nihil"),
                    AgencyID: sdk.String("praesentium"),
                    AttributionModel: sdk.String("voluptatibus"),
                    CampaignID: sdk.String("ipsa"),
                    Channel: sdk.String("omnis"),
                    ClickID: sdk.String("voluptate"),
                    ConversionID: sdk.String("cum"),
                    ConversionModifiedTimestamp: sdk.String("perferendis"),
                    ConversionTimestamp: sdk.String("doloremque"),
                    CountMillis: sdk.String("reprehenderit"),
                    CriterionID: sdk.String("ut"),
                    CurrencyCode: sdk.String("maiores"),
                    CustomDimension: []shared.CustomDimension{
                        shared.CustomDimension{
                            Name: sdk.String("Miss Valerie Kshlerin"),
                            Value: sdk.String("accusamus"),
                        },
                    },
                    CustomMetric: []shared.CustomMetric{
                        shared.CustomMetric{
                            Name: sdk.String("Eric Emmerich"),
                            Value: sdk.Float64(5666.02),
                        },
                        shared.CustomMetric{
                            Name: sdk.String("Joel Lang"),
                            Value: sdk.Float64(939.4),
                        },
                    },
                    CustomerID: sdk.String("repudiandae"),
                    DeviceType: sdk.String("sint"),
                    DsConversionID: sdk.String("veritatis"),
                    EngineAccountID: sdk.String("itaque"),
                    FloodlightOrderID: sdk.String("incidunt"),
                    InventoryAccountID: sdk.String("enim"),
                    ProductCountry: sdk.String("consequatur"),
                    ProductGroupID: sdk.String("est"),
                    ProductID: sdk.String("quibusdam"),
                    ProductLanguage: sdk.String("explicabo"),
                    QuantityMillis: sdk.String("deserunt"),
                    RevenueMicros: sdk.String("distinctio"),
                    SegmentationID: sdk.String("quibusdam"),
                    SegmentationName: sdk.String("labore"),
                    SegmentationType: sdk.String("modi"),
                    State: sdk.String("qui"),
                    StoreID: sdk.String("aliquid"),
                    Type: sdk.String("cupiditate"),
                },
                shared.Conversion{
                    AdGroupID: sdk.String("quos"),
                    AdID: sdk.String("perferendis"),
                    AdvertiserID: sdk.String("magni"),
                    AgencyID: sdk.String("assumenda"),
                    AttributionModel: sdk.String("ipsam"),
                    CampaignID: sdk.String("alias"),
                    Channel: sdk.String("fugit"),
                    ClickID: sdk.String("dolorum"),
                    ConversionID: sdk.String("excepturi"),
                    ConversionModifiedTimestamp: sdk.String("tempora"),
                    ConversionTimestamp: sdk.String("facilis"),
                    CountMillis: sdk.String("tempore"),
                    CriterionID: sdk.String("labore"),
                    CurrencyCode: sdk.String("delectus"),
                    CustomDimension: []shared.CustomDimension{
                        shared.CustomDimension{
                            Name: sdk.String("Sheri Mayer"),
                            Value: sdk.String("necessitatibus"),
                        },
                        shared.CustomDimension{
                            Name: sdk.String("Luke Fadel"),
                            Value: sdk.String("dolorum"),
                        },
                    },
                    CustomMetric: []shared.CustomMetric{
                        shared.CustomMetric{
                            Name: sdk.String("Angel Wolff II"),
                            Value: sdk.Float64(7670.24),
                        },
                        shared.CustomMetric{
                            Name: sdk.String("Nathaniel Hyatt"),
                            Value: sdk.Float64(2497.96),
                        },
                    },
                    CustomerID: sdk.String("occaecati"),
                    DeviceType: sdk.String("enim"),
                    DsConversionID: sdk.String("accusamus"),
                    EngineAccountID: sdk.String("delectus"),
                    FloodlightOrderID: sdk.String("quidem"),
                    InventoryAccountID: sdk.String("provident"),
                    ProductCountry: sdk.String("nam"),
                    ProductGroupID: sdk.String("id"),
                    ProductID: sdk.String("blanditiis"),
                    ProductLanguage: sdk.String("deleniti"),
                    QuantityMillis: sdk.String("sapiente"),
                    RevenueMicros: sdk.String("amet"),
                    SegmentationID: sdk.String("deserunt"),
                    SegmentationName: sdk.String("nisi"),
                    SegmentationType: sdk.String("vel"),
                    State: sdk.String("natus"),
                    StoreID: sdk.String("omnis"),
                    Type: sdk.String("molestiae"),
                },
                shared.Conversion{
                    AdGroupID: sdk.String("perferendis"),
                    AdID: sdk.String("nihil"),
                    AdvertiserID: sdk.String("magnam"),
                    AgencyID: sdk.String("distinctio"),
                    AttributionModel: sdk.String("id"),
                    CampaignID: sdk.String("labore"),
                    Channel: sdk.String("labore"),
                    ClickID: sdk.String("suscipit"),
                    ConversionID: sdk.String("natus"),
                    ConversionModifiedTimestamp: sdk.String("nobis"),
                    ConversionTimestamp: sdk.String("eum"),
                    CountMillis: sdk.String("vero"),
                    CriterionID: sdk.String("aspernatur"),
                    CurrencyCode: sdk.String("architecto"),
                    CustomDimension: []shared.CustomDimension{
                        shared.CustomDimension{
                            Name: sdk.String("Miriam Hermann"),
                            Value: sdk.String("sint"),
                        },
                        shared.CustomDimension{
                            Name: sdk.String("Angie Wisozk"),
                            Value: sdk.String("eum"),
                        },
                    },
                    CustomMetric: []shared.CustomMetric{
                        shared.CustomMetric{
                            Name: sdk.String("Ms. Fred Hilll"),
                            Value: sdk.Float64(8919.24),
                        },
                    },
                    CustomerID: sdk.String("eius"),
                    DeviceType: sdk.String("maxime"),
                    DsConversionID: sdk.String("deleniti"),
                    EngineAccountID: sdk.String("facilis"),
                    FloodlightOrderID: sdk.String("in"),
                    InventoryAccountID: sdk.String("architecto"),
                    ProductCountry: sdk.String("architecto"),
                    ProductGroupID: sdk.String("repudiandae"),
                    ProductID: sdk.String("ullam"),
                    ProductLanguage: sdk.String("expedita"),
                    QuantityMillis: sdk.String("nihil"),
                    RevenueMicros: sdk.String("repellat"),
                    SegmentationID: sdk.String("quibusdam"),
                    SegmentationName: sdk.String("sed"),
                    SegmentationType: sdk.String("saepe"),
                    State: sdk.String("pariatur"),
                    StoreID: sdk.String("accusantium"),
                    Type: sdk.String("consequuntur"),
                },
                shared.Conversion{
                    AdGroupID: sdk.String("praesentium"),
                    AdID: sdk.String("natus"),
                    AdvertiserID: sdk.String("magni"),
                    AgencyID: sdk.String("sunt"),
                    AttributionModel: sdk.String("quo"),
                    CampaignID: sdk.String("illum"),
                    Channel: sdk.String("pariatur"),
                    ClickID: sdk.String("maxime"),
                    ConversionID: sdk.String("ea"),
                    ConversionModifiedTimestamp: sdk.String("excepturi"),
                    ConversionTimestamp: sdk.String("odit"),
                    CountMillis: sdk.String("ea"),
                    CriterionID: sdk.String("accusantium"),
                    CurrencyCode: sdk.String("ab"),
                    CustomDimension: []shared.CustomDimension{
                        shared.CustomDimension{
                            Name: sdk.String("Clyde Kling"),
                            Value: sdk.String("eaque"),
                        },
                        shared.CustomDimension{
                            Name: sdk.String("Dr. Herman Wolf"),
                            Value: sdk.String("aut"),
                        },
                        shared.CustomDimension{
                            Name: sdk.String("Lewis Welch"),
                            Value: sdk.String("dolores"),
                        },
                        shared.CustomDimension{
                            Name: sdk.String("Mrs. Deanna Kuhn"),
                            Value: sdk.String("eos"),
                        },
                    },
                    CustomMetric: []shared.CustomMetric{
                        shared.CustomMetric{
                            Name: sdk.String("Brooke Kohler"),
                            Value: sdk.Float64(3453.52),
                        },
                    },
                    CustomerID: sdk.String("hic"),
                    DeviceType: sdk.String("recusandae"),
                    DsConversionID: sdk.String("omnis"),
                    EngineAccountID: sdk.String("facilis"),
                    FloodlightOrderID: sdk.String("perspiciatis"),
                    InventoryAccountID: sdk.String("voluptatem"),
                    ProductCountry: sdk.String("porro"),
                    ProductGroupID: sdk.String("consequuntur"),
                    ProductID: sdk.String("blanditiis"),
                    ProductLanguage: sdk.String("error"),
                    QuantityMillis: sdk.String("eaque"),
                    RevenueMicros: sdk.String("occaecati"),
                    SegmentationID: sdk.String("rerum"),
                    SegmentationName: sdk.String("adipisci"),
                    SegmentationType: sdk.String("asperiores"),
                    State: sdk.String("earum"),
                    StoreID: sdk.String("modi"),
                    Type: sdk.String("iste"),
                },
            },
            Kind: sdk.String("dolorum"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.DoubleclicksearchConversionUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversionList != nil {
        // handle response
    }
}
```

## DoubleclicksearchConversionUpdateAvailability

Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

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
    res, err := s.Conversion.DoubleclicksearchConversionUpdateAvailability(ctx, operations.DoubleclicksearchConversionUpdateAvailabilityRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpdateAvailabilityRequest: &shared.UpdateAvailabilityRequest{
            Availabilities: []shared.Availability{
                shared.Availability{
                    AdvertiserID: sdk.String("dolor"),
                    AgencyID: sdk.String("qui"),
                    AvailabilityTimestamp: sdk.String("ipsum"),
                    CustomerID: sdk.String("hic"),
                    SegmentationID: sdk.String("excepturi"),
                    SegmentationName: sdk.String("cum"),
                    SegmentationType: sdk.String("voluptate"),
                },
            },
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("iure"),
    }, operations.DoubleclicksearchConversionUpdateAvailabilitySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAvailabilityResponse != nil {
        // handle response
    }
}
```
