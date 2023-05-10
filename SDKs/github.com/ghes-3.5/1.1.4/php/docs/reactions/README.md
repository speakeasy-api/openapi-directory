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

Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-a-commit-comment>

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
    $request->requestBody->content = ReactionsCreateForCommitCommentRequestBodyContentEnum::MINUS1;
    $request->commentId = 582320;
    $request->owner = 'atque';
    $request->repo = 'beatae';

    $response = $sdk->reactions->reactionsCreateForCommitComment($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForIssue

Create a reaction to an [issue](https://docs.github.com/enterprise-server@3.5/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-an-issue>

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
    $request->requestBody->content = ReactionsCreateForIssueRequestBodyContentEnum::ROCKET;
    $request->issueNumber = 287544;
    $request->owner = 'minus';
    $request->repo = 'esse';

    $response = $sdk->reactions->reactionsCreateForIssue($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForIssueComment

Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.5/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-an-issue-comment>

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
    $request->requestBody->content = ReactionsCreateForIssueCommentRequestBodyContentEnum::PLUS1;
    $request->commentId = 20950;
    $request->owner = 'rerum';
    $request->repo = 'ea';

    $response = $sdk->reactions->reactionsCreateForIssueComment($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForPullRequestReviewComment

Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.5/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment>

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
    $request->requestBody->content = ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum::PLUS1;
    $request->commentId = 489459;
    $request->owner = 'repellat';
    $request->repo = 'velit';

    $response = $sdk->reactions->reactionsCreateForPullRequestReviewComment($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForRelease

Create a reaction to a [release](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#releases). A response with a `Status: 200 OK` means that you already added the reaction type to this release.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#create-reaction-for-a-release>

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
    $request->requestBody->content = ReactionsCreateForReleaseRequestBodyContentEnum::ROCKET;
    $request->owner = 'provident';
    $request->releaseId = 231382;
    $request->repo = 'eligendi';

    $response = $sdk->reactions->reactionsCreateForRelease($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForTeamDiscussionCommentInOrg

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-a-team-discussion-comment>

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
    $request->requestBody->content = ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum::CONFUSED;
    $request->commentNumber = 235834;
    $request->discussionNumber = 744101;
    $request->org = 'natus';
    $request->teamSlug = 'temporibus';

    $response = $sdk->reactions->reactionsCreateForTeamDiscussionCommentInOrg($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~reactionsCreateForTeamDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy>

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
    $request->requestBody->content = ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum::HOORAY;
    $request->commentNumber = 228857;
    $request->discussionNumber = 948541;
    $request->teamId = 133949;

    $response = $sdk->reactions->reactionsCreateForTeamDiscussionCommentLegacy($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForTeamDiscussionInOrg

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-a-team-discussion>

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
    $request->requestBody->content = ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum::ROCKET;
    $request->discussionNumber = 931077;
    $request->org = 'illum';
    $request->teamSlug = 'laborum';

    $response = $sdk->reactions->reactionsCreateForTeamDiscussionInOrg($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~reactionsCreateForTeamDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy>

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
    $request->requestBody->content = ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum::CONFUSED;
    $request->discussionNumber = 876285;
    $request->teamId = 185348;

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

Delete a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#delete-a-commit-comment-reaction>

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
    $request->commentId = 232383;
    $request->owner = 'repellat';
    $request->reactionId = 128696;
    $request->repo = 'explicabo';

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

Delete a reaction to an [issue](https://docs.github.com/enterprise-server@3.5/rest/reference/issues/).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#delete-an-issue-reaction>

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
    $request->issueNumber = 350325;
    $request->owner = 'nihil';
    $request->reactionId = 252700;
    $request->repo = 'ab';

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

Delete a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.5/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#delete-an-issue-comment-reaction>

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
    $request->commentId = 72754;
    $request->owner = 'hic';
    $request->reactionId = 644479;
    $request->repo = 'delectus';

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

Delete a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.5/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#delete-a-pull-request-comment-reaction>

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
    $request->commentId = 251212;
    $request->owner = 'distinctio';
    $request->reactionId = 450224;
    $request->repo = 'exercitationem';

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

Delete a reaction to a [release](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#releases).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#delete-a-release-reaction>

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
    $request->owner = 'labore';
    $request->reactionId = 254382;
    $request->releaseId = 921193;
    $request->repo = 'modi';

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

Delete a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#delete-team-discussion-reaction>

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
    $request->discussionNumber = 450209;
    $request->org = 'explicabo';
    $request->reactionId = 879857;
    $request->teamSlug = 'rem';

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

Delete a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#delete-team-discussion-comment-reaction>

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
    $request->commentNumber = 44016;
    $request->discussionNumber = 141817;
    $request->org = 'deleniti';
    $request->reactionId = 316730;
    $request->teamSlug = 'voluptate';

    $response = $sdk->reactions->reactionsDeleteForTeamDiscussionComment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForCommitComment

List the reactions to a [commit comment](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-a-commit-comment>

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
    $request->commentId = 626707;
    $request->content = ReactionsListForCommitCommentContentEnum::LAUGH;
    $request->owner = 'libero';
    $request->page = 300189;
    $request->perPage = 24272;
    $request->repo = 'modi';

    $response = $sdk->reactions->reactionsListForCommitComment($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForIssue

List the reactions to an [issue](https://docs.github.com/enterprise-server@3.5/rest/reference/issues).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-an-issue>

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
    $request->content = ReactionsListForIssueContentEnum::CONFUSED;
    $request->issueNumber = 199529;
    $request->owner = 'mollitia';
    $request->page = 492632;
    $request->perPage = 853246;
    $request->repo = 'nostrum';

    $response = $sdk->reactions->reactionsListForIssue($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForIssueComment

List the reactions to an [issue comment](https://docs.github.com/enterprise-server@3.5/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-an-issue-comment>

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
    $request->commentId = 475325;
    $request->content = ReactionsListForIssueCommentContentEnum::LAUGH;
    $request->owner = 'reiciendis';
    $request->page = 66207;
    $request->perPage = 265632;
    $request->repo = 'aut';

    $response = $sdk->reactions->reactionsListForIssueComment($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForPullRequestReviewComment

List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@3.5/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment>

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
    $request->commentId = 13508;
    $request->content = ReactionsListForPullRequestReviewCommentContentEnum::EYES;
    $request->owner = 'odio';
    $request->page = 413758;
    $request->perPage = 256114;
    $request->repo = 'dolorum';

    $response = $sdk->reactions->reactionsListForPullRequestReviewComment($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForRelease

List the reactions to a [release](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#releases).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#list-reactions-for-a-release>

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
    $request->content = ReactionsListForReleaseContentEnum::ROCKET;
    $request->owner = 'voluptate';
    $request->page = 232772;
    $request->perPage = 200637;
    $request->releaseId = 310629;
    $request->repo = 'itaque';

    $response = $sdk->reactions->reactionsListForRelease($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForTeamDiscussionCommentInOrg

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-a-team-discussion-comment>

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
    $request->commentNumber = 791228;
    $request->content = ReactionsListForTeamDiscussionCommentInOrgContentEnum::PLUS1;
    $request->discussionNumber = 715143;
    $request->org = 'iusto';
    $request->page = 558051;
    $request->perPage = 91728;
    $request->teamSlug = 'facilis';

    $response = $sdk->reactions->reactionsListForTeamDiscussionCommentInOrg($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~reactionsListForTeamDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy>

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
    $request->commentNumber = 229276;
    $request->content = ReactionsListForTeamDiscussionCommentLegacyContentEnum::CONFUSED;
    $request->discussionNumber = 685415;
    $request->page = 5310;
    $request->perPage = 526413;
    $request->teamId = 11355;

    $response = $sdk->reactions->reactionsListForTeamDiscussionCommentLegacy($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForTeamDiscussionInOrg

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-a-team-discussion>

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
    $request->content = ReactionsListForTeamDiscussionInOrgContentEnum::HEART;
    $request->discussionNumber = 511222;
    $request->org = 'repellendus';
    $request->page = 83291;
    $request->perPage = 60778;
    $request->teamSlug = 'eaque';

    $response = $sdk->reactions->reactionsListForTeamDiscussionInOrg($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~reactionsListForTeamDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.5/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.5/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy>

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
    $request->content = ReactionsListForTeamDiscussionLegacyContentEnum::EYES;
    $request->discussionNumber = 965517;
    $request->page = 651228;
    $request->perPage = 859003;
    $request->teamId = 640907;

    $response = $sdk->reactions->reactionsListForTeamDiscussionLegacy($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
