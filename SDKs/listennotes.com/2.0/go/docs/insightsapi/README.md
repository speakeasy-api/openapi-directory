# InsightsAPI

## Overview

Endpoints to get insights of podcasts, e.g., audience demographics

### Available Operations

* [GetPodcastAudience](#getpodcastaudience) - Fetch audience demographics for a podcast
* [GetPodcastsByDomainName](#getpodcastsbydomainname) - Fetch podcasts by a publisher's domain name

## GetPodcastAudience

Fetch audience demographics for a podcast - 1) directly measured on the Listen Notes platform; 2) only supports audience breakdown by regions for now; 3) not every podcast has data.

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
    res, err := s.InsightsAPI.GetPodcastAudience(ctx, operations.GetPodcastAudienceRequest{
        XListenAPIKey: "ipsam",
        ID: "02a94bb4-f63c-4969-a9a3-efa77dfb14cd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PodcastAudienceResponse != nil {
        // handle response
    }
}
```

## GetPodcastsByDomainName

Fetch podcasts by a publisher's domain name, e.g., nytimes.com, wondery.com, npr.org...
Each request will return up to 10 podcasts. You can use the `page` parameter to paginate.


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
    res, err := s.InsightsAPI.GetPodcastsByDomainName(ctx, operations.GetPodcastsByDomainNameRequest{
        XListenAPIKey: "ea",
        DomainName: "aliquid",
        Page: sdk.Int64(675439),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PodcastDomainResponse != nil {
        // handle response
    }
}
```
