# Subscriptions

## Overview

Operations to manage event subscriptions.

### Available Operations

* [DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchive](#deletewebhooksv3appidsubscriptionssubscriptionidarchive)
* [GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByID](#getwebhooksv3appidsubscriptionssubscriptionidgetbyid)
* [GetWebhooksV3AppIDSubscriptionsGetAll](#getwebhooksv3appidsubscriptionsgetall)
* [PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdate](#patchwebhooksv3appidsubscriptionssubscriptionidupdate)
* [PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatch](#postwebhooksv3appidsubscriptionsbatchupdateupdatebatch)
* [PostWebhooksV3AppIDSubscriptionsCreate](#postwebhooksv3appidsubscriptionscreate)

## DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchive

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Subscriptions.DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchive(ctx, operations.DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveRequest{
        AppID: 847252,
        SubscriptionID: 423655,
    }, operations.DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Subscriptions.GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByID(ctx, operations.GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDRequest{
        AppID: 623564,
        SubscriptionID: 645894,
    }, operations.GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionResponse != nil {
        // handle response
    }
}
```

## GetWebhooksV3AppIDSubscriptionsGetAll

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Subscriptions.GetWebhooksV3AppIDSubscriptionsGetAll(ctx, operations.GetWebhooksV3AppIDSubscriptionsGetAllRequest{
        AppID: 384382,
    }, operations.GetWebhooksV3AppIDSubscriptionsGetAllSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionListResponse != nil {
        // handle response
    }
}
```

## PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdate

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
    res, err := s.Subscriptions.PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdate(ctx, operations.PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateRequest{
        SubscriptionPatchRequest: shared.SubscriptionPatchRequest{
            Active: sdk.Bool(false),
        },
        AppID: 437587,
        SubscriptionID: 297534,
    }, operations.PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionResponse != nil {
        // handle response
    }
}
```

## PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatch

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
    res, err := s.Subscriptions.PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatch(ctx, operations.PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchRequest{
        BatchInputSubscriptionBatchUpdateRequest: shared.BatchInputSubscriptionBatchUpdateRequest{
            Inputs: []shared.SubscriptionBatchUpdateRequest{
                shared.SubscriptionBatchUpdateRequest{
                    Active: false,
                    ID: 56713,
                },
                shared.SubscriptionBatchUpdateRequest{
                    Active: false,
                    ID: 963663,
                },
                shared.SubscriptionBatchUpdateRequest{
                    Active: false,
                    ID: 272656,
                },
                shared.SubscriptionBatchUpdateRequest{
                    Active: false,
                    ID: 383441,
                },
            },
        },
        AppID: 477665,
    }, operations.PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchResponseSubscriptionResponse != nil {
        // handle response
    }
}
```

## PostWebhooksV3AppIDSubscriptionsCreate

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
    res, err := s.Subscriptions.PostWebhooksV3AppIDSubscriptionsCreate(ctx, operations.PostWebhooksV3AppIDSubscriptionsCreateRequest{
        SubscriptionCreateRequest: shared.SubscriptionCreateRequest{
            Active: sdk.Bool(false),
            EventType: shared.SubscriptionCreateRequestEventTypeEnumDealRestore,
            PropertyName: sdk.String("placeat"),
        },
        AppID: 528895,
    }, operations.PostWebhooksV3AppIDSubscriptionsCreateSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionResponse != nil {
        // handle response
    }
}
```
