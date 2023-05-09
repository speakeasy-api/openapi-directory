# GuaranteedOrders

### Available Operations

* [DisplayvideoGuaranteedOrdersCreate](#displayvideoguaranteedorderscreate) - Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
* [DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors](#displayvideoguaranteedorderseditguaranteedorderreadaccessors) - Edits read advertisers of a guaranteed order.
* [DisplayvideoGuaranteedOrdersGet](#displayvideoguaranteedordersget) - Gets a guaranteed order.
* [DisplayvideoGuaranteedOrdersList](#displayvideoguaranteedorderslist) - Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [DisplayvideoGuaranteedOrdersPatch](#displayvideoguaranteedorderspatch) - Updates an existing guaranteed order. Returns the updated guaranteed order if successful.

## DisplayvideoGuaranteedOrdersCreate

Creates a new guaranteed order. Returns the newly created guaranteed order if successful.

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
    res, err := s.GuaranteedOrders.DisplayvideoGuaranteedOrdersCreate(ctx, operations.DisplayvideoGuaranteedOrdersCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GuaranteedOrderInput: &shared.GuaranteedOrderInput{
            DefaultCampaignID: sdk.String("est"),
            DisplayName: sdk.String("amet"),
            Exchange: shared.GuaranteedOrderExchangeEnumExchangeAdmixer.ToPointer(),
            PublisherName: sdk.String("error"),
            ReadAccessInherited: sdk.Bool(false),
            ReadAdvertiserIds: []string{
                "numquam",
                "rerum",
                "dolorum",
                "quibusdam",
            },
            ReadWriteAdvertiserID: sdk.String("earum"),
            ReadWritePartnerID: sdk.String("excepturi"),
            Status: &shared.GuaranteedOrderStatusInput{
                EntityPauseReason: sdk.String("numquam"),
                EntityStatus: shared.GuaranteedOrderStatusEntityStatusEnumEntityStatusArchived.ToPointer(),
            },
        },
        AccessToken: sdk.String("impedit"),
        AdvertiserID: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("facilis"),
        PartnerID: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.DisplayvideoGuaranteedOrdersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GuaranteedOrder != nil {
        // handle response
    }
}
```

## DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors

Edits read advertisers of a guaranteed order.

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
    res, err := s.GuaranteedOrders.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors(ctx, operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EditGuaranteedOrderReadAccessorsRequest: &shared.EditGuaranteedOrderReadAccessorsRequest{
            AddedAdvertisers: []string{
                "eum",
                "vel",
            },
            PartnerID: sdk.String("ad"),
            ReadAccessInherited: sdk.Bool(false),
            RemovedAdvertisers: []string{
                "illo",
                "suscipit",
                "quibusdam",
            },
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("atque"),
        GuaranteedOrderID: "voluptates",
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditGuaranteedOrderReadAccessorsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoGuaranteedOrdersGet

Gets a guaranteed order.

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
    res, err := s.GuaranteedOrders.DisplayvideoGuaranteedOrdersGet(ctx, operations.DisplayvideoGuaranteedOrdersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("modi"),
        AdvertiserID: sdk.String("cumque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("ipsum"),
        GuaranteedOrderID: "accusamus",
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("quasi"),
        PartnerID: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.DisplayvideoGuaranteedOrdersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GuaranteedOrder != nil {
        // handle response
    }
}
```

## DisplayvideoGuaranteedOrdersList

Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.

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
    res, err := s.GuaranteedOrders.DisplayvideoGuaranteedOrdersList(ctx, operations.DisplayvideoGuaranteedOrdersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        AdvertiserID: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("quam"),
        Filter: sdk.String("similique"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("saepe"),
        OrderBy: sdk.String("facere"),
        PageSize: sdk.Int64(748723),
        PageToken: sdk.String("at"),
        PartnerID: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.DisplayvideoGuaranteedOrdersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGuaranteedOrdersResponse != nil {
        // handle response
    }
}
```

## DisplayvideoGuaranteedOrdersPatch

Updates an existing guaranteed order. Returns the updated guaranteed order if successful.

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
    res, err := s.GuaranteedOrders.DisplayvideoGuaranteedOrdersPatch(ctx, operations.DisplayvideoGuaranteedOrdersPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GuaranteedOrderInput: &shared.GuaranteedOrderInput{
            DefaultCampaignID: sdk.String("numquam"),
            DisplayName: sdk.String("corrupti"),
            Exchange: shared.GuaranteedOrderExchangeEnumExchangeUnited.ToPointer(),
            PublisherName: sdk.String("dolore"),
            ReadAccessInherited: sdk.Bool(false),
            ReadAdvertiserIds: []string{
                "reiciendis",
                "iste",
            },
            ReadWriteAdvertiserID: sdk.String("amet"),
            ReadWritePartnerID: sdk.String("occaecati"),
            Status: &shared.GuaranteedOrderStatusInput{
                EntityPauseReason: sdk.String("aut"),
                EntityStatus: shared.GuaranteedOrderStatusEntityStatusEnumEntityStatusPaused.ToPointer(),
            },
        },
        AccessToken: sdk.String("minima"),
        AdvertiserID: sdk.String("quos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("voluptatem"),
        GuaranteedOrderID: "provident",
        Key: sdk.String("quas"),
        OauthToken: sdk.String("ipsum"),
        PartnerID: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UpdateMask: sdk.String("facilis"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("error"),
    }, operations.DisplayvideoGuaranteedOrdersPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GuaranteedOrder != nil {
        // handle response
    }
}
```
