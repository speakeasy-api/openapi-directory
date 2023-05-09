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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user>

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
        Owner: "ipsum",
        Repo: "voluptate",
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

This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/enterprise-server@3.7/rest/reference/activity#set-a-repository-subscription).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#delete-a-repository-subscription>

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
        Owner: "id",
        Repo: "saepe",
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

Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/enterprise-server@3.7/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#delete-a-thread-subscription>

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
        ThreadID: 263322,
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
*   **User**: The public timeline for any user, using [URI template](https://docs.github.com/enterprise-server@3.7/rest/overview/resources-in-the-rest-api#hypermedia)
*   **Current user public**: The public timeline for the authenticated user
*   **Current user**: The private timeline for the authenticated user
*   **Current user actor**: The private timeline for activity created by the authenticated user
*   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
*   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub Enterprise Server.

**Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/enterprise-server@3.7/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#get-feeds>

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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#get-a-repository-subscription>

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
        Owner: "aspernatur",
        Repo: "perferendis",
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#get-a-thread>

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
        ThreadID: 229219,
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

This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/enterprise-server@3.7/rest/reference/activity#get-a-repository-subscription).

Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user>

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
        ThreadID: 758379,
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-events-for-the-authenticated-user>

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
        Page: sdk.Int64(881586),
        PerPage: sdk.Int64(320017),
        Username: "Summer_Hoppe",
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-notifications-for-the-authenticated-user>

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
        Before: types.MustTimeFromString("2022-03-03T16:00:55.670Z"),
        Page: sdk.Int64(519711),
        Participating: sdk.Bool(false),
        PerPage: sdk.Int64(628982),
        Since: types.MustTimeFromString("2022-02-16T11:34:48.736Z"),
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-organization-events-for-the-authenticated-user>

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
        Org: "quaerat",
        Page: sdk.Int64(273542),
        PerPage: sdk.Int64(425451),
        Username: "Pierre67",
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-public-events>

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
        Page: sdk.Int64(952792),
        PerPage: sdk.Int64(456130),
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-public-events-for-a-network-of-repositories>

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
        Owner: "harum",
        Page: sdk.Int64(483409),
        PerPage: sdk.Int64(215507),
        Repo: "quisquam",
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-public-events-for-a-user>

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
        Page: sdk.Int64(947371),
        PerPage: sdk.Int64(229442),
        Username: "Mortimer31",
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-public-organization-events>

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
        Org: "dolorem",
        Page: sdk.Int64(957451),
        PerPage: sdk.Int64(518201),
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-events-received-by-the-authenticated-user>

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
        Page: sdk.Int64(471752),
        PerPage: sdk.Int64(25662),
        Username: "Merlin42",
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-public-events-received-by-a-user>

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
        Page: sdk.Int64(730442),
        PerPage: sdk.Int64(374170),
        Username: "Lura27",
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-repository-events>

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
        Owner: "qui",
        Page: sdk.Int64(586784),
        PerPage: sdk.Int64(807581),
        Repo: "pariatur",
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-repository-notifications-for-the-authenticated-user>

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
        Before: types.MustTimeFromString("2022-10-07T04:50:29.805Z"),
        Owner: "laborum",
        Page: sdk.Int64(517379),
        Participating: sdk.Bool(false),
        PerPage: sdk.Int64(276894),
        Repo: "aspernatur",
        Since: types.MustTimeFromString("2022-04-14T08:18:32.851Z"),
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

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.7/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-repositories-starred-by-the-authenticated-user>

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
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(396060),
        PerPage: sdk.Int64(463150),
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

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.7/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-repositories-starred-by-a-user>

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
        Page: sdk.Int64(183280),
        PerPage: sdk.Int64(204865),
        Sort: shared.SortEnumCreated.ToPointer(),
        Username: "Casimir35",
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-repositories-watched-by-a-user>

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
        Page: sdk.Int64(722081),
        PerPage: sdk.Int64(940432),
        Username: "Alexander_Runolfsdottir9",
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

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.7/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-stargazers>

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
        Owner: "saepe",
        Page: sdk.Int64(217450),
        PerPage: sdk.Int64(83422),
        Repo: "nobis",
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-repositories-watched-by-the-authenticated-user>

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
        Page: sdk.Int64(552193),
        PerPage: sdk.Int64(731694),
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-watchers>

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
        Owner: "cupiditate",
        Page: sdk.Int64(45614),
        PerPage: sdk.Int64(961937),
        Repo: "dolorem",
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

Marks all notifications as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#mark-notifications-as-read>

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
        LastReadAt: types.MustTimeFromString("2022-09-18T06:37:26.413Z"),
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

Marks all notifications in a repository as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/enterprise-server@3.7/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#mark-repository-notifications-as-read>

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
            LastReadAt: types.MustTimeFromString("2022-04-28T19:10:24.037Z"),
        },
        Owner: "architecto",
        Repo: "quae",
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#mark-a-thread-as-read>

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
        ThreadID: 16429,
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

If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/enterprise-server@3.7/rest/reference/activity#delete-a-repository-subscription) completely.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#set-a-repository-subscription>

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
        Owner: "quas",
        Repo: "itaque",
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

Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/enterprise-server@3.7/rest/reference/activity#delete-a-thread-subscription) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#set-a-thread-subscription>

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
        ThreadID: 9240,
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

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.7/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#star-a-repository-for-the-authenticated-user>

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
        Owner: "est",
        Repo: "repellendus",
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
<https://docs.github.com/enterprise-server@3.7/rest/reference/activity#unstar-a-repository-for-the-authenticated-user>

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
        Owner: "porro",
        Repo: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
