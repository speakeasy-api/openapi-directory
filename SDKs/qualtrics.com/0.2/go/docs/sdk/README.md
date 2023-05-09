# SDK

## Overview

Work with Qualtrics surveys, distributions and response events

### Available Operations

* [CreateContactInMailinglist](#createcontactinmailinglist) - Create contact in mailing list
* [GenerateDistributionLinks](#generatedistributionlinks) - Generate distribution links
* [GetDistributions](#getdistributions) - Get distributions for survey
* [GetEventSubscriptions](#geteventsubscriptions) - Get event subscriptions
* [GetSurvey](#getsurvey) - Get survey
* [Retrievedistributionlinks](#retrievedistributionlinks) - Retrieve distribution links
* [WebhookDelete](#webhookdelete) - Remove subscription to response event
* [WhenAResponseIsReceived](#whenaresponseisreceived) - Triggers when a response is submitted to a qualtrics survey

## CreateContactInMailinglist

Creates a contact in a given mailing list

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
    res, err := s.SDK.CreateContactInMailinglist(ctx, operations.CreateContactInMailinglistRequest{
        CreateContactInMailingList: shared.CreateContactInMailingList{
            Email: sdk.String("Gerda89@yahoo.com"),
            FirstName: sdk.String("Anahi"),
            LastName: sdk.String("Windler"),
            Unsubscribed: sdk.Bool(false),
        },
        DirectoryID: "tempora",
        MailingListID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GenerateDistributionLinks

Geneates links for individual distribution

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GenerateDistributionLinks(ctx, shared.CreateDistributionLinks{
        Action: sdk.String("molestiae"),
        Description: sdk.String("minus"),
        ExpirationDate: sdk.String("2021-01-21 00:00:00"),
        LinkType: sdk.String("placeat"),
        MailingListID: sdk.String("voluptatum"),
        SurveyID: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDistributions

Gets all distributions for a given survey

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
    res, err := s.SDK.GetDistributions(ctx, operations.GetDistributionsRequest{
        SurveyID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionsResponse != nil {
        // handle response
    }
}
```

## GetEventSubscriptions

Get event subscriptions

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
    res, err := s.SDK.GetEventSubscriptions(ctx, operations.GetEventSubscriptionsRequest{
        SubscriptionID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSubscriptionsResponse != nil {
        // handle response
    }
}
```

## GetSurvey

Gets a single Qualtrics survey speficied by its ID

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
    res, err := s.SDK.GetSurvey(ctx, operations.GetSurveyRequest{
        SurveyID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SurveyResponse != nil {
        // handle response
    }
}
```

## Retrievedistributionlinks

Retrieves all the individual links for a given distribution

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
    res, err := s.SDK.Retrievedistributionlinks(ctx, operations.RetrievedistributionlinksRequest{
        DistributionID: "temporibus",
        SurveyID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveDistributionLinksResponse != nil {
        // handle response
    }
}
```

## WebhookDelete

Remove event subscription

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.WebhookDelete(ctx, shared.SubscribeToEventBody{
        Encrypt: sdk.Bool(false),
        PublicationURL: "quis",
        Topics: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSubscriptionsResponse != nil {
        // handle response
    }
}
```

## WhenAResponseIsReceived

Subscribe to response event

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.WhenAResponseIsReceived(ctx, shared.SubscribeToEventBody{
        Encrypt: sdk.Bool(false),
        PublicationURL: "deserunt",
        Topics: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSubscriptionsResponse != nil {
        // handle response
    }
}
```
