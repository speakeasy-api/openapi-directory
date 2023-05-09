# Localinventory

### Available Operations

* [ContentLocalinventoryCustombatch](#contentlocalinventorycustombatch) - Updates local inventory for multiple products or stores in a single request.
* [ContentLocalinventoryInsert](#contentlocalinventoryinsert) - Updates the local inventory of a product in your Merchant Center account.

## ContentLocalinventoryCustombatch

Updates local inventory for multiple products or stores in a single request.

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
    res, err := s.Localinventory.ContentLocalinventoryCustombatch(ctx, operations.ContentLocalinventoryCustombatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LocalinventoryCustomBatchRequest: &shared.LocalinventoryCustomBatchRequest{
            Entries: []shared.LocalinventoryCustomBatchRequestEntry{
                shared.LocalinventoryCustomBatchRequestEntry{
                    BatchID: sdk.Int64(888616),
                    LocalInventory: &shared.LocalInventory{
                        Availability: sdk.String("placeat"),
                        CustomAttributes: []shared.CustomAttribute{
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Ms. Connie Gleason"),
                                Value: sdk.String("sequi"),
                            },
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Willie Wehner"),
                                Value: sdk.String("dolores"),
                            },
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Louise Tromp IV"),
                                Value: sdk.String("maiores"),
                            },
                        },
                        InstoreProductLocation: sdk.String("veritatis"),
                        Kind: sdk.String("quasi"),
                        PickupMethod: sdk.String("laboriosam"),
                        PickupSLA: sdk.String("pariatur"),
                        Price: &shared.Price{
                            Currency: sdk.String("libero"),
                            Value: sdk.String("excepturi"),
                        },
                        Quantity: sdk.Int64(578210),
                        SalePrice: &shared.Price{
                            Currency: sdk.String("nemo"),
                            Value: sdk.String("aliquam"),
                        },
                        SalePriceEffectiveDate: sdk.String("nostrum"),
                        StoreCode: sdk.String("doloribus"),
                    },
                    MerchantID: sdk.String("eligendi"),
                    Method: sdk.String("sint"),
                    ProductID: sdk.String("enim"),
                },
                shared.LocalinventoryCustomBatchRequestEntry{
                    BatchID: sdk.Int64(944950),
                    LocalInventory: &shared.LocalInventory{
                        Availability: sdk.String("animi"),
                        CustomAttributes: []shared.CustomAttribute{
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Darren Bechtelar V"),
                                Value: sdk.String("iste"),
                            },
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Dr. Marco Frami"),
                                Value: sdk.String("cum"),
                            },
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Mrs. Kerry Nolan"),
                                Value: sdk.String("libero"),
                            },
                        },
                        InstoreProductLocation: sdk.String("architecto"),
                        Kind: sdk.String("cupiditate"),
                        PickupMethod: sdk.String("molestiae"),
                        PickupSLA: sdk.String("eligendi"),
                        Price: &shared.Price{
                            Currency: sdk.String("possimus"),
                            Value: sdk.String("non"),
                        },
                        Quantity: sdk.Int64(298187),
                        SalePrice: &shared.Price{
                            Currency: sdk.String("itaque"),
                            Value: sdk.String("sed"),
                        },
                        SalePriceEffectiveDate: sdk.String("asperiores"),
                        StoreCode: sdk.String("veniam"),
                    },
                    MerchantID: sdk.String("consequuntur"),
                    Method: sdk.String("facere"),
                    ProductID: sdk.String("laudantium"),
                },
            },
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.ContentLocalinventoryCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocalinventoryCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentLocalinventoryInsert

Updates the local inventory of a product in your Merchant Center account.

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
    res, err := s.Localinventory.ContentLocalinventoryInsert(ctx, operations.ContentLocalinventoryInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LocalInventory: &shared.LocalInventory{
            Availability: sdk.String("quaerat"),
            CustomAttributes: []shared.CustomAttribute{
                shared.CustomAttribute{
                    GroupValues: []shared.CustomAttribute{
                        shared.CustomAttribute{},
                        shared.CustomAttribute{},
                        shared.CustomAttribute{},
                    },
                    Name: sdk.String("Regina Huel"),
                    Value: sdk.String("facere"),
                },
                shared.CustomAttribute{
                    GroupValues: []shared.CustomAttribute{
                        shared.CustomAttribute{},
                        shared.CustomAttribute{},
                        shared.CustomAttribute{},
                    },
                    Name: sdk.String("Erin Wiza"),
                    Value: sdk.String("debitis"),
                },
                shared.CustomAttribute{
                    GroupValues: []shared.CustomAttribute{
                        shared.CustomAttribute{},
                        shared.CustomAttribute{},
                    },
                    Name: sdk.String("Craig Kiehn"),
                    Value: sdk.String("iusto"),
                },
            },
            InstoreProductLocation: sdk.String("est"),
            Kind: sdk.String("rem"),
            PickupMethod: sdk.String("eligendi"),
            PickupSLA: sdk.String("fugiat"),
            Price: &shared.Price{
                Currency: sdk.String("unde"),
                Value: sdk.String("officiis"),
            },
            Quantity: sdk.Int64(495617),
            SalePrice: &shared.Price{
                Currency: sdk.String("dolor"),
                Value: sdk.String("dicta"),
            },
            SalePriceEffectiveDate: sdk.String("error"),
            StoreCode: sdk.String("porro"),
        },
        AccessToken: sdk.String("vitae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("ad"),
        MerchantID: "aspernatur",
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "delectus",
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("libero"),
    }, operations.ContentLocalinventoryInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocalInventory != nil {
        // handle response
    }
}
```
