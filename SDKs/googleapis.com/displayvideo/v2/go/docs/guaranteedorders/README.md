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
            DefaultCampaignID: sdk.String("deserunt"),
            DisplayName: sdk.String("eligendi"),
            Exchange: shared.GuaranteedOrderExchangeEnumExchangeYieldmo.ToPointer(),
            PublisherName: sdk.String("distinctio"),
            ReadAccessInherited: sdk.Bool(false),
            ReadAdvertiserIds: []string{
                "quas",
                "soluta",
            },
            ReadWriteAdvertiserID: sdk.String("cupiditate"),
            ReadWritePartnerID: sdk.String("unde"),
            Status: &shared.GuaranteedOrderStatusInput{
                EntityPauseReason: sdk.String("et"),
                EntityStatus: shared.GuaranteedOrderStatusEntityStatusEnumEntityStatusPaused.ToPointer(),
            },
        },
        AccessToken: sdk.String("unde"),
        AdvertiserID: sdk.String("sed"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facere"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("quaerat"),
        PartnerID: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("vel"),
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
                "odio",
                "numquam",
                "fugit",
                "inventore",
            },
            PartnerID: sdk.String("optio"),
            ReadAccessInherited: sdk.Bool(false),
            RemovedAdvertisers: []string{
                "recusandae",
                "commodi",
                "possimus",
            },
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("fugit"),
        GuaranteedOrderID: "a",
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("ratione"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        AdvertiserID: sdk.String("voluptas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("nihil"),
        GuaranteedOrderID: "fuga",
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("consequuntur"),
        PartnerID: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("delectus"),
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
        AccessToken: sdk.String("deleniti"),
        AdvertiserID: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("natus"),
        Filter: sdk.String("voluptatem"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("occaecati"),
        OrderBy: sdk.String("quasi"),
        PageSize: sdk.Int64(82915),
        PageToken: sdk.String("ex"),
        PartnerID: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("perferendis"),
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
            DefaultCampaignID: sdk.String("quas"),
            DisplayName: sdk.String("blanditiis"),
            Exchange: shared.GuaranteedOrderExchangeEnumExchangeSmartclip.ToPointer(),
            PublisherName: sdk.String("voluptates"),
            ReadAccessInherited: sdk.Bool(false),
            ReadAdvertiserIds: []string{
                "autem",
                "vel",
                "beatae",
                "quos",
            },
            ReadWriteAdvertiserID: sdk.String("consectetur"),
            ReadWritePartnerID: sdk.String("soluta"),
            Status: &shared.GuaranteedOrderStatusInput{
                EntityPauseReason: sdk.String("tenetur"),
                EntityStatus: shared.GuaranteedOrderStatusEntityStatusEnumEntityStatusScheduledForDeletion.ToPointer(),
            },
        },
        AccessToken: sdk.String("perspiciatis"),
        AdvertiserID: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("debitis"),
        GuaranteedOrderID: "quidem",
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("doloremque"),
        PartnerID: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UpdateMask: sdk.String("sunt"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("earum"),
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
