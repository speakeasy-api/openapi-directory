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

Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.4/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#create-reaction-for-a-commit-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForCommitCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForCommitCommentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForCommitCommentRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForCommitCommentRequest();
    $request->requestBody = new ReactionsCreateForCommitCommentRequestBody();
    $request->requestBody->content = ReactionsCreateForCommitCommentRequestBodyContentEnum::HEART;
    $request->commentId = 75566;
    $request->owner = 'labore';
    $request->repo = 'assumenda';

    $response = $sdk->reactions->reactionsCreateForCommitComment($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForIssue

Create a reaction to an [issue](https://docs.github.com/enterprise-server@3.4/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#create-reaction-for-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForIssueRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForIssueRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForIssueRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForIssueRequest();
    $request->requestBody = new ReactionsCreateForIssueRequestBody();
    $request->requestBody->content = ReactionsCreateForIssueRequestBodyContentEnum::LAUGH;
    $request->issueNumber = 790463;
    $request->owner = 'provident';
    $request->repo = 'laudantium';

    $response = $sdk->reactions->reactionsCreateForIssue($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForIssueComment

Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.4/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#create-reaction-for-an-issue-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForIssueCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForIssueCommentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForIssueCommentRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForIssueCommentRequest();
    $request->requestBody = new ReactionsCreateForIssueCommentRequestBody();
    $request->requestBody->content = ReactionsCreateForIssueCommentRequestBodyContentEnum::EYES;
    $request->commentId = 9683;
    $request->owner = 'maxime';
    $request->repo = 'aspernatur';

    $response = $sdk->reactions->reactionsCreateForIssueComment($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForPullRequestReviewComment

Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.4/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForPullRequestReviewCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForPullRequestReviewCommentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForPullRequestReviewCommentRequest();
    $request->requestBody = new ReactionsCreateForPullRequestReviewCommentRequestBody();
    $request->requestBody->content = ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum::HOORAY;
    $request->commentId = 711991;
    $request->owner = 'quas';
    $request->repo = 'provident';

    $response = $sdk->reactions->reactionsCreateForPullRequestReviewComment($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForRelease

Create a reaction to a [release](https://docs.github.com/enterprise-server@3.4/rest/reference/repos#releases). A response with a `Status: 200 OK` means that you already added the reaction type to this release.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions/#create-reaction-for-a-release>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForReleaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForReleaseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForReleaseRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForReleaseRequest();
    $request->requestBody = new ReactionsCreateForReleaseRequestBody();
    $request->requestBody->content = ReactionsCreateForReleaseRequestBodyContentEnum::EYES;
    $request->owner = 'rerum';
    $request->releaseId = 492361;
    $request->repo = 'corporis';

    $response = $sdk->reactions->reactionsCreateForRelease($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForTeamDiscussionCommentInOrg

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#create-reaction-for-a-team-discussion-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionCommentInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionCommentInOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForTeamDiscussionCommentInOrgRequest();
    $request->requestBody = new ReactionsCreateForTeamDiscussionCommentInOrgRequestBody();
    $request->requestBody->content = ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum::ROCKET;
    $request->commentNumber = 629377;
    $request->discussionNumber = 833982;
    $request->org = 'iure';
    $request->teamSlug = 'dolorem';

    $response = $sdk->reactions->reactionsCreateForTeamDiscussionCommentInOrg($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~reactionsCreateForTeamDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionCommentLegacyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionCommentLegacyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForTeamDiscussionCommentLegacyRequest();
    $request->requestBody = new ReactionsCreateForTeamDiscussionCommentLegacyRequestBody();
    $request->requestBody->content = ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum::CONFUSED;
    $request->commentNumber = 771226;
    $request->discussionNumber = 415033;
    $request->teamId = 12171;

    $response = $sdk->reactions->reactionsCreateForTeamDiscussionCommentLegacy($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForTeamDiscussionInOrg

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#create-reaction-for-a-team-discussion>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionInOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForTeamDiscussionInOrgRequest();
    $request->requestBody = new ReactionsCreateForTeamDiscussionInOrgRequestBody();
    $request->requestBody->content = ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum::PLUS1;
    $request->discussionNumber = 322829;
    $request->org = 'quae';
    $request->teamSlug = 'amet';

    $response = $sdk->reactions->reactionsCreateForTeamDiscussionInOrg($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~reactionsCreateForTeamDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionLegacyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionLegacyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForTeamDiscussionLegacyRequest();
    $request->requestBody = new ReactionsCreateForTeamDiscussionLegacyRequestBody();
    $request->requestBody->content = ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum::ROCKET;
    $request->discussionNumber = 506863;
    $request->teamId = 695526;

    $response = $sdk->reactions->reactionsCreateForTeamDiscussionLegacy($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsDeleteForCommitComment

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.

Delete a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.4/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#delete-a-commit-comment-reaction>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsDeleteForCommitCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsDeleteForCommitCommentRequest();
    $request->commentId = 736853;
    $request->owner = 'amet';
    $request->reactionId = 97676;
    $request->repo = 'dicta';

    $response = $sdk->reactions->reactionsDeleteForCommitComment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsDeleteForIssue

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.

Delete a reaction to an [issue](https://docs.github.com/enterprise-server@3.4/rest/reference/issues/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#delete-an-issue-reaction>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsDeleteForIssueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsDeleteForIssueRequest();
    $request->issueNumber = 514922;
    $request->owner = 'doloremque';
    $request->reactionId = 938412;
    $request->repo = 'iusto';

    $response = $sdk->reactions->reactionsDeleteForIssue($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsDeleteForIssueComment

**Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.

Delete a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.4/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#delete-an-issue-comment-reaction>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsDeleteForIssueCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsDeleteForIssueCommentRequest();
    $request->commentId = 228646;
    $request->owner = 'provident';
    $request->reactionId = 677141;
    $request->repo = 'necessitatibus';

    $response = $sdk->reactions->reactionsDeleteForIssueComment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsDeleteForPullRequestComment

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`

Delete a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.4/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#delete-a-pull-request-comment-reaction>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsDeleteForPullRequestCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsDeleteForPullRequestCommentRequest();
    $request->commentId = 592880;
    $request->owner = 'repudiandae';
    $request->reactionId = 10063;
    $request->repo = 'nemo';

    $response = $sdk->reactions->reactionsDeleteForPullRequestComment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsDeleteForRelease

**Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/releases/:release_id/reactions/:reaction_id`.

Delete a reaction to a [release](https://docs.github.com/enterprise-server@3.4/rest/reference/repos#releases).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions/#delete-a-release-reaction>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsDeleteForReleaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsDeleteForReleaseRequest();
    $request->owner = 'molestiae';
    $request->reactionId = 930840;
    $request->releaseId = 708771;
    $request->repo = 'corrupti';

    $response = $sdk->reactions->reactionsDeleteForRelease($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsDeleteForTeamDiscussion

**Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.

Delete a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#delete-team-discussion-reaction>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsDeleteForTeamDiscussionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsDeleteForTeamDiscussionRequest();
    $request->discussionNumber = 43975;
    $request->org = 'sint';
    $request->reactionId = 879522;
    $request->teamSlug = 'eos';

    $response = $sdk->reactions->reactionsDeleteForTeamDiscussion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsDeleteForTeamDiscussionComment

**Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.

Delete a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#delete-team-discussion-comment-reaction>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsDeleteForTeamDiscussionCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsDeleteForTeamDiscussionCommentRequest();
    $request->commentNumber = 520081;
    $request->discussionNumber = 115861;
    $request->org = 'voluptatem';
    $request->reactionId = 244376;
    $request->teamSlug = 'dolor';

    $response = $sdk->reactions->reactionsDeleteForTeamDiscussionComment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~reactionsDeleteLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).

OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#discussion-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions/#delete-a-reaction-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsDeleteLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsDeleteLegacyRequest();
    $request->reactionId = 124289;

    $response = $sdk->reactions->reactionsDeleteLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForCommitComment

List the reactions to a [commit comment](https://docs.github.com/enterprise-server@3.4/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#list-reactions-for-a-commit-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForCommitCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForCommitCommentContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForCommitCommentRequest();
    $request->commentId = 953676;
    $request->content = ReactionsListForCommitCommentContentEnum::MINUS1;
    $request->owner = 'occaecati';
    $request->page = 539813;
    $request->perPage = 107472;
    $request->repo = 'at';

    $response = $sdk->reactions->reactionsListForCommitComment($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForIssue

List the reactions to an [issue](https://docs.github.com/enterprise-server@3.4/rest/reference/issues).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#list-reactions-for-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForIssueRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForIssueContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForIssueRequest();
    $request->content = ReactionsListForIssueContentEnum::LAUGH;
    $request->issueNumber = 794988;
    $request->owner = 'esse';
    $request->page = 32356;
    $request->perPage = 20950;
    $request->repo = 'rerum';

    $response = $sdk->reactions->reactionsListForIssue($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForIssueComment

List the reactions to an [issue comment](https://docs.github.com/enterprise-server@3.4/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#list-reactions-for-an-issue-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForIssueCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForIssueCommentContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForIssueCommentRequest();
    $request->commentId = 411615;
    $request->content = ReactionsListForIssueCommentContentEnum::PLUS1;
    $request->owner = 'dignissimos';
    $request->page = 998026;
    $request->perPage = 243678;
    $request->repo = 'porro';

    $response = $sdk->reactions->reactionsListForIssueComment($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForPullRequestReviewComment

List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@3.4/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForPullRequestReviewCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForPullRequestReviewCommentContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForPullRequestReviewCommentRequest();
    $request->commentId = 588639;
    $request->content = ReactionsListForPullRequestReviewCommentContentEnum::MINUS1;
    $request->owner = 'eligendi';
    $request->page = 490110;
    $request->perPage = 235834;
    $request->repo = 'soluta';

    $response = $sdk->reactions->reactionsListForPullRequestReviewComment($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForRelease

List the reactions to a [release](https://docs.github.com/enterprise-server@3.4/rest/reference/repos#releases).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions/#list-reactions-for-a-release>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForReleaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForReleaseContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForReleaseRequest();
    $request->content = ReactionsListForReleaseContentEnum::HOORAY;
    $request->owner = 'temporibus';
    $request->page = 639622;
    $request->perPage = 228857;
    $request->releaseId = 948541;
    $request->repo = 'aspernatur';

    $response = $sdk->reactions->reactionsListForRelease($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForTeamDiscussionCommentInOrg

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#list-reactions-for-a-team-discussion-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForTeamDiscussionCommentInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForTeamDiscussionCommentInOrgContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForTeamDiscussionCommentInOrgRequest();
    $request->commentNumber = 778276;
    $request->content = ReactionsListForTeamDiscussionCommentInOrgContentEnum::EYES;
    $request->discussionNumber = 848346;
    $request->org = 'laborum';
    $request->page = 490420;
    $request->perPage = 876285;
    $request->teamSlug = 'qui';

    $response = $sdk->reactions->reactionsListForTeamDiscussionCommentInOrg($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~reactionsListForTeamDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForTeamDiscussionCommentLegacyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForTeamDiscussionCommentLegacyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForTeamDiscussionCommentLegacyRequest();
    $request->commentNumber = 232383;
    $request->content = ReactionsListForTeamDiscussionCommentLegacyContentEnum::EYES;
    $request->discussionNumber = 128696;
    $request->page = 129355;
    $request->perPage = 350325;
    $request->teamId = 471457;

    $response = $sdk->reactions->reactionsListForTeamDiscussionCommentLegacy($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForTeamDiscussionInOrg

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#list-reactions-for-a-team-discussion>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForTeamDiscussionInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForTeamDiscussionInOrgContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForTeamDiscussionInOrgRequest();
    $request->content = ReactionsListForTeamDiscussionInOrgContentEnum::LAUGH;
    $request->discussionNumber = 68093;
    $request->org = 'illo';
    $request->page = 943851;
    $request->perPage = 644479;
    $request->teamSlug = 'delectus';

    $response = $sdk->reactions->reactionsListForTeamDiscussionInOrg($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~reactionsListForTeamDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.4/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForTeamDiscussionLegacyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForTeamDiscussionLegacyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForTeamDiscussionLegacyRequest();
    $request->content = ReactionsListForTeamDiscussionLegacyContentEnum::LAUGH;
    $request->discussionNumber = 719389;
    $request->page = 450224;
    $request->perPage = 349993;
    $request->teamId = 288300;

    $response = $sdk->reactions->reactionsListForTeamDiscussionLegacy($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
