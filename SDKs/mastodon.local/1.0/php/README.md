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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteApiV1AnnouncementsIdReactionsName` - Undo a react emoji to an announcement.
* `deleteApiV1ConversationsId` - Remove converstation
* `deleteApiV1DomainBlocks` - Remove a domain block, if it exists in the user's array of blocked domains.
* `deleteApiV1FeaturedTagsId` - Unfeature a tag
* `deleteApiV1FiltersId` - Delete a filter.
* `deleteApiV1Lists` - Delete a list
* `deleteApiV1ListsIdAccounts` - Remove accounts from the given list.
* `deleteApiV1PushSubscription` - Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
* `deleteApiV1ScheduledStatusesId` - Cancel a scheduled status
* `deleteApiV1StatusesId`
* `deleteApiV1SuggestionsId` - Delete user suggestion
* `getApiOembed` - OEmbed as JSON
* `getApiProofs` - View identity proof
* `getApiV1AdminAccounts` - View accounts matching certain criteria for filtering, up to 100 at a time. Pagination may be done with the HTTP Link header in the response.
* `getApiV1AdminAccountsId` - View admin-level information about the given account.
* `getApiV1AdminReports` - View all reports. Pagination may be done with HTTP Link header in the response.
* `getApiV1AdminReportsId` - View information about the report with the given ID.
* `getApiV1Announcements` - See all currently active announcements set by admins.
* `getApiV1Blocks` - Get blocked users.
* `getApiV1Bookmarks` - Statuses the user has bookmarked.
* `getApiV1Conversations` - Show conversation.
* `getApiV1CustomEmojis` - Returns custom emojis that are available on the server.
* `getApiV1Directory` - List accounts visible in the directory.
* `getApiV1DomainBlocks` - View domains the user has blocked.
* `getApiV1Endorsements` - Accounts that the user is currently featuring on their profile.
* `getApiV1Favourites` - Statuses the user has favourited.
* `getApiV1FeaturedTags` - View your featured tags.
* `getApiV1FeaturedTagsSuggestions` - Shows your 10 most-used tags, with usage history for the past week.
* `getApiV1Filters`
* `getApiV1FiltersId` - Get one filter.
* `getApiV1FollowRequests` - Pending Follows
* `getApiV1Instance` - Information about the server.
* `getApiV1InstanceActivity` - Instance activity over the last 3 months, binned weekly.
* `getApiV1InstancePeers` - Information about the server.
* `getApiV1Lists` - Fetch all lists that the user owns.
* `getApiV1ListsId` - Remove converstation
* `getApiV1ListsIdAccounts` - View accounts in List
* `getApiV1MediaId` - Get an attachement.
* `getApiV1Mutes` - Accounts the user has muted.
* `getApiV1Notifications` - Notifications concerning the user. This API returns Link headers containing links to the next/previous page. However, the links can also be constructed dynamically using query params and id values.
* `getApiV1NotificationsId` - View information about a notification with a given ID.
* `getApiV1PollsId` - View a poll.
* `getApiV1Preferences` - Shows your 10 most-used tags, with usage history for the past week.
* `getApiV1PushSubscription` - View the PushSubscription currently associated with this access token.
* `getApiV1ScheduledStatuses` - View scheduled statuses
* `getApiV1ScheduledStatusesId` - View a single scheduled status
* `getApiV1StatusesId`
* `getApiV1StatusesIdContext`
* `getApiV1StatusesIdFavouritedBy` - View who favourited a given status.
* `getApiV1StatusesIdRebloggedBy` - View who boosted a given status.
* `getApiV1Suggestions` - Accounts the user has had past positive interactions with, but is not yet following.
* `getApiV1TimelinesHome` - View statuses from followed users.
* `getApiV1TimelinesListListId` - View statuses in the given list timeline.
* `getApiV1TimelinesPublic` - Public timeline
* `getApiV1TimelinesTagHashtag` - View public statuses containing the given hashtag.
* `getApiV1Trends` - Tags that are being used more frequently within the past week.
* `getApiV2Search` - Search results
* `postApiV1AdminAccountsIdAction` - Perform an action against an account and log this action in the moderation history.
* `postApiV1AdminAccountsIdApprove` - Approve the given local account if it is currently pending approval.
* `postApiV1AdminAccountsIdEnable` - Re-enable a local account whose login is currently disabled.
* `postApiV1AdminAccountsIdReject` - Reject the given local account if it is currently pending approval.
* `postApiV1AdminAccountsIdUnsilence` - Unsilence a currently silenced account.
* `postApiV1AdminAccountsIdUnsuspend` - Unsuspend a currently suspended account.
* `postApiV1AdminReportsIdAssignToSelf` - Claim the handling of this report to yourself.
* `postApiV1AdminReportsIdReopen` - Mark a report as resolved with no further action taken.
* `postApiV1AdminReportsIdResolve` - Mark a report as resolved with no further action taken.
* `postApiV1AdminReportsIdUnassign` - Unassign a report so that someone else can claim it.
* `postApiV1AnnouncementsIdDismiss` - Allows a user to mark the announcement as read.
* `postApiV1ConversationsIdRead` - Remove converstation
* `postApiV1DomainBlocks` - "Block a domain to:
- hide all public posts from it
- hide all notifications from it
- remove all followers from it
- prevent following new users from it (but does not remove existing follows)"

* `postApiV1FeaturedTags` - Create a feature a tag.
* `postApiV1Filters`
* `postApiV1FollowRequestsIdAuthorize` - Accept Follow
* `postApiV1FollowRequestsIdReject` - Accept Follow
* `postApiV1Lists` - Create a new list.
* `postApiV1ListsIdAccounts` - Add accounts to the given list. Note that the user must be following these accounts.
* `postApiV1Markers` - Get saved timeline position
* `postApiV1Media` - Creates an attachment to be used with a new status.
* `postApiV1MediaId` - Update an Attachment, before it is attached to a status and posted.
* `postApiV1NotificationsClear` - Clear all notifications from the server.
* `postApiV1NotificationsIdDismiss` - Clear a single notification from the server.
* `postApiV1PollsId` - Vote on a poll.
* `postApiV1PushSubscription` - Add a Web Push API subscription to receive notifications. Each access token can have one push subscription. If you create a new subscription, the old subscription is deleted.
* `postApiV1Reports` - File a report.
* `postApiV1Statuses`
* `postApiV1StatusesIdBookmark` - Privately bookmark a status.
* `postApiV1StatusesIdFavourite` - Add a status to your favourites list.
* `postApiV1StatusesIdMute` - Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.
* `postApiV1StatusesIdPin` - Feature one of your own public statuses at the top of your profile.
* `postApiV1StatusesIdReblog` - Reshare a status.
* `postApiV1StatusesIdUnbookmark` - Remove a status from your private bookmarks.
* `postApiV1StatusesIdUnfavourite` - Remove a status from your favourites list.
* `postApiV1StatusesIdUnmute` - Status's conversation unmuted, or was already unmuted
* `postApiV1StatusesIdUnpin` - Unfeature a status from the top of your profile.
* `postApiV1StatusesIdUnreblog` - Undo a reshare of a status.
* `putApiV1AnnouncementsIdReactionsName` - Allows a user to mark the announcement as read.
* `putApiV1FiltersId` - Update a filter.
* `putApiV1Lists` - Change the title of a list, or which replies to show.
* `putApiV1PushSubscription` - Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
* `putApiV1ScheduledStatusesId` - View a single scheduled status

### todoSecurity

* `postApiV1Accounts` - Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.

### accounts

* `getApiV1AccountsRelationships` - Sets a private note on a user.
* `getApiV1AccountsSearch` - Search for matching accounts by username or display name.
* `getApiV1AccountsVerifyCredentials` - Test to make sure that the user token works.
* `getApiV1AccountsId`
* `getApiV1AccountsIdFeaturedTags` - Tags featured by this account.
* `getApiV1AccountsIdFollowers` - Accounts which follow the given account, if network is not hidden by the account owner.
* `getApiV1AccountsIdFollowing` - Accounts which the given account is following, if network is not hidden by the account owner.
* `getApiV1AccountsIdIdentityProofs` - Array of IdentityProof
* `getApiV1AccountsIdLists` - User lists that you have added this account to.
* `getApiV1AccountsIdStatuses` - Statuses posted to the given account.
* `patchApiV1AccountsUpdateCredentials` - Update the user's display and preferences.
* `postApiV1Accounts` - Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.
* `postApiV1AccountsIdBlock` - Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
* `postApiV1AccountsIdFollow` - Follow the given account. Can also be used to update whether to show reblogs or enable notifications.
* `postApiV1AccountsIdMute` - Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).
* `postApiV1AccountsIdNote` - Sets a private note on a user.
* `postApiV1AccountsIdPin` - Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)
* `postApiV1AccountsIdUnblock` - Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
* `postApiV1AccountsIdUnfollow` - Unfollow the given account.
* `postApiV1AccountsIdUnmute` - Unmute the given account.
* `postApiV1AccountsIdUnpin` - Remove the given account from the user's featured profiles.

### apps

* `getApiV1AppsVerifyCredentials` - Confirm that the app's OAuth2 credentials work.
* `postApiV1Apps` - Create a new application to obtain OAuth2 credentials.

### oauth

* `getOauthAuthorize` - Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.
* `postOauthRevoke` - Revoke an access token to make it no longer valid for use.
* `postOauthToken` - Returns an access token, to be used during API calls that are not public.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
