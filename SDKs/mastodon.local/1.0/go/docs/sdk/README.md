# SDK

### Available Operations

* [DeleteAPIV1AnnouncementsIDReactionsName](#deleteapiv1announcementsidreactionsname) - Undo a react emoji to an announcement.
* [DeleteAPIV1ConversationsID](#deleteapiv1conversationsid) - Remove converstation
* [DeleteAPIV1DomainBlocks](#deleteapiv1domainblocks) - Remove a domain block, if it exists in the user's array of blocked domains.
* [DeleteAPIV1FeaturedTagsID](#deleteapiv1featuredtagsid) - Unfeature a tag
* [DeleteAPIV1FiltersID](#deleteapiv1filtersid) - Delete a filter.
* [DeleteAPIV1Lists](#deleteapiv1lists) - Delete a list
* [DeleteAPIV1ListsIDAccounts](#deleteapiv1listsidaccounts) - Remove accounts from the given list.
* [DeleteAPIV1PushSubscription](#deleteapiv1pushsubscription) - Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
* [DeleteAPIV1ScheduledStatusesID](#deleteapiv1scheduledstatusesid) - Cancel a scheduled status
* [DeleteAPIV1StatusesID](#deleteapiv1statusesid)
* [DeleteAPIV1SuggestionsID](#deleteapiv1suggestionsid) - Delete user suggestion
* [GetAPIOembed](#getapioembed) - OEmbed as JSON
* [GetAPIProofs](#getapiproofs) - View identity proof
* [GetAPIV1AdminAccounts](#getapiv1adminaccounts) - View accounts matching certain criteria for filtering, up to 100 at a time. Pagination may be done with the HTTP Link header in the response.
* [GetAPIV1AdminAccountsID](#getapiv1adminaccountsid) - View admin-level information about the given account.
* [GetAPIV1AdminReports](#getapiv1adminreports) - View all reports. Pagination may be done with HTTP Link header in the response.
* [GetAPIV1AdminReportsID](#getapiv1adminreportsid) - View information about the report with the given ID.
* [GetAPIV1Announcements](#getapiv1announcements) - See all currently active announcements set by admins.
* [GetAPIV1Blocks](#getapiv1blocks) - Get blocked users.
* [GetAPIV1Bookmarks](#getapiv1bookmarks) - Statuses the user has bookmarked.
* [GetAPIV1Conversations](#getapiv1conversations) - Show conversation.
* [GetAPIV1CustomEmojis](#getapiv1customemojis) - Returns custom emojis that are available on the server.
* [GetAPIV1Directory](#getapiv1directory) - List accounts visible in the directory.
* [GetAPIV1DomainBlocks](#getapiv1domainblocks) - View domains the user has blocked.
* [GetAPIV1Endorsements](#getapiv1endorsements) - Accounts that the user is currently featuring on their profile.
* [GetAPIV1Favourites](#getapiv1favourites) - Statuses the user has favourited.
* [GetAPIV1FeaturedTags](#getapiv1featuredtags) - View your featured tags.
* [GetAPIV1FeaturedTagsSuggestions](#getapiv1featuredtagssuggestions) - Shows your 10 most-used tags, with usage history for the past week.
* [GetAPIV1Filters](#getapiv1filters)
* [GetAPIV1FiltersID](#getapiv1filtersid) - Get one filter.
* [GetAPIV1FollowRequests](#getapiv1followrequests) - Pending Follows
* [GetAPIV1Instance](#getapiv1instance) - Information about the server.
* [GetAPIV1InstanceActivity](#getapiv1instanceactivity) - Instance activity over the last 3 months, binned weekly.
* [GetAPIV1InstancePeers](#getapiv1instancepeers) - Information about the server.
* [GetAPIV1Lists](#getapiv1lists) - Fetch all lists that the user owns.
* [GetAPIV1ListsID](#getapiv1listsid) - Remove converstation
* [GetAPIV1ListsIDAccounts](#getapiv1listsidaccounts) - View accounts in List
* [GetAPIV1MediaID](#getapiv1mediaid) - Get an attachement.
* [GetAPIV1Mutes](#getapiv1mutes) - Accounts the user has muted.
* [GetAPIV1Notifications](#getapiv1notifications) - Notifications concerning the user. This API returns Link headers containing links to the next/previous page. However, the links can also be constructed dynamically using query params and id values.
* [GetAPIV1NotificationsID](#getapiv1notificationsid) - View information about a notification with a given ID.
* [GetAPIV1PollsID](#getapiv1pollsid) - View a poll.
* [GetAPIV1Preferences](#getapiv1preferences) - Shows your 10 most-used tags, with usage history for the past week.
* [GetAPIV1PushSubscription](#getapiv1pushsubscription) - View the PushSubscription currently associated with this access token.
* [GetAPIV1ScheduledStatuses](#getapiv1scheduledstatuses) - View scheduled statuses
* [GetAPIV1ScheduledStatusesID](#getapiv1scheduledstatusesid) - View a single scheduled status
* [GetAPIV1StatusesID](#getapiv1statusesid)
* [GetAPIV1StatusesIDContext](#getapiv1statusesidcontext)
* [GetAPIV1StatusesIDFavouritedBy](#getapiv1statusesidfavouritedby) - View who favourited a given status.
* [GetAPIV1StatusesIDRebloggedBy](#getapiv1statusesidrebloggedby) - View who boosted a given status.
* [GetAPIV1Suggestions](#getapiv1suggestions) - Accounts the user has had past positive interactions with, but is not yet following.
* [GetAPIV1TimelinesHome](#getapiv1timelineshome) - View statuses from followed users.
* [GetAPIV1TimelinesListListID](#getapiv1timelineslistlistid) - View statuses in the given list timeline.
* [GetAPIV1TimelinesPublic](#getapiv1timelinespublic) - Public timeline
* [GetAPIV1TimelinesTagHashtag](#getapiv1timelinestaghashtag) - View public statuses containing the given hashtag.
* [GetAPIV1Trends](#getapiv1trends) - Tags that are being used more frequently within the past week.
* [GetAPIV2Search](#getapiv2search) - Search results
* [PostAPIV1AdminAccountsIDAction](#postapiv1adminaccountsidaction) - Perform an action against an account and log this action in the moderation history.
* [PostAPIV1AdminAccountsIDApprove](#postapiv1adminaccountsidapprove) - Approve the given local account if it is currently pending approval.
* [PostAPIV1AdminAccountsIDEnable](#postapiv1adminaccountsidenable) - Re-enable a local account whose login is currently disabled.
* [PostAPIV1AdminAccountsIDReject](#postapiv1adminaccountsidreject) - Reject the given local account if it is currently pending approval.
* [PostAPIV1AdminAccountsIDUnsilence](#postapiv1adminaccountsidunsilence) - Unsilence a currently silenced account.
* [PostAPIV1AdminAccountsIDUnsuspend](#postapiv1adminaccountsidunsuspend) - Unsuspend a currently suspended account.
* [PostAPIV1AdminReportsIDAssignToSelf](#postapiv1adminreportsidassigntoself) - Claim the handling of this report to yourself.
* [PostAPIV1AdminReportsIDReopen](#postapiv1adminreportsidreopen) - Mark a report as resolved with no further action taken.
* [PostAPIV1AdminReportsIDResolve](#postapiv1adminreportsidresolve) - Mark a report as resolved with no further action taken.
* [PostAPIV1AdminReportsIDUnassign](#postapiv1adminreportsidunassign) - Unassign a report so that someone else can claim it.
* [PostAPIV1AnnouncementsIDDismiss](#postapiv1announcementsiddismiss) - Allows a user to mark the announcement as read.
* [PostAPIV1ConversationsIDRead](#postapiv1conversationsidread) - Remove converstation
* [PostAPIV1DomainBlocks](#postapiv1domainblocks) - "Block a domain to:
- hide all public posts from it
- hide all notifications from it
- remove all followers from it
- prevent following new users from it (but does not remove existing follows)"

* [PostAPIV1FeaturedTags](#postapiv1featuredtags) - Create a feature a tag.
* [PostAPIV1Filters](#postapiv1filters)
* [PostAPIV1FollowRequestsIDAuthorize](#postapiv1followrequestsidauthorize) - Accept Follow
* [PostAPIV1FollowRequestsIDReject](#postapiv1followrequestsidreject) - Accept Follow
* [PostAPIV1Lists](#postapiv1lists) - Create a new list.
* [PostAPIV1ListsIDAccounts](#postapiv1listsidaccounts) - Add accounts to the given list. Note that the user must be following these accounts.
* [PostAPIV1Markers](#postapiv1markers) - Get saved timeline position
* [PostAPIV1Media](#postapiv1media) - Creates an attachment to be used with a new status.
* [PostAPIV1MediaID](#postapiv1mediaid) - Update an Attachment, before it is attached to a status and posted.
* [PostAPIV1NotificationsClear](#postapiv1notificationsclear) - Clear all notifications from the server.
* [PostAPIV1NotificationsIDDismiss](#postapiv1notificationsiddismiss) - Clear a single notification from the server.
* [PostAPIV1PollsID](#postapiv1pollsid) - Vote on a poll.
* [PostAPIV1PushSubscription](#postapiv1pushsubscription) - Add a Web Push API subscription to receive notifications. Each access token can have one push subscription. If you create a new subscription, the old subscription is deleted.
* [PostAPIV1Reports](#postapiv1reports) - File a report.
* [PostAPIV1Statuses](#postapiv1statuses)
* [PostAPIV1StatusesIDBookmark](#postapiv1statusesidbookmark) - Privately bookmark a status.
* [PostAPIV1StatusesIDFavourite](#postapiv1statusesidfavourite) - Add a status to your favourites list.
* [PostAPIV1StatusesIDMute](#postapiv1statusesidmute) - Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.
* [PostAPIV1StatusesIDPin](#postapiv1statusesidpin) - Feature one of your own public statuses at the top of your profile.
* [PostAPIV1StatusesIDReblog](#postapiv1statusesidreblog) - Reshare a status.
* [PostAPIV1StatusesIDUnbookmark](#postapiv1statusesidunbookmark) - Remove a status from your private bookmarks.
* [PostAPIV1StatusesIDUnfavourite](#postapiv1statusesidunfavourite) - Remove a status from your favourites list.
* [PostAPIV1StatusesIDUnmute](#postapiv1statusesidunmute) - Status's conversation unmuted, or was already unmuted
* [PostAPIV1StatusesIDUnpin](#postapiv1statusesidunpin) - Unfeature a status from the top of your profile.
* [PostAPIV1StatusesIDUnreblog](#postapiv1statusesidunreblog) - Undo a reshare of a status.
* [PutAPIV1AnnouncementsIDReactionsName](#putapiv1announcementsidreactionsname) - Allows a user to mark the announcement as read.
* [PutAPIV1FiltersID](#putapiv1filtersid) - Update a filter.
* [PutAPIV1Lists](#putapiv1lists) - Change the title of a list, or which replies to show.
* [PutAPIV1PushSubscription](#putapiv1pushsubscription) - Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
* [PutAPIV1ScheduledStatusesID](#putapiv1scheduledstatusesid) - View a single scheduled status

## DeleteAPIV1AnnouncementsIDReactionsName

Undo a react emoji to an announcement.

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
    res, err := s.SDK.DeleteAPIV1AnnouncementsIDReactionsName(ctx, operations.DeleteAPIV1AnnouncementsIDReactionsNameRequest{
        ID: "c2ddf7cc-78ca-41ba-928f-c816742cb739",
        Name: "Dorothy Hane",
    }, operations.DeleteAPIV1AnnouncementsIDReactionsNameSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIV1AnnouncementsIDReactionsName200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteAPIV1ConversationsID

Remove converstation

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
    res, err := s.SDK.DeleteAPIV1ConversationsID(ctx, operations.DeleteAPIV1ConversationsIDRequest{
        ID: "9396fea7-596e-4b10-baaa-2352c5955907",
    }, operations.DeleteAPIV1ConversationsIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIV1ConversationsID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteAPIV1DomainBlocks

Remove a domain block, if it exists in the user's array of blocked domains.

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
    res, err := s.SDK.DeleteAPIV1DomainBlocks(ctx, operations.DeleteAPIV1DomainBlocksRequest{
        Domain: "culpa",
    }, operations.DeleteAPIV1DomainBlocksSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIV1DomainBlocks200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteAPIV1FeaturedTagsID

Unfeature a tag

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
    res, err := s.SDK.DeleteAPIV1FeaturedTagsID(ctx, operations.DeleteAPIV1FeaturedTagsIDRequest{
        ID: "ff1a3a2f-a946-4773-9251-aa52c3f5ad01",
    }, operations.DeleteAPIV1FeaturedTagsIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIV1FeaturedTagsID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteAPIV1FiltersID

Delete a filter.

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
    res, err := s.SDK.DeleteAPIV1FiltersID(ctx, operations.DeleteAPIV1FiltersIDRequest{
        ID: "9da1ffe7-8f09-47b0-874f-15471b5e6e13",
    }, operations.DeleteAPIV1FiltersIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAPIV1Lists

Delete a list

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
    res, err := s.SDK.DeleteAPIV1Lists(ctx, operations.DeleteAPIV1ListsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIV1Lists200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteAPIV1ListsIDAccounts

Remove accounts from the given list.

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
    res, err := s.SDK.DeleteAPIV1ListsIDAccounts(ctx, operations.DeleteAPIV1ListsIDAccountsRequest{
        AccountIds: []string{
            "molestias",
            "excepturi",
            "pariatur",
        },
        ID: "488e1e91-e450-4ad2-abd4-4269802d502a",
    }, operations.DeleteAPIV1ListsIDAccountsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIV1ListsIDAccounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteAPIV1PushSubscription

Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.

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
    res, err := s.SDK.DeleteAPIV1PushSubscription(ctx, operations.DeleteAPIV1PushSubscriptionSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIV1PushSubscription200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteAPIV1ScheduledStatusesID

Cancel a scheduled status

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
    res, err := s.SDK.DeleteAPIV1ScheduledStatusesID(ctx, operations.DeleteAPIV1ScheduledStatusesIDRequest{
        ID: "94bb4f63-c969-4e9a-befa-77dfb14cd66a",
    }, operations.DeleteAPIV1ScheduledStatusesIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIV1ScheduledStatusesID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteAPIV1StatusesID

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
    res, err := s.SDK.DeleteAPIV1StatusesID(ctx, operations.DeleteAPIV1StatusesIDRequest{
        ID: "e395efb9-ba88-4f3a-a699-7074ba4469b6",
    }, operations.DeleteAPIV1StatusesIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## DeleteAPIV1SuggestionsID

Delete user suggestion

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
    res, err := s.SDK.DeleteAPIV1SuggestionsID(ctx, operations.DeleteAPIV1SuggestionsIDRequest{
        ID: "e2141959-890a-4fa5-a3e2-516fe4c8b711",
    }, operations.DeleteAPIV1SuggestionsIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIV1SuggestionsID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAPIOembed

OEmbed as JSON

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
    res, err := s.SDK.GetAPIOembed(ctx, operations.GetAPIOembedRequest{
        Maxheight: sdk.Int64(919483),
        Maxwidth: sdk.Int64(352312),
        URL: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Card != nil {
        // handle response
    }
}
```

## GetAPIProofs

View identity proof

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
    res, err := s.SDK.GetAPIProofs(ctx, operations.GetAPIProofsRequest{
        Provider: sdk.String("nihil"),
        Username: sdk.String("Zoila90"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityProof != nil {
        // handle response
    }
}
```

## GetAPIV1AdminAccounts

View accounts matching certain criteria for filtering, up to 100 at a time. Pagination may be done with the HTTP Link header in the response.

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
    res, err := s.SDK.GetAPIV1AdminAccounts(ctx, operations.GetAPIV1AdminAccountsRequest{
        Active: sdk.Bool(false),
        ByDomain: sdk.String("pariatur"),
        Disabled: sdk.Bool(false),
        DisplayName: sdk.String("accusantium"),
        Email: sdk.String("Johan12@gmail.com"),
        IP: sdk.String("quo"),
        Local: sdk.Bool(false),
        Pending: sdk.Bool(false),
        Remote: sdk.Bool(false),
        Silenced: sdk.Bool(false),
        Staff: sdk.Bool(false),
        Suspended: sdk.Bool(false),
        Username: sdk.String("Rosendo.Streich56"),
    }, operations.GetAPIV1AdminAccountsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminAccounts != nil {
        // handle response
    }
}
```

## GetAPIV1AdminAccountsID

View admin-level information about the given account.

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
    res, err := s.SDK.GetAPIV1AdminAccountsID(ctx, operations.GetAPIV1AdminAccountsIDRequest{
        ID: "2601fb57-6b0d-45f0-930c-5fbb25870532",
    }, operations.GetAPIV1AdminAccountsIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminAccount != nil {
        // handle response
    }
}
```

## GetAPIV1AdminReports

View all reports. Pagination may be done with HTTP Link header in the response.

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
    res, err := s.SDK.GetAPIV1AdminReports(ctx, operations.GetAPIV1AdminReportsRequest{
        AccountID: sdk.String("perferendis"),
        Resolved: sdk.Bool(false),
        TargetAccountID: sdk.String("dolores"),
    }, operations.GetAPIV1AdminReportsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminReports != nil {
        // handle response
    }
}
```

## GetAPIV1AdminReportsID

View information about the report with the given ID.

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
    res, err := s.SDK.GetAPIV1AdminReportsID(ctx, operations.GetAPIV1AdminReportsIDRequest{
        ID: "c73d5fe9-b90c-4289-89b3-fe49a8d9cbf4",
    }, operations.GetAPIV1AdminReportsIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminReport != nil {
        // handle response
    }
}
```

## GetAPIV1Announcements

See all currently active announcements set by admins.

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
    res, err := s.SDK.GetAPIV1Announcements(ctx, operations.GetAPIV1AnnouncementsRequest{
        WithDismissed: sdk.Bool(false),
    }, operations.GetAPIV1AnnouncementsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Announcements != nil {
        // handle response
    }
}
```

## GetAPIV1Blocks

Get blocked users.

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
    res, err := s.SDK.GetAPIV1Blocks(ctx, operations.GetAPIV1BlocksRequest{
        Limit: sdk.Int64(554242),
        MaxID: sdk.String("aliquid"),
        SinceID: sdk.String("dolorem"),
    }, operations.GetAPIV1BlocksSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```

## GetAPIV1Bookmarks

Statuses the user has bookmarked.

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
    res, err := s.SDK.GetAPIV1Bookmarks(ctx, operations.GetAPIV1BookmarksRequest{
        Limit: sdk.Int64(209843),
        MaxID: sdk.String("dolor"),
        MinID: sdk.String("qui"),
        SinceID: sdk.String("ipsum"),
    }, operations.GetAPIV1BookmarksSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Statuses != nil {
        // handle response
    }
}
```

## GetAPIV1Conversations

Show conversation.

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
    res, err := s.SDK.GetAPIV1Conversations(ctx, operations.GetAPIV1ConversationsRequest{
        Limit: sdk.Int64(944373),
        MaxID: sdk.String("excepturi"),
        MinID: sdk.String("cum"),
        SinceID: sdk.String("voluptate"),
    }, operations.GetAPIV1ConversationsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Conversations != nil {
        // handle response
    }
}
```

## GetAPIV1CustomEmojis

Returns custom emojis that are available on the server.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAPIV1CustomEmojis(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Emojis != nil {
        // handle response
    }
}
```

## GetAPIV1Directory

List accounts visible in the directory.

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
    res, err := s.SDK.GetAPIV1Directory(ctx, operations.GetAPIV1DirectoryRequest{
        Limit: sdk.Int64(490459),
        Local: sdk.Bool(false),
        Offset: sdk.Int64(970237),
        Order: operations.GetAPIV1DirectoryOrderEnumActive.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```

## GetAPIV1DomainBlocks

View domains the user has blocked.

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
    res, err := s.SDK.GetAPIV1DomainBlocks(ctx, operations.GetAPIV1DomainBlocksRequest{
        Limit: sdk.Int64(680545),
        MaxID: sdk.String("numquam"),
        SinceID: sdk.String("veritatis"),
    }, operations.GetAPIV1DomainBlocksSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIV1DomainBlocks200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetAPIV1Endorsements

Accounts that the user is currently featuring on their profile.

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
    res, err := s.SDK.GetAPIV1Endorsements(ctx, operations.GetAPIV1EndorsementsRequest{
        Limit: sdk.Int64(58029),
        MaxID: sdk.String("ipsa"),
        SinceID: sdk.String("iure"),
    }, operations.GetAPIV1EndorsementsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```

## GetAPIV1Favourites

Statuses the user has favourited.

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
    res, err := s.SDK.GetAPIV1Favourites(ctx, operations.GetAPIV1FavouritesRequest{
        Limit: sdk.String("odio"),
        MaxID: sdk.String("quaerat"),
        MinID: sdk.String("accusamus"),
    }, operations.GetAPIV1FavouritesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Statuses != nil {
        // handle response
    }
}
```

## GetAPIV1FeaturedTags

View your featured tags.

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
    res, err := s.SDK.GetAPIV1FeaturedTags(ctx, operations.GetAPIV1FeaturedTagsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FeaturedTags != nil {
        // handle response
    }
}
```

## GetAPIV1FeaturedTagsSuggestions

Shows your 10 most-used tags, with usage history for the past week.

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
    res, err := s.SDK.GetAPIV1FeaturedTagsSuggestions(ctx, operations.GetAPIV1FeaturedTagsSuggestionsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FeaturedTags != nil {
        // handle response
    }
}
```

## GetAPIV1Filters

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
    res, err := s.SDK.GetAPIV1Filters(ctx, operations.GetAPIV1FiltersSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Filters != nil {
        // handle response
    }
}
```

## GetAPIV1FiltersID

Get one filter.

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
    res, err := s.SDK.GetAPIV1FiltersID(ctx, operations.GetAPIV1FiltersIDRequest{
        ID: "bf69280d-1ba7-47a8-9ebf-737ae4203ce5",
    }, operations.GetAPIV1FiltersIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Filter != nil {
        // handle response
    }
}
```

## GetAPIV1FollowRequests

Pending Follows

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
    res, err := s.SDK.GetAPIV1FollowRequests(ctx, operations.GetAPIV1FollowRequestsRequest{
        Limit: sdk.Int64(904425),
    }, operations.GetAPIV1FollowRequestsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```

## GetAPIV1Instance

Information about the server.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAPIV1Instance(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Instance != nil {
        // handle response
    }
}
```

## GetAPIV1InstanceActivity

Instance activity over the last 3 months, binned weekly.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAPIV1InstanceActivity(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Activities != nil {
        // handle response
    }
}
```

## GetAPIV1InstancePeers

Information about the server.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAPIV1InstancePeers(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIV1InstancePeers200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetAPIV1Lists

Fetch all lists that the user owns.

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
    res, err := s.SDK.GetAPIV1Lists(ctx, operations.GetAPIV1ListsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Lists != nil {
        // handle response
    }
}
```

## GetAPIV1ListsID

Remove converstation

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
    res, err := s.SDK.GetAPIV1ListsID(ctx, operations.GetAPIV1ListsIDRequest{
        ID: "6a95d8a0-d446-4ce2-af7a-73cf3be453f8",
    }, operations.GetAPIV1ListsIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.List != nil {
        // handle response
    }
}
```

## GetAPIV1ListsIDAccounts

View accounts in List

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
    res, err := s.SDK.GetAPIV1ListsIDAccounts(ctx, operations.GetAPIV1ListsIDAccountsRequest{
        ID: "70b326b5-a734-429c-9b1a-8422bb679d23",
        Limit: sdk.Int64(144847),
        MaxID: sdk.String("magni"),
        SinceID: sdk.String("odio"),
    }, operations.GetAPIV1ListsIDAccountsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```

## GetAPIV1MediaID

Get an attachement.

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
    res, err := s.SDK.GetAPIV1MediaID(ctx, operations.GetAPIV1MediaIDRequest{
        ID: "15bf0cbb-1e31-4b8b-90f3-443a1108e0ad",
    }, operations.GetAPIV1MediaIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attachment != nil {
        // handle response
    }
}
```

## GetAPIV1Mutes

Accounts the user has muted.

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
    res, err := s.SDK.GetAPIV1Mutes(ctx, operations.GetAPIV1MutesRequest{
        Limit: sdk.String("porro"),
        MaxID: sdk.String("doloribus"),
        SinceID: sdk.String("ut"),
    }, operations.GetAPIV1MutesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```

## GetAPIV1Notifications

Notifications concerning the user. This API returns Link headers containing links to the next/previous page. However, the links can also be constructed dynamically using query params and id values.

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
    res, err := s.SDK.GetAPIV1Notifications(ctx, operations.GetAPIV1NotificationsRequest{
        AccountID: sdk.String("facilis"),
        ExcludeTypes: []string{
            "qui",
            "quae",
            "laudantium",
        },
        Limit: sdk.Int64(485628),
        MaxID: sdk.String("occaecati"),
        MinID: sdk.String("voluptatibus"),
        SinceID: sdk.String("quisquam"),
    }, operations.GetAPIV1NotificationsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Notifications != nil {
        // handle response
    }
}
```

## GetAPIV1NotificationsID

View information about a notification with a given ID.

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
    res, err := s.SDK.GetAPIV1NotificationsID(ctx, operations.GetAPIV1NotificationsIDRequest{
        ID: "e953f73e-f7fb-4c7a-bd74-dd39c0f5d2cf",
    }, operations.GetAPIV1NotificationsIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Notification != nil {
        // handle response
    }
}
```

## GetAPIV1PollsID

View a poll.

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
    res, err := s.SDK.GetAPIV1PollsID(ctx, operations.GetAPIV1PollsIDRequest{
        ID: "f7c70a45-626d-4436-813f-16d9f5fce6c5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Poll != nil {
        // handle response
    }
}
```

## GetAPIV1Preferences

Shows your 10 most-used tags, with usage history for the past week.

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
    res, err := s.SDK.GetAPIV1Preferences(ctx, operations.GetAPIV1PreferencesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Preferences != nil {
        // handle response
    }
}
```

## GetAPIV1PushSubscription

View the PushSubscription currently associated with this access token.

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
    res, err := s.SDK.GetAPIV1PushSubscription(ctx, operations.GetAPIV1PushSubscriptionSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PushSubscription != nil {
        // handle response
    }
}
```

## GetAPIV1ScheduledStatuses

View scheduled statuses

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
    res, err := s.SDK.GetAPIV1ScheduledStatuses(ctx, operations.GetAPIV1ScheduledStatusesRequest{
        Limit: sdk.Int64(333145),
        MaxID: sdk.String("aliquid"),
        MinID: sdk.String("inventore"),
        SinceID: sdk.String("magnam"),
    }, operations.GetAPIV1ScheduledStatusesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduledStatuses != nil {
        // handle response
    }
}
```

## GetAPIV1ScheduledStatusesID

View a single scheduled status

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
    res, err := s.SDK.GetAPIV1ScheduledStatusesID(ctx, operations.GetAPIV1ScheduledStatusesIDRequest{
        ID: "6c3e250f-b008-4c42-a141-aac366c8dd6b",
    }, operations.GetAPIV1ScheduledStatusesIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduledStatus != nil {
        // handle response
    }
}
```

## GetAPIV1StatusesID

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
    res, err := s.SDK.GetAPIV1StatusesID(ctx, operations.GetAPIV1StatusesIDRequest{
        ID: "14429074-7477-48a7-bd46-6d28c10ab3cd",
    }, operations.GetAPIV1StatusesIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## GetAPIV1StatusesIDContext

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
    res, err := s.SDK.GetAPIV1StatusesIDContext(ctx, operations.GetAPIV1StatusesIDContextRequest{
        ID: "ca425190-4e52-43c7-a0bc-7178e4796f2a",
    }, operations.GetAPIV1StatusesIDContextSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Context != nil {
        // handle response
    }
}
```

## GetAPIV1StatusesIDFavouritedBy

View who favourited a given status.

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
    res, err := s.SDK.GetAPIV1StatusesIDFavouritedBy(ctx, operations.GetAPIV1StatusesIDFavouritedByRequest{
        ID: "70c68828-2aa4-4825-a2f2-22e9817ee17c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## GetAPIV1StatusesIDRebloggedBy

View who boosted a given status.

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
    res, err := s.SDK.GetAPIV1StatusesIDRebloggedBy(ctx, operations.GetAPIV1StatusesIDRebloggedByRequest{
        ID: "be61e6b7-b95b-4c0a-b3c2-0c4f3789fd87",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## GetAPIV1Suggestions

Accounts the user has had past positive interactions with, but is not yet following.

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
    res, err := s.SDK.GetAPIV1Suggestions(ctx, operations.GetAPIV1SuggestionsRequest{
        Limit: sdk.Int64(97468),
    }, operations.GetAPIV1SuggestionsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## GetAPIV1TimelinesHome

View statuses from followed users.

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
    res, err := s.SDK.GetAPIV1TimelinesHome(ctx, operations.GetAPIV1TimelinesHomeRequest{
        Limit: sdk.Int64(951875),
        Local: sdk.Bool(false),
        MaxID: sdk.String("error"),
        MinID: sdk.String("sint"),
        SinceID: sdk.String("pariatur"),
    }, operations.GetAPIV1TimelinesHomeSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Statuses != nil {
        // handle response
    }
}
```

## GetAPIV1TimelinesListListID

View statuses in the given list timeline.

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
    res, err := s.SDK.GetAPIV1TimelinesListListID(ctx, operations.GetAPIV1TimelinesListListIDRequest{
        Limit: sdk.Int64(820767),
        ListID: "quia",
        MaxID: sdk.String("eveniet"),
        MinID: sdk.String("asperiores"),
        SinceID: sdk.String("facere"),
    }, operations.GetAPIV1TimelinesListListIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Statuses != nil {
        // handle response
    }
}
```

## GetAPIV1TimelinesPublic

Public timeline

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
    res, err := s.SDK.GetAPIV1TimelinesPublic(ctx, operations.GetAPIV1TimelinesPublicRequest{
        Limit: sdk.Int64(85001),
        Local: sdk.Bool(false),
        MaxID: sdk.String("consequuntur"),
        MinID: sdk.String("quasi"),
        OnlyMedia: sdk.Bool(false),
        Remote: sdk.Bool(false),
        SinceID: sdk.String("similique"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Statuses != nil {
        // handle response
    }
}
```

## GetAPIV1TimelinesTagHashtag

View public statuses containing the given hashtag.

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
    res, err := s.SDK.GetAPIV1TimelinesTagHashtag(ctx, operations.GetAPIV1TimelinesTagHashtagRequest{
        Hashtag: "culpa",
        Limit: sdk.Int64(398434),
        Local: sdk.Bool(false),
        MaxID: sdk.String("tenetur"),
        MinID: sdk.String("quae"),
        OnlyMedia: sdk.Bool(false),
        Remote: sdk.Bool(false),
        SinceID: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Statuses != nil {
        // handle response
    }
}
```

## GetAPIV1Trends

Tags that are being used more frequently within the past week.

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
    res, err := s.SDK.GetAPIV1Trends(ctx, operations.GetAPIV1TrendsRequest{
        Limit: sdk.Int64(424032),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tags != nil {
        // handle response
    }
}
```

## GetAPIV2Search

Search results

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
    res, err := s.SDK.GetAPIV2Search(ctx, operations.GetAPIV2SearchRequest{
        AccountID: sdk.String("in"),
        ExcludeUnreviewed: sdk.Bool(false),
        Following: sdk.Bool(false),
        Limit: sdk.Int64(258684),
        MaxID: sdk.String("libero"),
        MinID: sdk.String("illum"),
        Offset: sdk.Int64(742238),
        Q: "accusantium",
        Resolve: sdk.String("aliquam"),
        Type: operations.GetAPIV2SearchTypeEnumStatuses.ToPointer(),
    }, operations.GetAPIV2SearchSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIV2Search200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAPIV1AdminAccountsIDAction

Perform an action against an account and log this action in the moderation history.

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
    res, err := s.SDK.PostAPIV1AdminAccountsIDAction(ctx, operations.PostAPIV1AdminAccountsIDActionRequest{
        RequestBody: &operations.PostAPIV1AdminAccountsIDActionRequestBody{
            ReportID: sdk.String("dicta"),
            SendEmailNotification: sdk.Bool(false),
            Text: sdk.String("ullam"),
            Type: operations.PostAPIV1AdminAccountsIDActionRequestBodyTypeEnumDisable.ToPointer(),
            WarningPresetID: sdk.String("ullam"),
        },
        ID: "6082d68e-a19f-41d1-b051-339d08086a18",
    }, operations.PostAPIV1AdminAccountsIDActionSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAPIV1AdminAccountsIDApprove

Approve the given local account if it is currently pending approval.

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
    res, err := s.SDK.PostAPIV1AdminAccountsIDApprove(ctx, operations.PostAPIV1AdminAccountsIDApproveRequest{
        ID: "40394c26-071f-493f-9f06-42dac7af515c",
    }, operations.PostAPIV1AdminAccountsIDApproveSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAPIV1AdminAccountsIDEnable

Re-enable a local account whose login is currently disabled.

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
    res, err := s.SDK.PostAPIV1AdminAccountsIDEnable(ctx, operations.PostAPIV1AdminAccountsIDEnableRequest{
        ID: "c413aa63-aae8-4d67-864d-bb675fd5e60b",
    }, operations.PostAPIV1AdminAccountsIDEnableSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAPIV1AdminAccountsIDReject

Reject the given local account if it is currently pending approval.

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
    res, err := s.SDK.PostAPIV1AdminAccountsIDReject(ctx, operations.PostAPIV1AdminAccountsIDRejectRequest{
        ID: "375ed4f6-fbee-441f-b331-7fe35b60eb1e",
    }, operations.PostAPIV1AdminAccountsIDRejectSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAPIV1AdminAccountsIDUnsilence

Unsilence a currently silenced account.

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
    res, err := s.SDK.PostAPIV1AdminAccountsIDUnsilence(ctx, operations.PostAPIV1AdminAccountsIDUnsilenceRequest{
        ID: "a426555b-a3c2-4874-8ed5-3b88f3a8d8f5",
    }, operations.PostAPIV1AdminAccountsIDUnsilenceSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAPIV1AdminAccountsIDUnsuspend

Unsuspend a currently suspended account.

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
    res, err := s.SDK.PostAPIV1AdminAccountsIDUnsuspend(ctx, operations.PostAPIV1AdminAccountsIDUnsuspendRequest{
        ID: "c0b2f2fb-7b19-44a2-b6b2-6916fe1f08f4",
    }, operations.PostAPIV1AdminAccountsIDUnsuspendSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAPIV1AdminReportsIDAssignToSelf

Claim the handling of this report to yourself.

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
    res, err := s.SDK.PostAPIV1AdminReportsIDAssignToSelf(ctx, operations.PostAPIV1AdminReportsIDAssignToSelfRequest{
        ID: "294e3698-f447-4f60-be8b-445e80ca55ef",
    }, operations.PostAPIV1AdminReportsIDAssignToSelfSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminReport != nil {
        // handle response
    }
}
```

## PostAPIV1AdminReportsIDReopen

Mark a report as resolved with no further action taken.

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
    res, err := s.SDK.PostAPIV1AdminReportsIDReopen(ctx, operations.PostAPIV1AdminReportsIDReopenRequest{
        ID: "d20e457e-1858-4b6a-89fb-e3a5aa8e4824",
    }, operations.PostAPIV1AdminReportsIDReopenSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminReport != nil {
        // handle response
    }
}
```

## PostAPIV1AdminReportsIDResolve

Mark a report as resolved with no further action taken.

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
    res, err := s.SDK.PostAPIV1AdminReportsIDResolve(ctx, operations.PostAPIV1AdminReportsIDResolveRequest{
        ID: "d0ab4075-088e-4518-a206-5e904f3b1194",
    }, operations.PostAPIV1AdminReportsIDResolveSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminReport != nil {
        // handle response
    }
}
```

## PostAPIV1AdminReportsIDUnassign

Unassign a report so that someone else can claim it.

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
    res, err := s.SDK.PostAPIV1AdminReportsIDUnassign(ctx, operations.PostAPIV1AdminReportsIDUnassignRequest{
        ID: "b8abf603-a79f-49df-a0ab-7da8a50ce187",
    }, operations.PostAPIV1AdminReportsIDUnassignSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminReport != nil {
        // handle response
    }
}
```

## PostAPIV1AnnouncementsIDDismiss

Allows a user to mark the announcement as read.

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
    res, err := s.SDK.PostAPIV1AnnouncementsIDDismiss(ctx, operations.PostAPIV1AnnouncementsIDDismissRequest{
        ID: "f86bc173-d689-4eee-9526-f8d986e881ea",
    }, operations.PostAPIV1AnnouncementsIDDismissSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAPIV1AnnouncementsIDDismiss200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAPIV1ConversationsIDRead

Remove converstation

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
    res, err := s.SDK.PostAPIV1ConversationsIDRead(ctx, operations.PostAPIV1ConversationsIDReadRequest{
        ID: "d4f0e101-2563-4f94-a29e-973e922a57a1",
    }, operations.PostAPIV1ConversationsIDReadSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Conversation != nil {
        // handle response
    }
}
```

## PostAPIV1DomainBlocks

"Block a domain to:
- hide all public posts from it
- hide all notifications from it
- remove all followers from it
- prevent following new users from it (but does not remove existing follows)"


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
    res, err := s.SDK.PostAPIV1DomainBlocks(ctx, []byte("corporis"), operations.PostAPIV1DomainBlocksSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAPIV1DomainBlocks200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAPIV1FeaturedTags

Create a feature a tag.

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
    res, err := s.SDK.PostAPIV1FeaturedTags(ctx, operations.PostAPIV1FeaturedTagsRequestBody{
        Name: sdk.String("Conrad Franey III"),
    }, operations.PostAPIV1FeaturedTagsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FeaturedTag != nil {
        // handle response
    }
}
```

## PostAPIV1Filters

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
    res, err := s.SDK.PostAPIV1Filters(ctx, []byte("ipsa"), operations.PostAPIV1FiltersSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Filter != nil {
        // handle response
    }
}
```

## PostAPIV1FollowRequestsIDAuthorize

Accept Follow

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
    res, err := s.SDK.PostAPIV1FollowRequestsIDAuthorize(ctx, operations.PostAPIV1FollowRequestsIDAuthorizeRequest{
        ID: "807e2b6e-3ab8-4845-b059-7a60ff2a54a3",
    }, operations.PostAPIV1FollowRequestsIDAuthorizeSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Relationship != nil {
        // handle response
    }
}
```

## PostAPIV1FollowRequestsIDReject

Accept Follow

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
    res, err := s.SDK.PostAPIV1FollowRequestsIDReject(ctx, operations.PostAPIV1FollowRequestsIDRejectRequest{
        ID: "1e94764a-3e86-45e7-956f-9251a5a9da66",
    }, operations.PostAPIV1FollowRequestsIDRejectSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Relationship != nil {
        // handle response
    }
}
```

## PostAPIV1Lists

Create a new list.

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
    res, err := s.SDK.PostAPIV1Lists(ctx, operations.PostAPIV1ListsRequestBody{
        RepliesPolicy: operations.PostAPIV1ListsRequestBodyRepliesPolicyEnumFollowed.ToPointer(),
        Title: "Dr.",
    }, operations.PostAPIV1ListsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.List != nil {
        // handle response
    }
}
```

## PostAPIV1ListsIDAccounts

Add accounts to the given list. Note that the user must be following these accounts.

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
    res, err := s.SDK.PostAPIV1ListsIDAccounts(ctx, operations.PostAPIV1ListsIDAccountsRequest{
        RequestBody: &operations.PostAPIV1ListsIDAccountsRequestBody{
            AccountIds: []string{
                "ullam",
                "in",
                "nam",
                "earum",
            },
        },
        ID: "aad4f9ef-c1b4-4512-8103-2648dc2f6151",
    }, operations.PostAPIV1ListsIDAccountsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAPIV1ListsIDAccounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAPIV1Markers

Get saved timeline position

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
    res, err := s.SDK.PostAPIV1Markers(ctx, map[string]interface{}{
        "provident": "earum",
        "soluta": "hic",
        "illum": "eaque",
    }, operations.PostAPIV1MarkersSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAPIV1Markers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAPIV1Media

Creates an attachment to be used with a new status.

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
    res, err := s.SDK.PostAPIV1Media(ctx, []byte("earum"), operations.PostAPIV1MediaSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attachment != nil {
        // handle response
    }
}
```

## PostAPIV1MediaID

Update an Attachment, before it is attached to a status and posted.

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
    res, err := s.SDK.PostAPIV1MediaID(ctx, operations.PostAPIV1MediaIDRequest{
        RequestBody: []byte("perspiciatis"),
        ID: "fe6c632c-a3ae-4d01-9799-6312fde04771",
    }, operations.PostAPIV1MediaIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attachment != nil {
        // handle response
    }
}
```

## PostAPIV1NotificationsClear

Clear all notifications from the server.

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
    res, err := s.SDK.PostAPIV1NotificationsClear(ctx, operations.PostAPIV1NotificationsClearSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAPIV1NotificationsClear200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAPIV1NotificationsIDDismiss

Clear a single notification from the server.

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
    res, err := s.SDK.PostAPIV1NotificationsIDDismiss(ctx, operations.PostAPIV1NotificationsIDDismissRequest{
        ID: "778ff61d-0174-4763-a0a1-5db6a660659a",
    }, operations.PostAPIV1NotificationsIDDismissSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Notification != nil {
        // handle response
    }
}
```

## PostAPIV1PollsID

Vote on a poll.

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
    res, err := s.SDK.PostAPIV1PollsID(ctx, operations.PostAPIV1PollsIDRequest{
        RequestBody: &operations.PostAPIV1PollsIDRequestBody{
            Choices: []string{
                "error",
            },
        },
        ID: "deaab585-1d6c-4645-b08b-61891baa0fe1",
    }, operations.PostAPIV1PollsIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Poll != nil {
        // handle response
    }
}
```

## PostAPIV1PushSubscription

Add a Web Push API subscription to receive notifications. Each access token can have one push subscription. If you create a new subscription, the old subscription is deleted.

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
    res, err := s.SDK.PostAPIV1PushSubscription(ctx, operations.PostAPIV1PushSubscriptionRequestBody{
        Data: "fuga",
        Subscription: "pariatur",
    }, operations.PostAPIV1PushSubscriptionSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PushSubscription != nil {
        // handle response
    }
}
```

## PostAPIV1Reports

File a report.

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
    res, err := s.SDK.PostAPIV1Reports(ctx, operations.PostAPIV1ReportsRequestBody{
        AccountID: "debitis",
        Comment: sdk.String("voluptatem"),
        Forward: sdk.Bool(false),
        StatusIds: []string{
            "deleniti",
        },
    }, operations.PostAPIV1ReportsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```

## PostAPIV1Statuses

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
    res, err := s.SDK.PostAPIV1Statuses(ctx, operations.PostAPIV1StatusesRequest{
        IdempotencyKey: sdk.String("earum"),
        RequestBody: []PostAPIV1StatusesRequestBody{
            operations.PostAPIV1StatusesRequestBody{
                InReplyToID: sdk.String("sapiente"),
                Language: sdk.String("rem"),
                MediaIds: []string{
                    "nemo",
                    "asperiores",
                    "ratione",
                    "ullam",
                },
                Poll: []map[string]interface{}{
                    map[string]interface{}{
                        "totam": "impedit",
                        "quibusdam": "nam",
                        "ipsam": "culpa",
                        "dolor": "aliquam",
                    },
                },
                ScheduledAt: sdk.String("inventore"),
                Sensitive: sdk.Bool(false),
                SpoilerText: sdk.String("deleniti"),
                Status: sdk.String("veritatis"),
                Visibility: operations.PostAPIV1StatusesRequestBodyVisibilityEnumUnlisted.ToPointer(),
            },
            operations.PostAPIV1StatusesRequestBody{
                InReplyToID: sdk.String("dolor"),
                Language: sdk.String("consequatur"),
                MediaIds: []string{
                    "sit",
                },
                Poll: []map[string]interface{}{
                    map[string]interface{}{
                        "ab": "laudantium",
                    },
                    map[string]interface{}{
                        "dolor": "fugiat",
                    },
                },
                ScheduledAt: sdk.String("ipsam"),
                Sensitive: sdk.Bool(false),
                SpoilerText: sdk.String("consequuntur"),
                Status: sdk.String("ipsa"),
                Visibility: operations.PostAPIV1StatusesRequestBodyVisibilityEnumPrivate.ToPointer(),
            },
        },
    }, operations.PostAPIV1StatusesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAPIV1Statuses200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## PostAPIV1StatusesIDBookmark

Privately bookmark a status.

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
    res, err := s.SDK.PostAPIV1StatusesIDBookmark(ctx, operations.PostAPIV1StatusesIDBookmarkRequest{
        ID: "ece7e253-b668-4451-86c6-e205e16deab3",
    }, operations.PostAPIV1StatusesIDBookmarkSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## PostAPIV1StatusesIDFavourite

Add a status to your favourites list.

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
    res, err := s.SDK.PostAPIV1StatusesIDFavourite(ctx, operations.PostAPIV1StatusesIDFavouriteRequest{
        ID: "fec9578a-6458-4427-ba84-18d162309fb0",
    }, operations.PostAPIV1StatusesIDFavouriteSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## PostAPIV1StatusesIDMute

Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.

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
    res, err := s.SDK.PostAPIV1StatusesIDMute(ctx, operations.PostAPIV1StatusesIDMuteRequest{
        ID: "929921ae-fb9f-458c-8d86-e68e4be05601",
    }, operations.PostAPIV1StatusesIDMuteSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## PostAPIV1StatusesIDPin

Feature one of your own public statuses at the top of your profile.

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
    res, err := s.SDK.PostAPIV1StatusesIDPin(ctx, operations.PostAPIV1StatusesIDPinRequest{
        ID: "3f59da75-7a59-4ecf-af66-ef1caa3383c2",
    }, operations.PostAPIV1StatusesIDPinSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## PostAPIV1StatusesIDReblog

Reshare a status.

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
    res, err := s.SDK.PostAPIV1StatusesIDReblog(ctx, operations.PostAPIV1StatusesIDReblogRequest{
        RequestBody: &operations.PostAPIV1StatusesIDReblogRequestBody{
            Visibility: sdk.String("soluta"),
        },
        ID: "eb477373-c8d7-42f6-8d1d-b1f2c4310661",
    }, operations.PostAPIV1StatusesIDReblogSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## PostAPIV1StatusesIDUnbookmark

Remove a status from your private bookmarks.

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
    res, err := s.SDK.PostAPIV1StatusesIDUnbookmark(ctx, operations.PostAPIV1StatusesIDUnbookmarkRequest{
        ID: "e96349e1-cf9e-406e-ba43-7000ae6b6bc9",
    }, operations.PostAPIV1StatusesIDUnbookmarkSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## PostAPIV1StatusesIDUnfavourite

Remove a status from your favourites list.

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
    res, err := s.SDK.PostAPIV1StatusesIDUnfavourite(ctx, operations.PostAPIV1StatusesIDUnfavouriteRequest{
        ID: "b8f759ea-c55a-4974-9d31-1352965bb8a7",
    }, operations.PostAPIV1StatusesIDUnfavouriteSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## PostAPIV1StatusesIDUnmute

Status's conversation unmuted, or was already unmuted

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
    res, err := s.SDK.PostAPIV1StatusesIDUnmute(ctx, operations.PostAPIV1StatusesIDUnmuteRequest{
        ID: "20261143-5e13-49db-8225-9b1abda8c070",
    }, operations.PostAPIV1StatusesIDUnmuteSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## PostAPIV1StatusesIDUnpin

Unfeature a status from the top of your profile.

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
    res, err := s.SDK.PostAPIV1StatusesIDUnpin(ctx, operations.PostAPIV1StatusesIDUnpinRequest{
        ID: "e1084cb0-672d-41ad-879e-eb9665b85efb",
    }, operations.PostAPIV1StatusesIDUnpinSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## PostAPIV1StatusesIDUnreblog

Undo a reshare of a status.

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
    res, err := s.SDK.PostAPIV1StatusesIDUnreblog(ctx, operations.PostAPIV1StatusesIDUnreblogRequest{
        ID: "d02bae0b-e2d7-4822-99e3-ea4b5197f924",
    }, operations.PostAPIV1StatusesIDUnreblogSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## PutAPIV1AnnouncementsIDReactionsName

Allows a user to mark the announcement as read.

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
    res, err := s.SDK.PutAPIV1AnnouncementsIDReactionsName(ctx, operations.PutAPIV1AnnouncementsIDReactionsNameRequest{
        ID: "43da7ce5-2b89-45c5-b7c6-454efb0b3489",
        Name: "Angelica Flatley",
    }, operations.PutAPIV1AnnouncementsIDReactionsNameSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAPIV1AnnouncementsIDReactionsName200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PutAPIV1FiltersID

Update a filter.

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
    res, err := s.SDK.PutAPIV1FiltersID(ctx, operations.PutAPIV1FiltersIDRequest{
        RequestBody: []byte("nostrum"),
        ID: "acfbe2fd-5707-4577-9291-77deac646ecb",
    }, operations.PutAPIV1FiltersIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Filter != nil {
        // handle response
    }
}
```

## PutAPIV1Lists

Change the title of a list, or which replies to show.

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
    res, err := s.SDK.PutAPIV1Lists(ctx, operations.PutAPIV1ListsRequestBody{
        RepliesPolicy: operations.PutAPIV1ListsRequestBodyRepliesPolicyEnumList.ToPointer(),
        Title: sdk.String("Ms."),
    }, operations.PutAPIV1ListsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.List != nil {
        // handle response
    }
}
```

## PutAPIV1PushSubscription

Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.

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
    res, err := s.SDK.PutAPIV1PushSubscription(ctx, operations.PutAPIV1PushSubscriptionRequestBody{
        Data: "dolorem",
    }, operations.PutAPIV1PushSubscriptionSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PushSubscription != nil {
        // handle response
    }
}
```

## PutAPIV1ScheduledStatusesID

View a single scheduled status

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PutAPIV1ScheduledStatusesID(ctx, operations.PutAPIV1ScheduledStatusesIDRequest{
        RequestBody: &operations.PutAPIV1ScheduledStatusesIDRequestBody{
            ScheduledAt: types.MustTimeFromString("2022-12-10T07:48:10.956Z"),
        },
        ID: "9e3eb1e5-a2b1-42eb-87f1-16db99545fc9",
    }, operations.PutAPIV1ScheduledStatusesIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduledStatus != nil {
        // handle response
    }
}
```
