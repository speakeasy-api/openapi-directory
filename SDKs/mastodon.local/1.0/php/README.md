# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';
    $request->name = 'Christopher Hills';

    $requestSecurity = new DeleteApiV1AnnouncementsIdReactionsNameSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->deleteApiV1AnnouncementsIdReactionsName($request, $requestSecurity);

    if ($response->deleteApiV1AnnouncementsIdReactionsName200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [deleteApiV1AnnouncementsIdReactionsName](docs/sdk/README.md#deleteapiv1announcementsidreactionsname) - Undo a react emoji to an announcement.
* [deleteApiV1ConversationsId](docs/sdk/README.md#deleteapiv1conversationsid) - Remove converstation
* [deleteApiV1DomainBlocks](docs/sdk/README.md#deleteapiv1domainblocks) - Remove a domain block, if it exists in the user's array of blocked domains.
* [deleteApiV1FeaturedTagsId](docs/sdk/README.md#deleteapiv1featuredtagsid) - Unfeature a tag
* [deleteApiV1FiltersId](docs/sdk/README.md#deleteapiv1filtersid) - Delete a filter.
* [deleteApiV1Lists](docs/sdk/README.md#deleteapiv1lists) - Delete a list
* [deleteApiV1ListsIdAccounts](docs/sdk/README.md#deleteapiv1listsidaccounts) - Remove accounts from the given list.
* [deleteApiV1PushSubscription](docs/sdk/README.md#deleteapiv1pushsubscription) - Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
* [deleteApiV1ScheduledStatusesId](docs/sdk/README.md#deleteapiv1scheduledstatusesid) - Cancel a scheduled status
* [deleteApiV1StatusesId](docs/sdk/README.md#deleteapiv1statusesid)
* [deleteApiV1SuggestionsId](docs/sdk/README.md#deleteapiv1suggestionsid) - Delete user suggestion
* [getApiOembed](docs/sdk/README.md#getapioembed) - OEmbed as JSON
* [getApiProofs](docs/sdk/README.md#getapiproofs) - View identity proof
* [getApiV1AdminAccounts](docs/sdk/README.md#getapiv1adminaccounts) - View accounts matching certain criteria for filtering, up to 100 at a time. Pagination may be done with the HTTP Link header in the response.
* [getApiV1AdminAccountsId](docs/sdk/README.md#getapiv1adminaccountsid) - View admin-level information about the given account.
* [getApiV1AdminReports](docs/sdk/README.md#getapiv1adminreports) - View all reports. Pagination may be done with HTTP Link header in the response.
* [getApiV1AdminReportsId](docs/sdk/README.md#getapiv1adminreportsid) - View information about the report with the given ID.
* [getApiV1Announcements](docs/sdk/README.md#getapiv1announcements) - See all currently active announcements set by admins.
* [getApiV1Blocks](docs/sdk/README.md#getapiv1blocks) - Get blocked users.
* [getApiV1Bookmarks](docs/sdk/README.md#getapiv1bookmarks) - Statuses the user has bookmarked.
* [getApiV1Conversations](docs/sdk/README.md#getapiv1conversations) - Show conversation.
* [getApiV1CustomEmojis](docs/sdk/README.md#getapiv1customemojis) - Returns custom emojis that are available on the server.
* [getApiV1Directory](docs/sdk/README.md#getapiv1directory) - List accounts visible in the directory.
* [getApiV1DomainBlocks](docs/sdk/README.md#getapiv1domainblocks) - View domains the user has blocked.
* [getApiV1Endorsements](docs/sdk/README.md#getapiv1endorsements) - Accounts that the user is currently featuring on their profile.
* [getApiV1Favourites](docs/sdk/README.md#getapiv1favourites) - Statuses the user has favourited.
* [getApiV1FeaturedTags](docs/sdk/README.md#getapiv1featuredtags) - View your featured tags.
* [getApiV1FeaturedTagsSuggestions](docs/sdk/README.md#getapiv1featuredtagssuggestions) - Shows your 10 most-used tags, with usage history for the past week.
* [getApiV1Filters](docs/sdk/README.md#getapiv1filters)
* [getApiV1FiltersId](docs/sdk/README.md#getapiv1filtersid) - Get one filter.
* [getApiV1FollowRequests](docs/sdk/README.md#getapiv1followrequests) - Pending Follows
* [getApiV1Instance](docs/sdk/README.md#getapiv1instance) - Information about the server.
* [getApiV1InstanceActivity](docs/sdk/README.md#getapiv1instanceactivity) - Instance activity over the last 3 months, binned weekly.
* [getApiV1InstancePeers](docs/sdk/README.md#getapiv1instancepeers) - Information about the server.
* [getApiV1Lists](docs/sdk/README.md#getapiv1lists) - Fetch all lists that the user owns.
* [getApiV1ListsId](docs/sdk/README.md#getapiv1listsid) - Remove converstation
* [getApiV1ListsIdAccounts](docs/sdk/README.md#getapiv1listsidaccounts) - View accounts in List
* [getApiV1MediaId](docs/sdk/README.md#getapiv1mediaid) - Get an attachement.
* [getApiV1Mutes](docs/sdk/README.md#getapiv1mutes) - Accounts the user has muted.
* [getApiV1Notifications](docs/sdk/README.md#getapiv1notifications) - Notifications concerning the user. This API returns Link headers containing links to the next/previous page. However, the links can also be constructed dynamically using query params and id values.
* [getApiV1NotificationsId](docs/sdk/README.md#getapiv1notificationsid) - View information about a notification with a given ID.
* [getApiV1PollsId](docs/sdk/README.md#getapiv1pollsid) - View a poll.
* [getApiV1Preferences](docs/sdk/README.md#getapiv1preferences) - Shows your 10 most-used tags, with usage history for the past week.
* [getApiV1PushSubscription](docs/sdk/README.md#getapiv1pushsubscription) - View the PushSubscription currently associated with this access token.
* [getApiV1ScheduledStatuses](docs/sdk/README.md#getapiv1scheduledstatuses) - View scheduled statuses
* [getApiV1ScheduledStatusesId](docs/sdk/README.md#getapiv1scheduledstatusesid) - View a single scheduled status
* [getApiV1StatusesId](docs/sdk/README.md#getapiv1statusesid)
* [getApiV1StatusesIdContext](docs/sdk/README.md#getapiv1statusesidcontext)
* [getApiV1StatusesIdFavouritedBy](docs/sdk/README.md#getapiv1statusesidfavouritedby) - View who favourited a given status.
* [getApiV1StatusesIdRebloggedBy](docs/sdk/README.md#getapiv1statusesidrebloggedby) - View who boosted a given status.
* [getApiV1Suggestions](docs/sdk/README.md#getapiv1suggestions) - Accounts the user has had past positive interactions with, but is not yet following.
* [getApiV1TimelinesHome](docs/sdk/README.md#getapiv1timelineshome) - View statuses from followed users.
* [getApiV1TimelinesListListId](docs/sdk/README.md#getapiv1timelineslistlistid) - View statuses in the given list timeline.
* [getApiV1TimelinesPublic](docs/sdk/README.md#getapiv1timelinespublic) - Public timeline
* [getApiV1TimelinesTagHashtag](docs/sdk/README.md#getapiv1timelinestaghashtag) - View public statuses containing the given hashtag.
* [getApiV1Trends](docs/sdk/README.md#getapiv1trends) - Tags that are being used more frequently within the past week.
* [getApiV2Search](docs/sdk/README.md#getapiv2search) - Search results
* [postApiV1AdminAccountsIdAction](docs/sdk/README.md#postapiv1adminaccountsidaction) - Perform an action against an account and log this action in the moderation history.
* [postApiV1AdminAccountsIdApprove](docs/sdk/README.md#postapiv1adminaccountsidapprove) - Approve the given local account if it is currently pending approval.
* [postApiV1AdminAccountsIdEnable](docs/sdk/README.md#postapiv1adminaccountsidenable) - Re-enable a local account whose login is currently disabled.
* [postApiV1AdminAccountsIdReject](docs/sdk/README.md#postapiv1adminaccountsidreject) - Reject the given local account if it is currently pending approval.
* [postApiV1AdminAccountsIdUnsilence](docs/sdk/README.md#postapiv1adminaccountsidunsilence) - Unsilence a currently silenced account.
* [postApiV1AdminAccountsIdUnsuspend](docs/sdk/README.md#postapiv1adminaccountsidunsuspend) - Unsuspend a currently suspended account.
* [postApiV1AdminReportsIdAssignToSelf](docs/sdk/README.md#postapiv1adminreportsidassigntoself) - Claim the handling of this report to yourself.
* [postApiV1AdminReportsIdReopen](docs/sdk/README.md#postapiv1adminreportsidreopen) - Mark a report as resolved with no further action taken.
* [postApiV1AdminReportsIdResolve](docs/sdk/README.md#postapiv1adminreportsidresolve) - Mark a report as resolved with no further action taken.
* [postApiV1AdminReportsIdUnassign](docs/sdk/README.md#postapiv1adminreportsidunassign) - Unassign a report so that someone else can claim it.
* [postApiV1AnnouncementsIdDismiss](docs/sdk/README.md#postapiv1announcementsiddismiss) - Allows a user to mark the announcement as read.
* [postApiV1ConversationsIdRead](docs/sdk/README.md#postapiv1conversationsidread) - Remove converstation
* [postApiV1DomainBlocks](docs/sdk/README.md#postapiv1domainblocks) - "Block a domain to:
- hide all public posts from it
- hide all notifications from it
- remove all followers from it
- prevent following new users from it (but does not remove existing follows)"

* [postApiV1FeaturedTags](docs/sdk/README.md#postapiv1featuredtags) - Create a feature a tag.
* [postApiV1Filters](docs/sdk/README.md#postapiv1filters)
* [postApiV1FollowRequestsIdAuthorize](docs/sdk/README.md#postapiv1followrequestsidauthorize) - Accept Follow
* [postApiV1FollowRequestsIdReject](docs/sdk/README.md#postapiv1followrequestsidreject) - Accept Follow
* [postApiV1Lists](docs/sdk/README.md#postapiv1lists) - Create a new list.
* [postApiV1ListsIdAccounts](docs/sdk/README.md#postapiv1listsidaccounts) - Add accounts to the given list. Note that the user must be following these accounts.
* [postApiV1Markers](docs/sdk/README.md#postapiv1markers) - Get saved timeline position
* [postApiV1Media](docs/sdk/README.md#postapiv1media) - Creates an attachment to be used with a new status.
* [postApiV1MediaId](docs/sdk/README.md#postapiv1mediaid) - Update an Attachment, before it is attached to a status and posted.
* [postApiV1NotificationsClear](docs/sdk/README.md#postapiv1notificationsclear) - Clear all notifications from the server.
* [postApiV1NotificationsIdDismiss](docs/sdk/README.md#postapiv1notificationsiddismiss) - Clear a single notification from the server.
* [postApiV1PollsId](docs/sdk/README.md#postapiv1pollsid) - Vote on a poll.
* [postApiV1PushSubscription](docs/sdk/README.md#postapiv1pushsubscription) - Add a Web Push API subscription to receive notifications. Each access token can have one push subscription. If you create a new subscription, the old subscription is deleted.
* [postApiV1Reports](docs/sdk/README.md#postapiv1reports) - File a report.
* [postApiV1Statuses](docs/sdk/README.md#postapiv1statuses)
* [postApiV1StatusesIdBookmark](docs/sdk/README.md#postapiv1statusesidbookmark) - Privately bookmark a status.
* [postApiV1StatusesIdFavourite](docs/sdk/README.md#postapiv1statusesidfavourite) - Add a status to your favourites list.
* [postApiV1StatusesIdMute](docs/sdk/README.md#postapiv1statusesidmute) - Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.
* [postApiV1StatusesIdPin](docs/sdk/README.md#postapiv1statusesidpin) - Feature one of your own public statuses at the top of your profile.
* [postApiV1StatusesIdReblog](docs/sdk/README.md#postapiv1statusesidreblog) - Reshare a status.
* [postApiV1StatusesIdUnbookmark](docs/sdk/README.md#postapiv1statusesidunbookmark) - Remove a status from your private bookmarks.
* [postApiV1StatusesIdUnfavourite](docs/sdk/README.md#postapiv1statusesidunfavourite) - Remove a status from your favourites list.
* [postApiV1StatusesIdUnmute](docs/sdk/README.md#postapiv1statusesidunmute) - Status's conversation unmuted, or was already unmuted
* [postApiV1StatusesIdUnpin](docs/sdk/README.md#postapiv1statusesidunpin) - Unfeature a status from the top of your profile.
* [postApiV1StatusesIdUnreblog](docs/sdk/README.md#postapiv1statusesidunreblog) - Undo a reshare of a status.
* [putApiV1AnnouncementsIdReactionsName](docs/sdk/README.md#putapiv1announcementsidreactionsname) - Allows a user to mark the announcement as read.
* [putApiV1FiltersId](docs/sdk/README.md#putapiv1filtersid) - Update a filter.
* [putApiV1Lists](docs/sdk/README.md#putapiv1lists) - Change the title of a list, or which replies to show.
* [putApiV1PushSubscription](docs/sdk/README.md#putapiv1pushsubscription) - Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
* [putApiV1ScheduledStatusesId](docs/sdk/README.md#putapiv1scheduledstatusesid) - View a single scheduled status

### [todoSecurity](docs/todosecurity/README.md)

* [postApiV1Accounts](docs/todosecurity/README.md#postapiv1accounts) - Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.

### [accounts](docs/accounts/README.md)

* [getApiV1AccountsRelationships](docs/accounts/README.md#getapiv1accountsrelationships) - Sets a private note on a user.
* [getApiV1AccountsSearch](docs/accounts/README.md#getapiv1accountssearch) - Search for matching accounts by username or display name.
* [getApiV1AccountsVerifyCredentials](docs/accounts/README.md#getapiv1accountsverifycredentials) - Test to make sure that the user token works.
* [getApiV1AccountsId](docs/accounts/README.md#getapiv1accountsid)
* [getApiV1AccountsIdFeaturedTags](docs/accounts/README.md#getapiv1accountsidfeaturedtags) - Tags featured by this account.
* [getApiV1AccountsIdFollowers](docs/accounts/README.md#getapiv1accountsidfollowers) - Accounts which follow the given account, if network is not hidden by the account owner.
* [getApiV1AccountsIdFollowing](docs/accounts/README.md#getapiv1accountsidfollowing) - Accounts which the given account is following, if network is not hidden by the account owner.
* [getApiV1AccountsIdIdentityProofs](docs/accounts/README.md#getapiv1accountsididentityproofs) - Array of IdentityProof
* [getApiV1AccountsIdLists](docs/accounts/README.md#getapiv1accountsidlists) - User lists that you have added this account to.
* [getApiV1AccountsIdStatuses](docs/accounts/README.md#getapiv1accountsidstatuses) - Statuses posted to the given account.
* [patchApiV1AccountsUpdateCredentials](docs/accounts/README.md#patchapiv1accountsupdatecredentials) - Update the user's display and preferences.
* [postApiV1Accounts](docs/accounts/README.md#postapiv1accounts) - Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.
* [postApiV1AccountsIdBlock](docs/accounts/README.md#postapiv1accountsidblock) - Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
* [postApiV1AccountsIdFollow](docs/accounts/README.md#postapiv1accountsidfollow) - Follow the given account. Can also be used to update whether to show reblogs or enable notifications.
* [postApiV1AccountsIdMute](docs/accounts/README.md#postapiv1accountsidmute) - Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).
* [postApiV1AccountsIdNote](docs/accounts/README.md#postapiv1accountsidnote) - Sets a private note on a user.
* [postApiV1AccountsIdPin](docs/accounts/README.md#postapiv1accountsidpin) - Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)
* [postApiV1AccountsIdUnblock](docs/accounts/README.md#postapiv1accountsidunblock) - Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
* [postApiV1AccountsIdUnfollow](docs/accounts/README.md#postapiv1accountsidunfollow) - Unfollow the given account.
* [postApiV1AccountsIdUnmute](docs/accounts/README.md#postapiv1accountsidunmute) - Unmute the given account.
* [postApiV1AccountsIdUnpin](docs/accounts/README.md#postapiv1accountsidunpin) - Remove the given account from the user's featured profiles.

### [apps](docs/apps/README.md)

* [getApiV1AppsVerifyCredentials](docs/apps/README.md#getapiv1appsverifycredentials) - Confirm that the app's OAuth2 credentials work.
* [postApiV1Apps](docs/apps/README.md#postapiv1apps) - Create a new application to obtain OAuth2 credentials.

### [oauth](docs/oauth/README.md)

* [getOauthAuthorize](docs/oauth/README.md#getoauthauthorize) - Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.
* [postOauthRevoke](docs/oauth/README.md#postoauthrevoke) - Revoke an access token to make it no longer valid for use.
* [postOauthToken](docs/oauth/README.md#postoauthtoken) - Returns an access token, to be used during API calls that are not public.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
