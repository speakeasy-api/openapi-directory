# reactions

## Overview

Interact with reactions to various GitHub entities.

### Available Operations

* [reactionsCreateForCommitComment](#reactionscreateforcommitcomment) - Create reaction for a commit comment
* [reactionsCreateForIssue](#reactionscreateforissue) - Create reaction for an issue
* [reactionsCreateForIssueComment](#reactionscreateforissuecomment) - Create reaction for an issue comment
* [reactionsCreateForPullRequestReviewComment](#reactionscreateforpullrequestreviewcomment) - Create reaction for a pull request review comment
* [reactionsCreateForRelease](#reactionscreateforrelease) - Create reaction for a release
* [reactionsCreateForTeamDiscussionCommentInOrg](#reactionscreateforteamdiscussioncommentinorg) - Create reaction for a team discussion comment
* [~~reactionsCreateForTeamDiscussionCommentLegacy~~](#reactionscreateforteamdiscussioncommentlegacy) - Create reaction for a team discussion comment (Legacy) :warning: **Deprecated**
* [reactionsCreateForTeamDiscussionInOrg](#reactionscreateforteamdiscussioninorg) - Create reaction for a team discussion
* [~~reactionsCreateForTeamDiscussionLegacy~~](#reactionscreateforteamdiscussionlegacy) - Create reaction for a team discussion (Legacy) :warning: **Deprecated**
* [reactionsDeleteForCommitComment](#reactionsdeleteforcommitcomment) - Delete a commit comment reaction
* [reactionsDeleteForIssue](#reactionsdeleteforissue) - Delete an issue reaction
* [reactionsDeleteForIssueComment](#reactionsdeleteforissuecomment) - Delete an issue comment reaction
* [reactionsDeleteForPullRequestComment](#reactionsdeleteforpullrequestcomment) - Delete a pull request comment reaction
* [reactionsDeleteForRelease](#reactionsdeleteforrelease) - Delete a release reaction
* [reactionsDeleteForTeamDiscussion](#reactionsdeleteforteamdiscussion) - Delete team discussion reaction
* [reactionsDeleteForTeamDiscussionComment](#reactionsdeleteforteamdiscussioncomment) - Delete team discussion comment reaction
* [~~reactionsDeleteLegacy~~](#reactionsdeletelegacy) - Delete a reaction (Legacy) :warning: **Deprecated**
* [reactionsListForCommitComment](#reactionslistforcommitcomment) - List reactions for a commit comment
* [reactionsListForIssue](#reactionslistforissue) - List reactions for an issue
* [reactionsListForIssueComment](#reactionslistforissuecomment) - List reactions for an issue comment
* [reactionsListForPullRequestReviewComment](#reactionslistforpullrequestreviewcomment) - List reactions for a pull request review comment
* [reactionsListForRelease](#reactionslistforrelease) - List reactions for a release
* [reactionsListForTeamDiscussionCommentInOrg](#reactionslistforteamdiscussioncommentinorg) - List reactions for a team discussion comment
* [~~reactionsListForTeamDiscussionCommentLegacy~~](#reactionslistforteamdiscussioncommentlegacy) - List reactions for a team discussion comment (Legacy) :warning: **Deprecated**
* [reactionsListForTeamDiscussionInOrg](#reactionslistforteamdiscussioninorg) - List reactions for a team discussion
* [~~reactionsListForTeamDiscussionLegacy~~](#reactionslistforteamdiscussionlegacy) - List reactions for a team discussion (Legacy) :warning: **Deprecated**

## reactionsCreateForCommitComment

Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-a-commit-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForCommitCommentRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForCommitCommentRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForCommitCommentRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForCommitCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForCommitCommentRequest req = new ReactionsCreateForCommitCommentRequest(                new ReactionsCreateForCommitCommentRequestBody(ReactionsCreateForCommitCommentRequestBodyContentEnum.MINUS1);, 253625L, "numquam", "nesciunt");            

            ReactionsCreateForCommitCommentResponse res = sdk.reactions.reactionsCreateForCommitComment(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsCreateForIssue

Create a reaction to an [issue](https://docs.github.com/enterprise-server@3.3/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForIssueRequest req = new ReactionsCreateForIssueRequest(                new ReactionsCreateForIssueRequestBody(ReactionsCreateForIssueRequestBodyContentEnum.ROCKET);, 637856L, "dignissimos", "optio");            

            ReactionsCreateForIssueResponse res = sdk.reactions.reactionsCreateForIssue(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsCreateForIssueComment

Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.3/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-an-issue-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueCommentRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueCommentRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueCommentRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForIssueCommentRequest req = new ReactionsCreateForIssueCommentRequest(                new ReactionsCreateForIssueCommentRequestBody(ReactionsCreateForIssueCommentRequestBodyContentEnum.EYES);, 359111L, "qui", "expedita");            

            ReactionsCreateForIssueCommentResponse res = sdk.reactions.reactionsCreateForIssueComment(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsCreateForPullRequestReviewComment

Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.3/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForPullRequestReviewCommentRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForPullRequestReviewCommentRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForPullRequestReviewCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForPullRequestReviewCommentRequest req = new ReactionsCreateForPullRequestReviewCommentRequest(                new ReactionsCreateForPullRequestReviewCommentRequestBody(ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum.HEART);, 587375L, "minima", "placeat");            

            ReactionsCreateForPullRequestReviewCommentResponse res = sdk.reactions.reactionsCreateForPullRequestReviewComment(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsCreateForRelease

Create a reaction to a [release](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#releases). A response with a `Status: 200 OK` means that you already added the reaction type to this release.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#create-reaction-for-a-release>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForReleaseRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForReleaseRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForReleaseRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForReleaseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForReleaseRequest req = new ReactionsCreateForReleaseRequest(                new ReactionsCreateForReleaseRequestBody(ReactionsCreateForReleaseRequestBodyContentEnum.LAUGH);, "neque", 446877L, "minus");            

            ReactionsCreateForReleaseResponse res = sdk.reactions.reactionsCreateForRelease(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsCreateForTeamDiscussionCommentInOrg

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-a-team-discussion-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionCommentInOrgRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionCommentInOrgRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionCommentInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForTeamDiscussionCommentInOrgRequest req = new ReactionsCreateForTeamDiscussionCommentInOrgRequest(                new ReactionsCreateForTeamDiscussionCommentInOrgRequestBody(ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum.CONFUSED);, 266408L, 357347L, "magnam", "voluptates");            

            ReactionsCreateForTeamDiscussionCommentInOrgResponse res = sdk.reactions.reactionsCreateForTeamDiscussionCommentInOrg(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~reactionsCreateForTeamDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionCommentLegacyRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionCommentLegacyRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionCommentLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForTeamDiscussionCommentLegacyRequest req = new ReactionsCreateForTeamDiscussionCommentLegacyRequest(                new ReactionsCreateForTeamDiscussionCommentLegacyRequestBody(ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum.EYES);, 731744L, 46013L, 727547L);            

            ReactionsCreateForTeamDiscussionCommentLegacyResponse res = sdk.reactions.reactionsCreateForTeamDiscussionCommentLegacy(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsCreateForTeamDiscussionInOrg

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-a-team-discussion>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionInOrgRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionInOrgRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForTeamDiscussionInOrgRequest req = new ReactionsCreateForTeamDiscussionInOrgRequest(                new ReactionsCreateForTeamDiscussionInOrgRequestBody(ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum.MINUS1);, 289913L, "totam", "occaecati");            

            ReactionsCreateForTeamDiscussionInOrgResponse res = sdk.reactions.reactionsCreateForTeamDiscussionInOrg(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~reactionsCreateForTeamDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionLegacyRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionLegacyRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForTeamDiscussionLegacyRequest req = new ReactionsCreateForTeamDiscussionLegacyRequest(                new ReactionsCreateForTeamDiscussionLegacyRequestBody(ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum.CONFUSED);, 779180L, 242099L);            

            ReactionsCreateForTeamDiscussionLegacyResponse res = sdk.reactions.reactionsCreateForTeamDiscussionLegacy(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsDeleteForCommitComment

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.

Delete a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#delete-a-commit-comment-reaction>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsDeleteForCommitCommentRequest;
import org.openapis.openapi.models.operations.ReactionsDeleteForCommitCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsDeleteForCommitCommentRequest req = new ReactionsDeleteForCommitCommentRequest(795591L, "fuga", 344530L, "est");            

            ReactionsDeleteForCommitCommentResponse res = sdk.reactions.reactionsDeleteForCommitComment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsDeleteForIssue

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.

Delete a reaction to an [issue](https://docs.github.com/enterprise-server@3.3/rest/reference/issues/).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#delete-an-issue-reaction>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsDeleteForIssueRequest;
import org.openapis.openapi.models.operations.ReactionsDeleteForIssueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsDeleteForIssueRequest req = new ReactionsDeleteForIssueRequest(770873L, "delectus", 735894L, "vero");            

            ReactionsDeleteForIssueResponse res = sdk.reactions.reactionsDeleteForIssue(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsDeleteForIssueComment

**Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.

Delete a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.3/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#delete-an-issue-comment-reaction>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsDeleteForIssueCommentRequest;
import org.openapis.openapi.models.operations.ReactionsDeleteForIssueCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsDeleteForIssueCommentRequest req = new ReactionsDeleteForIssueCommentRequest(141506L, "repellat", 865946L, "nemo");            

            ReactionsDeleteForIssueCommentResponse res = sdk.reactions.reactionsDeleteForIssueComment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsDeleteForPullRequestComment

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`

Delete a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.3/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#delete-a-pull-request-comment-reaction>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsDeleteForPullRequestCommentRequest;
import org.openapis.openapi.models.operations.ReactionsDeleteForPullRequestCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsDeleteForPullRequestCommentRequest req = new ReactionsDeleteForPullRequestCommentRequest(441321L, "aperiam", 486410L, "minima");            

            ReactionsDeleteForPullRequestCommentResponse res = sdk.reactions.reactionsDeleteForPullRequestComment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsDeleteForRelease

**Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/releases/:release_id/reactions/:reaction_id`.

Delete a reaction to a [release](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#releases).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#delete-a-release-reaction>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsDeleteForReleaseRequest;
import org.openapis.openapi.models.operations.ReactionsDeleteForReleaseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsDeleteForReleaseRequest req = new ReactionsDeleteForReleaseRequest("in", 496915L, 567846L, "dolores");            

            ReactionsDeleteForReleaseResponse res = sdk.reactions.reactionsDeleteForRelease(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsDeleteForTeamDiscussion

**Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.

Delete a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#delete-team-discussion-reaction>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsDeleteForTeamDiscussionRequest;
import org.openapis.openapi.models.operations.ReactionsDeleteForTeamDiscussionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsDeleteForTeamDiscussionRequest req = new ReactionsDeleteForTeamDiscussionRequest(621169L, "veritatis", 498180L, "voluptate");            

            ReactionsDeleteForTeamDiscussionResponse res = sdk.reactions.reactionsDeleteForTeamDiscussion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsDeleteForTeamDiscussionComment

**Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.

Delete a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#delete-team-discussion-comment-reaction>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsDeleteForTeamDiscussionCommentRequest;
import org.openapis.openapi.models.operations.ReactionsDeleteForTeamDiscussionCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsDeleteForTeamDiscussionCommentRequest req = new ReactionsDeleteForTeamDiscussionCommentRequest(866789L, 932666L, "similique", 763165L, "ex");            

            ReactionsDeleteForTeamDiscussionCommentResponse res = sdk.reactions.reactionsDeleteForTeamDiscussionComment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~reactionsDeleteLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).

OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussion-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#delete-a-reaction-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsDeleteLegacyRequest;
import org.openapis.openapi.models.operations.ReactionsDeleteLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsDeleteLegacyRequest req = new ReactionsDeleteLegacyRequest(311486L);            

            ReactionsDeleteLegacyResponse res = sdk.reactions.reactionsDeleteLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsListForCommitComment

List the reactions to a [commit comment](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-a-commit-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForCommitCommentContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForCommitCommentRequest;
import org.openapis.openapi.models.operations.ReactionsListForCommitCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForCommitCommentRequest req = new ReactionsListForCommitCommentRequest(416692L, "officiis", "placeat") {{
                content = ReactionsListForCommitCommentContentEnum.HOORAY;
                page = 348192L;
                perPage = 463344L;
            }};            

            ReactionsListForCommitCommentResponse res = sdk.reactions.reactionsListForCommitComment(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsListForIssue

List the reactions to an [issue](https://docs.github.com/enterprise-server@3.3/rest/reference/issues).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForIssueContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForIssueRequest;
import org.openapis.openapi.models.operations.ReactionsListForIssueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForIssueRequest req = new ReactionsListForIssueRequest(211455L, "modi", "ipsa") {{
                content = ReactionsListForIssueContentEnum.HEART;
                page = 876027L;
                perPage = 194901L;
            }};            

            ReactionsListForIssueResponse res = sdk.reactions.reactionsListForIssue(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsListForIssueComment

List the reactions to an [issue comment](https://docs.github.com/enterprise-server@3.3/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-an-issue-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForIssueCommentContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForIssueCommentRequest;
import org.openapis.openapi.models.operations.ReactionsListForIssueCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForIssueCommentRequest req = new ReactionsListForIssueCommentRequest(918547L, "cum", "dicta") {{
                content = ReactionsListForIssueCommentContentEnum.EYES;
                page = 334474L;
                perPage = 659268L;
            }};            

            ReactionsListForIssueCommentResponse res = sdk.reactions.reactionsListForIssueComment(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsListForPullRequestReviewComment

List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@3.3/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForPullRequestReviewCommentContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForPullRequestReviewCommentRequest;
import org.openapis.openapi.models.operations.ReactionsListForPullRequestReviewCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForPullRequestReviewCommentRequest req = new ReactionsListForPullRequestReviewCommentRequest(175372L, "nam", "dicta") {{
                content = ReactionsListForPullRequestReviewCommentContentEnum.MINUS1;
                page = 899867L;
                perPage = 748224L;
            }};            

            ReactionsListForPullRequestReviewCommentResponse res = sdk.reactions.reactionsListForPullRequestReviewComment(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsListForRelease

List the reactions to a [release](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#releases).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#list-reactions-for-a-release>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForReleaseContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForReleaseRequest;
import org.openapis.openapi.models.operations.ReactionsListForReleaseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForReleaseRequest req = new ReactionsListForReleaseRequest("ipsa", 497357L, "maiores") {{
                content = ReactionsListForReleaseContentEnum.PLUS1;
                page = 96450L;
                perPage = 386447L;
            }};            

            ReactionsListForReleaseResponse res = sdk.reactions.reactionsListForRelease(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsListForTeamDiscussionCommentInOrg

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-a-team-discussion-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionCommentInOrgContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionCommentInOrgRequest;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionCommentInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForTeamDiscussionCommentInOrgRequest req = new ReactionsListForTeamDiscussionCommentInOrgRequest(863471L, 729448L, "excepturi", "occaecati") {{
                content = ReactionsListForTeamDiscussionCommentInOrgContentEnum.LAUGH;
                page = 306382L;
                perPage = 342342L;
            }};            

            ReactionsListForTeamDiscussionCommentInOrgResponse res = sdk.reactions.reactionsListForTeamDiscussionCommentInOrg(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~reactionsListForTeamDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionCommentLegacyContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionCommentLegacyRequest;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionCommentLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForTeamDiscussionCommentLegacyRequest req = new ReactionsListForTeamDiscussionCommentLegacyRequest(988749L, 757364L, 574032L) {{
                content = ReactionsListForTeamDiscussionCommentLegacyContentEnum.LAUGH;
                page = 944950L;
                perPage = 657319L;
            }};            

            ReactionsListForTeamDiscussionCommentLegacyResponse res = sdk.reactions.reactionsListForTeamDiscussionCommentLegacy(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsListForTeamDiscussionInOrg

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-a-team-discussion>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionInOrgContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionInOrgRequest;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForTeamDiscussionInOrgRequest req = new ReactionsListForTeamDiscussionInOrgRequest(559774L, "totam", "molestias") {{
                content = ReactionsListForTeamDiscussionInOrgContentEnum.CONFUSED;
                page = 51170L;
                perPage = 901163L;
            }};            

            ReactionsListForTeamDiscussionInOrgResponse res = sdk.reactions.reactionsListForTeamDiscussionInOrg(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~reactionsListForTeamDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/enterprise-server@3.3/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.3/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.3/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionLegacyContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionLegacyRequest;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForTeamDiscussionLegacyRequest req = new ReactionsListForTeamDiscussionLegacyRequest(104078L, 554645L) {{
                content = ReactionsListForTeamDiscussionLegacyContentEnum.HEART;
                page = 826862L;
                perPage = 731634L;
            }};            

            ReactionsListForTeamDiscussionLegacyResponse res = sdk.reactions.reactionsListForTeamDiscussionLegacy(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
