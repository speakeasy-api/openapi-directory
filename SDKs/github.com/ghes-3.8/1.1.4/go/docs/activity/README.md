# Activity

## Overview

Activity APIs provide access to notifications, subscriptions, and timelines.

### Available Operations

* [ActivityCheckRepoIsStarredByAuthenticatedUser](#activitycheckrepoisstarredbyauthenticateduser) - Check if a repository is starred by the authenticated user
* [ActivityDeleteRepoSubscription](#activitydeletereposubscription) - Delete a repository subscription
* [ActivityDeleteThreadSubscription](#activitydeletethreadsubscription) - Delete a thread subscription
* [ActivityGetFeeds](#activitygetfeeds) - Get feeds
* [ActivityGetRepoSubscription](#activitygetreposubscription) - Get a repository subscription
* [ActivityGetThread](#activitygetthread) - Get a thread
* [ActivityGetThreadSubscriptionForAuthenticatedUser](#activitygetthreadsubscriptionforauthenticateduser) - Get a thread subscription for the authenticated user
* [ActivityListEventsForAuthenticatedUser](#activitylisteventsforauthenticateduser) - List events for the authenticated user
* [ActivityListNotificationsForAuthenticatedUser](#activitylistnotificationsforauthenticateduser) - List notifications for the authenticated user
* [ActivityListOrgEventsForAuthenticatedUser](#activitylistorgeventsforauthenticateduser) - List organization events for the authenticated user
* [ActivityListPublicEvents](#activitylistpublicevents) - List public events
* [ActivityListPublicEventsForRepoNetwork](#activitylistpubliceventsforreponetwork) - List public events for a network of repositories
* [ActivityListPublicEventsForUser](#activitylistpubliceventsforuser) - List public events for a user
* [ActivityListPublicOrgEvents](#activitylistpublicorgevents) - List public organization events
* [ActivityListReceivedEventsForUser](#activitylistreceivedeventsforuser) - List events received by the authenticated user
* [ActivityListReceivedPublicEventsForUser](#activitylistreceivedpubliceventsforuser) - List public events received by a user
* [ActivityListRepoEvents](#activitylistrepoevents) - List repository events
* [ActivityListRepoNotificationsForAuthenticatedUser](#activitylistreponotificationsforauthenticateduser) - List repository notifications for the authenticated user
* [ActivityListReposStarredByAuthenticatedUser](#activitylistreposstarredbyauthenticateduser) - List repositories starred by the authenticated user
* [ActivityListReposStarredByUser](#activitylistreposstarredbyuser) - List repositories starred by a user
* [ActivityListReposWatchedByUser](#activitylistreposwatchedbyuser) - List repositories watched by a user
* [ActivityListStargazersForRepo](#activityliststargazersforrepo) - List stargazers
* [ActivityListWatchedReposForAuthenticatedUser](#activitylistwatchedreposforauthenticateduser) - List repositories watched by the authenticated user
* [ActivityListWatchersForRepo](#activitylistwatchersforrepo) - List watchers
* [ActivityMarkNotificationsAsRead](#activitymarknotificationsasread) - Mark notifications as read
* [ActivityMarkRepoNotificationsAsRead](#activitymarkreponotificationsasread) - Mark repository notifications as read
* [ActivityMarkThreadAsRead](#activitymarkthreadasread) - Mark a thread as read
* [ActivitySetRepoSubscription](#activitysetreposubscription) - Set a repository subscription
* [ActivitySetThreadSubscription](#activitysetthreadsubscription) - Set a thread subscription
* [ActivityStarRepoForAuthenticatedUser](#activitystarrepoforauthenticateduser) - Star a repository for the authenticated user
* [ActivityUnstarRepoForAuthenticatedUser](#activityunstarrepoforauthenticateduser) - Unstar a repository for the authenticated user

## ActivityCheckRepoIsStarredByAuthenticatedUser

Check if a repository is starred by the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user>

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
    res, err := s.Activity.ActivityCheckRepoIsStarredByAuthenticatedUser(ctx, operations.ActivityCheckRepoIsStarredByAuthenticatedUserRequest{
        Owner: "nobis",
        Repo: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActivityDeleteRepoSubscription

This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/enterprise-server@3.8/rest/reference/activity#set-a-repository-subscription).

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#delete-a-repository-subscription>

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
    res, err := s.Activity.ActivityDeleteRepoSubscription(ctx, operations.ActivityDeleteRepoSubscriptionRequest{
        Owner: "assumenda",
        Repo: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActivityDeleteThreadSubscription

Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/enterprise-server@3.8/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#delete-a-thread-subscription>

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
    res, err := s.Activity.ActivityDeleteThreadSubscription(ctx, operations.ActivityDeleteThreadSubscriptionRequest{
        ThreadID: 379034,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActivityGetFeeds

GitHub Enterprise Server provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:

*   **Timeline**: The GitHub Enterprise Server global public timeline
*   **User**: The public timeline for any user, using [URI template](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#hypermedia)
*   **Current user public**: The public timeline for the authenticated user
*   **Current user**: The private timeline for the authenticated user
*   **Current user actor**: The private timeline for activity created by the authenticated user
*   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
*   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub Enterprise Server.

**Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/enterprise-server@3.8/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#get-feeds>

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
    res, err := s.Activity.ActivityGetFeeds(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Feed != nil {
        // handle response
    }
}
```

## ActivityGetRepoSubscription

Get a repository subscription

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#get-a-repository-subscription>

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
    res, err := s.Activity.ActivityGetRepoSubscription(ctx, operations.ActivityGetRepoSubscriptionRequest{
        Owner: "libero",
        Repo: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositorySubscription != nil {
        // handle response
    }
}
```

## ActivityGetThread

Gets information about a notification thread.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#get-a-thread>

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
    res, err := s.Activity.ActivityGetThread(ctx, operations.ActivityGetThreadRequest{
        ThreadID: 270328,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Thread != nil {
        // handle response
    }
}
```

## ActivityGetThreadSubscriptionForAuthenticatedUser

This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/enterprise-server@3.8/rest/reference/activity#get-a-repository-subscription).

Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user>

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
    res, err := s.Activity.ActivityGetThreadSubscriptionForAuthenticatedUser(ctx, operations.ActivityGetThreadSubscriptionForAuthenticatedUserRequest{
        ThreadID: 256139,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ThreadSubscription != nil {
        // handle response
    }
}
```

## ActivityListEventsForAuthenticatedUser

If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-events-for-the-authenticated-user>

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
    res, err := s.Activity.ActivityListEventsForAuthenticatedUser(ctx, operations.ActivityListEventsForAuthenticatedUserRequest{
        Page: sdk.Int64(131482),
        PerPage: sdk.Int64(591935),
        Username: "Amya48",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## ActivityListNotificationsForAuthenticatedUser

List all notifications for the current user, sorted by most recently updated.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-notifications-for-the-authenticated-user>

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
    res, err := s.Activity.ActivityListNotificationsForAuthenticatedUser(ctx, operations.ActivityListNotificationsForAuthenticatedUserRequest{
        All: sdk.Bool(false),
        Before: types.MustTimeFromString("2022-07-17T15:24:44.492Z"),
        Page: sdk.Int64(456141),
        Participating: sdk.Bool(false),
        PerPage: sdk.Int64(524593),
        Since: types.MustTimeFromString("2022-02-12T07:53:29.219Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Threads != nil {
        // handle response
    }
}
```

## ActivityListOrgEventsForAuthenticatedUser

This is the user's organization dashboard. You must be authenticated as the user to view this.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-organization-events-for-the-authenticated-user>

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
    res, err := s.Activity.ActivityListOrgEventsForAuthenticatedUser(ctx, operations.ActivityListOrgEventsForAuthenticatedUserRequest{
        Org: "quidem",
        Page: sdk.Int64(852635),
        PerPage: sdk.Int64(283519),
        Username: "Horacio.Hoeger50",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## ActivityListPublicEvents

We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-public-events>

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
    res, err := s.Activity.ActivityListPublicEvents(ctx, operations.ActivityListPublicEventsRequest{
        Page: sdk.Int64(788546),
        PerPage: sdk.Int64(86377),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## ActivityListPublicEventsForRepoNetwork

List public events for a network of repositories

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-public-events-for-a-network-of-repositories>

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
    res, err := s.Activity.ActivityListPublicEventsForRepoNetwork(ctx, operations.ActivityListPublicEventsForRepoNetworkRequest{
        Owner: "ipsa",
        Page: sdk.Int64(660040),
        PerPage: sdk.Int64(696997),
        Repo: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## ActivityListPublicEventsForUser

List public events for a user

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-public-events-for-a-user>

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
    res, err := s.Activity.ActivityListPublicEventsForUser(ctx, operations.ActivityListPublicEventsForUserRequest{
        Page: sdk.Int64(778696),
        PerPage: sdk.Int64(847276),
        Username: "Orion17",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## ActivityListPublicOrgEvents

List public organization events

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-public-organization-events>

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
    res, err := s.Activity.ActivityListPublicOrgEvents(ctx, operations.ActivityListPublicOrgEventsRequest{
        Org: "voluptas",
        Page: sdk.Int64(69859),
        PerPage: sdk.Int64(587600),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## ActivityListReceivedEventsForUser

These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-events-received-by-the-authenticated-user>

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
    res, err := s.Activity.ActivityListReceivedEventsForUser(ctx, operations.ActivityListReceivedEventsForUserRequest{
        Page: sdk.Int64(9688),
        PerPage: sdk.Int64(272822),
        Username: "Simeon19",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## ActivityListReceivedPublicEventsForUser

List public events received by a user

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-public-events-received-by-a-user>

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
    res, err := s.Activity.ActivityListReceivedPublicEventsForUser(ctx, operations.ActivityListReceivedPublicEventsForUserRequest{
        Page: sdk.Int64(779192),
        PerPage: sdk.Int64(459856),
        Username: "Tiana_Bayer49",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## ActivityListRepoEvents

List repository events

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-repository-events>

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
    res, err := s.Activity.ActivityListRepoEvents(ctx, operations.ActivityListRepoEventsRequest{
        Owner: "inventore",
        Page: sdk.Int64(469498),
        PerPage: sdk.Int64(518835),
        Repo: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## ActivityListRepoNotificationsForAuthenticatedUser

Lists all notifications for the current user in the specified repository.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-repository-notifications-for-the-authenticated-user>

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
    res, err := s.Activity.ActivityListRepoNotificationsForAuthenticatedUser(ctx, operations.ActivityListRepoNotificationsForAuthenticatedUserRequest{
        All: sdk.Bool(false),
        Before: types.MustTimeFromString("2022-07-06T17:31:39.783Z"),
        Owner: "occaecati",
        Page: sdk.Int64(414567),
        Participating: sdk.Bool(false),
        PerPage: sdk.Int64(959434),
        Repo: "dolores",
        Since: types.MustTimeFromString("2022-01-19T00:55:43.636Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Threads != nil {
        // handle response
    }
}
```

## ActivityListReposStarredByAuthenticatedUser

Lists repositories the authenticated user has starred.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.8/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-repositories-starred-by-the-authenticated-user>

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
    res, err := s.Activity.ActivityListReposStarredByAuthenticatedUser(ctx, operations.ActivityListReposStarredByAuthenticatedUserRequest{
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Page: sdk.Int64(783648),
        PerPage: sdk.Int64(430402),
        Sort: shared.SortEnumUpdated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Repositories != nil {
        // handle response
    }
}
```

## ActivityListReposStarredByUser

Lists repositories a user has starred.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.8/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-repositories-starred-by-a-user>

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
    res, err := s.Activity.ActivityListReposStarredByUser(ctx, operations.ActivityListReposStarredByUserRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(159867),
        PerPage: sdk.Int64(536178),
        Sort: shared.SortEnumCreated.ToPointer(),
        Username: "Marion53",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivityListReposStarredByUser200ApplicationJSONAnyOf != nil {
        // handle response
    }
}
```

## ActivityListReposWatchedByUser

Lists repositories a user is watching.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-repositories-watched-by-a-user>

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
    res, err := s.Activity.ActivityListReposWatchedByUser(ctx, operations.ActivityListReposWatchedByUserRequest{
        Page: sdk.Int64(128860),
        PerPage: sdk.Int64(325685),
        Username: "Gladys.Corkery18",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## ActivityListStargazersForRepo

Lists the people that have starred the repository.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.8/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-stargazers>

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
    res, err := s.Activity.ActivityListStargazersForRepo(ctx, operations.ActivityListStargazersForRepoRequest{
        Owner: "explicabo",
        Page: sdk.Int64(903984),
        PerPage: sdk.Int64(578922),
        Repo: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivityListStargazersForRepo200ApplicationJSONAnyOf != nil {
        // handle response
    }
}
```

## ActivityListWatchedReposForAuthenticatedUser

Lists repositories the authenticated user is watching.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-repositories-watched-by-the-authenticated-user>

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
    res, err := s.Activity.ActivityListWatchedReposForAuthenticatedUser(ctx, operations.ActivityListWatchedReposForAuthenticatedUserRequest{
        Page: sdk.Int64(92260),
        PerPage: sdk.Int64(456911),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## ActivityListWatchersForRepo

Lists the people watching the specified repository.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-watchers>

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
    res, err := s.Activity.ActivityListWatchersForRepo(ctx, operations.ActivityListWatchersForRepoRequest{
        Owner: "eveniet",
        Page: sdk.Int64(882042),
        PerPage: sdk.Int64(82971),
        Repo: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## ActivityMarkNotificationsAsRead

Marks all notifications as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#mark-notifications-as-read>

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
    res, err := s.Activity.ActivityMarkNotificationsAsRead(ctx, operations.ActivityMarkNotificationsAsReadRequestBody{
        LastReadAt: types.MustTimeFromString("2020-10-30T00:52:28.005Z"),
        Read: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivityMarkNotificationsAsRead202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActivityMarkRepoNotificationsAsRead

Marks all notifications in a repository as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/enterprise-server@3.8/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#mark-repository-notifications-as-read>

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
    res, err := s.Activity.ActivityMarkRepoNotificationsAsRead(ctx, operations.ActivityMarkRepoNotificationsAsReadRequest{
        RequestBody: &operations.ActivityMarkRepoNotificationsAsReadRequestBody{
            LastReadAt: types.MustTimeFromString("2021-10-21T01:36:51.257Z"),
        },
        Owner: "quasi",
        Repo: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivityMarkRepoNotificationsAsRead202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActivityMarkThreadAsRead

Marks a thread as "read." Marking a thread as "read" is equivalent to clicking a notification in your notification inbox on GitHub Enterprise Server: https://github.com/notifications.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#mark-a-thread-as-read>

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
    res, err := s.Activity.ActivityMarkThreadAsRead(ctx, operations.ActivityMarkThreadAsReadRequest{
        ThreadID: 426306,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActivitySetRepoSubscription

If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/enterprise-server@3.8/rest/reference/activity#delete-a-repository-subscription) completely.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#set-a-repository-subscription>

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
    res, err := s.Activity.ActivitySetRepoSubscription(ctx, operations.ActivitySetRepoSubscriptionRequest{
        RequestBody: &operations.ActivitySetRepoSubscriptionRequestBody{
            Ignored: sdk.Bool(false),
            Subscribed: sdk.Bool(false),
        },
        Owner: "harum",
        Repo: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositorySubscription != nil {
        // handle response
    }
}
```

## ActivitySetThreadSubscription

If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.

You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.

Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/enterprise-server@3.8/rest/reference/activity#delete-a-thread-subscription) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#set-a-thread-subscription>

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
    res, err := s.Activity.ActivitySetThreadSubscription(ctx, operations.ActivitySetThreadSubscriptionRequest{
        RequestBody: &operations.ActivitySetThreadSubscriptionRequestBody{
            Ignored: sdk.Bool(false),
        },
        ThreadID: 699622,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ThreadSubscription != nil {
        // handle response
    }
}
```

## ActivityStarRepoForAuthenticatedUser

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#star-a-repository-for-the-authenticated-user>

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
    res, err := s.Activity.ActivityStarRepoForAuthenticatedUser(ctx, operations.ActivityStarRepoForAuthenticatedUserRequest{
        Owner: "occaecati",
        Repo: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActivityUnstarRepoForAuthenticatedUser

Unstar a repository for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/activity#unstar-a-repository-for-the-authenticated-user>

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
    res, err := s.Activity.ActivityUnstarRepoForAuthenticatedUser(ctx, operations.ActivityUnstarRepoForAuthenticatedUserRequest{
        Owner: "distinctio",
        Repo: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
