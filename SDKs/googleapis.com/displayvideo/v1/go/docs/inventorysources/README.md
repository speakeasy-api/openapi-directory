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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InventorySourceInput: &shared.InventorySourceInput{
            Commitment: shared.InventorySourceCommitmentEnumInventorySourceCommitmentGuaranteed.ToPointer(),
            CreativeConfigs: []shared.CreativeConfig{
                shared.CreativeConfig{
                    CreativeType: shared.CreativeConfigCreativeTypeEnumCreativeTypeExpandable.ToPointer(),
                    DisplayCreativeConfig: &shared.InventorySourceDisplayCreativeConfig{
                        CreativeSize: &shared.Dimensions{
                            HeightPixels: sdk.Int(336640),
                            WidthPixels: sdk.Int(413135),
                        },
                    },
                    VideoCreativeConfig: &shared.InventorySourceVideoCreativeConfig{
                        Duration: sdk.String("vel"),
                    },
                },
                shared.CreativeConfig{
                    CreativeType: shared.CreativeConfigCreativeTypeEnumCreativeTypeTemplatedAppInstallInterstitial.ToPointer(),
                    DisplayCreativeConfig: &shared.InventorySourceDisplayCreativeConfig{
                        CreativeSize: &shared.Dimensions{
                            HeightPixels: sdk.Int(397268),
                            WidthPixels: sdk.Int(44443),
                        },
                    },
                    VideoCreativeConfig: &shared.InventorySourceVideoCreativeConfig{
                        Duration: sdk.String("perspiciatis"),
                    },
                },
                shared.CreativeConfig{
                    CreativeType: shared.CreativeConfigCreativeTypeEnumCreativeTypeExpandable.ToPointer(),
                    DisplayCreativeConfig: &shared.InventorySourceDisplayCreativeConfig{
                        CreativeSize: &shared.Dimensions{
                            HeightPixels: sdk.Int(932057),
                            WidthPixels: sdk.Int(600185),
                        },
                    },
                    VideoCreativeConfig: &shared.InventorySourceVideoCreativeConfig{
                        Duration: sdk.String("cumque"),
                    },
                },
                shared.CreativeConfig{
                    CreativeType: shared.CreativeConfigCreativeTypeEnumCreativeTypeVideo.ToPointer(),
                    DisplayCreativeConfig: &shared.InventorySourceDisplayCreativeConfig{
                        CreativeSize: &shared.Dimensions{
                            HeightPixels: sdk.Int(833946),
                            WidthPixels: sdk.Int(837327),
                        },
                    },
                    VideoCreativeConfig: &shared.InventorySourceVideoCreativeConfig{
                        Duration: sdk.String("minus"),
                    },
                },
            },
            DealID: sdk.String("minima"),
            DeliveryMethod: shared.InventorySourceDeliveryMethodEnumInventorySourceDeliveryMethodTag.ToPointer(),
            DisplayName: sdk.String("beatae"),
            Exchange: shared.InventorySourceExchangeEnumExchangeAdswizz.ToPointer(),
            GuaranteedOrderID: sdk.String("veritatis"),
            InventorySourceType: shared.InventorySourceInventorySourceTypeEnumInventorySourceTypeAuctionPackage.ToPointer(),
            PublisherName: sdk.String("earum"),
            RateDetails: &shared.RateDetails{
                InventorySourceRateType: shared.RateDetailsInventorySourceRateTypeEnumInventorySourceRateTypeCpd.ToPointer(),
                MinimumSpend: &shared.Money{
                    CurrencyCode: sdk.String("dicta"),
                    Nanos: sdk.Int(32737),
                    Units: sdk.String("odit"),
                },
                Rate: &shared.Money{
                    CurrencyCode: sdk.String("aliquid"),
                    Nanos: sdk.Int(862666),
                    Units: sdk.String("enim"),
                },
                UnitsPurchased: sdk.String("numquam"),
            },
            ReadWriteAccessors: &shared.InventorySourceAccessors{
                Advertisers: &shared.InventorySourceAccessorsAdvertiserAccessors{
                    AdvertiserIds: []string{
                        "est",
                    },
                },
                Partner: &shared.InventorySourceAccessorsPartnerAccessor{
                    PartnerID: sdk.String("quaerat"),
                },
            },
            Status: &shared.InventorySourceStatusInput{
                EntityPauseReason: sdk.String("facere"),
                EntityStatus: shared.InventorySourceStatusEntityStatusEnumEntityStatusUnspecified.ToPointer(),
            },
            SubSitePropertyID: sdk.String("omnis"),
            TimeRange: &shared.TimeRange{
                EndTime: sdk.String("alias"),
                StartTime: sdk.String("sapiente"),
            },
        },
        AccessToken: sdk.String("officiis"),
        AdvertiserID: sdk.String("expedita"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("odio"),
        Key: sdk.String("quas"),
        OauthToken: sdk.String("ipsa"),
        PartnerID: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("eligendi"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EditInventorySourceReadWriteAccessorsRequest: &shared.EditInventorySourceReadWriteAccessorsRequest{
            AdvertisersUpdate: &shared.EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate{
                AddedAdvertisers: []string{
                    "distinctio",
                    "distinctio",
                    "assumenda",
                    "illum",
                },
                RemovedAdvertisers: []string{
                    "magnam",
                    "laudantium",
                    "tempora",
                },
            },
            AssignPartner: sdk.Bool(false),
            PartnerID: sdk.String("esse"),
        },
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("facilis"),
        InventorySourceID: "aliquam",
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("officiis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("ad"),
        InventorySourceID: "blanditiis",
        Key: sdk.String("porro"),
        OauthToken: sdk.String("labore"),
        PartnerID: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("ullam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("enim"),
        AdvertiserID: sdk.String("cupiditate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("fuga"),
        Filter: sdk.String("consectetur"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("aspernatur"),
        OrderBy: sdk.String("explicabo"),
        PageSize: sdk.Int64(380450),
        PageToken: sdk.String("ipsa"),
        PartnerID: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("qui"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InventorySourceInput: &shared.InventorySourceInput{
            Commitment: shared.InventorySourceCommitmentEnumInventorySourceCommitmentUnspecified.ToPointer(),
            CreativeConfigs: []shared.CreativeConfig{
                shared.CreativeConfig{
                    CreativeType: shared.CreativeConfigCreativeTypeEnumCreativeTypeNativeVideo.ToPointer(),
                    DisplayCreativeConfig: &shared.InventorySourceDisplayCreativeConfig{
                        CreativeSize: &shared.Dimensions{
                            HeightPixels: sdk.Int(451831),
                            WidthPixels: sdk.Int(537140),
                        },
                    },
                    VideoCreativeConfig: &shared.InventorySourceVideoCreativeConfig{
                        Duration: sdk.String("est"),
                    },
                },
                shared.CreativeConfig{
                    CreativeType: shared.CreativeConfigCreativeTypeEnumCreativeTypeStandard.ToPointer(),
                    DisplayCreativeConfig: &shared.InventorySourceDisplayCreativeConfig{
                        CreativeSize: &shared.Dimensions{
                            HeightPixels: sdk.Int(710483),
                            WidthPixels: sdk.Int(842921),
                        },
                    },
                    VideoCreativeConfig: &shared.InventorySourceVideoCreativeConfig{
                        Duration: sdk.String("quos"),
                    },
                },
                shared.CreativeConfig{
                    CreativeType: shared.CreativeConfigCreativeTypeEnumCreativeTypeTemplatedAppInstallVideo.ToPointer(),
                    DisplayCreativeConfig: &shared.InventorySourceDisplayCreativeConfig{
                        CreativeSize: &shared.Dimensions{
                            HeightPixels: sdk.Int(696678),
                            WidthPixels: sdk.Int(448601),
                        },
                    },
                    VideoCreativeConfig: &shared.InventorySourceVideoCreativeConfig{
                        Duration: sdk.String("culpa"),
                    },
                },
                shared.CreativeConfig{
                    CreativeType: shared.CreativeConfigCreativeTypeEnumCreativeTypeUnspecified.ToPointer(),
                    DisplayCreativeConfig: &shared.InventorySourceDisplayCreativeConfig{
                        CreativeSize: &shared.Dimensions{
                            HeightPixels: sdk.Int(681336),
                            WidthPixels: sdk.Int(117546),
                        },
                    },
                    VideoCreativeConfig: &shared.InventorySourceVideoCreativeConfig{
                        Duration: sdk.String("architecto"),
                    },
                },
            },
            DealID: sdk.String("suscipit"),
            DeliveryMethod: shared.InventorySourceDeliveryMethodEnumInventorySourceDeliveryMethodTag.ToPointer(),
            DisplayName: sdk.String("officiis"),
            Exchange: shared.InventorySourceExchangeEnumExchangeRevenuemax.ToPointer(),
            GuaranteedOrderID: sdk.String("fugit"),
            InventorySourceType: shared.InventorySourceInventorySourceTypeEnumInventorySourceTypeUnspecified.ToPointer(),
            PublisherName: sdk.String("possimus"),
            RateDetails: &shared.RateDetails{
                InventorySourceRateType: shared.RateDetailsInventorySourceRateTypeEnumInventorySourceRateTypeCpmFixed.ToPointer(),
                MinimumSpend: &shared.Money{
                    CurrencyCode: sdk.String("aut"),
                    Nanos: sdk.Int(620534),
                    Units: sdk.String("esse"),
                },
                Rate: &shared.Money{
                    CurrencyCode: sdk.String("delectus"),
                    Nanos: sdk.Int(644397),
                    Units: sdk.String("ratione"),
                },
                UnitsPurchased: sdk.String("ipsa"),
            },
            ReadWriteAccessors: &shared.InventorySourceAccessors{
                Advertisers: &shared.InventorySourceAccessorsAdvertiserAccessors{
                    AdvertiserIds: []string{
                        "iste",
                        "deserunt",
                        "hic",
                        "ducimus",
                    },
                },
                Partner: &shared.InventorySourceAccessorsPartnerAccessor{
                    PartnerID: sdk.String("consequuntur"),
                },
            },
            Status: &shared.InventorySourceStatusInput{
                EntityPauseReason: sdk.String("ipsam"),
                EntityStatus: shared.InventorySourceStatusEntityStatusEnumEntityStatusPaused.ToPointer(),
            },
            SubSitePropertyID: sdk.String("quia"),
            TimeRange: &shared.TimeRange{
                EndTime: sdk.String("omnis"),
                StartTime: sdk.String("dicta"),
            },
        },
        AccessToken: sdk.String("qui"),
        AdvertiserID: sdk.String("explicabo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("consequatur"),
        InventorySourceID: "fugiat",
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("velit"),
        PartnerID: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UpdateMask: sdk.String("deserunt"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("distinctio"),
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
