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
<https://docs.github.com/github-ae@latest/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user>

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
        Owner: "architecto",
        Repo: "magnam",
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

This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/github-ae@latest/rest/reference/activity#set-a-repository-subscription).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/activity#delete-a-repository-subscription>

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
        Owner: "et",
        Repo: "excepturi",
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

Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/github-ae@latest/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/activity#delete-a-thread-subscription>

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
        ThreadID: 354047,
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

GitHub AE provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:

*   **Timeline**: The GitHub AE global public timeline
*   **User**: The public timeline for any user, using [URI template](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#hypermedia)
*   **Current user public**: The public timeline for the authenticated user
*   **Current user**: The private timeline for the authenticated user
*   **Current user actor**: The private timeline for activity created by the authenticated user
*   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
*   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub AE.

**Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/github-ae@latest/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/activity#get-feeds>

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
<https://docs.github.com/github-ae@latest/rest/reference/activity#get-a-repository-subscription>

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
        Owner: "provident",
        Repo: "quos",
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
<https://docs.github.com/github-ae@latest/rest/reference/activity#get-a-thread>

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
        ThreadID: 574325,
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

This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/github-ae@latest/rest/reference/activity#get-a-repository-subscription).

Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user>

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
        ThreadID: 33625,
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
<https://docs.github.com/github-ae@latest/rest/reference/activity#list-events-for-the-authenticated-user>

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
        Page: sdk.Int64(653201),
        PerPage: sdk.Int64(968962),
        Username: "Mack.Hammes",
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
<https://docs.github.com/github-ae@latest/rest/reference/activity#list-notifications-for-the-authenticated-user>

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
        Before: types.MustTimeFromString("2022-07-30T07:35:03.817Z"),
        Page: sdk.Int64(367562),
        Participating: sdk.Bool(false),
        PerPage: sdk.Int64(97260),
        Since: types.MustTimeFromString("2022-01-06T19:47:24.047Z"),
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
<https://docs.github.com/github-ae@latest/rest/reference/activity#list-organization-events-for-the-authenticated-user>

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
        Org: "debitis",
        Page: sdk.Int64(260341),
        PerPage: sdk.Int64(806194),
        Username: "Kaitlyn.Prosacco",
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
<https://docs.github.com/github-ae@latest/rest/reference/activity#list-repository-events>

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
        Owner: "architecto",
        Page: sdk.Int64(919483),
        PerPage: sdk.Int64(352312),
        Repo: "expedita",
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
<https://docs.github.com/github-ae@latest/rest/reference/activity#list-repository-notifications-for-the-authenticated-user>

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
        Before: types.MustTimeFromString("2022-01-01T10:06:00.916Z"),
        Owner: "quibusdam",
        Page: sdk.Int64(149448),
        Participating: sdk.Bool(false),
        PerPage: sdk.Int64(904648),
        Repo: "pariatur",
        Since: types.MustTimeFromString("2022-11-02T16:33:42.080Z"),
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

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/github-ae@latest/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/activity#list-repositories-starred-by-the-authenticated-user>

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
        Page: sdk.Int64(615560),
        PerPage: sdk.Int64(166847),
        Sort: shared.SortEnumCreated.ToPointer(),
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

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/github-ae@latest/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/activity#list-repositories-starred-by-a-user>

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
        Page: sdk.Int64(848009),
        PerPage: sdk.Int64(864934),
        Sort: shared.SortEnumUpdated.ToPointer(),
        Username: "Hannah40",
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
<https://docs.github.com/github-ae@latest/rest/reference/activity#list-repositories-watched-by-a-user>

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
        Page: sdk.Int64(33222),
        PerPage: sdk.Int64(69167),
        Username: "Willow.Predovic",
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

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/github-ae@latest/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/activity#list-stargazers>

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
        Owner: "autem",
        Page: sdk.Int64(722056),
        PerPage: sdk.Int64(50588),
        Repo: "pariatur",
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
<https://docs.github.com/github-ae@latest/rest/reference/activity#list-repositories-watched-by-the-authenticated-user>

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
        Page: sdk.Int64(365496),
        PerPage: sdk.Int64(975522),
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
<https://docs.github.com/github-ae@latest/rest/reference/activity#list-watchers>

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
        Owner: "perferendis",
        Page: sdk.Int64(855804),
        PerPage: sdk.Int64(230742),
        Repo: "aut",
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

Marks all notifications as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub AE will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/github-ae@latest/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/activity#mark-notifications-as-read>

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
        LastReadAt: types.MustTimeFromString("2021-12-02T19:46:35.147Z"),
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

Marks all notifications in a repository as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub AE will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/github-ae@latest/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/activity#mark-repository-notifications-as-read>

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
            LastReadAt: types.MustTimeFromString("2020-10-23T15:50:52.666Z"),
        },
        Owner: "nobis",
        Repo: "dolores",
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

Marks a thread as "read." Marking a thread as "read" is equivalent to clicking a notification in your notification inbox on GitHub AE: https://github.com/notifications.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/activity#mark-a-thread-as-read>

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
        ThreadID: 339404,
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

If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/github-ae@latest/rest/reference/activity#delete-a-repository-subscription) completely.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/activity#set-a-repository-subscription>

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
        Owner: "totam",
        Repo: "dignissimos",
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

Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/github-ae@latest/rest/reference/activity#delete-a-thread-subscription) endpoint.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/activity#set-a-thread-subscription>

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
        ThreadID: 54338,
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

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/activity#star-a-repository-for-the-authenticated-user>

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
        Owner: "quis",
        Repo: "nesciunt",
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
<https://docs.github.com/github-ae@latest/rest/reference/activity#unstar-a-repository-for-the-authenticated-user>

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
        Owner: "eos",
        Repo: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
