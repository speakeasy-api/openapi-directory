# SDK

### Available Operations

* [deleteApiV1AnnouncementsIdReactionsName](#deleteapiv1announcementsidreactionsname) - Undo a react emoji to an announcement.
* [deleteApiV1ConversationsId](#deleteapiv1conversationsid) - Remove converstation
* [deleteApiV1DomainBlocks](#deleteapiv1domainblocks) - Remove a domain block, if it exists in the user's array of blocked domains.
* [deleteApiV1FeaturedTagsId](#deleteapiv1featuredtagsid) - Unfeature a tag
* [deleteApiV1FiltersId](#deleteapiv1filtersid) - Delete a filter.
* [deleteApiV1Lists](#deleteapiv1lists) - Delete a list
* [deleteApiV1ListsIdAccounts](#deleteapiv1listsidaccounts) - Remove accounts from the given list.
* [deleteApiV1PushSubscription](#deleteapiv1pushsubscription) - Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
* [deleteApiV1ScheduledStatusesId](#deleteapiv1scheduledstatusesid) - Cancel a scheduled status
* [deleteApiV1StatusesId](#deleteapiv1statusesid)
* [deleteApiV1SuggestionsId](#deleteapiv1suggestionsid) - Delete user suggestion
* [getApiOembed](#getapioembed) - OEmbed as JSON
* [getApiProofs](#getapiproofs) - View identity proof
* [getApiV1AdminAccounts](#getapiv1adminaccounts) - View accounts matching certain criteria for filtering, up to 100 at a time. Pagination may be done with the HTTP Link header in the response.
* [getApiV1AdminAccountsId](#getapiv1adminaccountsid) - View admin-level information about the given account.
* [getApiV1AdminReports](#getapiv1adminreports) - View all reports. Pagination may be done with HTTP Link header in the response.
* [getApiV1AdminReportsId](#getapiv1adminreportsid) - View information about the report with the given ID.
* [getApiV1Announcements](#getapiv1announcements) - See all currently active announcements set by admins.
* [getApiV1Blocks](#getapiv1blocks) - Get blocked users.
* [getApiV1Bookmarks](#getapiv1bookmarks) - Statuses the user has bookmarked.
* [getApiV1Conversations](#getapiv1conversations) - Show conversation.
* [getApiV1CustomEmojis](#getapiv1customemojis) - Returns custom emojis that are available on the server.
* [getApiV1Directory](#getapiv1directory) - List accounts visible in the directory.
* [getApiV1DomainBlocks](#getapiv1domainblocks) - View domains the user has blocked.
* [getApiV1Endorsements](#getapiv1endorsements) - Accounts that the user is currently featuring on their profile.
* [getApiV1Favourites](#getapiv1favourites) - Statuses the user has favourited.
* [getApiV1FeaturedTags](#getapiv1featuredtags) - View your featured tags.
* [getApiV1FeaturedTagsSuggestions](#getapiv1featuredtagssuggestions) - Shows your 10 most-used tags, with usage history for the past week.
* [getApiV1Filters](#getapiv1filters)
* [getApiV1FiltersId](#getapiv1filtersid) - Get one filter.
* [getApiV1FollowRequests](#getapiv1followrequests) - Pending Follows
* [getApiV1Instance](#getapiv1instance) - Information about the server.
* [getApiV1InstanceActivity](#getapiv1instanceactivity) - Instance activity over the last 3 months, binned weekly.
* [getApiV1InstancePeers](#getapiv1instancepeers) - Information about the server.
* [getApiV1Lists](#getapiv1lists) - Fetch all lists that the user owns.
* [getApiV1ListsId](#getapiv1listsid) - Remove converstation
* [getApiV1ListsIdAccounts](#getapiv1listsidaccounts) - View accounts in List
* [getApiV1MediaId](#getapiv1mediaid) - Get an attachement.
* [getApiV1Mutes](#getapiv1mutes) - Accounts the user has muted.
* [getApiV1Notifications](#getapiv1notifications) - Notifications concerning the user. This API returns Link headers containing links to the next/previous page. However, the links can also be constructed dynamically using query params and id values.
* [getApiV1NotificationsId](#getapiv1notificationsid) - View information about a notification with a given ID.
* [getApiV1PollsId](#getapiv1pollsid) - View a poll.
* [getApiV1Preferences](#getapiv1preferences) - Shows your 10 most-used tags, with usage history for the past week.
* [getApiV1PushSubscription](#getapiv1pushsubscription) - View the PushSubscription currently associated with this access token.
* [getApiV1ScheduledStatuses](#getapiv1scheduledstatuses) - View scheduled statuses
* [getApiV1ScheduledStatusesId](#getapiv1scheduledstatusesid) - View a single scheduled status
* [getApiV1StatusesId](#getapiv1statusesid)
* [getApiV1StatusesIdContext](#getapiv1statusesidcontext)
* [getApiV1StatusesIdFavouritedBy](#getapiv1statusesidfavouritedby) - View who favourited a given status.
* [getApiV1StatusesIdRebloggedBy](#getapiv1statusesidrebloggedby) - View who boosted a given status.
* [getApiV1Suggestions](#getapiv1suggestions) - Accounts the user has had past positive interactions with, but is not yet following.
* [getApiV1TimelinesHome](#getapiv1timelineshome) - View statuses from followed users.
* [getApiV1TimelinesListListId](#getapiv1timelineslistlistid) - View statuses in the given list timeline.
* [getApiV1TimelinesPublic](#getapiv1timelinespublic) - Public timeline
* [getApiV1TimelinesTagHashtag](#getapiv1timelinestaghashtag) - View public statuses containing the given hashtag.
* [getApiV1Trends](#getapiv1trends) - Tags that are being used more frequently within the past week.
* [getApiV2Search](#getapiv2search) - Search results
* [postApiV1AdminAccountsIdAction](#postapiv1adminaccountsidaction) - Perform an action against an account and log this action in the moderation history.
* [postApiV1AdminAccountsIdApprove](#postapiv1adminaccountsidapprove) - Approve the given local account if it is currently pending approval.
* [postApiV1AdminAccountsIdEnable](#postapiv1adminaccountsidenable) - Re-enable a local account whose login is currently disabled.
* [postApiV1AdminAccountsIdReject](#postapiv1adminaccountsidreject) - Reject the given local account if it is currently pending approval.
* [postApiV1AdminAccountsIdUnsilence](#postapiv1adminaccountsidunsilence) - Unsilence a currently silenced account.
* [postApiV1AdminAccountsIdUnsuspend](#postapiv1adminaccountsidunsuspend) - Unsuspend a currently suspended account.
* [postApiV1AdminReportsIdAssignToSelf](#postapiv1adminreportsidassigntoself) - Claim the handling of this report to yourself.
* [postApiV1AdminReportsIdReopen](#postapiv1adminreportsidreopen) - Mark a report as resolved with no further action taken.
* [postApiV1AdminReportsIdResolve](#postapiv1adminreportsidresolve) - Mark a report as resolved with no further action taken.
* [postApiV1AdminReportsIdUnassign](#postapiv1adminreportsidunassign) - Unassign a report so that someone else can claim it.
* [postApiV1AnnouncementsIdDismiss](#postapiv1announcementsiddismiss) - Allows a user to mark the announcement as read.
* [postApiV1ConversationsIdRead](#postapiv1conversationsidread) - Remove converstation
* [postApiV1DomainBlocks](#postapiv1domainblocks) - "Block a domain to:
- hide all public posts from it
- hide all notifications from it
- remove all followers from it
- prevent following new users from it (but does not remove existing follows)"

* [postApiV1FeaturedTags](#postapiv1featuredtags) - Create a feature a tag.
* [postApiV1Filters](#postapiv1filters)
* [postApiV1FollowRequestsIdAuthorize](#postapiv1followrequestsidauthorize) - Accept Follow
* [postApiV1FollowRequestsIdReject](#postapiv1followrequestsidreject) - Accept Follow
* [postApiV1Lists](#postapiv1lists) - Create a new list.
* [postApiV1ListsIdAccounts](#postapiv1listsidaccounts) - Add accounts to the given list. Note that the user must be following these accounts.
* [postApiV1Markers](#postapiv1markers) - Get saved timeline position
* [postApiV1Media](#postapiv1media) - Creates an attachment to be used with a new status.
* [postApiV1MediaId](#postapiv1mediaid) - Update an Attachment, before it is attached to a status and posted.
* [postApiV1NotificationsClear](#postapiv1notificationsclear) - Clear all notifications from the server.
* [postApiV1NotificationsIdDismiss](#postapiv1notificationsiddismiss) - Clear a single notification from the server.
* [postApiV1PollsId](#postapiv1pollsid) - Vote on a poll.
* [postApiV1PushSubscription](#postapiv1pushsubscription) - Add a Web Push API subscription to receive notifications. Each access token can have one push subscription. If you create a new subscription, the old subscription is deleted.
* [postApiV1Reports](#postapiv1reports) - File a report.
* [postApiV1Statuses](#postapiv1statuses)
* [postApiV1StatusesIdBookmark](#postapiv1statusesidbookmark) - Privately bookmark a status.
* [postApiV1StatusesIdFavourite](#postapiv1statusesidfavourite) - Add a status to your favourites list.
* [postApiV1StatusesIdMute](#postapiv1statusesidmute) - Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.
* [postApiV1StatusesIdPin](#postapiv1statusesidpin) - Feature one of your own public statuses at the top of your profile.
* [postApiV1StatusesIdReblog](#postapiv1statusesidreblog) - Reshare a status.
* [postApiV1StatusesIdUnbookmark](#postapiv1statusesidunbookmark) - Remove a status from your private bookmarks.
* [postApiV1StatusesIdUnfavourite](#postapiv1statusesidunfavourite) - Remove a status from your favourites list.
* [postApiV1StatusesIdUnmute](#postapiv1statusesidunmute) - Status's conversation unmuted, or was already unmuted
* [postApiV1StatusesIdUnpin](#postapiv1statusesidunpin) - Unfeature a status from the top of your profile.
* [postApiV1StatusesIdUnreblog](#postapiv1statusesidunreblog) - Undo a reshare of a status.
* [putApiV1AnnouncementsIdReactionsName](#putapiv1announcementsidreactionsname) - Allows a user to mark the announcement as read.
* [putApiV1FiltersId](#putapiv1filtersid) - Update a filter.
* [putApiV1Lists](#putapiv1lists) - Change the title of a list, or which replies to show.
* [putApiV1PushSubscription](#putapiv1pushsubscription) - Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
* [putApiV1ScheduledStatusesId](#putapiv1scheduledstatusesid) - View a single scheduled status

## deleteApiV1AnnouncementsIdReactionsName

Undo a react emoji to an announcement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1AnnouncementsIdReactionsNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1AnnouncementsIdReactionsNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV1AnnouncementsIdReactionsNameRequest();
    $request->id = 'c2ddf7cc-78ca-41ba-928f-c816742cb739';
    $request->name = 'Dorothy Hane';

    $requestSecurity = new DeleteApiV1AnnouncementsIdReactionsNameSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->deleteApiV1AnnouncementsIdReactionsName($request, $requestSecurity);

    if ($response->deleteApiV1AnnouncementsIdReactionsName200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiV1ConversationsId

Remove converstation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1ConversationsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1ConversationsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV1ConversationsIdRequest();
    $request->id = '9396fea7-596e-4b10-baaa-2352c5955907';

    $requestSecurity = new DeleteApiV1ConversationsIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->deleteApiV1ConversationsId($request, $requestSecurity);

    if ($response->deleteApiV1ConversationsId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiV1DomainBlocks

Remove a domain block, if it exists in the user's array of blocked domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1DomainBlocksRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1DomainBlocksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV1DomainBlocksRequest();
    $request->domain = 'culpa';

    $requestSecurity = new DeleteApiV1DomainBlocksSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->deleteApiV1DomainBlocks($request, $requestSecurity);

    if ($response->deleteApiV1DomainBlocks200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiV1FeaturedTagsId

Unfeature a tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1FeaturedTagsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1FeaturedTagsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV1FeaturedTagsIdRequest();
    $request->id = 'ff1a3a2f-a946-4773-9251-aa52c3f5ad01';

    $requestSecurity = new DeleteApiV1FeaturedTagsIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->deleteApiV1FeaturedTagsId($request, $requestSecurity);

    if ($response->deleteApiV1FeaturedTagsId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiV1FiltersId

Delete a filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1FiltersIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1FiltersIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV1FiltersIdRequest();
    $request->id = '9da1ffe7-8f09-47b0-874f-15471b5e6e13';

    $requestSecurity = new DeleteApiV1FiltersIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->deleteApiV1FiltersId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiV1Lists

Delete a list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1ListsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new DeleteApiV1ListsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->deleteApiV1Lists($requestSecurity);

    if ($response->deleteApiV1Lists200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiV1ListsIdAccounts

Remove accounts from the given list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1ListsIdAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1ListsIdAccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV1ListsIdAccountsRequest();
    $request->accountIds = [
        'molestias',
        'excepturi',
        'pariatur',
    ];
    $request->id = '488e1e91-e450-4ad2-abd4-4269802d502a';

    $requestSecurity = new DeleteApiV1ListsIdAccountsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->deleteApiV1ListsIdAccounts($request, $requestSecurity);

    if ($response->deleteApiV1ListsIdAccounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiV1PushSubscription

Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1PushSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new DeleteApiV1PushSubscriptionSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->deleteApiV1PushSubscription($requestSecurity);

    if ($response->deleteApiV1PushSubscription200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiV1ScheduledStatusesId

Cancel a scheduled status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1ScheduledStatusesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1ScheduledStatusesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV1ScheduledStatusesIdRequest();
    $request->id = '94bb4f63-c969-4e9a-befa-77dfb14cd66a';

    $requestSecurity = new DeleteApiV1ScheduledStatusesIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->deleteApiV1ScheduledStatusesId($request, $requestSecurity);

    if ($response->deleteApiV1ScheduledStatusesId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiV1StatusesId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1StatusesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1StatusesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV1StatusesIdRequest();
    $request->id = 'e395efb9-ba88-4f3a-a699-7074ba4469b6';

    $requestSecurity = new DeleteApiV1StatusesIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->deleteApiV1StatusesId($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiV1SuggestionsId

Delete user suggestion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1SuggestionsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1SuggestionsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV1SuggestionsIdRequest();
    $request->id = 'e2141959-890a-4fa5-a3e2-516fe4c8b711';

    $requestSecurity = new DeleteApiV1SuggestionsIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->deleteApiV1SuggestionsId($request, $requestSecurity);

    if ($response->deleteApiV1SuggestionsId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiOembed

OEmbed as JSON

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiOembedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiOembedRequest();
    $request->maxheight = 919483;
    $request->maxwidth = 352312;
    $request->url = 'expedita';

    $response = $sdk->sdk->getApiOembed($request);

    if ($response->card !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiProofs

View identity proof

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiProofsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiProofsRequest();
    $request->provider = 'nihil';
    $request->username = 'Zoila90';

    $response = $sdk->sdk->getApiProofs($request);

    if ($response->identityProof !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1AdminAccounts

View accounts matching certain criteria for filtering, up to 100 at a time. Pagination may be done with the HTTP Link header in the response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AdminAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AdminAccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1AdminAccountsRequest();
    $request->active = false;
    $request->byDomain = 'pariatur';
    $request->disabled = false;
    $request->displayName = 'accusantium';
    $request->email = 'Johan12@gmail.com';
    $request->ip = 'quo';
    $request->local = false;
    $request->pending = false;
    $request->remote = false;
    $request->silenced = false;
    $request->staff = false;
    $request->suspended = false;
    $request->username = 'Rosendo.Streich56';

    $requestSecurity = new GetApiV1AdminAccountsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1AdminAccounts($request, $requestSecurity);

    if ($response->adminAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1AdminAccountsId

View admin-level information about the given account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AdminAccountsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AdminAccountsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1AdminAccountsIdRequest();
    $request->id = '2601fb57-6b0d-45f0-930c-5fbb25870532';

    $requestSecurity = new GetApiV1AdminAccountsIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1AdminAccountsId($request, $requestSecurity);

    if ($response->adminAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1AdminReports

View all reports. Pagination may be done with HTTP Link header in the response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AdminReportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AdminReportsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1AdminReportsRequest();
    $request->accountId = 'perferendis';
    $request->resolved = false;
    $request->targetAccountId = 'dolores';

    $requestSecurity = new GetApiV1AdminReportsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1AdminReports($request, $requestSecurity);

    if ($response->adminReports !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1AdminReportsId

View information about the report with the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AdminReportsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AdminReportsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1AdminReportsIdRequest();
    $request->id = 'c73d5fe9-b90c-4289-89b3-fe49a8d9cbf4';

    $requestSecurity = new GetApiV1AdminReportsIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1AdminReportsId($request, $requestSecurity);

    if ($response->adminReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Announcements

See all currently active announcements set by admins.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AnnouncementsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1AnnouncementsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1AnnouncementsRequest();
    $request->withDismissed = false;

    $requestSecurity = new GetApiV1AnnouncementsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1Announcements($request, $requestSecurity);

    if ($response->announcements !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Blocks

Get blocked users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1BlocksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1BlocksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1BlocksRequest();
    $request->limit = 554242;
    $request->maxId = 'aliquid';
    $request->sinceId = 'dolorem';

    $requestSecurity = new GetApiV1BlocksSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1Blocks($request, $requestSecurity);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Bookmarks

Statuses the user has bookmarked.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1BookmarksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1BookmarksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1BookmarksRequest();
    $request->limit = 209843;
    $request->maxId = 'dolor';
    $request->minId = 'qui';
    $request->sinceId = 'ipsum';

    $requestSecurity = new GetApiV1BookmarksSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1Bookmarks($request, $requestSecurity);

    if ($response->statuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Conversations

Show conversation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ConversationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ConversationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1ConversationsRequest();
    $request->limit = 944373;
    $request->maxId = 'excepturi';
    $request->minId = 'cum';
    $request->sinceId = 'voluptate';

    $requestSecurity = new GetApiV1ConversationsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1Conversations($request, $requestSecurity);

    if ($response->conversations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1CustomEmojis

Returns custom emojis that are available on the server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getApiV1CustomEmojis();

    if ($response->emojis !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Directory

List accounts visible in the directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DirectoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DirectoryOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1DirectoryRequest();
    $request->limit = 490459;
    $request->local = false;
    $request->offset = 970237;
    $request->order = GetApiV1DirectoryOrderEnum::ACTIVE;

    $response = $sdk->sdk->getApiV1Directory($request);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1DomainBlocks

View domains the user has blocked.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DomainBlocksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DomainBlocksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1DomainBlocksRequest();
    $request->limit = 680545;
    $request->maxId = 'numquam';
    $request->sinceId = 'veritatis';

    $requestSecurity = new GetApiV1DomainBlocksSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1DomainBlocks($request, $requestSecurity);

    if ($response->getApiV1DomainBlocks200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Endorsements

Accounts that the user is currently featuring on their profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1EndorsementsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1EndorsementsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1EndorsementsRequest();
    $request->limit = 58029;
    $request->maxId = 'ipsa';
    $request->sinceId = 'iure';

    $requestSecurity = new GetApiV1EndorsementsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1Endorsements($request, $requestSecurity);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Favourites

Statuses the user has favourited.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1FavouritesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1FavouritesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1FavouritesRequest();
    $request->limit = 'odio';
    $request->maxId = 'quaerat';
    $request->minId = 'accusamus';

    $requestSecurity = new GetApiV1FavouritesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1Favourites($request, $requestSecurity);

    if ($response->statuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1FeaturedTags

View your featured tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1FeaturedTagsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetApiV1FeaturedTagsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1FeaturedTags($requestSecurity);

    if ($response->featuredTags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1FeaturedTagsSuggestions

Shows your 10 most-used tags, with usage history for the past week.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1FeaturedTagsSuggestionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetApiV1FeaturedTagsSuggestionsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1FeaturedTagsSuggestions($requestSecurity);

    if ($response->featuredTags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Filters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1FiltersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetApiV1FiltersSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1Filters($requestSecurity);

    if ($response->filters !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1FiltersId

Get one filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1FiltersIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1FiltersIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1FiltersIdRequest();
    $request->id = 'bf69280d-1ba7-47a8-9ebf-737ae4203ce5';

    $requestSecurity = new GetApiV1FiltersIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1FiltersId($request, $requestSecurity);

    if ($response->filter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1FollowRequests

Pending Follows

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1FollowRequestsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1FollowRequestsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1FollowRequestsRequest();
    $request->limit = 904425;

    $requestSecurity = new GetApiV1FollowRequestsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1FollowRequests($request, $requestSecurity);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Instance

Information about the server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getApiV1Instance();

    if ($response->instance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1InstanceActivity

Instance activity over the last 3 months, binned weekly.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getApiV1InstanceActivity();

    if ($response->activities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1InstancePeers

Information about the server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getApiV1InstancePeers();

    if ($response->getApiV1InstancePeers200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Lists

Fetch all lists that the user owns.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ListsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetApiV1ListsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1Lists($requestSecurity);

    if ($response->lists !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1ListsId

Remove converstation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ListsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ListsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1ListsIdRequest();
    $request->id = '6a95d8a0-d446-4ce2-af7a-73cf3be453f8';

    $requestSecurity = new GetApiV1ListsIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1ListsId($request, $requestSecurity);

    if ($response->list !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1ListsIdAccounts

View accounts in List

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ListsIdAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ListsIdAccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1ListsIdAccountsRequest();
    $request->id = '70b326b5-a734-429c-9b1a-8422bb679d23';
    $request->limit = 144847;
    $request->maxId = 'magni';
    $request->sinceId = 'odio';

    $requestSecurity = new GetApiV1ListsIdAccountsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1ListsIdAccounts($request, $requestSecurity);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1MediaId

Get an attachement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1MediaIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1MediaIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1MediaIdRequest();
    $request->id = '15bf0cbb-1e31-4b8b-90f3-443a1108e0ad';

    $requestSecurity = new GetApiV1MediaIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1MediaId($request, $requestSecurity);

    if ($response->attachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Mutes

Accounts the user has muted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1MutesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1MutesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1MutesRequest();
    $request->limit = 'porro';
    $request->maxId = 'doloribus';
    $request->sinceId = 'ut';

    $requestSecurity = new GetApiV1MutesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1Mutes($request, $requestSecurity);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Notifications

Notifications concerning the user. This API returns Link headers containing links to the next/previous page. However, the links can also be constructed dynamically using query params and id values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1NotificationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1NotificationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1NotificationsRequest();
    $request->accountId = 'facilis';
    $request->excludeTypes = [
        'qui',
        'quae',
        'laudantium',
    ];
    $request->limit = 485628;
    $request->maxId = 'occaecati';
    $request->minId = 'voluptatibus';
    $request->sinceId = 'quisquam';

    $requestSecurity = new GetApiV1NotificationsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1Notifications($request, $requestSecurity);

    if ($response->notifications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1NotificationsId

View information about a notification with a given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1NotificationsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1NotificationsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1NotificationsIdRequest();
    $request->id = 'e953f73e-f7fb-4c7a-bd74-dd39c0f5d2cf';

    $requestSecurity = new GetApiV1NotificationsIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1NotificationsId($request, $requestSecurity);

    if ($response->notification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1PollsId

View a poll.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1PollsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1PollsIdRequest();
    $request->id = 'f7c70a45-626d-4436-813f-16d9f5fce6c5';

    $response = $sdk->sdk->getApiV1PollsId($request);

    if ($response->poll !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Preferences

Shows your 10 most-used tags, with usage history for the past week.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1PreferencesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetApiV1PreferencesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1Preferences($requestSecurity);

    if ($response->preferences !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1PushSubscription

View the PushSubscription currently associated with this access token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1PushSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetApiV1PushSubscriptionSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1PushSubscription($requestSecurity);

    if ($response->pushSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1ScheduledStatuses

View scheduled statuses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ScheduledStatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ScheduledStatusesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1ScheduledStatusesRequest();
    $request->limit = 333145;
    $request->maxId = 'aliquid';
    $request->minId = 'inventore';
    $request->sinceId = 'magnam';

    $requestSecurity = new GetApiV1ScheduledStatusesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1ScheduledStatuses($request, $requestSecurity);

    if ($response->scheduledStatuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1ScheduledStatusesId

View a single scheduled status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ScheduledStatusesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ScheduledStatusesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1ScheduledStatusesIdRequest();
    $request->id = '6c3e250f-b008-4c42-a141-aac366c8dd6b';

    $requestSecurity = new GetApiV1ScheduledStatusesIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1ScheduledStatusesId($request, $requestSecurity);

    if ($response->scheduledStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1StatusesId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1StatusesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1StatusesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1StatusesIdRequest();
    $request->id = '14429074-7477-48a7-bd46-6d28c10ab3cd';

    $requestSecurity = new GetApiV1StatusesIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1StatusesId($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1StatusesIdContext

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1StatusesIdContextRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1StatusesIdContextSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1StatusesIdContextRequest();
    $request->id = 'ca425190-4e52-43c7-a0bc-7178e4796f2a';

    $requestSecurity = new GetApiV1StatusesIdContextSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1StatusesIdContext($request, $requestSecurity);

    if ($response->context !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1StatusesIdFavouritedBy

View who favourited a given status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1StatusesIdFavouritedByRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1StatusesIdFavouritedByRequest();
    $request->id = '70c68828-2aa4-4825-a2f2-22e9817ee17c';

    $response = $sdk->sdk->getApiV1StatusesIdFavouritedBy($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1StatusesIdRebloggedBy

View who boosted a given status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1StatusesIdRebloggedByRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1StatusesIdRebloggedByRequest();
    $request->id = 'be61e6b7-b95b-4c0a-b3c2-0c4f3789fd87';

    $response = $sdk->sdk->getApiV1StatusesIdRebloggedBy($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Suggestions

Accounts the user has had past positive interactions with, but is not yet following.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1SuggestionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1SuggestionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1SuggestionsRequest();
    $request->limit = 97468;

    $requestSecurity = new GetApiV1SuggestionsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1Suggestions($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1TimelinesHome

View statuses from followed users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1TimelinesHomeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1TimelinesHomeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1TimelinesHomeRequest();
    $request->limit = 951875;
    $request->local = false;
    $request->maxId = 'error';
    $request->minId = 'sint';
    $request->sinceId = 'pariatur';

    $requestSecurity = new GetApiV1TimelinesHomeSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1TimelinesHome($request, $requestSecurity);

    if ($response->statuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1TimelinesListListId

View statuses in the given list timeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1TimelinesListListIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1TimelinesListListIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1TimelinesListListIdRequest();
    $request->limit = 820767;
    $request->listId = 'quia';
    $request->maxId = 'eveniet';
    $request->minId = 'asperiores';
    $request->sinceId = 'facere';

    $requestSecurity = new GetApiV1TimelinesListListIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV1TimelinesListListId($request, $requestSecurity);

    if ($response->statuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1TimelinesPublic

Public timeline

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1TimelinesPublicRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1TimelinesPublicRequest();
    $request->limit = 85001;
    $request->local = false;
    $request->maxId = 'consequuntur';
    $request->minId = 'quasi';
    $request->onlyMedia = false;
    $request->remote = false;
    $request->sinceId = 'similique';

    $response = $sdk->sdk->getApiV1TimelinesPublic($request);

    if ($response->statuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1TimelinesTagHashtag

View public statuses containing the given hashtag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1TimelinesTagHashtagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1TimelinesTagHashtagRequest();
    $request->hashtag = 'culpa';
    $request->limit = 398434;
    $request->local = false;
    $request->maxId = 'tenetur';
    $request->minId = 'quae';
    $request->onlyMedia = false;
    $request->remote = false;
    $request->sinceId = 'earum';

    $response = $sdk->sdk->getApiV1TimelinesTagHashtag($request);

    if ($response->statuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1Trends

Tags that are being used more frequently within the past week.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1TrendsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1TrendsRequest();
    $request->limit = 424032;

    $response = $sdk->sdk->getApiV1Trends($request);

    if ($response->tags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2Search

Search results

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SearchTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2SearchRequest();
    $request->accountId = 'in';
    $request->excludeUnreviewed = false;
    $request->following = false;
    $request->limit = 258684;
    $request->maxId = 'libero';
    $request->minId = 'illum';
    $request->offset = 742238;
    $request->q = 'accusantium';
    $request->resolve = 'aliquam';
    $request->type = GetApiV2SearchTypeEnum::STATUSES;

    $requestSecurity = new GetApiV2SearchSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getApiV2Search($request, $requestSecurity);

    if ($response->getApiV2Search200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AdminAccountsIdAction

Perform an action against an account and log this action in the moderation history.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminAccountsIdActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminAccountsIdActionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminAccountsIdActionRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminAccountsIdActionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AdminAccountsIdActionRequest();
    $request->requestBody = new PostApiV1AdminAccountsIdActionRequestBody();
    $request->requestBody->reportId = 'dicta';
    $request->requestBody->sendEmailNotification = false;
    $request->requestBody->text = 'ullam';
    $request->requestBody->type = PostApiV1AdminAccountsIdActionRequestBodyTypeEnum::DISABLE;
    $request->requestBody->warningPresetId = 'ullam';
    $request->id = '6082d68e-a19f-41d1-b051-339d08086a18';

    $requestSecurity = new PostApiV1AdminAccountsIdActionSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1AdminAccountsIdAction($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AdminAccountsIdApprove

Approve the given local account if it is currently pending approval.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminAccountsIdApproveRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminAccountsIdApproveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AdminAccountsIdApproveRequest();
    $request->id = '40394c26-071f-493f-9f06-42dac7af515c';

    $requestSecurity = new PostApiV1AdminAccountsIdApproveSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1AdminAccountsIdApprove($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AdminAccountsIdEnable

Re-enable a local account whose login is currently disabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminAccountsIdEnableRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminAccountsIdEnableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AdminAccountsIdEnableRequest();
    $request->id = 'c413aa63-aae8-4d67-864d-bb675fd5e60b';

    $requestSecurity = new PostApiV1AdminAccountsIdEnableSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1AdminAccountsIdEnable($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AdminAccountsIdReject

Reject the given local account if it is currently pending approval.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminAccountsIdRejectRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminAccountsIdRejectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AdminAccountsIdRejectRequest();
    $request->id = '375ed4f6-fbee-441f-b331-7fe35b60eb1e';

    $requestSecurity = new PostApiV1AdminAccountsIdRejectSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1AdminAccountsIdReject($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AdminAccountsIdUnsilence

Unsilence a currently silenced account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminAccountsIdUnsilenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminAccountsIdUnsilenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AdminAccountsIdUnsilenceRequest();
    $request->id = 'a426555b-a3c2-4874-8ed5-3b88f3a8d8f5';

    $requestSecurity = new PostApiV1AdminAccountsIdUnsilenceSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1AdminAccountsIdUnsilence($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AdminAccountsIdUnsuspend

Unsuspend a currently suspended account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminAccountsIdUnsuspendRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminAccountsIdUnsuspendSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AdminAccountsIdUnsuspendRequest();
    $request->id = 'c0b2f2fb-7b19-44a2-b6b2-6916fe1f08f4';

    $requestSecurity = new PostApiV1AdminAccountsIdUnsuspendSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1AdminAccountsIdUnsuspend($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AdminReportsIdAssignToSelf

Claim the handling of this report to yourself.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminReportsIdAssignToSelfRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminReportsIdAssignToSelfSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AdminReportsIdAssignToSelfRequest();
    $request->id = '294e3698-f447-4f60-be8b-445e80ca55ef';

    $requestSecurity = new PostApiV1AdminReportsIdAssignToSelfSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1AdminReportsIdAssignToSelf($request, $requestSecurity);

    if ($response->adminReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AdminReportsIdReopen

Mark a report as resolved with no further action taken.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminReportsIdReopenRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminReportsIdReopenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AdminReportsIdReopenRequest();
    $request->id = 'd20e457e-1858-4b6a-89fb-e3a5aa8e4824';

    $requestSecurity = new PostApiV1AdminReportsIdReopenSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1AdminReportsIdReopen($request, $requestSecurity);

    if ($response->adminReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AdminReportsIdResolve

Mark a report as resolved with no further action taken.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminReportsIdResolveRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminReportsIdResolveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AdminReportsIdResolveRequest();
    $request->id = 'd0ab4075-088e-4518-a206-5e904f3b1194';

    $requestSecurity = new PostApiV1AdminReportsIdResolveSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1AdminReportsIdResolve($request, $requestSecurity);

    if ($response->adminReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AdminReportsIdUnassign

Unassign a report so that someone else can claim it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminReportsIdUnassignRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AdminReportsIdUnassignSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AdminReportsIdUnassignRequest();
    $request->id = 'b8abf603-a79f-49df-a0ab-7da8a50ce187';

    $requestSecurity = new PostApiV1AdminReportsIdUnassignSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1AdminReportsIdUnassign($request, $requestSecurity);

    if ($response->adminReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1AnnouncementsIdDismiss

Allows a user to mark the announcement as read.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AnnouncementsIdDismissRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1AnnouncementsIdDismissSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1AnnouncementsIdDismissRequest();
    $request->id = 'f86bc173-d689-4eee-9526-f8d986e881ea';

    $requestSecurity = new PostApiV1AnnouncementsIdDismissSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1AnnouncementsIdDismiss($request, $requestSecurity);

    if ($response->postApiV1AnnouncementsIdDismiss200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1ConversationsIdRead

Remove converstation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1ConversationsIdReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1ConversationsIdReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1ConversationsIdReadRequest();
    $request->id = 'd4f0e101-2563-4f94-a29e-973e922a57a1';

    $requestSecurity = new PostApiV1ConversationsIdReadSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1ConversationsIdRead($request, $requestSecurity);

    if ($response->conversation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1DomainBlocks

"Block a domain to:
- hide all public posts from it
- hide all notifications from it
- remove all followers from it
- prevent following new users from it (but does not remove existing follows)"


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1DomainBlocksSecurity;

$sdk = SDK::builder()
    ->build();

try {
'corporis'

    $requestSecurity = new PostApiV1DomainBlocksSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1DomainBlocks($request, $requestSecurity);

    if ($response->postApiV1DomainBlocks200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1FeaturedTags

Create a feature a tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1FeaturedTagsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1FeaturedTagsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1FeaturedTagsRequestBody();
    $request->name = 'Conrad Franey III';

    $requestSecurity = new PostApiV1FeaturedTagsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1FeaturedTags($request, $requestSecurity);

    if ($response->featuredTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1Filters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1FiltersSecurity;

$sdk = SDK::builder()
    ->build();

try {
'ipsa'

    $requestSecurity = new PostApiV1FiltersSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1Filters($request, $requestSecurity);

    if ($response->filter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1FollowRequestsIdAuthorize

Accept Follow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1FollowRequestsIdAuthorizeRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1FollowRequestsIdAuthorizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1FollowRequestsIdAuthorizeRequest();
    $request->id = '807e2b6e-3ab8-4845-b059-7a60ff2a54a3';

    $requestSecurity = new PostApiV1FollowRequestsIdAuthorizeSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1FollowRequestsIdAuthorize($request, $requestSecurity);

    if ($response->relationship !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1FollowRequestsIdReject

Accept Follow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1FollowRequestsIdRejectRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1FollowRequestsIdRejectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1FollowRequestsIdRejectRequest();
    $request->id = '1e94764a-3e86-45e7-956f-9251a5a9da66';

    $requestSecurity = new PostApiV1FollowRequestsIdRejectSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1FollowRequestsIdReject($request, $requestSecurity);

    if ($response->relationship !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1Lists

Create a new list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1ListsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1ListsRequestBodyRepliesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1ListsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1ListsRequestBody();
    $request->repliesPolicy = PostApiV1ListsRequestBodyRepliesPolicyEnum::FOLLOWED;
    $request->title = 'Dr.';

    $requestSecurity = new PostApiV1ListsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1Lists($request, $requestSecurity);

    if ($response->list !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1ListsIdAccounts

Add accounts to the given list. Note that the user must be following these accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1ListsIdAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1ListsIdAccountsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1ListsIdAccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1ListsIdAccountsRequest();
    $request->requestBody = new PostApiV1ListsIdAccountsRequestBody();
    $request->requestBody->accountIds = [
        'ullam',
        'in',
        'nam',
        'earum',
    ];
    $request->id = 'aad4f9ef-c1b4-4512-8103-2648dc2f6151';

    $requestSecurity = new PostApiV1ListsIdAccountsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1ListsIdAccounts($request, $requestSecurity);

    if ($response->postApiV1ListsIdAccounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1Markers

Get saved timeline position

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1MarkersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'provident' => 'earum',
        'soluta' => 'hic',
        'illum' => 'eaque',
    ]

    $requestSecurity = new PostApiV1MarkersSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1Markers($request, $requestSecurity);

    if ($response->postApiV1Markers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1Media

Creates an attachment to be used with a new status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1MediaSecurity;

$sdk = SDK::builder()
    ->build();

try {
'earum'

    $requestSecurity = new PostApiV1MediaSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1Media($request, $requestSecurity);

    if ($response->attachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1MediaId

Update an Attachment, before it is attached to a status and posted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1MediaIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1MediaIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1MediaIdRequest();
    $request->requestBody = 'perspiciatis';
    $request->id = 'fe6c632c-a3ae-4d01-9799-6312fde04771';

    $requestSecurity = new PostApiV1MediaIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1MediaId($request, $requestSecurity);

    if ($response->attachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1NotificationsClear

Clear all notifications from the server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1NotificationsClearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PostApiV1NotificationsClearSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1NotificationsClear($requestSecurity);

    if ($response->postApiV1NotificationsClear200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1NotificationsIdDismiss

Clear a single notification from the server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1NotificationsIdDismissRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1NotificationsIdDismissSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1NotificationsIdDismissRequest();
    $request->id = '778ff61d-0174-4763-a0a1-5db6a660659a';

    $requestSecurity = new PostApiV1NotificationsIdDismissSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1NotificationsIdDismiss($request, $requestSecurity);

    if ($response->notification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1PollsId

Vote on a poll.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1PollsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1PollsIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1PollsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1PollsIdRequest();
    $request->requestBody = new PostApiV1PollsIdRequestBody();
    $request->requestBody->choices = [
        'error',
    ];
    $request->id = 'deaab585-1d6c-4645-b08b-61891baa0fe1';

    $requestSecurity = new PostApiV1PollsIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1PollsId($request, $requestSecurity);

    if ($response->poll !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1PushSubscription

Add a Web Push API subscription to receive notifications. Each access token can have one push subscription. If you create a new subscription, the old subscription is deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1PushSubscriptionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1PushSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1PushSubscriptionRequestBody();
    $request->data = 'fuga';
    $request->subscription = 'pariatur';

    $requestSecurity = new PostApiV1PushSubscriptionSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1PushSubscription($request, $requestSecurity);

    if ($response->pushSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1Reports

File a report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1ReportsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1ReportsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1ReportsRequestBody();
    $request->accountId = 'debitis';
    $request->comment = 'voluptatem';
    $request->forward = false;
    $request->statusIds = [
        'deleniti',
    ];

    $requestSecurity = new PostApiV1ReportsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1Reports($request, $requestSecurity);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1Statuses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesRequestBodyVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1StatusesRequest();
    $request->idempotencyKey = 'earum';
    $request->requestBody = [
        new PostApiV1StatusesRequestBody(),
        new PostApiV1StatusesRequestBody(),
    ];

    $requestSecurity = new PostApiV1StatusesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1Statuses($request, $requestSecurity);

    if ($response->postApiV1Statuses200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1StatusesIdBookmark

Privately bookmark a status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdBookmarkRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdBookmarkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1StatusesIdBookmarkRequest();
    $request->id = 'f8c5f350-d8cd-4b5a-b418-143010421813';

    $requestSecurity = new PostApiV1StatusesIdBookmarkSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1StatusesIdBookmark($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1StatusesIdFavourite

Add a status to your favourites list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdFavouriteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdFavouriteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1StatusesIdFavouriteRequest();
    $request->id = 'd5208ece-7e25-43b6-a845-1c6c6e205e16';

    $requestSecurity = new PostApiV1StatusesIdFavouriteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1StatusesIdFavourite($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1StatusesIdMute

Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdMuteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdMuteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1StatusesIdMuteRequest();
    $request->id = 'deab3fec-9578-4a64-9842-73a8418d1623';

    $requestSecurity = new PostApiV1StatusesIdMuteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1StatusesIdMute($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1StatusesIdPin

Feature one of your own public statuses at the top of your profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdPinRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdPinSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1StatusesIdPinRequest();
    $request->id = '09fb0929-921a-4efb-9f58-c4d86e68e4be';

    $requestSecurity = new PostApiV1StatusesIdPinSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1StatusesIdPin($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1StatusesIdReblog

Reshare a status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdReblogRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdReblogRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdReblogSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1StatusesIdReblogRequest();
    $request->requestBody = new PostApiV1StatusesIdReblogRequestBody();
    $request->requestBody->visibility = 'voluptatem';
    $request->id = '56013f59-da75-47a5-9ecf-ef66ef1caa33';

    $requestSecurity = new PostApiV1StatusesIdReblogSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1StatusesIdReblog($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1StatusesIdUnbookmark

Remove a status from your private bookmarks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdUnbookmarkRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdUnbookmarkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1StatusesIdUnbookmarkRequest();
    $request->id = '83c2beb4-7737-43c8-972f-64d1db1f2c43';

    $requestSecurity = new PostApiV1StatusesIdUnbookmarkSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1StatusesIdUnbookmark($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1StatusesIdUnfavourite

Remove a status from your favourites list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdUnfavouriteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdUnfavouriteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1StatusesIdUnfavouriteRequest();
    $request->id = '10661e96-349e-41cf-9e06-e3a437000ae6';

    $requestSecurity = new PostApiV1StatusesIdUnfavouriteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1StatusesIdUnfavourite($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1StatusesIdUnmute

Status's conversation unmuted, or was already unmuted

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdUnmuteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdUnmuteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1StatusesIdUnmuteRequest();
    $request->id = 'b6bc9b8f-759e-4ac5-9a97-41d311352965';

    $requestSecurity = new PostApiV1StatusesIdUnmuteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1StatusesIdUnmute($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1StatusesIdUnpin

Unfeature a status from the top of your profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdUnpinRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdUnpinSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1StatusesIdUnpinRequest();
    $request->id = 'bb8a7202-6114-435e-939d-bc2259b1abda';

    $requestSecurity = new PostApiV1StatusesIdUnpinSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1StatusesIdUnpin($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1StatusesIdUnreblog

Undo a reshare of a status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdUnreblogRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1StatusesIdUnreblogSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1StatusesIdUnreblogRequest();
    $request->id = '8c070e10-84cb-4067-ad1a-d879eeb9665b';

    $requestSecurity = new PostApiV1StatusesIdUnreblogSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->postApiV1StatusesIdUnreblog($request, $requestSecurity);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putApiV1AnnouncementsIdReactionsName

Allows a user to mark the announcement as read.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutApiV1AnnouncementsIdReactionsNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutApiV1AnnouncementsIdReactionsNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutApiV1AnnouncementsIdReactionsNameRequest();
    $request->id = '85efbd02-bae0-4be2-9782-259e3ea4b519';
    $request->name = 'Lucia McDermott';

    $requestSecurity = new PutApiV1AnnouncementsIdReactionsNameSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->putApiV1AnnouncementsIdReactionsName($request, $requestSecurity);

    if ($response->putApiV1AnnouncementsIdReactionsName200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putApiV1FiltersId

Update a filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutApiV1FiltersIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutApiV1FiltersIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutApiV1FiltersIdRequest();
    $request->requestBody = 'numquam';
    $request->id = '3da7ce52-b895-4c53-bc64-54efb0b34896';

    $requestSecurity = new PutApiV1FiltersIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->putApiV1FiltersId($request, $requestSecurity);

    if ($response->filter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putApiV1Lists

Change the title of a list, or which replies to show.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutApiV1ListsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutApiV1ListsRequestBodyRepliesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutApiV1ListsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutApiV1ListsRequestBody();
    $request->repliesPolicy = PutApiV1ListsRequestBodyRepliesPolicyEnum::NONE;
    $request->title = 'Mrs.';

    $requestSecurity = new PutApiV1ListsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->putApiV1Lists($request, $requestSecurity);

    if ($response->list !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putApiV1PushSubscription

Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutApiV1PushSubscriptionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutApiV1PushSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutApiV1PushSubscriptionRequestBody();
    $request->data = 'minus';

    $requestSecurity = new PutApiV1PushSubscriptionSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->putApiV1PushSubscription($request, $requestSecurity);

    if ($response->pushSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putApiV1ScheduledStatusesId

View a single scheduled status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutApiV1ScheduledStatusesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutApiV1ScheduledStatusesIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutApiV1ScheduledStatusesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutApiV1ScheduledStatusesIdRequest();
    $request->requestBody = new PutApiV1ScheduledStatusesIdRequestBody();
    $request->requestBody->scheduledAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-24T11:49:33.998Z');
    $request->id = 'acfbe2fd-5707-4577-9291-77deac646ecb';

    $requestSecurity = new PutApiV1ScheduledStatusesIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->putApiV1ScheduledStatusesId($request, $requestSecurity);

    if ($response->scheduledStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
