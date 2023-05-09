# Regionalinventory

### Available Operations

* [ContentRegionalinventoryCustombatch](#contentregionalinventorycustombatch) - Updates regional inventory for multiple products or regions in a single request.
* [ContentRegionalinventoryInsert](#contentregionalinventoryinsert) - Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.

## ContentRegionalinventoryCustombatch

Updates regional inventory for multiple products or regions in a single request.

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
    res, err := s.Regionalinventory.ContentRegionalinventoryCustombatch(ctx, operations.ContentRegionalinventoryCustombatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RegionalinventoryCustomBatchRequest: &shared.RegionalinventoryCustomBatchRequest{
            Entries: []shared.RegionalinventoryCustomBatchRequestEntry{
                shared.RegionalinventoryCustomBatchRequestEntry{
                    BatchID: sdk.Int64(942840),
                    MerchantID: sdk.String("quis"),
                    Method: sdk.String("deleniti"),
                    ProductID: sdk.String("iusto"),
                    RegionalInventory: &shared.RegionalInventory{
                        Availability: sdk.String("quod"),
                        CustomAttributes: []shared.CustomAttribute{
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Audrey Schimmel"),
                                Value: sdk.String("ea"),
                            },
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Fannie Leannon Sr."),
                                Value: sdk.String("officiis"),
                            },
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Joanne Kirlin"),
                                Value: sdk.String("cumque"),
                            },
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Robyn Runte"),
                                Value: sdk.String("fugit"),
                            },
                        },
                        Kind: sdk.String("amet"),
                        Price: &shared.Price{
                            Currency: sdk.String("culpa"),
                            Value: sdk.String("facilis"),
                        },
                        RegionID: sdk.String("minus"),
                        SalePrice: &shared.Price{
                            Currency: sdk.String("vero"),
                            Value: sdk.String("impedit"),
                        },
                        SalePriceEffectiveDate: sdk.String("omnis"),
                    },
                },
                shared.RegionalinventoryCustomBatchRequestEntry{
                    BatchID: sdk.Int64(92279),
                    MerchantID: sdk.String("earum"),
                    Method: sdk.String("fuga"),
                    ProductID: sdk.String("est"),
                    RegionalInventory: &shared.RegionalInventory{
                        Availability: sdk.String("distinctio"),
                        CustomAttributes: []shared.CustomAttribute{
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Max Torp DVM"),
                                Value: sdk.String("laboriosam"),
                            },
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Tracey Cormier"),
                                Value: sdk.String("quibusdam"),
                            },
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Delores Bosco"),
                                Value: sdk.String("hic"),
                            },
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Mr. Arlene Gerlach"),
                                Value: sdk.String("accusamus"),
                            },
                        },
                        Kind: sdk.String("repellat"),
                        Price: &shared.Price{
                            Currency: sdk.String("voluptatum"),
                            Value: sdk.String("facere"),
                        },
                        RegionID: sdk.String("consequuntur"),
                        SalePrice: &shared.Price{
                            Currency: sdk.String("natus"),
                            Value: sdk.String("repellendus"),
                        },
                        SalePriceEffectiveDate: sdk.String("voluptates"),
                    },
                },
                shared.RegionalinventoryCustomBatchRequestEntry{
                    BatchID: sdk.Int64(71741),
                    MerchantID: sdk.String("facere"),
                    Method: sdk.String("fugiat"),
                    ProductID: sdk.String("ducimus"),
                    RegionalInventory: &shared.RegionalInventory{
                        Availability: sdk.String("aut"),
                        CustomAttributes: []shared.CustomAttribute{
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Pedro Stamm V"),
                                Value: sdk.String("quo"),
                            },
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Ora Olson"),
                                Value: sdk.String("odio"),
                            },
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Eugene Boyle"),
                                Value: sdk.String("illo"),
                            },
                        },
                        Kind: sdk.String("excepturi"),
                        Price: &shared.Price{
                            Currency: sdk.String("harum"),
                            Value: sdk.String("laborum"),
                        },
                        RegionID: sdk.String("a"),
                        SalePrice: &shared.Price{
                            Currency: sdk.String("repudiandae"),
                            Value: sdk.String("minus"),
                        },
                        SalePriceEffectiveDate: sdk.String("officia"),
                    },
                },
            },
        },
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("aliquam"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.ContentRegionalinventoryCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegionalinventoryCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentRegionalinventoryInsert

Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.

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
    res, err := s.Regionalinventory.ContentRegionalinventoryInsert(ctx, operations.ContentRegionalinventoryInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RegionalInventory: &shared.RegionalInventory{
            Availability: sdk.String("cum"),
            CustomAttributes: []shared.CustomAttribute{
                shared.CustomAttribute{
                    GroupValues: []shared.CustomAttribute{
                        shared.CustomAttribute{},
                        shared.CustomAttribute{},
                    },
                    Name: sdk.String("Toby Lubowitz"),
                    Value: sdk.String("ab"),
                },
                shared.CustomAttribute{
                    GroupValues: []shared.CustomAttribute{
                        shared.CustomAttribute{},
                        shared.CustomAttribute{},
                    },
                    Name: sdk.String("Mrs. Lorena Zieme"),
                    Value: sdk.String("quaerat"),
                },
            },
            Kind: sdk.String("a"),
            Price: &shared.Price{
                Currency: sdk.String("neque"),
                Value: sdk.String("nihil"),
            },
            RegionID: sdk.String("recusandae"),
            SalePrice: &shared.Price{
                Currency: sdk.String("numquam"),
                Value: sdk.String("mollitia"),
            },
            SalePriceEffectiveDate: sdk.String("mollitia"),
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("quis"),
        Key: sdk.String("enim"),
        MerchantID: "corporis",
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "ea",
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.ContentRegionalinventoryInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegionalInventory != nil {
        // handle response
    }
}
```
