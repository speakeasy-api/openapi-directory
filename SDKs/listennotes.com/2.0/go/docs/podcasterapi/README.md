# PodcasterAPI

## Overview

Endpoints to improve the podcast database

### Available Operations

* [DeletePodcastByID](#deletepodcastbyid) - Request to delete a podcast
* [SubmitPodcast](#submitpodcast) - Submit a podcast to Listen Notes database

## DeletePodcastByID

Podcast hosting services can use this endpoint to streamline the process of podcast deletion on behave of their users (podcasters). We will review the deletion request within 12 hours. If the podcast is already deleted, the "status" field in the response will be "deleted". Otherwise, the status field will be "in review". If you want to get a notification once the podcast is deleted, you can configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks


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
    res, err := s.PodcasterAPI.DeletePodcastByID(ctx, operations.DeletePodcastByIDRequest{
        XListenAPIKey: "provident",
        ID: "890afa56-3e25-416f-a4c8-b711e5b7fd2e",
        Reason: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePodcastResponse != nil {
        // handle response
    }
}
```

## SubmitPodcast

Podcast hosting services can use this endpoint to help your users directly submit a new podcast to Listen Notes database. If the podcast doesn't exist in the database, "status" in the response will be "in review", and we'll review it within 12 hours. If the podcast exists, "status" in the response will be "found". If this submission is rejected, "status" in the response will be "rejected". You can use `POST /podcasts` to check if multiple podcasts exist in the database. If you want to get a notification once the podcast is accepted, you can either specify the "email" parameter or configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks


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
    res, err := s.PodcasterAPI.SubmitPodcast(ctx, operations.SubmitPodcastRequest{
        SubmitPodcastForm: shared.SubmitPodcastForm{
            Email: sdk.String("Carroll.Lang@gmail.com"),
            Rss: "sunt",
        },
        XListenAPIKey: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubmitPodcastResponse != nil {
        // handle response
    }
}
```
