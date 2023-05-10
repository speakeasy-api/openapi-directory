# issues

## Overview

Interact with GitHub Issues.

### Available Operations

* [issuesAddAssignees](#issuesaddassignees) - Add assignees to an issue
* [issuesAddLabels](#issuesaddlabels) - Add labels to an issue
* [issuesCheckUserCanBeAssigned](#issuescheckusercanbeassigned) - Check if a user can be assigned
* [issuesCheckUserCanBeAssignedToIssue](#issuescheckusercanbeassignedtoissue) - Check if a user can be assigned to a issue
* [issuesCreate](#issuescreate) - Create an issue
* [issuesCreateComment](#issuescreatecomment) - Create an issue comment
* [issuesCreateLabel](#issuescreatelabel) - Create a label
* [issuesCreateMilestone](#issuescreatemilestone) - Create a milestone
* [issuesDeleteComment](#issuesdeletecomment) - Delete an issue comment
* [issuesDeleteLabel](#issuesdeletelabel) - Delete a label
* [issuesDeleteMilestone](#issuesdeletemilestone) - Delete a milestone
* [issuesGet](#issuesget) - Get an issue
* [issuesGetComment](#issuesgetcomment) - Get an issue comment
* [issuesGetEvent](#issuesgetevent) - Get an issue event
* [issuesGetLabel](#issuesgetlabel) - Get a label
* [issuesGetMilestone](#issuesgetmilestone) - Get a milestone
* [issuesList](#issueslist) - List issues assigned to the authenticated user
* [issuesListAssignees](#issueslistassignees) - List assignees
* [issuesListComments](#issueslistcomments) - List issue comments
* [issuesListCommentsForRepo](#issueslistcommentsforrepo) - List issue comments for a repository
* [issuesListEvents](#issueslistevents) - List issue events
* [issuesListEventsForRepo](#issueslisteventsforrepo) - List issue events for a repository
* [issuesListEventsForTimeline](#issueslisteventsfortimeline) - List timeline events for an issue
* [issuesListForAuthenticatedUser](#issueslistforauthenticateduser) - List user account issues assigned to the authenticated user
* [issuesListForOrg](#issueslistfororg) - List organization issues assigned to the authenticated user
* [issuesListForRepo](#issueslistforrepo) - List repository issues
* [issuesListLabelsForMilestone](#issueslistlabelsformilestone) - List labels for issues in a milestone
* [issuesListLabelsForRepo](#issueslistlabelsforrepo) - List labels for a repository
* [issuesListLabelsOnIssue](#issueslistlabelsonissue) - List labels for an issue
* [issuesListMilestones](#issueslistmilestones) - List milestones
* [issuesLock](#issueslock) - Lock an issue
* [issuesRemoveAllLabels](#issuesremovealllabels) - Remove all labels from an issue
* [issuesRemoveAssignees](#issuesremoveassignees) - Remove assignees from an issue
* [issuesRemoveLabel](#issuesremovelabel) - Remove a label from an issue
* [issuesSetLabels](#issuessetlabels) - Set labels for an issue
* [issuesUnlock](#issuesunlock) - Unlock an issue
* [issuesUpdate](#issuesupdate) - Update an issue
* [issuesUpdateComment](#issuesupdatecomment) - Update an issue comment
* [issuesUpdateLabel](#issuesupdatelabel) - Update a label
* [issuesUpdateMilestone](#issuesupdatemilestone) - Update a milestone

## issuesAddAssignees

Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#add-assignees-to-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesAddAssigneesRequest;
use \OpenAPI\OpenAPI\Models\Operations\IssuesAddAssigneesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesAddAssigneesRequest();
    $request->requestBody = new IssuesAddAssigneesRequestBody();
    $request->requestBody->assignees = [
        'fuga',
        'ratione',
        'animi',
        'necessitatibus',
    ];
    $request->issueNumber = 862063;
    $request->owner = 'consequatur';
    $request->repo = 'quasi';

    $response = $sdk->issues->issuesAddAssignees($request);

    if ($response->issue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesAddLabels

Add labels to an issue

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#add-labels-to-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesAddLabelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesAddLabelsRequest();
    $request->requestBody = new IssuesAddLabelsRequestBody1();
    $request->requestBody->labels = [
        'natus',
        'occaecati',
    ];
    $request->issueNumber = 382440;
    $request->owner = 'adipisci';
    $request->repo = 'quasi';

    $response = $sdk->issues->issuesAddLabels($request);

    if ($response->labels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesCheckUserCanBeAssigned

Checks if a user has permission to be assigned to an issue in this repository.

If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.

Otherwise a `404` status code is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#check-if-a-user-can-be-assigned>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesCheckUserCanBeAssignedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesCheckUserCanBeAssignedRequest();
    $request->assignee = 'magni';
    $request->owner = 'doloribus';
    $request->repo = 'nulla';

    $response = $sdk->issues->issuesCheckUserCanBeAssigned($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesCheckUserCanBeAssignedToIssue

Checks if a user has permission to be assigned to a specific issue.

If the `assignee` can be assigned to this issue, a `204` status code with no content is returned.

Otherwise a `404` status code is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#check-if-a-user-can-be-assigned-to-a-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesCheckUserCanBeAssignedToIssueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesCheckUserCanBeAssignedToIssueRequest();
    $request->assignee = 'necessitatibus';
    $request->issueNumber = 58534;
    $request->owner = 'tempora';
    $request->repo = 'nihil';

    $response = $sdk->issues->issuesCheckUserCanBeAssignedToIssue($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesCreate

Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://docs.github.com/enterprise-server@3.5/articles/disabling-issues/), the API returns a `410 Gone` status.

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.5/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.5/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#create-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\IssuesCreateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesCreateRequest();
    $request->requestBody = new IssuesCreateRequestBody();
    $request->requestBody->assignee = 'molestiae';
    $request->requestBody->assignees = [
        'iusto',
    ];
    $request->requestBody->body = 'esse';
    $request->requestBody->labels = [
        new IssuesCreateRequestBodyLabels2(),
        new IssuesCreateRequestBodyLabels2(),
        'architecto',
    ];
    $request->requestBody->milestone = 39650;
    $request->requestBody->title = 'Ms.';
    $request->owner = 'tempora';
    $request->repo = 'esse';

    $response = $sdk->issues->issuesCreate($request);

    if ($response->issue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesCreateComment

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.5/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.5/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#create-an-issue-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesCreateCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\IssuesCreateCommentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesCreateCommentRequest();
    $request->requestBody = new IssuesCreateCommentRequestBody();
    $request->requestBody->body = 'ex';
    $request->issueNumber = 235263;
    $request->owner = 'aliquid';
    $request->repo = 'ipsa';

    $response = $sdk->issues->issuesCreateComment($request);

    if ($response->issueComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesCreateLabel

Create a label

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#create-a-label>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesCreateLabelRequest;
use \OpenAPI\OpenAPI\Models\Operations\IssuesCreateLabelRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesCreateLabelRequest();
    $request->requestBody = new IssuesCreateLabelRequestBody();
    $request->requestBody->color = 'laborum';
    $request->requestBody->description = 'sunt';
    $request->requestBody->name = 'Janis Ratke';
    $request->owner = 'suscipit';
    $request->repo = 'aliquid';

    $response = $sdk->issues->issuesCreateLabel($request);

    if ($response->label !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesCreateMilestone

Create a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#create-a-milestone>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesCreateMilestoneRequest;
use \OpenAPI\OpenAPI\Models\Operations\IssuesCreateMilestoneRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\IssuesCreateMilestoneRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesCreateMilestoneRequest();
    $request->requestBody = new IssuesCreateMilestoneRequestBody();
    $request->requestBody->description = 'perferendis';
    $request->requestBody->dueOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-17T05:09:58.137Z');
    $request->requestBody->state = IssuesCreateMilestoneRequestBodyStateEnum::CLOSED;
    $request->requestBody->title = 'Miss';
    $request->owner = 'ab';
    $request->repo = 'error';

    $response = $sdk->issues->issuesCreateMilestone($request);

    if ($response->milestone !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesDeleteComment

Delete an issue comment

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#delete-an-issue-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesDeleteCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesDeleteCommentRequest();
    $request->commentId = 822407;
    $request->owner = 'voluptates';
    $request->repo = 'mollitia';

    $response = $sdk->issues->issuesDeleteComment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesDeleteLabel

Delete a label

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#delete-a-label>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesDeleteLabelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesDeleteLabelRequest();
    $request->name = 'Wm Hane';
    $request->owner = 'vitae';
    $request->repo = 'repellendus';

    $response = $sdk->issues->issuesDeleteLabel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesDeleteMilestone

Delete a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#delete-a-milestone>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesDeleteMilestoneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesDeleteMilestoneRequest();
    $request->milestoneNumber = 405036;
    $request->owner = 'quo';
    $request->repo = 'ex';

    $response = $sdk->issues->issuesDeleteMilestone($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesGet

The API returns a [`301 Moved Permanently` status](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#http-redirects-redirects) if the issue was
[transferred](https://docs.github.com/enterprise-server@3.5/articles/transferring-an-issue-to-another-repository/) to another repository. If
the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API
returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read
access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe
to the [`issues`](https://docs.github.com/enterprise-server@3.5/webhooks/event-payloads/#issues) webhook.

**Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.5/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#get-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesGetRequest();
    $request->issueNumber = 281153;
    $request->owner = 'ad';
    $request->repo = 'expedita';

    $response = $sdk->issues->issuesGet($request);

    if ($response->issue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesGetComment

Get an issue comment

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#get-an-issue-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesGetCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesGetCommentRequest();
    $request->commentId = 29950;
    $request->owner = 'molestias';
    $request->repo = 'cum';

    $response = $sdk->issues->issuesGetComment($request);

    if ($response->issueComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesGetEvent

Get an issue event

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#get-an-issue-event>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesGetEventRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesGetEventRequest();
    $request->eventId = 399660;
    $request->owner = 'beatae';
    $request->repo = 'voluptatum';

    $response = $sdk->issues->issuesGetEvent($request);

    if ($response->issueEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesGetLabel

Get a label

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#get-a-label>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesGetLabelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesGetLabelRequest();
    $request->name = 'Peter Prosacco';
    $request->owner = 'voluptatem';
    $request->repo = 'sapiente';

    $response = $sdk->issues->issuesGetLabel($request);

    if ($response->label !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesGetMilestone

Get a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#get-a-milestone>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesGetMilestoneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesGetMilestoneRequest();
    $request->milestoneNumber = 889288;
    $request->owner = 'architecto';
    $request->repo = 'fuga';

    $response = $sdk->issues->issuesGetMilestone($request);

    if ($response->milestone !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesList

List issues assigned to the authenticated user across all visible repositories including owned repositories, member
repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not
necessarily assigned to you.


**Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.5/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#list-issues-assigned-to-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesListRequest();
    $request->collab = false;
    $request->direction = DirectionEnum::DESC;
    $request->filter = IssuesListFilterEnum::ALL;
    $request->labels = 'voluptatem';
    $request->orgs = false;
    $request->owned = false;
    $request->page = 1207;
    $request->perPage = 534917;
    $request->pulls = false;
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-15T08:28:39.499Z');
    $request->sort = IssuesListSortEnum::COMMENTS;
    $request->state = IssuesListStateEnum::CLOSED;

    $response = $sdk->issues->issuesList($request);

    if ($response->issues !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesListAssignees

Lists the [available assignees](https://docs.github.com/enterprise-server@3.5/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#list-assignees>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListAssigneesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesListAssigneesRequest();
    $request->owner = 'minus';
    $request->page = 365100;
    $request->perPage = 992074;
    $request->repo = 'ratione';

    $response = $sdk->issues->issuesListAssignees($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesListComments

Issue Comments are ordered by ascending ID.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#list-issue-comments>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListCommentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesListCommentsRequest();
    $request->issueNumber = 355225;
    $request->owner = 'perferendis';
    $request->page = 848341;
    $request->perPage = 518150;
    $request->repo = 'impedit';
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-03T00:32:12.114Z');

    $response = $sdk->issues->issuesListComments($request);

    if ($response->issueComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesListCommentsForRepo

By default, Issue Comments are ordered by ascending ID.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#list-issue-comments-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListCommentsForRepoRequest;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListCommentsForRepoDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesListCommentsForRepoRequest();
    $request->direction = IssuesListCommentsForRepoDirectionEnum::ASC;
    $request->owner = 'culpa';
    $request->page = 222864;
    $request->perPage = 307376;
    $request->repo = 'inventore';
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-30T17:21:08.305Z');
    $request->sort = SortEnum::CREATED;

    $response = $sdk->issues->issuesListCommentsForRepo($request);

    if ($response->issueComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesListEvents

List issue events

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#list-issue-events>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesListEventsRequest();
    $request->issueNumber = 221396;
    $request->owner = 'consequatur';
    $request->page = 100014;
    $request->perPage = 24944;
    $request->repo = 'modi';

    $response = $sdk->issues->issuesListEvents($request);

    if ($response->issueEventForIssues !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesListEventsForRepo

List issue events for a repository

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#list-issue-events-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListEventsForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesListEventsForRepoRequest();
    $request->owner = 'fugit';
    $request->page = 66149;
    $request->perPage = 513760;
    $request->repo = 'quae';

    $response = $sdk->issues->issuesListEventsForRepo($request);

    if ($response->issueEvents !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesListEventsForTimeline

List timeline events for an issue

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#list-timeline-events-for-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListEventsForTimelineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesListEventsForTimelineRequest();
    $request->issueNumber = 222658;
    $request->owner = 'fugiat';
    $request->page = 369490;
    $request->perPage = 162120;
    $request->repo = 'ipsa';

    $response = $sdk->issues->issuesListEventsForTimeline($request);

    if ($response->timelineIssueEvents !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesListForAuthenticatedUser

List issues across owned and member repositories assigned to the authenticated user.

**Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.5/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#list-user-account-issues-assigned-to-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListForAuthenticatedUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListForAuthenticatedUserFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListForAuthenticatedUserSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListForAuthenticatedUserStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesListForAuthenticatedUserRequest();
    $request->direction = DirectionEnum::DESC;
    $request->filter = IssuesListForAuthenticatedUserFilterEnum::ALL;
    $request->labels = 'impedit';
    $request->page = 884952;
    $request->perPage = 456410;
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-17T01:27:56.063Z');
    $request->sort = IssuesListForAuthenticatedUserSortEnum::CREATED;
    $request->state = IssuesListForAuthenticatedUserStateEnum::OPEN;

    $response = $sdk->issues->issuesListForAuthenticatedUser($request);

    if ($response->issues !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesListForOrg

List issues in an organization assigned to the authenticated user.

**Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.5/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#list-organization-issues-assigned-to-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListForOrgRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListForOrgFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListForOrgSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListForOrgStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesListForOrgRequest();
    $request->direction = DirectionEnum::DESC;
    $request->filter = IssuesListForOrgFilterEnum::MENTIONED;
    $request->labels = 'vel';
    $request->org = 'voluptatum';
    $request->page = 301692;
    $request->perPage = 349440;
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-21T18:14:19.097Z');
    $request->sort = IssuesListForOrgSortEnum::UPDATED;
    $request->state = IssuesListForOrgStateEnum::ALL;

    $response = $sdk->issues->issuesListForOrg($request);

    if ($response->issues !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesListForRepo

List issues in a repository. Only open issues will be listed.

**Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.5/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#list-repository-issues>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListForRepoRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListForRepoSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListForRepoStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesListForRepoRequest();
    $request->assignee = 'laboriosam';
    $request->creator = 'recusandae';
    $request->direction = DirectionEnum::ASC;
    $request->labels = 'voluptatem';
    $request->mentioned = 'exercitationem';
    $request->milestone = 'necessitatibus';
    $request->owner = 'quasi';
    $request->page = 392569;
    $request->perPage = 871103;
    $request->repo = 'vero';
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-14T17:27:02.277Z');
    $request->sort = IssuesListForRepoSortEnum::CREATED;
    $request->state = IssuesListForRepoStateEnum::ALL;

    $response = $sdk->issues->issuesListForRepo($request);

    if ($response->issues !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesListLabelsForMilestone

List labels for issues in a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#list-labels-for-issues-in-a-milestone>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListLabelsForMilestoneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesListLabelsForMilestoneRequest();
    $request->milestoneNumber = 918092;
    $request->owner = 'optio';
    $request->page = 579681;
    $request->perPage = 364544;
    $request->repo = 'voluptate';

    $response = $sdk->issues->issuesListLabelsForMilestone($request);

    if ($response->labels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesListLabelsForRepo

List labels for a repository

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#list-labels-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListLabelsForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesListLabelsForRepoRequest();
    $request->owner = 'blanditiis';
    $request->page = 642352;
    $request->perPage = 376389;
    $request->repo = 'numquam';

    $response = $sdk->issues->issuesListLabelsForRepo($request);

    if ($response->labels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesListLabelsOnIssue

List labels for an issue

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#list-labels-for-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListLabelsOnIssueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesListLabelsOnIssueRequest();
    $request->issueNumber = 364912;
    $request->owner = 'quos';
    $request->page = 260904;
    $request->perPage = 131903;
    $request->repo = 'ducimus';

    $response = $sdk->issues->issuesListLabelsOnIssue($request);

    if ($response->labels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesListMilestones

List milestones

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#list-milestones>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListMilestonesRequest;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListMilestonesDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListMilestonesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssuesListMilestonesStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesListMilestonesRequest();
    $request->direction = IssuesListMilestonesDirectionEnum::ASC;
    $request->owner = 'fuga';
    $request->page = 514054;
    $request->perPage = 277340;
    $request->repo = 'quasi';
    $request->sort = IssuesListMilestonesSortEnum::COMPLETENESS;
    $request->state = IssuesListMilestonesStateEnum::ALL;

    $response = $sdk->issues->issuesListMilestones($request);

    if ($response->milestones !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesLock

Users with push access can lock an issue or pull request's conversation.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#lock-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesLockRequest;
use \OpenAPI\OpenAPI\Models\Operations\IssuesLockRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\IssuesLockRequestBodyLockReasonEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesLockRequest();
    $request->requestBody = new IssuesLockRequestBody();
    $request->requestBody->lockReason = IssuesLockRequestBodyLockReasonEnum::OFF_TOPIC;
    $request->issueNumber = 395544;
    $request->owner = 'consequuntur';
    $request->repo = 'consectetur';

    $response = $sdk->issues->issuesLock($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesRemoveAllLabels

Remove all labels from an issue

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#remove-all-labels-from-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesRemoveAllLabelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesRemoveAllLabelsRequest();
    $request->issueNumber = 46806;
    $request->owner = 'cupiditate';
    $request->repo = 'reiciendis';

    $response = $sdk->issues->issuesRemoveAllLabels($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesRemoveAssignees

Removes one or more assignees from an issue.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#remove-assignees-from-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesRemoveAssigneesRequest;
use \OpenAPI\OpenAPI\Models\Operations\IssuesRemoveAssigneesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesRemoveAssigneesRequest();
    $request->requestBody = new IssuesRemoveAssigneesRequestBody();
    $request->requestBody->assignees = [
        'alias',
        'omnis',
        'eos',
    ];
    $request->issueNumber = 579011;
    $request->owner = 'iste';
    $request->repo = 'magni';

    $response = $sdk->issues->issuesRemoveAssignees($request);

    if ($response->issue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesRemoveLabel

Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#remove-a-label-from-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesRemoveLabelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesRemoveLabelRequest();
    $request->issueNumber = 81369;
    $request->name = 'Tomas Wolff';
    $request->owner = 'delectus';
    $request->repo = 'minima';

    $response = $sdk->issues->issuesRemoveLabel($request);

    if ($response->labels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesSetLabels

Removes any previous labels and sets the new labels for an issue.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#set-labels-for-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesSetLabelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesSetLabelsRequest();
    $request->requestBody = new IssuesSetLabelsRequestBody3();
    $request->requestBody->labels = [
        new IssuesSetLabelsRequestBody3Labels(),
        new IssuesSetLabelsRequestBody3Labels(),
        new IssuesSetLabelsRequestBody3Labels(),
        new IssuesSetLabelsRequestBody3Labels(),
    ];
    $request->issueNumber = 300403;
    $request->owner = 'temporibus';
    $request->repo = 'quos';

    $response = $sdk->issues->issuesSetLabels($request);

    if ($response->labels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesUnlock

Users with push access can unlock an issue's conversation.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#unlock-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesUnlockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesUnlockRequest();
    $request->issueNumber = 415280;
    $request->owner = 'itaque';
    $request->repo = 'commodi';

    $response = $sdk->issues->issuesUnlock($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesUpdate

Issue owners and users with push access can edit an issue.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#update-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\IssuesUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\IssuesUpdateRequestBodyStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssuesUpdateRequestBodyStateReasonEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesUpdateRequest();
    $request->requestBody = new IssuesUpdateRequestBody();
    $request->requestBody->assignee = 'totam';
    $request->requestBody->assignees = [
        'modi',
        'nam',
        'vero',
        'voluptatem',
    ];
    $request->requestBody->body = 'ipsam';
    $request->requestBody->labels = [
        'quasi',
        'maiores',
    ];
    $request->requestBody->milestone = 'sint';
    $request->requestBody->state = IssuesUpdateRequestBodyStateEnum::CLOSED;
    $request->requestBody->stateReason = IssuesUpdateRequestBodyStateReasonEnum::NOT_PLANNED;
    $request->requestBody->title = 458503;
    $request->issueNumber = 364463;
    $request->owner = 'reprehenderit';
    $request->repo = 'est';

    $response = $sdk->issues->issuesUpdate($request);

    if ($response->issue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesUpdateComment

Update an issue comment

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#update-an-issue-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesUpdateCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\IssuesUpdateCommentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesUpdateCommentRequest();
    $request->requestBody = new IssuesUpdateCommentRequestBody();
    $request->requestBody->body = 'quis';
    $request->commentId = 571844;
    $request->owner = 'accusamus';
    $request->repo = 'impedit';

    $response = $sdk->issues->issuesUpdateComment($request);

    if ($response->issueComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesUpdateLabel

Update a label

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#update-a-label>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesUpdateLabelRequest;
use \OpenAPI\OpenAPI\Models\Operations\IssuesUpdateLabelRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesUpdateLabelRequest();
    $request->requestBody = new IssuesUpdateLabelRequestBody();
    $request->requestBody->color = 'hic';
    $request->requestBody->description = 'necessitatibus';
    $request->requestBody->newName = 'asperiores';
    $request->name = 'Loretta Tremblay DDS';
    $request->owner = 'fuga';
    $request->repo = 'laborum';

    $response = $sdk->issues->issuesUpdateLabel($request);

    if ($response->label !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issuesUpdateMilestone

Update a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/issues#update-a-milestone>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IssuesUpdateMilestoneRequest;
use \OpenAPI\OpenAPI\Models\Operations\IssuesUpdateMilestoneRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\IssuesUpdateMilestoneRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssuesUpdateMilestoneRequest();
    $request->requestBody = new IssuesUpdateMilestoneRequestBody();
    $request->requestBody->description = 'consectetur';
    $request->requestBody->dueOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-18T07:30:42.298Z');
    $request->requestBody->state = IssuesUpdateMilestoneRequestBodyStateEnum::OPEN;
    $request->requestBody->title = 'Miss';
    $request->milestoneNumber = 166047;
    $request->owner = 'soluta';
    $request->repo = 'repudiandae';

    $response = $sdk->issues->issuesUpdateMilestone($request);

    if ($response->milestone !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
