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

Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-a-commit-comment>

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
            Content: operations.ReactionsCreateForCommitCommentRequestBodyContentEnumPlus1,
        },
        CommentID: 574092,
        Owner: "accusamus",
        Repo: "eos",
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

Create a reaction to an [issue](https://docs.github.com/enterprise-server@3.5/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-an-issue>

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
            Content: operations.ReactionsCreateForIssueRequestBodyContentEnumHeart,
        },
        IssueNumber: 115861,
        Owner: "voluptatem",
        Repo: "velit",
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

Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.5/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-an-issue-comment>

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
            Content: operations.ReactionsCreateForIssueCommentRequestBodyContentEnumMinus1,
        },
        CommentID: 124289,
        Owner: "a",
        Repo: "dolor",
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

Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.5/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment>

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
            Content: operations.ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnumHeart,
        },
        CommentID: 539813,
        Owner: "beatae",
        Repo: "at",
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

Create a reaction to a [release](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#releases). A response with a `Status: 200 OK` means that you already added the reaction type to this release.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#create-reaction-for-a-release>

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
            Content: operations.ReactionsCreateForReleaseRequestBodyContentEnumLaugh,
        },
        Owner: "minus",
        ReleaseID: 456704,
        Repo: "voluptatem",
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

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-a-team-discussion-comment>

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
            Content: operations.ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnumPlus1,
        },
        CommentNumber: 698558,
        DiscussionNumber: 411615,
        Org: "aperiam",
        TeamSlug: "dignissimos",
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

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy>

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
            Content: operations.ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnumEyes,
        },
        CommentNumber: 243678,
        DiscussionNumber: 784115,
        TeamID: 588639,
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

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-a-team-discussion>

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
        DiscussionNumber: 753240,
        Org: "dignissimos",
        TeamSlug: "consectetur",
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

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy>

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
        DiscussionNumber: 620500,
        TeamID: 839807,
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

Delete a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#delete-a-commit-comment-reaction>

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
        CommentID: 639622,
        Owner: "amet",
        ReactionID: 948541,
        Repo: "aspernatur",
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

Delete a reaction to an [issue](https://docs.github.com/enterprise-server@3.5/rest/reference/issues/).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#delete-an-issue-reaction>

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
        IssueNumber: 778276,
        Owner: "itaque",
        ReactionID: 848346,
        Repo: "laborum",
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

Delete a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.5/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#delete-an-issue-comment-reaction>

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
        CommentID: 490420,
        Owner: "vero",
        ReactionID: 185348,
        Repo: "consectetur",
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

Delete a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.5/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#delete-a-pull-request-comment-reaction>

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
        CommentID: 995816,
        Owner: "explicabo",
        ReactionID: 129355,
        Repo: "exercitationem",
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

Delete a reaction to a [release](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#releases).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#delete-a-release-reaction>

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
        Owner: "nihil",
        ReactionID: 252700,
        ReleaseID: 68093,
        Repo: "illo",
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

Delete a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#delete-team-discussion-reaction>

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
        DiscussionNumber: 943851,
        Org: "deserunt",
        ReactionID: 964925,
        TeamSlug: "non",
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

Delete a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#delete-team-discussion-comment-reaction>

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
        CommentNumber: 719389,
        DiscussionNumber: 450224,
        Org: "exercitationem",
        ReactionID: 288300,
        TeamSlug: "numquam",
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

List the reactions to a [commit comment](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-a-commit-comment>

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
        CommentID: 921193,
        Content: operations.ReactionsListForCommitCommentContentEnumLaugh.ToPointer(),
        Owner: "in",
        Page: sdk.Int64(127294),
        PerPage: sdk.Int64(879857),
        Repo: "rem",
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

List the reactions to an [issue](https://docs.github.com/enterprise-server@3.5/rest/reference/issues).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-an-issue>

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
        IssueNumber: 141817,
        Owner: "deleniti",
        Page: sdk.Int64(316730),
        PerPage: sdk.Int64(452730),
        Repo: "similique",
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

List the reactions to an [issue comment](https://docs.github.com/enterprise-server@3.5/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-an-issue-comment>

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
        CommentID: 326118,
        Content: operations.ReactionsListForIssueCommentContentEnumHooray.ToPointer(),
        Owner: "magnam",
        Page: sdk.Int64(24272),
        PerPage: sdk.Int64(266788),
        Repo: "eum",
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

List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@3.5/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment>

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
        CommentID: 199529,
        Content: operations.ReactionsListForPullRequestReviewCommentContentEnumHooray.ToPointer(),
        Owner: "dignissimos",
        Page: sdk.Int64(853246),
        PerPage: sdk.Int64(345138),
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

## ReactionsListForRelease

List the reactions to a [release](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#releases).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#list-reactions-for-a-release>

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
        Content: operations.ReactionsListForReleaseContentEnumLaugh.ToPointer(),
        Owner: "reiciendis",
        Page: sdk.Int64(66207),
        PerPage: sdk.Int64(265632),
        ReleaseID: 13865,
        Repo: "aut",
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

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-a-team-discussion-comment>

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
        CommentNumber: 911657,
        Content: operations.ReactionsListForTeamDiscussionCommentInOrgContentEnumConfused.ToPointer(),
        DiscussionNumber: 413758,
        Org: "numquam",
        Page: sdk.Int64(677045),
        PerPage: sdk.Int64(823718),
        TeamSlug: "voluptate",
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

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy>

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
        CommentNumber: 232772,
        Content: operations.ReactionsListForTeamDiscussionCommentLegacyContentEnumMinus1.ToPointer(),
        DiscussionNumber: 310629,
        Page: sdk.Int64(929476),
        PerPage: sdk.Int64(791228),
        TeamID: 122662,
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

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-a-team-discussion>

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
        Content: operations.ReactionsListForTeamDiscussionInOrgContentEnumHooray.ToPointer(),
        DiscussionNumber: 481375,
        Org: "quas",
        Page: sdk.Int64(91728),
        PerPage: sdk.Int64(704948),
        TeamSlug: "amet",
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

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy>

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
        DiscussionNumber: 685415,
        Page: sdk.Int64(5310),
        PerPage: sdk.Int64(526413),
        TeamID: 11355,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reactions != nil {
        // handle response
    }
}
```
