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
* [ReactionsCreateForTeamDiscussionInOrg](#reactionscreateforteamdiscussioninorg) - Create reaction for a team discussion
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
* [ReactionsListForTeamDiscussionInOrg](#reactionslistforteamdiscussioninorg) - List reactions for a team discussion

## ReactionsCreateForCommitComment

Create a reaction to a [commit comment](https://docs.github.com/github-ae@latest/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#create-reaction-for-a-commit-comment>

### Example Usage

```go
package main

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
        CommentID: 922757,
        Owner: "nam",
        Repo: "dolore",
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

Create a reaction to an [issue](https://docs.github.com/github-ae@latest/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#create-reaction-for-an-issue>

### Example Usage

```go
package main

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
            Content: operations.ReactionsCreateForIssueRequestBodyContentEnumConfused,
        },
        IssueNumber: 453094,
        Owner: "sequi",
        Repo: "dignissimos",
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

Create a reaction to an [issue comment](https://docs.github.com/github-ae@latest/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#create-reaction-for-an-issue-comment>

### Example Usage

```go
package main

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
        CommentID: 778172,
        Owner: "deleniti",
        Repo: "quibusdam",
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

Create a reaction to a [pull request review comment](https://docs.github.com/github-ae@latest/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment>

### Example Usage

```go
package main

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
        CommentID: 139072,
        Owner: "voluptatibus",
        Repo: "vel",
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

Create a reaction to a [release](https://docs.github.com/github-ae@latest/rest/reference/repos#releases). A response with a `Status: 200 OK` means that you already added the reaction type to this release.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions/#create-reaction-for-a-release>

### Example Usage

```go
package main

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
        Owner: "quibusdam",
        ReleaseID: 78969,
        Repo: "facere",
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

Create a reaction to a [team discussion comment](https://docs.github.com/github-ae@latest/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/github-ae@latest/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#create-reaction-for-a-team-discussion-comment>

### Example Usage

```go
package main

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
        CommentNumber: 102413,
        DiscussionNumber: 975425,
        Org: "quia",
        TeamSlug: "porro",
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

Create a reaction to a [team discussion](https://docs.github.com/github-ae@latest/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/github-ae@latest/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#create-reaction-for-a-team-discussion>

### Example Usage

```go
package main

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
        DiscussionNumber: 247045,
        Org: "illo",
        TeamSlug: "accusantium",
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

Delete a reaction to a [commit comment](https://docs.github.com/github-ae@latest/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#delete-a-commit-comment-reaction>

### Example Usage

```go
package main

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
        CommentID: 424663,
        Owner: "ea",
        ReactionID: 107617,
        Repo: "vero",
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

Delete a reaction to an [issue](https://docs.github.com/github-ae@latest/rest/reference/issues/).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#delete-an-issue-reaction>

### Example Usage

```go
package main

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
        IssueNumber: 568218,
        Owner: "eum",
        ReactionID: 246557,
        Repo: "ut",
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

Delete a reaction to an [issue comment](https://docs.github.com/github-ae@latest/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#delete-an-issue-comment-reaction>

### Example Usage

```go
package main

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
        CommentID: 596433,
        Owner: "earum",
        ReactionID: 117525,
        Repo: "impedit",
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

Delete a reaction to a [pull request review comment](https://docs.github.com/github-ae@latest/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#delete-a-pull-request-comment-reaction>

### Example Usage

```go
package main

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
        CommentID: 975884,
        Owner: "iste",
        ReactionID: 932562,
        Repo: "alias",
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

Delete a reaction to a [release](https://docs.github.com/github-ae@latest/rest/reference/repos#releases).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions/#delete-a-release-reaction>

### Example Usage

```go
package main

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
        Owner: "nisi",
        ReactionID: 931505,
        ReleaseID: 242178,
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

## ReactionsDeleteForTeamDiscussion

**Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.

Delete a reaction to a [team discussion](https://docs.github.com/github-ae@latest/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/github-ae@latest/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#delete-team-discussion-reaction>

### Example Usage

```go
package main

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
        DiscussionNumber: 250398,
        Org: "dolor",
        ReactionID: 483394,
        TeamSlug: "sit",
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

Delete a reaction to a [team discussion comment](https://docs.github.com/github-ae@latest/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/github-ae@latest/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#delete-team-discussion-comment-reaction>

### Example Usage

```go
package main

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
        CommentNumber: 39992,
        DiscussionNumber: 7468,
        Org: "officia",
        ReactionID: 927403,
        TeamSlug: "ea",
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

List the reactions to a [commit comment](https://docs.github.com/github-ae@latest/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#list-reactions-for-a-commit-comment>

### Example Usage

```go
package main

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
        CommentID: 693153,
        Content: operations.ReactionsListForCommitCommentContentEnumConfused.ToPointer(),
        Owner: "facilis",
        Page: sdk.Int64(809365),
        PerPage: sdk.Int64(596065),
        Repo: "expedita",
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

List the reactions to an [issue](https://docs.github.com/github-ae@latest/rest/reference/issues).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#list-reactions-for-an-issue>

### Example Usage

```go
package main

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
        IssueNumber: 954334,
        Owner: "voluptate",
        Page: sdk.Int64(351936),
        PerPage: sdk.Int64(600193),
        Repo: "necessitatibus",
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

List the reactions to an [issue comment](https://docs.github.com/github-ae@latest/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#list-reactions-for-an-issue-comment>

### Example Usage

```go
package main

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
        CommentID: 654082,
        Content: operations.ReactionsListForIssueCommentContentEnumRocket.ToPointer(),
        Owner: "ipsam",
        Page: sdk.Int64(357425),
        PerPage: sdk.Int64(668234),
        Repo: "error",
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

List the reactions to a [pull request review comment](https://docs.github.com/github-ae@latest/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment>

### Example Usage

```go
package main

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
        CommentID: 456885,
        Content: operations.ReactionsListForPullRequestReviewCommentContentEnumLaugh.ToPointer(),
        Owner: "veritatis",
        Page: sdk.Int64(874400),
        PerPage: sdk.Int64(233173),
        Repo: "vitae",
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

List the reactions to a [release](https://docs.github.com/github-ae@latest/rest/reference/repos#releases).

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions/#list-reactions-for-a-release>

### Example Usage

```go
package main

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
        Content: operations.ReactionsListForReleaseContentEnumPlus1.ToPointer(),
        Owner: "dolorem",
        Page: sdk.Int64(322017),
        PerPage: sdk.Int64(183033),
        ReleaseID: 611328,
        Repo: "ex",
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

List the reactions to a [team discussion comment](https://docs.github.com/github-ae@latest/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/github-ae@latest/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#list-reactions-for-a-team-discussion-comment>

### Example Usage

```go
package main

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
        CommentNumber: 367626,
        Content: operations.ReactionsListForTeamDiscussionCommentInOrgContentEnumHooray.ToPointer(),
        DiscussionNumber: 726227,
        Org: "rem",
        Page: sdk.Int64(678060),
        PerPage: sdk.Int64(487676),
        TeamSlug: "fugit",
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

List the reactions to a [team discussion](https://docs.github.com/github-ae@latest/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/github-ae@latest/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/github-ae@latest/rest/reference/reactions#list-reactions-for-a-team-discussion>

### Example Usage

```go
package main

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
        DiscussionNumber: 168042,
        Org: "vel",
        Page: sdk.Int64(64435),
        PerPage: sdk.Int64(63553),
        TeamSlug: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reactions != nil {
        // handle response
    }
}
```
