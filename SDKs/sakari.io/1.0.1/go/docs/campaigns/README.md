# Campaigns

## Overview

Define reusable message campaigns with a predefined contact list/filter, template and schedule

### Available Operations

* [CampaignsCreate](#campaignscreate) - Create campaign
* [CampaignsFetch](#campaignsfetch) - Fetch campaign by ID
* [CampaignsFetchAll](#campaignsfetchall) - Fetch campaigns
* [CampaignsRemove](#campaignsremove) - Deletes a campaign
* [CampaignsUpdate](#campaignsupdate) - Updates a campaign

## CampaignsCreate

Create campaign

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
    res, err := s.Campaigns.CampaignsCreate(ctx, operations.CampaignsCreateRequest{
        CampaignRequest: &shared.CampaignRequest{
            Filters: &shared.CampaignRequestFilters{
                Attributes: []string{
                    "provident",
                    "distinctio",
                    "quibusdam",
                },
                Contacts: []string{
                    "nulla",
                    "corrupti",
                    "illum",
                },
                Tags: []string{
                    "error",
                    "deserunt",
                },
            },
            Template: sdk.String("suscipit"),
            Trigger: &shared.CampaignRequestTrigger{
                Code: shared.CampaignRequestTriggerCodeEnumS.ToPointer(),
            },
        },
        AccountID: "magnam",
    }, operations.CampaignsCreateSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignResponse != nil {
        // handle response
    }
}
```

## CampaignsFetch

Fetch campaign by ID

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
    res, err := s.Campaigns.CampaignsFetch(ctx, operations.CampaignsFetchRequest{
        AccountID: "debitis",
        CampaignID: "ipsa",
    }, operations.CampaignsFetchSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignResponse != nil {
        // handle response
    }
}
```

## CampaignsFetchAll

Fetch campaigns

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
    res, err := s.Campaigns.CampaignsFetchAll(ctx, operations.CampaignsFetchAllRequest{
        AccountID: "delectus",
        Limit: sdk.Int64(272656),
        Name: sdk.String("Minnie Schiller"),
        Offset: sdk.Int64(479977),
    }, operations.CampaignsFetchAllSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignsResponse != nil {
        // handle response
    }
}
```

## CampaignsRemove

Deletes a campaign

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
    res, err := s.Campaigns.CampaignsRemove(ctx, operations.CampaignsRemoveRequest{
        AccountID: "excepturi",
        CampaignID: "nisi",
    }, operations.CampaignsRemoveSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignsRemove200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CampaignsUpdate

Updates a campaign

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
    res, err := s.Campaigns.CampaignsUpdate(ctx, operations.CampaignsUpdateRequest{
        AccountID: "recusandae",
        CampaignID: "temporibus",
    }, operations.CampaignsUpdateSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignResponse != nil {
        // handle response
    }
}
```
