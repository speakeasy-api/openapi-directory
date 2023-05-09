# Reactions

## Overview

Interact with reactions to various GitHub entities.

### Available Operations

* [ReactionsCreateForCommitComment](#reactionscreateforcommitcomment) - Create reaction for a commit comment
* [ReactionsCreateForIssue](#reactionscreateforissue) - Create reaction for an issue
* [ReactionsCreateForIssueComment](#reactionscreateforissuecomment) - Create reaction for an issue comment
* [ReactionsCreateForPullRequestReviewComment](#reactionscreateforpullrequestreviewcomment) - Create reaction for a pull request review comment
* [ReactionsCreateForRelease](#reactionscreateforrelease) - Create reaction for a release
* [ReactionsCreateForTeamDiscussionCommentInOrg](#reactionscreateforteamdiscussioncommentinorg) - Create reaction for a team discussion comment
* [~~ReactionsCreateForTeamDiscussionCommentLegacy~~](#reactionscreateforteamdiscussioncommentlegacy) - Create reaction for a team discussion comment (Legacy) :warning: **Deprecated**
* [ReactionsCreateForTeamDiscussionInOrg](#reactionscreateforteamdiscussioninorg) - Create reaction for a team discussion
* [~~ReactionsCreateForTeamDiscussionLegacy~~](#reactionscreateforteamdiscussionlegacy) - Create reaction for a team discussion (Legacy) :warning: **Deprecated**
* [ReactionsDeleteForCommitComment](#reactionsdeleteforcommitcomment) - Delete a commit comment reaction
* [ReactionsDeleteForIssue](#reactionsdeleteforissue) - Delete an issue reaction
* [ReactionsDeleteForIssueComment](#reactionsdeleteforissuecomment) - Delete an issue comment reaction
* [ReactionsDeleteForPullRequestComment](#reactionsdeleteforpullrequestcomment) - Delete a pull request comment reaction
* [ReactionsDeleteForRelease](#reactionsdeleteforrelease) - Delete a release reaction
* [ReactionsDeleteForTeamDiscussion](#reactionsdeleteforteamdiscussion) - Delete team discussion reaction
* [ReactionsDeleteForTeamDiscussionComment](#reactionsdeleteforteamdiscussioncomment) - Delete team discussion comment reaction
* [~~ReactionsDeleteLegacy~~](#reactionsdeletelegacy) - Delete a reaction (Legacy) :warning: **Deprecated**
* [ReactionsListForCommitComment](#reactionslistforcommitcomment) - List reactions for a commit comment
* [ReactionsListForIssue](#reactionslistforissue) - List reactions for an issue
* [ReactionsListForIssueComment](#reactionslistforissuecomment) - List reactions for an issue comment
* [ReactionsListForPullRequestReviewComment](#reactionslistforpullrequestreviewcomment) - List reactions for a pull request review comment
* [ReactionsListForRelease](#reactionslistforrelease) - List reactions for a release
* [ReactionsListForTeamDiscussionCommentInOrg](#reactionslistforteamdiscussioncommentinorg) - List reactions for a team discussion comment
* [~~ReactionsListForTeamDiscussionCommentLegacy~~](#reactionslistforteamdiscussioncommentlegacy) - List reactions for a team discussion comment (Legacy) :warning: **Deprecated**
* [ReactionsListForTeamDiscussionInOrg](#reactionslistforteamdiscussioninorg) - List reactions for a team discussion
* [~~ReactionsListForTeamDiscussionLegacy~~](#reactionslistforteamdiscussionlegacy) - List reactions for a team discussion (Legacy) :warning: **Deprecated**

## ReactionsCreateForCommitComment

Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-a-commit-comment>

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
            Content: operations.ReactionsCreateForCommitCommentRequestBodyContentEnumEyes,
        },
        CommentID: 735894,
        Owner: "vero",
        Repo: "odit",
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

Create a reaction to an [issue](https://docs.github.com/enterprise-server@3.3/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-an-issue>

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
            Content: operations.ReactionsCreateForIssueRequestBodyContentEnumEyes,
        },
        IssueNumber: 865946,
        Owner: "nemo",
        Repo: "reprehenderit",
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

Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.3/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-an-issue-comment>

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
            Content: operations.ReactionsCreateForIssueCommentRequestBodyContentEnumPlus1,
        },
        CommentID: 486410,
        Owner: "minima",
        Repo: "in",
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

Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.3/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment>

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
            Content: operations.ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnumConfused,
        },
        CommentID: 567846,
        Owner: "dolores",
        Repo: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reaction != nil {
        // handle response
    }
}
```

## ReactionsCreateForRelease

Create a reaction to a [release](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#releases). A response with a `Status: 200 OK` means that you already added the reaction type to this release.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#create-reaction-for-a-release>

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
    res, err := s.Reactions.ReactionsCreateForRelease(ctx, operations.ReactionsCreateForReleaseRequest{
        RequestBody: operations.ReactionsCreateForReleaseRequestBody{
            Content: operations.ReactionsCreateForReleaseRequestBodyContentEnumPlus1,
        },
        Owner: "ducimus",
        ReleaseID: 452729,
        Repo: "pariatur",
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

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-a-team-discussion-comment>

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
            Content: operations.ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnumEyes,
        },
        CommentNumber: 627735,
        DiscussionNumber: 763165,
        Org: "ex",
        TeamSlug: "quaerat",
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

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy>

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
            Content: operations.ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnumConfused,
        },
        CommentNumber: 888616,
        DiscussionNumber: 810839,
        TeamID: 697274,
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

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-a-team-discussion>

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
            Content: operations.ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnumLaugh,
        },
        DiscussionNumber: 463344,
        Org: "dolorem",
        TeamSlug: "modi",
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

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy>

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
            Content: operations.ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnumPlus1,
        },
        DiscussionNumber: 575534,
        TeamID: 876027,
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

Delete a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#delete-a-commit-comment-reaction>

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
        CommentID: 194901,
        Owner: "repudiandae",
        ReactionID: 741232,
        Repo: "dicta",
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

Delete a reaction to an [issue](https://docs.github.com/enterprise-server@3.3/rest/reference/issues/).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#delete-an-issue-reaction>

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
        IssueNumber: 936928,
        Owner: "veniam",
        ReactionID: 659268,
        Repo: "dolores",
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

Delete a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.3/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#delete-an-issue-comment-reaction>

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
        CommentID: 724994,
        Owner: "dicta",
        ReactionID: 164488,
        Repo: "necessitatibus",
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

Delete a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.3/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#delete-a-pull-request-comment-reaction>

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
        CommentID: 748224,
        Owner: "ipsa",
        ReactionID: 497357,
        Repo: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReactionsDeleteForRelease

**Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/releases/:release_id/reactions/:reaction_id`.

Delete a reaction to a [release](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#releases).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#delete-a-release-reaction>

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
    res, err := s.Reactions.ReactionsDeleteForRelease(ctx, operations.ReactionsDeleteForReleaseRequest{
        Owner: "veritatis",
        ReactionID: 96450,
        ReleaseID: 386447,
        Repo: "pariatur",
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

Delete a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#delete-team-discussion-reaction>

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
        DiscussionNumber: 729448,
        Org: "excepturi",
        ReactionID: 578210,
        TeamSlug: "nemo",
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

Delete a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#delete-team-discussion-comment-reaction>

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
        CommentNumber: 306382,
        DiscussionNumber: 342342,
        Org: "doloribus",
        ReactionID: 757364,
        TeamSlug: "sint",
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

OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussion-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#delete-a-reaction-legacy>

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
        ReactionID: 314573,
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

List the reactions to a [commit comment](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-a-commit-comment>

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
        CommentID: 944950,
        Content: operations.ReactionsListForCommitCommentContentEnumHooray.ToPointer(),
        Owner: "quas",
        Page: sdk.Int64(517326),
        PerPage: sdk.Int64(564667),
        Repo: "odio",
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

List the reactions to an [issue](https://docs.github.com/enterprise-server@3.3/rest/reference/issues).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-an-issue>

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
        IssueNumber: 901163,
        Owner: "architecto",
        Page: sdk.Int64(554645),
        PerPage: sdk.Int64(614438),
        Repo: "assumenda",
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

List the reactions to an [issue comment](https://docs.github.com/enterprise-server@3.3/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-an-issue-comment>

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
        CommentID: 731634,
        Content: operations.ReactionsListForIssueCommentContentEnumHooray.ToPointer(),
        Owner: "velit",
        Page: sdk.Int64(38557),
        PerPage: sdk.Int64(963976),
        Repo: "impedit",
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

List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@3.3/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment>

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
        CommentID: 741238,
        Content: operations.ReactionsListForPullRequestReviewCommentContentEnumMinus1.ToPointer(),
        Owner: "adipisci",
        Page: sdk.Int64(903150),
        PerPage: sdk.Int64(644420),
        Repo: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reactions != nil {
        // handle response
    }
}
```

## ReactionsListForRelease

List the reactions to a [release](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#releases).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#list-reactions-for-a-release>

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
    res, err := s.Reactions.ReactionsListForRelease(ctx, operations.ReactionsListForReleaseRequest{
        Content: operations.ReactionsListForReleaseContentEnumHeart.ToPointer(),
        Owner: "veniam",
        Page: sdk.Int64(727481),
        PerPage: sdk.Int64(99733),
        ReleaseID: 584593,
        Repo: "molestiae",
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

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-a-team-discussion-comment>

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
        CommentNumber: 756654,
        Content: operations.ReactionsListForTeamDiscussionCommentInOrgContentEnumRocket.ToPointer(),
        DiscussionNumber: 251464,
        Org: "magnam",
        Page: sdk.Int64(932296),
        PerPage: sdk.Int64(150935),
        TeamSlug: "asperiores",
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

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy>

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
        CommentNumber: 330267,
        Content: operations.ReactionsListForTeamDiscussionCommentLegacyContentEnumMinus1.ToPointer(),
        DiscussionNumber: 813880,
        Page: sdk.Int64(512905),
        PerPage: sdk.Int64(140384),
        TeamID: 863477,
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

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-a-team-discussion>

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
        Content: operations.ReactionsListForTeamDiscussionInOrgContentEnumMinus1.ToPointer(),
        DiscussionNumber: 347698,
        Org: "ab",
        Page: sdk.Int64(242637),
        PerPage: sdk.Int64(705710),
        TeamSlug: "tempore",
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

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy>

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
        Content: operations.ReactionsListForTeamDiscussionLegacyContentEnumConfused.ToPointer(),
        DiscussionNumber: 977518,
        Page: sdk.Int64(310840),
        PerPage: sdk.Int64(503748),
        TeamID: 718627,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reactions != nil {
        // handle response
    }
}
```
