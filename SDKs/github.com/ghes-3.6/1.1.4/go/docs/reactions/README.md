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

Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.6/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#create-reaction-for-a-commit-comment>

### Example Usage

```go
package main

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
            Content: operations.ReactionsCreateForCommitCommentRequestBodyContentEnumHooray,
        },
        CommentID: 326118,
        Owner: "libero",
        Repo: "magnam",
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

Create a reaction to an [issue](https://docs.github.com/enterprise-server@3.6/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#create-reaction-for-an-issue>

### Example Usage

```go
package main

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
            Content: operations.ReactionsCreateForIssueRequestBodyContentEnumPlus1,
        },
        IssueNumber: 266788,
        Owner: "eum",
        Repo: "nesciunt",
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

Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.6/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#create-reaction-for-an-issue-comment>

### Example Usage

```go
package main

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
            Content: operations.ReactionsCreateForIssueCommentRequestBodyContentEnumHooray,
        },
        CommentID: 492632,
        Owner: "fugiat",
        Repo: "nostrum",
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

Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.6/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment>

### Example Usage

```go
package main

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
        CommentID: 330600,
        Owner: "reiciendis",
        Repo: "ab",
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

Create a reaction to a [release](https://docs.github.com/enterprise-server@3.6/rest/reference/repos#releases). A response with a `Status: 200 OK` means that you already added the reaction type to this release.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions/#create-reaction-for-a-release>

### Example Usage

```go
package main

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
        Owner: "aut",
        ReleaseID: 13508,
        Repo: "eveniet",
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

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.6/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.6/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#create-reaction-for-a-team-discussion-comment>

### Example Usage

```go
package main

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
            Content: operations.ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnumConfused,
        },
        CommentNumber: 413758,
        DiscussionNumber: 256114,
        Org: "dolorum",
        TeamSlug: "possimus",
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

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.6/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.6/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy>

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
        CommentNumber: 232772,
        DiscussionNumber: 200637,
        TeamID: 310629,
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

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.6/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.6/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#create-reaction-for-a-team-discussion>

### Example Usage

```go
package main

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
            Content: operations.ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnumEyes,
        },
        DiscussionNumber: 791228,
        Org: "sunt",
        TeamSlug: "distinctio",
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

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.6/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.6/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy>

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
            Content: operations.ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnumConfused,
        },
        DiscussionNumber: 558051,
        TeamID: 91728,
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

Delete a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.6/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#delete-a-commit-comment-reaction>

### Example Usage

```go
package main

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
        CommentID: 704948,
        Owner: "amet",
        ReactionID: 418637,
        Repo: "fuga",
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

Delete a reaction to an [issue](https://docs.github.com/enterprise-server@3.6/rest/reference/issues/).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#delete-an-issue-reaction>

### Example Usage

```go
package main

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
        IssueNumber: 5310,
        Owner: "rem",
        ReactionID: 11355,
        Repo: "quos",
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

Delete a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.6/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#delete-an-issue-comment-reaction>

### Example Usage

```go
package main

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
        CommentID: 511222,
        Owner: "repellendus",
        ReactionID: 83291,
        Repo: "quae",
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

Delete a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.6/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#delete-a-pull-request-comment-reaction>

### Example Usage

```go
package main

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
        CommentID: 51075,
        Owner: "saepe",
        ReactionID: 965517,
        Repo: "mollitia",
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

Delete a reaction to a [release](https://docs.github.com/enterprise-server@3.6/rest/reference/repos#releases).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions/#delete-a-release-reaction>

### Example Usage

```go
package main

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
        Owner: "nulla",
        ReactionID: 640907,
        ReleaseID: 152027,
        Repo: "voluptatem",
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

Delete a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.6/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.6/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#delete-team-discussion-reaction>

### Example Usage

```go
package main

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
        DiscussionNumber: 664,
        Org: "eveniet",
        ReactionID: 941668,
        TeamSlug: "voluptatem",
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

Delete a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.6/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.6/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#delete-team-discussion-comment-reaction>

### Example Usage

```go
package main

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
        CommentNumber: 278325,
        DiscussionNumber: 185448,
        Org: "qui",
        ReactionID: 895912,
        TeamSlug: "harum",
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

List the reactions to a [commit comment](https://docs.github.com/enterprise-server@3.6/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#list-reactions-for-a-commit-comment>

### Example Usage

```go
package main

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
        CommentID: 126727,
        Content: operations.ReactionsListForCommitCommentContentEnumPlus1.ToPointer(),
        Owner: "aliquid",
        Page: sdk.Int64(264649),
        PerPage: sdk.Int64(760049),
        Repo: "voluptatibus",
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

List the reactions to an [issue](https://docs.github.com/enterprise-server@3.6/rest/reference/issues).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#list-reactions-for-an-issue>

### Example Usage

```go
package main

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
        Content: operations.ReactionsListForIssueContentEnumHeart.ToPointer(),
        IssueNumber: 639463,
        Owner: "libero",
        Page: sdk.Int64(520678),
        PerPage: sdk.Int64(192846),
        Repo: "aliquid",
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

List the reactions to an [issue comment](https://docs.github.com/enterprise-server@3.6/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#list-reactions-for-an-issue-comment>

### Example Usage

```go
package main

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
        CommentID: 412052,
        Content: operations.ReactionsListForIssueCommentContentEnumRocket.ToPointer(),
        Owner: "ducimus",
        Page: sdk.Int64(140957),
        PerPage: sdk.Int64(243623),
        Repo: "reiciendis",
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

List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@3.6/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment>

### Example Usage

```go
package main

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
        CommentID: 997918,
        Content: operations.ReactionsListForPullRequestReviewCommentContentEnumRocket.ToPointer(),
        Owner: "laborum",
        Page: sdk.Int64(617657),
        PerPage: sdk.Int64(883780),
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

List the reactions to a [release](https://docs.github.com/enterprise-server@3.6/rest/reference/repos#releases).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions/#list-reactions-for-a-release>

### Example Usage

```go
package main

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
        Owner: "rerum",
        Page: sdk.Int64(924840),
        PerPage: sdk.Int64(913285),
        ReleaseID: 251627,
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

## ReactionsListForTeamDiscussionCommentInOrg

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.6/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.6/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#list-reactions-for-a-team-discussion-comment>

### Example Usage

```go
package main

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
        CommentNumber: 157884,
        Content: operations.ReactionsListForTeamDiscussionCommentInOrgContentEnumLaugh.ToPointer(),
        DiscussionNumber: 786860,
        Org: "dicta",
        Page: sdk.Int64(973017),
        PerPage: sdk.Int64(754901),
        TeamSlug: "quae",
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

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.6/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.6/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy>

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
        CommentNumber: 885022,
        Content: operations.ReactionsListForTeamDiscussionCommentLegacyContentEnumPlus1.ToPointer(),
        DiscussionNumber: 100251,
        Page: sdk.Int64(317898),
        PerPage: sdk.Int64(758985),
        TeamID: 525951,
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

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.6/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.6/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#list-reactions-for-a-team-discussion>

### Example Usage

```go
package main

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
        Content: operations.ReactionsListForTeamDiscussionInOrgContentEnumPlus1.ToPointer(),
        DiscussionNumber: 704271,
        Org: "reiciendis",
        Page: sdk.Int64(955551),
        PerPage: sdk.Int64(615058),
        TeamSlug: "dicta",
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

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.6/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.6/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy>

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
        DiscussionNumber: 356315,
        Page: sdk.Int64(295950),
        PerPage: sdk.Int64(266284),
        TeamID: 929292,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reactions != nil {
        // handle response
    }
}
```
