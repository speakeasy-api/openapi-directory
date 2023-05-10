# activity

## Overview

Activity APIs provide access to notifications, subscriptions, and timelines.

### Available Operations

* [activityCheckRepoIsStarredByAuthenticatedUser](#activitycheckrepoisstarredbyauthenticateduser) - Check if a repository is starred by the authenticated user
* [activityDeleteRepoSubscription](#activitydeletereposubscription) - Delete a repository subscription
* [activityDeleteThreadSubscription](#activitydeletethreadsubscription) - Delete a thread subscription
* [activityGetFeeds](#activitygetfeeds) - Get feeds
* [activityGetRepoSubscription](#activitygetreposubscription) - Get a repository subscription
* [activityGetThread](#activitygetthread) - Get a thread
* [activityGetThreadSubscriptionForAuthenticatedUser](#activitygetthreadsubscriptionforauthenticateduser) - Get a thread subscription for the authenticated user
* [activityListEventsForAuthenticatedUser](#activitylisteventsforauthenticateduser) - List events for the authenticated user
* [activityListNotificationsForAuthenticatedUser](#activitylistnotificationsforauthenticateduser) - List notifications for the authenticated user
* [activityListOrgEventsForAuthenticatedUser](#activitylistorgeventsforauthenticateduser) - List organization events for the authenticated user
* [activityListPublicEvents](#activitylistpublicevents) - List public events
* [activityListPublicEventsForRepoNetwork](#activitylistpubliceventsforreponetwork) - List public events for a network of repositories
* [activityListPublicEventsForUser](#activitylistpubliceventsforuser) - List public events for a user
* [activityListPublicOrgEvents](#activitylistpublicorgevents) - List public organization events
* [activityListReceivedEventsForUser](#activitylistreceivedeventsforuser) - List events received by the authenticated user
* [activityListReceivedPublicEventsForUser](#activitylistreceivedpubliceventsforuser) - List public events received by a user
* [activityListRepoEvents](#activitylistrepoevents) - List repository events
* [activityListRepoNotificationsForAuthenticatedUser](#activitylistreponotificationsforauthenticateduser) - List repository notifications for the authenticated user
* [activityListReposStarredByAuthenticatedUser](#activitylistreposstarredbyauthenticateduser) - List repositories starred by the authenticated user
* [activityListReposStarredByUser](#activitylistreposstarredbyuser) - List repositories starred by a user
* [activityListReposWatchedByUser](#activitylistreposwatchedbyuser) - List repositories watched by a user
* [activityListStargazersForRepo](#activityliststargazersforrepo) - List stargazers
* [activityListWatchedReposForAuthenticatedUser](#activitylistwatchedreposforauthenticateduser) - List repositories watched by the authenticated user
* [activityListWatchersForRepo](#activitylistwatchersforrepo) - List watchers
* [activityMarkNotificationsAsRead](#activitymarknotificationsasread) - Mark notifications as read
* [activityMarkRepoNotificationsAsRead](#activitymarkreponotificationsasread) - Mark repository notifications as read
* [activityMarkThreadAsRead](#activitymarkthreadasread) - Mark a thread as read
* [activitySetRepoSubscription](#activitysetreposubscription) - Set a repository subscription
* [activitySetThreadSubscription](#activitysetthreadsubscription) - Set a thread subscription
* [activityStarRepoForAuthenticatedUser](#activitystarrepoforauthenticateduser) - Star a repository for the authenticated user
* [activityUnstarRepoForAuthenticatedUser](#activityunstarrepoforauthenticateduser) - Unstar a repository for the authenticated user

## activityCheckRepoIsStarredByAuthenticatedUser

Check if a repository is starred by the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityCheckRepoIsStarredByAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityCheckRepoIsStarredByAuthenticatedUserRequest();
    $request->owner = 'reiciendis';
    $request->repo = 'mollitia';

    $response = $sdk->activity->activityCheckRepoIsStarredByAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityDeleteRepoSubscription

This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/enterprise-server@3.0/rest/reference/activity#set-a-repository-subscription).

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#delete-a-repository-subscription>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityDeleteRepoSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityDeleteRepoSubscriptionRequest();
    $request->owner = 'ad';
    $request->repo = 'eum';

    $response = $sdk->activity->activityDeleteRepoSubscription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityDeleteThreadSubscription

Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/enterprise-server@3.0/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#delete-a-thread-subscription>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityDeleteThreadSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityDeleteThreadSubscriptionRequest();
    $request->threadId = 221262;

    $response = $sdk->activity->activityDeleteThreadSubscription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityGetFeeds

GitHub Enterprise Server provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:

*   **Timeline**: The GitHub Enterprise Server global public timeline
*   **User**: The public timeline for any user, using [URI template](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#hypermedia)
*   **Current user public**: The public timeline for the authenticated user
*   **Current user**: The private timeline for the authenticated user
*   **Current user actor**: The private timeline for activity created by the authenticated user
*   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
*   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub Enterprise Server.

**Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#get-feeds>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->activity->activityGetFeeds();

    if ($response->feed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityGetRepoSubscription

Get a repository subscription

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#get-a-repository-subscription>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityGetRepoSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityGetRepoSubscriptionRequest();
    $request->owner = 'necessitatibus';
    $request->repo = 'odit';

    $response = $sdk->activity->activityGetRepoSubscription($request);

    if ($response->repositorySubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityGetThread

Get a thread

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#get-a-thread>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityGetThreadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityGetThreadRequest();
    $request->threadId = 367562;

    $response = $sdk->activity->activityGetThread($request);

    if ($response->thread !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityGetThreadSubscriptionForAuthenticatedUser

This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/enterprise-server@3.0/rest/reference/activity#get-a-repository-subscription).

Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityGetThreadSubscriptionForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityGetThreadSubscriptionForAuthenticatedUserRequest();
    $request->threadId = 97260;

    $response = $sdk->activity->activityGetThreadSubscriptionForAuthenticatedUser($request);

    if ($response->threadSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListEventsForAuthenticatedUser

If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-events-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListEventsForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListEventsForAuthenticatedUserRequest();
    $request->page = 435865;
    $request->perPage = 984043;
    $request->username = 'Simeon_Gibson70';

    $response = $sdk->activity->activityListEventsForAuthenticatedUser($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListNotificationsForAuthenticatedUser

List all notifications for the current user, sorted by most recently updated.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-notifications-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListNotificationsForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListNotificationsForAuthenticatedUserRequest();
    $request->all = false;
    $request->before = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T10:00:44.006Z');
    $request->page = 99569;
    $request->participating = false;
    $request->perPage = 919483;
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-15T07:14:46.128Z');

    $response = $sdk->activity->activityListNotificationsForAuthenticatedUser($request);

    if ($response->threads !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListOrgEventsForAuthenticatedUser

This is the user's organization dashboard. You must be authenticated as the user to view this.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-organization-events-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListOrgEventsForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListOrgEventsForAuthenticatedUserRequest();
    $request->org = 'nihil';
    $request->page = 998848;
    $request->perPage = 841140;
    $request->username = 'Camden.Turner16';

    $response = $sdk->activity->activityListOrgEventsForAuthenticatedUser($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListPublicEvents

We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-public-events>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListPublicEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListPublicEventsRequest();
    $request->page = 508315;
    $request->perPage = 615560;

    $response = $sdk->activity->activityListPublicEvents($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListPublicEventsForRepoNetwork

List public events for a network of repositories

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-public-events-for-a-network-of-repositories>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListPublicEventsForRepoNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListPublicEventsForRepoNetworkRequest();
    $request->owner = 'magni';
    $request->page = 123820;
    $request->perPage = 779051;
    $request->repo = 'illum';

    $response = $sdk->activity->activityListPublicEventsForRepoNetwork($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListPublicEventsForUser

List public events for a user

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-public-events-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListPublicEventsForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListPublicEventsForUserRequest();
    $request->page = 864934;
    $request->perPage = 807319;
    $request->username = 'Hannah40';

    $response = $sdk->activity->activityListPublicEventsForUser($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListPublicOrgEvents

List public organization events

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-public-organization-events>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListPublicOrgEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListPublicOrgEventsRequest();
    $request->org = 'accusantium';
    $request->page = 69167;
    $request->perPage = 982575;

    $response = $sdk->activity->activityListPublicOrgEvents($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListReceivedEventsForUser

These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-events-received-by-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListReceivedEventsForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListReceivedEventsForUserRequest();
    $request->page = 697429;
    $request->perPage = 373291;
    $request->username = 'Jacey.Johnston86';

    $response = $sdk->activity->activityListReceivedEventsForUser($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListReceivedPublicEventsForUser

List public events received by a user

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-public-events-received-by-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListReceivedPublicEventsForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListReceivedPublicEventsForUserRequest();
    $request->page = 365496;
    $request->perPage = 975522;
    $request->username = 'Agnes1';

    $response = $sdk->activity->activityListReceivedPublicEventsForUser($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListRepoEvents

List repository events

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-repository-events>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListRepoEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListRepoEventsRequest();
    $request->owner = 'cumque';
    $request->page = 359978;
    $request->perPage = 944124;
    $request->repo = 'libero';

    $response = $sdk->activity->activityListRepoEvents($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListRepoNotificationsForAuthenticatedUser

List all notifications for the current user.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-repository-notifications-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListRepoNotificationsForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListRepoNotificationsForAuthenticatedUserRequest();
    $request->all = false;
    $request->before = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-28T17:02:52.151Z');
    $request->owner = 'quis';
    $request->page = 521037;
    $request->participating = false;
    $request->perPage = 489549;
    $request->repo = 'eaque';
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-20T00:01:48.775Z');

    $response = $sdk->activity->activityListRepoNotificationsForAuthenticatedUser($request);

    if ($response->threads !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListReposStarredByAuthenticatedUser

Lists repositories the authenticated user has starred.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/) via the `Accept` header:

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-repositories-starred-by-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListReposStarredByAuthenticatedUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListReposStarredByAuthenticatedUserRequest();
    $request->direction = DirectionEnum::ASC;
    $request->page = 18521;
    $request->perPage = 170986;
    $request->sort = SortEnum::UPDATED;

    $response = $sdk->activity->activityListReposStarredByAuthenticatedUser($request);

    if ($response->repositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListReposStarredByUser

Lists repositories a user has starred.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/) via the `Accept` header:

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-repositories-starred-by-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListReposStarredByUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListReposStarredByUserRequest();
    $request->direction = DirectionEnum::ASC;
    $request->page = 223924;
    $request->perPage = 874573;
    $request->sort = SortEnum::CREATED;
    $request->username = 'Tyreek_Walter';

    $response = $sdk->activity->activityListReposStarredByUser($request);

    if ($response->activityListReposStarredByUser200ApplicationJSONAnyOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListReposWatchedByUser

Lists repositories a user is watching.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-repositories-watched-by-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListReposWatchedByUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListReposWatchedByUserRequest();
    $request->page = 596656;
    $request->perPage = 31838;
    $request->username = 'Ottilie_Cruickshank';

    $response = $sdk->activity->activityListReposWatchedByUser($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListStargazersForRepo

Lists the people that have starred the repository.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/) via the `Accept` header:

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-stargazers>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListStargazersForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListStargazersForRepoRequest();
    $request->owner = 'eaque';
    $request->page = 577229;
    $request->perPage = 699098;
    $request->repo = 'adipisci';

    $response = $sdk->activity->activityListStargazersForRepo($request);

    if ($response->activityListStargazersForRepo200ApplicationJSONAnyOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListWatchedReposForAuthenticatedUser

Lists repositories the authenticated user is watching.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-repositories-watched-by-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListWatchedReposForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListWatchedReposForAuthenticatedUserRequest();
    $request->page = 992397;
    $request->perPage = 934214;

    $response = $sdk->activity->activityListWatchedReposForAuthenticatedUser($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListWatchersForRepo

Lists the people watching the specified repository.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-watchers>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListWatchersForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListWatchersForRepoRequest();
    $request->owner = 'modi';
    $request->page = 613966;
    $request->perPage = 679091;
    $request->repo = 'deleniti';

    $response = $sdk->activity->activityListWatchersForRepo($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityMarkNotificationsAsRead

Marks all notifications as "read" removes it from the [default view on GitHub Enterprise Server](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#mark-notifications-as-read>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityMarkNotificationsAsReadRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityMarkNotificationsAsReadRequestBody();
    $request->lastReadAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-26T01:09:56.415Z');
    $request->read = false;

    $response = $sdk->activity->activityMarkNotificationsAsRead($request);

    if ($response->activityMarkNotificationsAsRead202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityMarkRepoNotificationsAsRead

Marks all notifications in a repository as "read" removes them from the [default view on GitHub Enterprise Server](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#mark-repository-notifications-as-read>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityMarkRepoNotificationsAsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivityMarkRepoNotificationsAsReadRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityMarkRepoNotificationsAsReadRequest();
    $request->requestBody = new ActivityMarkRepoNotificationsAsReadRequestBody();
    $request->requestBody->lastReadAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-23T12:23:35.067Z');
    $request->owner = 'delectus';
    $request->repo = 'quaerat';

    $response = $sdk->activity->activityMarkRepoNotificationsAsRead($request);

    if ($response->activityMarkRepoNotificationsAsRead202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityMarkThreadAsRead

Mark a thread as read

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#mark-a-thread-as-read>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityMarkThreadAsReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityMarkThreadAsReadRequest();
    $request->threadId = 554242;

    $response = $sdk->activity->activityMarkThreadAsRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activitySetRepoSubscription

If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/enterprise-server@3.0/rest/reference/activity#delete-a-repository-subscription) completely.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#set-a-repository-subscription>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivitySetRepoSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivitySetRepoSubscriptionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivitySetRepoSubscriptionRequest();
    $request->requestBody = new ActivitySetRepoSubscriptionRequestBody();
    $request->requestBody->ignored = false;
    $request->requestBody->subscribed = false;
    $request->owner = 'aliquid';
    $request->repo = 'dolorem';

    $response = $sdk->activity->activitySetRepoSubscription($request);

    if ($response->repositorySubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activitySetThreadSubscription

If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.

You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.

Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/enterprise-server@3.0/rest/reference/activity#delete-a-thread-subscription) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#set-a-thread-subscription>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivitySetThreadSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivitySetThreadSubscriptionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivitySetThreadSubscriptionRequest();
    $request->requestBody = new ActivitySetThreadSubscriptionRequestBody();
    $request->requestBody->ignored = false;
    $request->threadId = 209843;

    $response = $sdk->activity->activitySetThreadSubscription($request);

    if ($response->threadSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityStarRepoForAuthenticatedUser

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#star-a-repository-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityStarRepoForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityStarRepoForAuthenticatedUserRequest();
    $request->owner = 'dolor';
    $request->repo = 'qui';

    $response = $sdk->activity->activityStarRepoForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityUnstarRepoForAuthenticatedUser

Unstar a repository for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/activity#unstar-a-repository-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityUnstarRepoForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityUnstarRepoForAuthenticatedUserRequest();
    $request->owner = 'ipsum';
    $request->repo = 'hic';

    $response = $sdk->activity->activityUnstarRepoForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
