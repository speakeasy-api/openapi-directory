# Channels

### Available Operations

* [DeleteOfferingsOfferingIDChannelsChannelIDLearners](#deleteofferingsofferingidchannelschannelidlearners) - Remove learners from a group channel
* [GetOfferingsOfferingIDAnalyticsChannelsChannelIDComments](#getofferingsofferingidanalyticschannelschannelidcomments) - Find comments
* [GetOfferingsOfferingIDAnalyticsChannelsChannelIDPosts](#getofferingsofferingidanalyticschannelschannelidposts) - Find posts
* [GetOfferingsOfferingIDAnalyticsChannelsChannelIDReplies](#getofferingsofferingidanalyticschannelschannelidreplies) - Find replies
* [GetOfferingsOfferingIDChannels](#getofferingsofferingidchannels) - Find channels
* [GetOfferingsOfferingIDChannelsChannelIDLearners](#getofferingsofferingidchannelschannelidlearners) - Find learners in a group channel
* [PatchOfferingsOfferingIDChannelsChannelID](#patchofferingsofferingidchannelschannelid) - Update channel
* [PostOfferingsOfferingIDChannels](#postofferingsofferingidchannels) - Add channel
* [PostOfferingsOfferingIDChannelsChannelIDLearners](#postofferingsofferingidchannelschannelidlearners) - Add learners to a group channel

## DeleteOfferingsOfferingIDChannelsChannelIDLearners

Removes a learner from the specified group channel.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Channels.DeleteOfferingsOfferingIDChannelsChannelIDLearners(ctx, operations.DeleteOfferingsOfferingIDChannelsChannelIDLearnersRequest{
        RequestBody: operations.DeleteOfferingsOfferingIDChannelsChannelIDLearnersRequestBody{
            Email: sdk.String("Maxie96@hotmail.com"),
        },
        ChannelID: "est",
        OfferingID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOfferingsOfferingIDAnalyticsChannelsChannelIDComments

Responds with a list of comments made in any posts in a specified channel, within an offering.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Channels.GetOfferingsOfferingIDAnalyticsChannelsChannelIDComments(ctx, operations.GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsRequest{
        ChannelID: "laborum",
        OfferingID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Comments != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDAnalyticsChannelsChannelIDPosts

Responds with a list of posts made in a specified channel, within an offering.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Channels.GetOfferingsOfferingIDAnalyticsChannelsChannelIDPosts(ctx, operations.GetOfferingsOfferingIDAnalyticsChannelsChannelIDPostsRequest{
        ChannelID: "dolorem",
        OfferingID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HTTPPosts != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDAnalyticsChannelsChannelIDReplies

Responds with a list of replies to comments in any posts in a specified channel, within an offering.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Channels.GetOfferingsOfferingIDAnalyticsChannelsChannelIDReplies(ctx, operations.GetOfferingsOfferingIDAnalyticsChannelsChannelIDRepliesRequest{
        ChannelID: "explicabo",
        OfferingID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Comments != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDChannels

Responds with a list of channels in an offering.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Channels.GetOfferingsOfferingIDChannels(ctx, operations.GetOfferingsOfferingIDChannelsRequest{
        OfferingID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelResponses != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDChannelsChannelIDLearners

Finds all learners in a specified group channel.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Channels.GetOfferingsOfferingIDChannelsChannelIDLearners(ctx, operations.GetOfferingsOfferingIDChannelsChannelIDLearnersRequest{
        ChannelID: "omnis",
        OfferingID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelResponse != nil {
        // handle response
    }
}
```

## PatchOfferingsOfferingIDChannelsChannelID

Updates a channel in an offering.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Channels.PatchOfferingsOfferingIDChannelsChannelID(ctx, operations.PatchOfferingsOfferingIDChannelsChannelIDRequest{
        Channel: shared.Channel{
            Group: &shared.ChannelGroup{
                AutoAssign: sdk.Bool(false),
            },
            GroupDiscussion: sdk.Bool(false),
            IsBroadcastOnly: sdk.Bool(false),
            PrivateSupport: sdk.Bool(false),
            Title: sdk.String("Mrs."),
        },
        ChannelID: "excepturi",
        OfferingID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelResponse != nil {
        // handle response
    }
}
```

## PostOfferingsOfferingIDChannels

Adds new channel to the specified offering.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Channels.PostOfferingsOfferingIDChannels(ctx, operations.PostOfferingsOfferingIDChannelsRequest{
        ChannelRequired: shared.ChannelRequired{
            IsBroadcastOnly: sdk.Bool(false),
            Title: "Ms.",
        },
        OfferingID: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelResponse != nil {
        // handle response
    }
}
```

## PostOfferingsOfferingIDChannelsChannelIDLearners

Adds a learner to a specified group channel.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Channels.PostOfferingsOfferingIDChannelsChannelIDLearners(ctx, operations.PostOfferingsOfferingIDChannelsChannelIDLearnersRequest{
        RequestBody: operations.PostOfferingsOfferingIDChannelsChannelIDLearnersRequestBody{
            Email: sdk.String("Veronica.Brakus@hotmail.com"),
        },
        ChannelID: "culpa",
        OfferingID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
