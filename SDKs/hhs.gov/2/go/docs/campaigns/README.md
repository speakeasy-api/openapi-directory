# Campaigns

## Overview

Information about campaigns

### Available Operations

* [GetResourcesCampaignsJSON](#getresourcescampaignsjson) - Get Campaigns
* [GetResourcesCampaignsIDJSON](#getresourcescampaignsidjson) - Get Campaign by ID
* [GetResourcesCampaignsIDMediaJSON](#getresourcescampaignsidmediajson) - Get MediaItems by Campaign ID
* [GetResourcesCampaignsIDSyndicateFormat](#getresourcescampaignsidsyndicateformat) - Get MediaItems for Campaign

## GetResourcesCampaignsJSON

Media Listings for a specific campaign

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
    res, err := s.Campaigns.GetResourcesCampaignsJSON(ctx, operations.GetResourcesCampaignsJSONRequest{
        Max: sdk.Int(844266),
        Offset: sdk.Int(602763),
        Sort: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignWrapped != nil {
        // handle response
    }
}
```

## GetResourcesCampaignsIDJSON

Information about a specific campaign

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
    res, err := s.Campaigns.GetResourcesCampaignsIDJSON(ctx, operations.GetResourcesCampaignsIDJSONRequest{
        ID: 544883,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignWrapped != nil {
        // handle response
    }
}
```

## GetResourcesCampaignsIDMediaJSON

Campaign Listings

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
    res, err := s.Campaigns.GetResourcesCampaignsIDMediaJSON(ctx, operations.GetResourcesCampaignsIDMediaJSONRequest{
        ID: 847252,
        Max: sdk.Int(423655),
        Offset: sdk.Int(623564),
        Sort: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaItemWrapped != nil {
        // handle response
    }
}
```

## GetResourcesCampaignsIDSyndicateFormat

MediaItem

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
    res, err := s.Campaigns.GetResourcesCampaignsIDSyndicateFormat(ctx, operations.GetResourcesCampaignsIDSyndicateFormatRequest{
        DisplayMethod: sdk.String("suscipit"),
        Format: "iure",
        ID: 297534,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyndicateMarshallerWrapped != nil {
        // handle response
    }
}
```
