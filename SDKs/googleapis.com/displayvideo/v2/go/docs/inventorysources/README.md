# InventorySources

### Available Operations

* [DisplayvideoInventorySourcesCreate](#displayvideoinventorysourcescreate) - Creates a new inventory source. Returns the newly created inventory source if successful.
* [DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessors](#displayvideoinventorysourceseditinventorysourcereadwriteaccessors) - Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.
* [DisplayvideoInventorySourcesGet](#displayvideoinventorysourcesget) - Gets an inventory source.
* [DisplayvideoInventorySourcesList](#displayvideoinventorysourceslist) - Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [DisplayvideoInventorySourcesPatch](#displayvideoinventorysourcespatch) - Updates an existing inventory source. Returns the updated inventory source if successful.

## DisplayvideoInventorySourcesCreate

Creates a new inventory source. Returns the newly created inventory source if successful.

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
    res, err := s.InventorySources.DisplayvideoInventorySourcesCreate(ctx, operations.DisplayvideoInventorySourcesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InventorySourceInput: &shared.InventorySourceInput{
            Commitment: shared.InventorySourceCommitmentEnumInventorySourceCommitmentGuaranteed.ToPointer(),
            CreativeConfigs: []shared.CreativeConfig{
                shared.CreativeConfig{
                    CreativeType: shared.CreativeConfigCreativeTypeEnumCreativeTypeStandard.ToPointer(),
                    DisplayCreativeConfig: &shared.InventorySourceDisplayCreativeConfig{
                        CreativeSize: &shared.Dimensions{
                            HeightPixels: sdk.Int(757130),
                            WidthPixels: sdk.Int(578678),
                        },
                    },
                    VideoCreativeConfig: &shared.InventorySourceVideoCreativeConfig{
                        Duration: sdk.String("doloribus"),
                    },
                },
                shared.CreativeConfig{
                    CreativeType: shared.CreativeConfigCreativeTypeEnumCreativeTypeNativeVideo.ToPointer(),
                    DisplayCreativeConfig: &shared.InventorySourceDisplayCreativeConfig{
                        CreativeSize: &shared.Dimensions{
                            HeightPixels: sdk.Int(526322),
                            WidthPixels: sdk.Int(953406),
                        },
                    },
                    VideoCreativeConfig: &shared.InventorySourceVideoCreativeConfig{
                        Duration: sdk.String("nihil"),
                    },
                },
            },
            DealID: sdk.String("veniam"),
            DeliveryMethod: shared.InventorySourceDeliveryMethodEnumInventorySourceDeliveryMethodUnspecified.ToPointer(),
            DisplayName: sdk.String("magni"),
            Exchange: shared.InventorySourceExchangeEnumExchangeTriton.ToPointer(),
            GuaranteedOrderID: sdk.String("voluptatibus"),
            InventorySourceType: shared.InventorySourceInventorySourceTypeEnumInventorySourceTypeAuctionPackage.ToPointer(),
            PublisherName: sdk.String("quod"),
            RateDetails: &shared.RateDetails{
                InventorySourceRateType: shared.RateDetailsInventorySourceRateTypeEnumInventorySourceRateTypeCpmFixed.ToPointer(),
                MinimumSpend: &shared.Money{
                    CurrencyCode: sdk.String("dolore"),
                    Nanos: sdk.Int(315024),
                    Units: sdk.String("alias"),
                },
                Rate: &shared.Money{
                    CurrencyCode: sdk.String("blanditiis"),
                    Nanos: sdk.Int(264204),
                    Units: sdk.String("illo"),
                },
                UnitsPurchased: sdk.String("a"),
            },
            ReadWriteAccessors: &shared.InventorySourceAccessors{
                Advertisers: &shared.InventorySourceAccessorsAdvertiserAccessors{
                    AdvertiserIds: []string{
                        "molestiae",
                    },
                },
                Partner: &shared.InventorySourceAccessorsPartnerAccessor{
                    PartnerID: sdk.String("autem"),
                },
            },
            Status: &shared.InventorySourceStatusInput{
                EntityPauseReason: sdk.String("dolore"),
                EntityStatus: shared.InventorySourceStatusEntityStatusEnumEntityStatusActive.ToPointer(),
            },
            SubSitePropertyID: sdk.String("nostrum"),
            TimeRange: &shared.TimeRange{
                EndTime: sdk.String("ex"),
                StartTime: sdk.String("amet"),
            },
        },
        AccessToken: sdk.String("voluptate"),
        AdvertiserID: sdk.String("molestias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("hic"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("odit"),
        PartnerID: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.DisplayvideoInventorySourcesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventorySource != nil {
        // handle response
    }
}
```

## DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessors

Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.

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
    res, err := s.InventorySources.DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessors(ctx, operations.DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EditInventorySourceReadWriteAccessorsRequest: &shared.EditInventorySourceReadWriteAccessorsRequest{
            AdvertisersUpdate: &shared.EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate{
                AddedAdvertisers: []string{
                    "aliquid",
                    "consequuntur",
                    "laboriosam",
                },
                RemovedAdvertisers: []string{
                    "reprehenderit",
                    "soluta",
                },
            },
            AssignPartner: sdk.Bool(false),
            PartnerID: sdk.String("ipsum"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("vel"),
        InventorySourceID: "distinctio",
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventorySourceAccessors != nil {
        // handle response
    }
}
```

## DisplayvideoInventorySourcesGet

Gets an inventory source.

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
    res, err := s.InventorySources.DisplayvideoInventorySourcesGet(ctx, operations.DisplayvideoInventorySourcesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("nostrum"),
        InventorySourceID: "minus",
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("quam"),
        PartnerID: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.DisplayvideoInventorySourcesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventorySource != nil {
        // handle response
    }
}
```

## DisplayvideoInventorySourcesList

Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.

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
    res, err := s.InventorySources.DisplayvideoInventorySourcesList(ctx, operations.DisplayvideoInventorySourcesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("velit"),
        AdvertiserID: sdk.String("quasi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("veniam"),
        Filter: sdk.String("quae"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("in"),
        OrderBy: sdk.String("libero"),
        PageSize: sdk.Int64(284694),
        PageToken: sdk.String("cumque"),
        PartnerID: sdk.String("quia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.DisplayvideoInventorySourcesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInventorySourcesResponse != nil {
        // handle response
    }
}
```

## DisplayvideoInventorySourcesPatch

Updates an existing inventory source. Returns the updated inventory source if successful.

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
    res, err := s.InventorySources.DisplayvideoInventorySourcesPatch(ctx, operations.DisplayvideoInventorySourcesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InventorySourceInput: &shared.InventorySourceInput{
            Commitment: shared.InventorySourceCommitmentEnumInventorySourceCommitmentUnspecified.ToPointer(),
            CreativeConfigs: []shared.CreativeConfig{
                shared.CreativeConfig{
                    CreativeType: shared.CreativeConfigCreativeTypeEnumCreativeTypeVideo.ToPointer(),
                    DisplayCreativeConfig: &shared.InventorySourceDisplayCreativeConfig{
                        CreativeSize: &shared.Dimensions{
                            HeightPixels: sdk.Int(632766),
                            WidthPixels: sdk.Int(705753),
                        },
                    },
                    VideoCreativeConfig: &shared.InventorySourceVideoCreativeConfig{
                        Duration: sdk.String("minus"),
                    },
                },
            },
            DealID: sdk.String("vero"),
            DeliveryMethod: shared.InventorySourceDeliveryMethodEnumInventorySourceDeliveryMethodTag.ToPointer(),
            DisplayName: sdk.String("omnis"),
            Exchange: shared.InventorySourceExchangeEnumExchangeAdmixer.ToPointer(),
            GuaranteedOrderID: sdk.String("earum"),
            InventorySourceType: shared.InventorySourceInventorySourceTypeEnumInventorySourceTypeAuctionPackage.ToPointer(),
            PublisherName: sdk.String("est"),
            RateDetails: &shared.RateDetails{
                InventorySourceRateType: shared.RateDetailsInventorySourceRateTypeEnumInventorySourceRateTypeCpd.ToPointer(),
                MinimumSpend: &shared.Money{
                    CurrencyCode: sdk.String("fugiat"),
                    Nanos: sdk.Int(862167),
                    Units: sdk.String("totam"),
                },
                Rate: &shared.Money{
                    CurrencyCode: sdk.String("praesentium"),
                    Nanos: sdk.Int(885721),
                    Units: sdk.String("esse"),
                },
                UnitsPurchased: sdk.String("vitae"),
            },
            ReadWriteAccessors: &shared.InventorySourceAccessors{
                Advertisers: &shared.InventorySourceAccessorsAdvertiserAccessors{
                    AdvertiserIds: []string{
                        "laboriosam",
                        "minus",
                        "labore",
                        "quas",
                    },
                },
                Partner: &shared.InventorySourceAccessorsPartnerAccessor{
                    PartnerID: sdk.String("sed"),
                },
            },
            Status: &shared.InventorySourceStatusInput{
                EntityPauseReason: sdk.String("veniam"),
                EntityStatus: shared.InventorySourceStatusEntityStatusEnumEntityStatusUnspecified.ToPointer(),
            },
            SubSitePropertyID: sdk.String("quibusdam"),
            TimeRange: &shared.TimeRange{
                EndTime: sdk.String("reprehenderit"),
                StartTime: sdk.String("voluptate"),
            },
        },
        AccessToken: sdk.String("reprehenderit"),
        AdvertiserID: sdk.String("et"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("hic"),
        InventorySourceID: "at",
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("in"),
        PartnerID: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UpdateMask: sdk.String("consequatur"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.DisplayvideoInventorySourcesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventorySource != nil {
        // handle response
    }
}
```
