# Issues

## Overview

Interact with GitHub Issues.

### Available Operations

* [IssuesAddAssignees](#issuesaddassignees) - Add assignees to an issue
* [IssuesAddLabels](#issuesaddlabels) - Add labels to an issue
* [IssuesCheckUserCanBeAssigned](#issuescheckusercanbeassigned) - Check if a user can be assigned
* [IssuesCheckUserCanBeAssignedToIssue](#issuescheckusercanbeassignedtoissue) - Check if a user can be assigned to a issue
* [IssuesCreate](#issuescreate) - Create an issue
* [IssuesCreateComment](#issuescreatecomment) - Create an issue comment
* [IssuesCreateLabel](#issuescreatelabel) - Create a label
* [IssuesCreateMilestone](#issuescreatemilestone) - Create a milestone
* [IssuesDeleteComment](#issuesdeletecomment) - Delete an issue comment
* [IssuesDeleteLabel](#issuesdeletelabel) - Delete a label
* [IssuesDeleteMilestone](#issuesdeletemilestone) - Delete a milestone
* [IssuesGet](#issuesget) - Get an issue
* [IssuesGetComment](#issuesgetcomment) - Get an issue comment
* [IssuesGetEvent](#issuesgetevent) - Get an issue event
* [IssuesGetLabel](#issuesgetlabel) - Get a label
* [IssuesGetMilestone](#issuesgetmilestone) - Get a milestone
* [IssuesList](#issueslist) - List issues assigned to the authenticated user
* [IssuesListAssignees](#issueslistassignees) - List assignees
* [IssuesListComments](#issueslistcomments) - List issue comments
* [IssuesListCommentsForRepo](#issueslistcommentsforrepo) - List issue comments for a repository
* [IssuesListEvents](#issueslistevents) - List issue events
* [IssuesListEventsForRepo](#issueslisteventsforrepo) - List issue events for a repository
* [IssuesListEventsForTimeline](#issueslisteventsfortimeline) - List timeline events for an issue
* [IssuesListForAuthenticatedUser](#issueslistforauthenticateduser) - List user account issues assigned to the authenticated user
* [IssuesListForOrg](#issueslistfororg) - List organization issues assigned to the authenticated user
* [IssuesListForRepo](#issueslistforrepo) - List repository issues
* [IssuesListLabelsForMilestone](#issueslistlabelsformilestone) - List labels for issues in a milestone
* [IssuesListLabelsForRepo](#issueslistlabelsforrepo) - List labels for a repository
* [IssuesListLabelsOnIssue](#issueslistlabelsonissue) - List labels for an issue
* [IssuesListMilestones](#issueslistmilestones) - List milestones
* [IssuesLock](#issueslock) - Lock an issue
* [IssuesRemoveAllLabels](#issuesremovealllabels) - Remove all labels from an issue
* [IssuesRemoveAssignees](#issuesremoveassignees) - Remove assignees from an issue
* [IssuesRemoveLabel](#issuesremovelabel) - Remove a label from an issue
* [IssuesSetLabels](#issuessetlabels) - Set labels for an issue
* [IssuesUnlock](#issuesunlock) - Unlock an issue
* [IssuesUpdate](#issuesupdate) - Update an issue
* [IssuesUpdateComment](#issuesupdatecomment) - Update an issue comment
* [IssuesUpdateLabel](#issuesupdatelabel) - Update a label
* [IssuesUpdateMilestone](#issuesupdatemilestone) - Update a milestone

## IssuesAddAssignees

Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#add-assignees-to-an-issue>

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
    res, err := s.Issues.IssuesAddAssignees(ctx, operations.IssuesAddAssigneesRequest{
        RequestBody: &operations.IssuesAddAssigneesRequestBody{
            Assignees: []string{
                "voluptatem",
                "quisquam",
            },
        },
        IssueNumber: 919532,
        Owner: "quasi",
        Repo: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issue != nil {
        // handle response
    }
}
```

## IssuesAddLabels

Add labels to an issue

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#add-labels-to-an-issue>

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
    res, err := s.Issues.IssuesAddLabels(ctx, operations.IssuesAddLabelsRequest{
        RequestBody: &operations.IssuesAddLabelsRequestBody{},
        IssueNumber: 442036,
        Owner: "asperiores",
        Repo: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Labels != nil {
        // handle response
    }
}
```

## IssuesCheckUserCanBeAssigned

Checks if a user has permission to be assigned to an issue in this repository.

If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.

Otherwise a `404` status code is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#check-if-a-user-can-be-assigned>

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
    res, err := s.Issues.IssuesCheckUserCanBeAssigned(ctx, operations.IssuesCheckUserCanBeAssignedRequest{
        Assignee: "suscipit",
        Owner: "quidem",
        Repo: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesCheckUserCanBeAssignedToIssue

Checks if a user has permission to be assigned to a specific issue.

If the `assignee` can be assigned to this issue, a `204` status code with no content is returned.

Otherwise a `404` status code is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#check-if-a-user-can-be-assigned-to-a-issue>

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
    res, err := s.Issues.IssuesCheckUserCanBeAssignedToIssue(ctx, operations.IssuesCheckUserCanBeAssignedToIssueRequest{
        Assignee: "et",
        IssueNumber: 461007,
        Owner: "amet",
        Repo: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesCreate

Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://docs.github.com/enterprise-server@3.3/articles/disabling-issues/), the API returns a `410 Gone` status.

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.3/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.3/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#create-an-issue>

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
    res, err := s.Issues.IssuesCreate(ctx, operations.IssuesCreateRequest{
        RequestBody: operations.IssuesCreateRequestBody{
            Assignee: sdk.String("ea"),
            Assignees: []string{
                "error",
                "officiis",
                "officiis",
            },
            Body: sdk.String("accusamus"),
            Labels: []IssuesCreateRequestBodyLabels{
                operations.IssuesCreateRequestBodyLabels{},
                operations.IssuesCreateRequestBodyLabels{},
                operations.IssuesCreateRequestBodyLabels{},
            },
            Milestone: &operations.IssuesCreateRequestBodyMilestone{},
            Title: operations.IssuesCreateRequestBodyTitle{},
        },
        Owner: "minima",
        Repo: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issue != nil {
        // handle response
    }
}
```

## IssuesCreateComment

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.3/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.3/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#create-an-issue-comment>

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
    res, err := s.Issues.IssuesCreateComment(ctx, operations.IssuesCreateCommentRequest{
        RequestBody: operations.IssuesCreateCommentRequestBody{
            Body: "ex",
        },
        IssueNumber: 980581,
        Owner: "corrupti",
        Repo: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueComment != nil {
        // handle response
    }
}
```

## IssuesCreateLabel

Create a label

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#create-a-label>

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
    res, err := s.Issues.IssuesCreateLabel(ctx, operations.IssuesCreateLabelRequest{
        RequestBody: operations.IssuesCreateLabelRequestBody{
            Color: sdk.String("error"),
            Description: sdk.String("blanditiis"),
            Name: "Delia Littel DVM",
        },
        Owner: "dolorum",
        Repo: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Label != nil {
        // handle response
    }
}
```

## IssuesCreateMilestone

Create a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#create-a-milestone>

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
    res, err := s.Issues.IssuesCreateMilestone(ctx, operations.IssuesCreateMilestoneRequest{
        RequestBody: operations.IssuesCreateMilestoneRequestBody{
            Description: sdk.String("labore"),
            DueOn: types.MustTimeFromString("2022-11-14T22:34:47.186Z"),
            State: operations.IssuesCreateMilestoneRequestBodyStateEnumClosed.ToPointer(),
            Title: "Mr.",
        },
        Owner: "accusantium",
        Repo: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Milestone != nil {
        // handle response
    }
}
```

## IssuesDeleteComment

Delete an issue comment

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#delete-an-issue-comment>

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
    res, err := s.Issues.IssuesDeleteComment(ctx, operations.IssuesDeleteCommentRequest{
        CommentID: 174772,
        Owner: "enim",
        Repo: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesDeleteLabel

Delete a label

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#delete-a-label>

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
    res, err := s.Issues.IssuesDeleteLabel(ctx, operations.IssuesDeleteLabelRequest{
        Name: "Elsa Maggio",
        Owner: "consequuntur",
        Repo: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesDeleteMilestone

Delete a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#delete-a-milestone>

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
    res, err := s.Issues.IssuesDeleteMilestone(ctx, operations.IssuesDeleteMilestoneRequest{
        MilestoneNumber: 886305,
        Owner: "perspiciatis",
        Repo: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesGet

The API returns a [`301 Moved Permanently` status](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#http-redirects-redirects) if the issue was
[transferred](https://docs.github.com/enterprise-server@3.3/articles/transferring-an-issue-to-another-repository/) to another repository. If
the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API
returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read
access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe
to the [`issues`](https://docs.github.com/enterprise-server@3.3/webhooks/event-payloads/#issues) webhook.

**Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.3/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#get-an-issue>

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
    res, err := s.Issues.IssuesGet(ctx, operations.IssuesGetRequest{
        IssueNumber: 238043,
        Owner: "eveniet",
        Repo: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issue != nil {
        // handle response
    }
}
```

## IssuesGetComment

Get an issue comment

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#get-an-issue-comment>

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
    res, err := s.Issues.IssuesGetComment(ctx, operations.IssuesGetCommentRequest{
        CommentID: 160230,
        Owner: "fugit",
        Repo: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueComment != nil {
        // handle response
    }
}
```

## IssuesGetEvent

Get an issue event

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#get-an-issue-event>

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
    res, err := s.Issues.IssuesGetEvent(ctx, operations.IssuesGetEventRequest{
        EventID: 335631,
        Owner: "reprehenderit",
        Repo: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueEvent != nil {
        // handle response
    }
}
```

## IssuesGetLabel

Get a label

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#get-a-label>

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
    res, err := s.Issues.IssuesGetLabel(ctx, operations.IssuesGetLabelRequest{
        Name: "Ana Predovic",
        Owner: "vero",
        Repo: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Label != nil {
        // handle response
    }
}
```

## IssuesGetMilestone

Get a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#get-a-milestone>

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
    res, err := s.Issues.IssuesGetMilestone(ctx, operations.IssuesGetMilestoneRequest{
        MilestoneNumber: 434156,
        Owner: "ipsa",
        Repo: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Milestone != nil {
        // handle response
    }
}
```

## IssuesList

List issues assigned to the authenticated user across all visible repositories including owned repositories, member
repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not
necessarily assigned to you.


**Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.3/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#list-issues-assigned-to-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Issues.IssuesList(ctx, operations.IssuesListRequest{
        Collab: sdk.Bool(false),
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Filter: operations.IssuesListFilterEnumMentioned.ToPointer(),
        Labels: sdk.String("eveniet"),
        Orgs: sdk.Bool(false),
        Owned: sdk.Bool(false),
        Page: sdk.Int64(184362),
        PerPage: sdk.Int64(739884),
        Pulls: sdk.Bool(false),
        Since: types.MustTimeFromString("2022-02-07T04:58:25.283Z"),
        Sort: operations.IssuesListSortEnumCreated.ToPointer(),
        State: operations.IssuesListStateEnumAll.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issues != nil {
        // handle response
    }
}
```

## IssuesListAssignees

Lists the [available assignees](https://docs.github.com/enterprise-server@3.3/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#list-assignees>

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
    res, err := s.Issues.IssuesListAssignees(ctx, operations.IssuesListAssigneesRequest{
        Owner: "distinctio",
        Page: sdk.Int64(528940),
        PerPage: sdk.Int64(523006),
        Repo: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## IssuesListComments

Issue Comments are ordered by ascending ID.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#list-issue-comments>

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
    res, err := s.Issues.IssuesListComments(ctx, operations.IssuesListCommentsRequest{
        IssueNumber: 320565,
        Owner: "repellat",
        Page: sdk.Int64(3099),
        PerPage: sdk.Int64(362189),
        Repo: "perspiciatis",
        Since: types.MustTimeFromString("2022-05-09T02:04:25.294Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueComments != nil {
        // handle response
    }
}
```

## IssuesListCommentsForRepo

By default, Issue Comments are ordered by ascending ID.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#list-issue-comments-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Issues.IssuesListCommentsForRepo(ctx, operations.IssuesListCommentsForRepoRequest{
        Direction: operations.IssuesListCommentsForRepoDirectionEnumAsc.ToPointer(),
        Owner: "alias",
        Page: sdk.Int64(979527),
        PerPage: sdk.Int64(970222),
        Repo: "dolores",
        Since: types.MustTimeFromString("2022-05-06T13:39:00.258Z"),
        Sort: shared.SortEnumCreated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueComments != nil {
        // handle response
    }
}
```

## IssuesListEvents

List issue events

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#list-issue-events>

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
    res, err := s.Issues.IssuesListEvents(ctx, operations.IssuesListEventsRequest{
        IssueNumber: 680349,
        Owner: "nesciunt",
        Page: sdk.Int64(63207),
        PerPage: sdk.Int64(925703),
        Repo: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueEventForIssues != nil {
        // handle response
    }
}
```

## IssuesListEventsForRepo

List issue events for a repository

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#list-issue-events-for-a-repository>

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
    res, err := s.Issues.IssuesListEventsForRepo(ctx, operations.IssuesListEventsForRepoRequest{
        Owner: "quaerat",
        Page: sdk.Int64(477646),
        PerPage: sdk.Int64(403218),
        Repo: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueEvents != nil {
        // handle response
    }
}
```

## IssuesListEventsForTimeline

List timeline events for an issue

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#list-timeline-events-for-an-issue>

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
    res, err := s.Issues.IssuesListEventsForTimeline(ctx, operations.IssuesListEventsForTimelineRequest{
        IssueNumber: 633062,
        Owner: "adipisci",
        Page: sdk.Int64(890653),
        PerPage: sdk.Int64(514513),
        Repo: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TimelineIssueEvents != nil {
        // handle response
    }
}
```

## IssuesListForAuthenticatedUser

List issues across owned and member repositories assigned to the authenticated user.

**Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.3/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#list-user-account-issues-assigned-to-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Issues.IssuesListForAuthenticatedUser(ctx, operations.IssuesListForAuthenticatedUserRequest{
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Filter: operations.IssuesListForAuthenticatedUserFilterEnumAll.ToPointer(),
        Labels: sdk.String("esse"),
        Page: sdk.Int64(592081),
        PerPage: sdk.Int64(337477),
        Since: types.MustTimeFromString("2022-01-11T18:28:30.775Z"),
        Sort: operations.IssuesListForAuthenticatedUserSortEnumUpdated.ToPointer(),
        State: operations.IssuesListForAuthenticatedUserStateEnumOpen.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issues != nil {
        // handle response
    }
}
```

## IssuesListForOrg

List issues in an organization assigned to the authenticated user.

**Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.3/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#list-organization-issues-assigned-to-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Issues.IssuesListForOrg(ctx, operations.IssuesListForOrgRequest{
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Filter: operations.IssuesListForOrgFilterEnumAssigned.ToPointer(),
        Labels: sdk.String("animi"),
        Org: "nostrum",
        Page: sdk.Int64(652309),
        PerPage: sdk.Int64(591027),
        Since: types.MustTimeFromString("2021-01-09T04:50:31.655Z"),
        Sort: operations.IssuesListForOrgSortEnumUpdated.ToPointer(),
        State: operations.IssuesListForOrgStateEnumClosed.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issues != nil {
        // handle response
    }
}
```

## IssuesListForRepo

List issues in a repository. Only open issues will be listed.

**Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.3/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#list-repository-issues>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Issues.IssuesListForRepo(ctx, operations.IssuesListForRepoRequest{
        Assignee: sdk.String("accusantium"),
        Creator: sdk.String("repellat"),
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Labels: sdk.String("ullam"),
        Mentioned: sdk.String("in"),
        Milestone: sdk.String("nam"),
        Owner: "earum",
        Page: sdk.Int64(637583),
        PerPage: sdk.Int64(672041),
        Repo: "placeat",
        Since: types.MustTimeFromString("2022-01-09T16:15:47.527Z"),
        Sort: operations.IssuesListForRepoSortEnumUpdated.ToPointer(),
        State: operations.IssuesListForRepoStateEnumAll.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issues != nil {
        // handle response
    }
}
```

## IssuesListLabelsForMilestone

List labels for issues in a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#list-labels-for-issues-in-a-milestone>

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
    res, err := s.Issues.IssuesListLabelsForMilestone(ctx, operations.IssuesListLabelsForMilestoneRequest{
        MilestoneNumber: 956933,
        Owner: "cumque",
        Page: sdk.Int64(113486),
        PerPage: sdk.Int64(698249),
        Repo: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Labels != nil {
        // handle response
    }
}
```

## IssuesListLabelsForRepo

List labels for a repository

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#list-labels-for-a-repository>

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
    res, err := s.Issues.IssuesListLabelsForRepo(ctx, operations.IssuesListLabelsForRepoRequest{
        Owner: "quis",
        Page: sdk.Int64(82057),
        PerPage: sdk.Int64(147685),
        Repo: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Labels != nil {
        // handle response
    }
}
```

## IssuesListLabelsOnIssue

List labels for an issue

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#list-labels-for-an-issue>

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
    res, err := s.Issues.IssuesListLabelsOnIssue(ctx, operations.IssuesListLabelsOnIssueRequest{
        IssueNumber: 62636,
        Owner: "perferendis",
        Page: sdk.Int64(241901),
        PerPage: sdk.Int64(137251),
        Repo: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Labels != nil {
        // handle response
    }
}
```

## IssuesListMilestones

List milestones

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#list-milestones>

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
    res, err := s.Issues.IssuesListMilestones(ctx, operations.IssuesListMilestonesRequest{
        Direction: operations.IssuesListMilestonesDirectionEnumAsc.ToPointer(),
        Owner: "rem",
        Page: sdk.Int64(871083),
        PerPage: sdk.Int64(773084),
        Repo: "eos",
        Sort: operations.IssuesListMilestonesSortEnumCompleteness.ToPointer(),
        State: operations.IssuesListMilestonesStateEnumClosed.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Milestones != nil {
        // handle response
    }
}
```

## IssuesLock

Users with push access can lock an issue or pull request's conversation.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#lock-an-issue>

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
    res, err := s.Issues.IssuesLock(ctx, operations.IssuesLockRequest{
        RequestBody: &operations.IssuesLockRequestBody{
            LockReason: operations.IssuesLockRequestBodyLockReasonEnumOffTopic.ToPointer(),
        },
        IssueNumber: 325118,
        Owner: "beatae",
        Repo: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesRemoveAllLabels

Remove all labels from an issue

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#remove-all-labels-from-an-issue>

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
    res, err := s.Issues.IssuesRemoveAllLabels(ctx, operations.IssuesRemoveAllLabelsRequest{
        IssueNumber: 589695,
        Owner: "earum",
        Repo: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesRemoveAssignees

Removes one or more assignees from an issue.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#remove-assignees-from-an-issue>

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
    res, err := s.Issues.IssuesRemoveAssignees(ctx, operations.IssuesRemoveAssigneesRequest{
        RequestBody: &operations.IssuesRemoveAssigneesRequestBody{
            Assignees: []string{
                "illum",
                "eaque",
                "earum",
                "perspiciatis",
            },
        },
        IssueNumber: 983427,
        Owner: "debitis",
        Repo: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issue != nil {
        // handle response
    }
}
```

## IssuesRemoveLabel

Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#remove-a-label-from-an-issue>

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
    res, err := s.Issues.IssuesRemoveLabel(ctx, operations.IssuesRemoveLabelRequest{
        IssueNumber: 780931,
        Name: "Connie Corkery",
        Owner: "ratione",
        Repo: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Labels != nil {
        // handle response
    }
}
```

## IssuesSetLabels

Removes any previous labels and sets the new labels for an issue.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#set-labels-for-an-issue>

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
    res, err := s.Issues.IssuesSetLabels(ctx, operations.IssuesSetLabelsRequest{
        RequestBody: &operations.IssuesSetLabelsRequestBody{},
        IssueNumber: 898760,
        Owner: "nulla",
        Repo: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Labels != nil {
        // handle response
    }
}
```

## IssuesUnlock

Users with push access can unlock an issue's conversation.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#unlock-an-issue>

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
    res, err := s.Issues.IssuesUnlock(ctx, operations.IssuesUnlockRequest{
        IssueNumber: 97258,
        Owner: "et",
        Repo: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesUpdate

Issue owners and users with push access can edit an issue.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#update-an-issue>

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
    res, err := s.Issues.IssuesUpdate(ctx, operations.IssuesUpdateRequest{
        RequestBody: &operations.IssuesUpdateRequestBody{
            Assignee: sdk.String("natus"),
            Assignees: []string{
                "suscipit",
                "adipisci",
                "quasi",
            },
            Body: sdk.String("magni"),
            Labels: []IssuesUpdateRequestBodyLabels{
                operations.IssuesUpdateRequestBodyLabels{},
                operations.IssuesUpdateRequestBodyLabels{},
                operations.IssuesUpdateRequestBodyLabels{},
                operations.IssuesUpdateRequestBodyLabels{},
            },
            Milestone: &operations.IssuesUpdateRequestBodyMilestone{},
            State: operations.IssuesUpdateRequestBodyStateEnumClosed.ToPointer(),
            StateReason: operations.IssuesUpdateRequestBodyStateReasonEnumNotPlanned.ToPointer(),
            Title: &operations.IssuesUpdateRequestBodyTitle{},
        },
        IssueNumber: 896582,
        Owner: "ipsa",
        Repo: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issue != nil {
        // handle response
    }
}
```

## IssuesUpdateComment

Update an issue comment

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#update-an-issue-comment>

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
    res, err := s.Issues.IssuesUpdateComment(ctx, operations.IssuesUpdateCommentRequest{
        RequestBody: operations.IssuesUpdateCommentRequestBody{
            Body: "nihil",
        },
        CommentID: 473190,
        Owner: "dicta",
        Repo: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueComment != nil {
        // handle response
    }
}
```

## IssuesUpdateLabel

Update a label

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#update-a-label>

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
    res, err := s.Issues.IssuesUpdateLabel(ctx, operations.IssuesUpdateLabelRequest{
        RequestBody: &operations.IssuesUpdateLabelRequestBody{
            Color: sdk.String("esse"),
            Description: sdk.String("praesentium"),
            NewName: sdk.String("maiores"),
        },
        Name: "Ben Bradtke Sr.",
        Owner: "odio",
        Repo: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Label != nil {
        // handle response
    }
}
```

## IssuesUpdateMilestone

Update a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/issues#update-a-milestone>

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
    res, err := s.Issues.IssuesUpdateMilestone(ctx, operations.IssuesUpdateMilestoneRequest{
        RequestBody: &operations.IssuesUpdateMilestoneRequestBody{
            Description: sdk.String("esse"),
            DueOn: types.MustTimeFromString("2022-10-07T03:05:50.135Z"),
            State: operations.IssuesUpdateMilestoneRequestBodyStateEnumOpen.ToPointer(),
            Title: sdk.String("Mr."),
        },
        MilestoneNumber: 671384,
        Owner: "sunt",
        Repo: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Milestone != nil {
        // handle response
    }
}
```
