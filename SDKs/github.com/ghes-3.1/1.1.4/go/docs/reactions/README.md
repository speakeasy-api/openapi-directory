# Reactions

## Overview

Interact with reactions to various GitHub entities.

### Available Operations

* [ReactionsCreateForCommitComment](#reactionscreateforcommitcomment) - Create reaction for a commit comment
* [ReactionsCreateForIssue](#reactionscreateforissue) - Create reaction for an issue
* [ReactionsCreateForIssueComment](#reactionscreateforissuecomment) - Create reaction for an issue comment
* [ReactionsCreateForPullRequestReviewComment](#reactionscreateforpullrequestreviewcomment) - Create reaction for a pull request review comment
* [ReactionsCreateForTeamDiscussionCommentInOrg](#reactionscreateforteamdiscussioncommentinorg) - Create reaction for a team discussion comment
* [~~ReactionsCreateForTeamDiscussionCommentLegacy~~](#reactionscreateforteamdiscussioncommentlegacy) - Create reaction for a team discussion comment (Legacy) :warning: **Deprecated**
* [ReactionsCreateForTeamDiscussionInOrg](#reactionscreateforteamdiscussioninorg) - Create reaction for a team discussion
* [~~ReactionsCreateForTeamDiscussionLegacy~~](#reactionscreateforteamdiscussionlegacy) - Create reaction for a team discussion (Legacy) :warning: **Deprecated**
* [ReactionsDeleteForCommitComment](#reactionsdeleteforcommitcomment) - Delete a commit comment reaction
* [ReactionsDeleteForIssue](#reactionsdeleteforissue) - Delete an issue reaction
* [ReactionsDeleteForIssueComment](#reactionsdeleteforissuecomment) - Delete an issue comment reaction
* [ReactionsDeleteForPullRequestComment](#reactionsdeleteforpullrequestcomment) - Delete a pull request comment reaction
* [ReactionsDeleteForTeamDiscussion](#reactionsdeleteforteamdiscussion) - Delete team discussion reaction
* [ReactionsDeleteForTeamDiscussionComment](#reactionsdeleteforteamdiscussioncomment) - Delete team discussion comment reaction
* [~~ReactionsDeleteLegacy~~](#reactionsdeletelegacy) - Delete a reaction (Legacy) :warning: **Deprecated**
* [ReactionsListForCommitComment](#reactionslistforcommitcomment) - List reactions for a commit comment
* [ReactionsListForIssue](#reactionslistforissue) - List reactions for an issue
* [ReactionsListForIssueComment](#reactionslistforissuecomment) - List reactions for an issue comment
* [ReactionsListForPullRequestReviewComment](#reactionslistforpullrequestreviewcomment) - List reactions for a pull request review comment
* [ReactionsListForTeamDiscussionCommentInOrg](#reactionslistforteamdiscussioncommentinorg) - List reactions for a team discussion comment
* [~~ReactionsListForTeamDiscussionCommentLegacy~~](#reactionslistforteamdiscussioncommentlegacy) - List reactions for a team discussion comment (Legacy) :warning: **Deprecated**
* [ReactionsListForTeamDiscussionInOrg](#reactionslistforteamdiscussioninorg) - List reactions for a team discussion
* [~~ReactionsListForTeamDiscussionLegacy~~](#reactionslistforteamdiscussionlegacy) - List reactions for a team discussion (Legacy) :warning: **Deprecated**

## ReactionsCreateForCommitComment

Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.1/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#create-reaction-for-a-commit-comment>

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
    res, err := s.Reactions.ReactionsCreateForCommitComment(ctx, operations.ReactionsCreateForCommitCommentRequest{
        RequestBody: operations.ReactionsCreateForCommitCommentRequestBody{
            Content: operations.ReactionsCreateForCommitCommentRequestBodyContentEnumMinus1,
        },
        CommentID: 708898,
        Owner: "voluptatum",
        Repo: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reaction != nil {
        // handle response
    }
}
```

## ReactionsCreateForIssue

Create a reaction to an [issue](https://docs.github.com/enterprise-server@3.1/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#create-reaction-for-an-issue>

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
    res, err := s.Reactions.ReactionsCreateForIssue(ctx, operations.ReactionsCreateForIssueRequest{
        RequestBody: operations.ReactionsCreateForIssueRequestBody{
            Content: operations.ReactionsCreateForIssueRequestBodyContentEnumLaugh,
        },
        IssueNumber: 809594,
        Owner: "enim",
        Repo: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reaction != nil {
        // handle response
    }
}
```

## ReactionsCreateForIssueComment

Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.1/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#create-reaction-for-an-issue-comment>

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
    res, err := s.Reactions.ReactionsCreateForIssueComment(ctx, operations.ReactionsCreateForIssueCommentRequest{
        RequestBody: operations.ReactionsCreateForIssueCommentRequestBody{
            Content: operations.ReactionsCreateForIssueCommentRequestBodyContentEnumConfused,
        },
        CommentID: 796397,
        Owner: "eum",
        Repo: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reaction != nil {
        // handle response
    }
}
```

## ReactionsCreateForPullRequestReviewComment

Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.1/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment>

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
    res, err := s.Reactions.ReactionsCreateForPullRequestReviewComment(ctx, operations.ReactionsCreateForPullRequestReviewCommentRequest{
        RequestBody: operations.ReactionsCreateForPullRequestReviewCommentRequestBody{
            Content: operations.ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnumLaugh,
        },
        CommentID: 298264,
        Owner: "voluptates",
        Repo: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reaction != nil {
        // handle response
    }
}
```

## ReactionsCreateForTeamDiscussionCommentInOrg

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.1/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#create-reaction-for-a-team-discussion-comment>

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
    res, err := s.Reactions.ReactionsCreateForTeamDiscussionCommentInOrg(ctx, operations.ReactionsCreateForTeamDiscussionCommentInOrgRequest{
        RequestBody: operations.ReactionsCreateForTeamDiscussionCommentInOrgRequestBody{
            Content: operations.ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnumHooray,
        },
        CommentNumber: 46013,
        DiscussionNumber: 727547,
        Org: "ratione",
        TeamSlug: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reaction != nil {
        // handle response
    }
}
```

## ~~ReactionsCreateForTeamDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.1/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Reactions.ReactionsCreateForTeamDiscussionCommentLegacy(ctx, operations.ReactionsCreateForTeamDiscussionCommentLegacyRequest{
        RequestBody: operations.ReactionsCreateForTeamDiscussionCommentLegacyRequestBody{
            Content: operations.ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnumHeart,
        },
        CommentNumber: 577709,
        DiscussionNumber: 375994,
        TeamID: 779180,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reaction != nil {
        // handle response
    }
}
```

## ReactionsCreateForTeamDiscussionInOrg

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.1/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#create-reaction-for-a-team-discussion>

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
    res, err := s.Reactions.ReactionsCreateForTeamDiscussionInOrg(ctx, operations.ReactionsCreateForTeamDiscussionInOrgRequest{
        RequestBody: operations.ReactionsCreateForTeamDiscussionInOrgRequestBody{
            Content: operations.ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnumMinus1,
        },
        DiscussionNumber: 795591,
        Org: "fuga",
        TeamSlug: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reaction != nil {
        // handle response
    }
}
```

## ~~ReactionsCreateForTeamDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.1/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Reactions.ReactionsCreateForTeamDiscussionLegacy(ctx, operations.ReactionsCreateForTeamDiscussionLegacyRequest{
        RequestBody: operations.ReactionsCreateForTeamDiscussionLegacyRequestBody{
            Content: operations.ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnumHooray,
        },
        DiscussionNumber: 770873,
        TeamID: 963741,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reaction != nil {
        // handle response
    }
}
```

## ReactionsDeleteForCommitComment

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.

Delete a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.1/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#delete-a-commit-comment-reaction>

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
    res, err := s.Reactions.ReactionsDeleteForCommitComment(ctx, operations.ReactionsDeleteForCommitCommentRequest{
        CommentID: 735894,
        Owner: "vero",
        ReactionID: 141506,
        Repo: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReactionsDeleteForIssue

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.

Delete a reaction to an [issue](https://docs.github.com/enterprise-server@3.1/rest/reference/issues/).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#delete-an-issue-reaction>

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
    res, err := s.Reactions.ReactionsDeleteForIssue(ctx, operations.ReactionsDeleteForIssueRequest{
        IssueNumber: 865946,
        Owner: "nemo",
        ReactionID: 441321,
        Repo: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReactionsDeleteForIssueComment

**Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.

Delete a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.1/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#delete-an-issue-comment-reaction>

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
    res, err := s.Reactions.ReactionsDeleteForIssueComment(ctx, operations.ReactionsDeleteForIssueCommentRequest{
        CommentID: 486410,
        Owner: "minima",
        ReactionID: 448369,
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

## ReactionsDeleteForPullRequestComment

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`

Delete a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.1/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#delete-a-pull-request-comment-reaction>

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
    res, err := s.Reactions.ReactionsDeleteForPullRequestComment(ctx, operations.ReactionsDeleteForPullRequestCommentRequest{
        CommentID: 567846,
        Owner: "dolores",
        ReactionID: 621169,
        Repo: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReactionsDeleteForTeamDiscussion

**Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.

Delete a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.1/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#delete-team-discussion-reaction>

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
    res, err := s.Reactions.ReactionsDeleteForTeamDiscussion(ctx, operations.ReactionsDeleteForTeamDiscussionRequest{
        DiscussionNumber: 498180,
        Org: "voluptate",
        ReactionID: 866789,
        TeamSlug: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReactionsDeleteForTeamDiscussionComment

**Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.

Delete a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.1/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#delete-team-discussion-comment-reaction>

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
    res, err := s.Reactions.ReactionsDeleteForTeamDiscussionComment(ctx, operations.ReactionsDeleteForTeamDiscussionCommentRequest{
        CommentNumber: 627735,
        DiscussionNumber: 763165,
        Org: "ex",
        ReactionID: 311486,
        TeamSlug: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~ReactionsDeleteLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).

OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@3.1/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@3.1/rest/reference/teams#discussion-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions/#delete-a-reaction-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Reactions.ReactionsDeleteLegacy(ctx, operations.ReactionsDeleteLegacyRequest{
        ReactionID: 888616,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReactionsListForCommitComment

List the reactions to a [commit comment](https://docs.github.com/enterprise-server@3.1/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#list-reactions-for-a-commit-comment>

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
    res, err := s.Reactions.ReactionsListForCommitComment(ctx, operations.ReactionsListForCommitCommentRequest{
        CommentID: 810839,
        Content: operations.ReactionsListForCommitCommentContentEnumHooray.ToPointer(),
        Owner: "exercitationem",
        Page: sdk.Int64(463344),
        PerPage: sdk.Int64(211455),
        Repo: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reactions != nil {
        // handle response
    }
}
```

## ReactionsListForIssue

List the reactions to an [issue](https://docs.github.com/enterprise-server@3.1/rest/reference/issues).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#list-reactions-for-an-issue>

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
    res, err := s.Reactions.ReactionsListForIssue(ctx, operations.ReactionsListForIssueRequest{
        Content: operations.ReactionsListForIssueContentEnumPlus1.ToPointer(),
        IssueNumber: 575534,
        Owner: "vero",
        Page: sdk.Int64(194901),
        PerPage: sdk.Int64(918547),
        Repo: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reactions != nil {
        // handle response
    }
}
```

## ReactionsListForIssueComment

List the reactions to an [issue comment](https://docs.github.com/enterprise-server@3.1/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#list-reactions-for-an-issue-comment>

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
    res, err := s.Reactions.ReactionsListForIssueComment(ctx, operations.ReactionsListForIssueCommentRequest{
        CommentID: 120120,
        Content: operations.ReactionsListForIssueCommentContentEnumEyes.ToPointer(),
        Owner: "veniam",
        Page: sdk.Int64(659268),
        PerPage: sdk.Int64(175372),
        Repo: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reactions != nil {
        // handle response
    }
}
```

## ReactionsListForPullRequestReviewComment

List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@3.1/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment>

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
    res, err := s.Reactions.ReactionsListForPullRequestReviewComment(ctx, operations.ReactionsListForPullRequestReviewCommentRequest{
        CommentID: 115898,
        Content: operations.ReactionsListForPullRequestReviewCommentContentEnumMinus1.ToPointer(),
        Owner: "necessitatibus",
        Page: sdk.Int64(748224),
        PerPage: sdk.Int64(56877),
        Repo: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reactions != nil {
        // handle response
    }
}
```

## ReactionsListForTeamDiscussionCommentInOrg

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.1/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#list-reactions-for-a-team-discussion-comment>

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
    res, err := s.Reactions.ReactionsListForTeamDiscussionCommentInOrg(ctx, operations.ReactionsListForTeamDiscussionCommentInOrgRequest{
        CommentNumber: 980486,
        Content: operations.ReactionsListForTeamDiscussionCommentInOrgContentEnumPlus1.ToPointer(),
        DiscussionNumber: 96450,
        Org: "laboriosam",
        Page: sdk.Int64(863471),
        PerPage: sdk.Int64(729448),
        TeamSlug: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reactions != nil {
        // handle response
    }
}
```

## ~~ReactionsListForTeamDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.1/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Reactions.ReactionsListForTeamDiscussionCommentLegacy(ctx, operations.ReactionsListForTeamDiscussionCommentLegacyRequest{
        CommentNumber: 578210,
        Content: operations.ReactionsListForTeamDiscussionCommentLegacyContentEnumLaugh.ToPointer(),
        DiscussionNumber: 306382,
        Page: sdk.Int64(342342),
        PerPage: sdk.Int64(988749),
        TeamID: 757364,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reactions != nil {
        // handle response
    }
}
```

## ReactionsListForTeamDiscussionInOrg

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.1/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#list-reactions-for-a-team-discussion>

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
    res, err := s.Reactions.ReactionsListForTeamDiscussionInOrg(ctx, operations.ReactionsListForTeamDiscussionInOrgRequest{
        Content: operations.ReactionsListForTeamDiscussionInOrgContentEnumHeart.ToPointer(),
        DiscussionNumber: 314573,
        Org: "hic",
        Page: sdk.Int64(657319),
        PerPage: sdk.Int64(559774),
        TeamSlug: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reactions != nil {
        // handle response
    }
}
```

## ~~ReactionsListForTeamDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.1/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Reactions.ReactionsListForTeamDiscussionLegacy(ctx, operations.ReactionsListForTeamDiscussionLegacyRequest{
        Content: operations.ReactionsListForTeamDiscussionLegacyContentEnumHeart.ToPointer(),
        DiscussionNumber: 484966,
        Page: sdk.Int64(51170),
        PerPage: sdk.Int64(901163),
        TeamID: 104078,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reactions != nil {
        // handle response
    }
}
```
