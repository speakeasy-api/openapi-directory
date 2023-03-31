# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/mastodon.local/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DeleteAPIV1AnnouncementsIDReactionsNameRequest{
        ID: "corrupti",
        Name: "provident",
    }

    ctx := context.Background()
    res, err := s.DeleteAPIV1AnnouncementsIDReactionsName(ctx, req, operations.DeleteAPIV1AnnouncementsIDReactionsNameSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIV1AnnouncementsIDReactionsName200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `DeleteAPIV1AnnouncementsIDReactionsName` - Undo a react emoji to an announcement.
* `DeleteAPIV1ConversationsID` - Remove converstation
* `DeleteAPIV1DomainBlocks` - Remove a domain block, if it exists in the user's array of blocked domains.
* `DeleteAPIV1FeaturedTagsID` - Unfeature a tag
* `DeleteAPIV1FiltersID` - Delete a filter.
* `DeleteAPIV1Lists` - Delete a list
* `DeleteAPIV1ListsIDAccounts` - Remove accounts from the given list.
* `DeleteAPIV1PushSubscription` - Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
* `DeleteAPIV1ScheduledStatusesID` - Cancel a scheduled status
* `DeleteAPIV1StatusesID`
* `DeleteAPIV1SuggestionsID` - Delete user suggestion
* `GetAPIOembed` - OEmbed as JSON
* `GetAPIProofs` - View identity proof
* `GetAPIV1AdminAccounts` - View accounts matching certain criteria for filtering, up to 100 at a time. Pagination may be done with the HTTP Link header in the response.
* `GetAPIV1AdminAccountsID` - View admin-level information about the given account.
* `GetAPIV1AdminReports` - View all reports. Pagination may be done with HTTP Link header in the response.
* `GetAPIV1AdminReportsID` - View information about the report with the given ID.
* `GetAPIV1Announcements` - See all currently active announcements set by admins.
* `GetAPIV1Blocks` - Get blocked users.
* `GetAPIV1Bookmarks` - Statuses the user has bookmarked.
* `GetAPIV1Conversations` - Show conversation.
* `GetAPIV1CustomEmojis` - Returns custom emojis that are available on the server.
* `GetAPIV1Directory` - List accounts visible in the directory.
* `GetAPIV1DomainBlocks` - View domains the user has blocked.
* `GetAPIV1Endorsements` - Accounts that the user is currently featuring on their profile.
* `GetAPIV1Favourites` - Statuses the user has favourited.
* `GetAPIV1FeaturedTags` - View your featured tags.
* `GetAPIV1FeaturedTagsSuggestions` - Shows your 10 most-used tags, with usage history for the past week.
* `GetAPIV1Filters`
* `GetAPIV1FiltersID` - Get one filter.
* `GetAPIV1FollowRequests` - Pending Follows
* `GetAPIV1Instance` - Information about the server.
* `GetAPIV1InstanceActivity` - Instance activity over the last 3 months, binned weekly.
* `GetAPIV1InstancePeers` - Information about the server.
* `GetAPIV1Lists` - Fetch all lists that the user owns.
* `GetAPIV1ListsID` - Remove converstation
* `GetAPIV1ListsIDAccounts` - View accounts in List
* `GetAPIV1MediaID` - Get an attachement.
* `GetAPIV1Mutes` - Accounts the user has muted.
* `GetAPIV1Notifications` - Notifications concerning the user. This API returns Link headers containing links to the next/previous page. However, the links can also be constructed dynamically using query params and id values.
* `GetAPIV1NotificationsID` - View information about a notification with a given ID.
* `GetAPIV1PollsID` - View a poll.
* `GetAPIV1Preferences` - Shows your 10 most-used tags, with usage history for the past week.
* `GetAPIV1PushSubscription` - View the PushSubscription currently associated with this access token.
* `GetAPIV1ScheduledStatuses` - View scheduled statuses
* `GetAPIV1ScheduledStatusesID` - View a single scheduled status
* `GetAPIV1StatusesID`
* `GetAPIV1StatusesIDContext`
* `GetAPIV1StatusesIDFavouritedBy` - View who favourited a given status.
* `GetAPIV1StatusesIDRebloggedBy` - View who boosted a given status.
* `GetAPIV1Suggestions` - Accounts the user has had past positive interactions with, but is not yet following.
* `GetAPIV1TimelinesHome` - View statuses from followed users.
* `GetAPIV1TimelinesListListID` - View statuses in the given list timeline.
* `GetAPIV1TimelinesPublic` - Public timeline
* `GetAPIV1TimelinesTagHashtag` - View public statuses containing the given hashtag.
* `GetAPIV1Trends` - Tags that are being used more frequently within the past week.
* `GetAPIV2Search` - Search results
* `PostAPIV1AdminAccountsIDAction` - Perform an action against an account and log this action in the moderation history.
* `PostAPIV1AdminAccountsIDApprove` - Approve the given local account if it is currently pending approval.
* `PostAPIV1AdminAccountsIDEnable` - Re-enable a local account whose login is currently disabled.
* `PostAPIV1AdminAccountsIDReject` - Reject the given local account if it is currently pending approval.
* `PostAPIV1AdminAccountsIDUnsilence` - Unsilence a currently silenced account.
* `PostAPIV1AdminAccountsIDUnsuspend` - Unsuspend a currently suspended account.
* `PostAPIV1AdminReportsIDAssignToSelf` - Claim the handling of this report to yourself.
* `PostAPIV1AdminReportsIDReopen` - Mark a report as resolved with no further action taken.
* `PostAPIV1AdminReportsIDResolve` - Mark a report as resolved with no further action taken.
* `PostAPIV1AdminReportsIDUnassign` - Unassign a report so that someone else can claim it.
* `PostAPIV1AnnouncementsIDDismiss` - Allows a user to mark the announcement as read.
* `PostAPIV1ConversationsIDRead` - Remove converstation
* `PostAPIV1DomainBlocks` - "Block a domain to:
- hide all public posts from it
- hide all notifications from it
- remove all followers from it
- prevent following new users from it (but does not remove existing follows)"

* `PostAPIV1FeaturedTags` - Create a feature a tag.
* `PostAPIV1Filters`
* `PostAPIV1FollowRequestsIDAuthorize` - Accept Follow
* `PostAPIV1FollowRequestsIDReject` - Accept Follow
* `PostAPIV1Lists` - Create a new list.
* `PostAPIV1ListsIDAccounts` - Add accounts to the given list. Note that the user must be following these accounts.
* `PostAPIV1Markers` - Get saved timeline position
* `PostAPIV1Media` - Creates an attachment to be used with a new status.
* `PostAPIV1MediaID` - Update an Attachment, before it is attached to a status and posted.
* `PostAPIV1NotificationsClear` - Clear all notifications from the server.
* `PostAPIV1NotificationsIDDismiss` - Clear a single notification from the server.
* `PostAPIV1PollsID` - Vote on a poll.
* `PostAPIV1PushSubscription` - Add a Web Push API subscription to receive notifications. Each access token can have one push subscription. If you create a new subscription, the old subscription is deleted.
* `PostAPIV1Reports` - File a report.
* `PostAPIV1Statuses`
* `PostAPIV1StatusesIDBookmark` - Privately bookmark a status.
* `PostAPIV1StatusesIDFavourite` - Add a status to your favourites list.
* `PostAPIV1StatusesIDMute` - Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.
* `PostAPIV1StatusesIDPin` - Feature one of your own public statuses at the top of your profile.
* `PostAPIV1StatusesIDReblog` - Reshare a status.
* `PostAPIV1StatusesIDUnbookmark` - Remove a status from your private bookmarks.
* `PostAPIV1StatusesIDUnfavourite` - Remove a status from your favourites list.
* `PostAPIV1StatusesIDUnmute` - Status's conversation unmuted, or was already unmuted
* `PostAPIV1StatusesIDUnpin` - Unfeature a status from the top of your profile.
* `PostAPIV1StatusesIDUnreblog` - Undo a reshare of a status.
* `PutAPIV1AnnouncementsIDReactionsName` - Allows a user to mark the announcement as read.
* `PutAPIV1FiltersID` - Update a filter.
* `PutAPIV1Lists` - Change the title of a list, or which replies to show.
* `PutAPIV1PushSubscription` - Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
* `PutAPIV1ScheduledStatusesID` - View a single scheduled status

### TODOSecurity

* `PostAPIV1Accounts` - Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.

### Accounts

* `GetAPIV1AccountsRelationships` - Sets a private note on a user.
* `GetAPIV1AccountsSearch` - Search for matching accounts by username or display name.
* `GetAPIV1AccountsVerifyCredentials` - Test to make sure that the user token works.
* `GetAPIV1AccountsID`
* `GetAPIV1AccountsIDFeaturedTags` - Tags featured by this account.
* `GetAPIV1AccountsIDFollowers` - Accounts which follow the given account, if network is not hidden by the account owner.
* `GetAPIV1AccountsIDFollowing` - Accounts which the given account is following, if network is not hidden by the account owner.
* `GetAPIV1AccountsIDIdentityProofs` - Array of IdentityProof
* `GetAPIV1AccountsIDLists` - User lists that you have added this account to.
* `GetAPIV1AccountsIDStatuses` - Statuses posted to the given account.
* `PatchAPIV1AccountsUpdateCredentials` - Update the user's display and preferences.
* `PostAPIV1Accounts` - Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.
* `PostAPIV1AccountsIDBlock` - Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
* `PostAPIV1AccountsIDFollow` - Follow the given account. Can also be used to update whether to show reblogs or enable notifications.
* `PostAPIV1AccountsIDMute` - Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).
* `PostAPIV1AccountsIDNote` - Sets a private note on a user.
* `PostAPIV1AccountsIDPin` - Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)
* `PostAPIV1AccountsIDUnblock` - Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
* `PostAPIV1AccountsIDUnfollow` - Unfollow the given account.
* `PostAPIV1AccountsIDUnmute` - Unmute the given account.
* `PostAPIV1AccountsIDUnpin` - Remove the given account from the user's featured profiles.

### Apps

* `GetAPIV1AppsVerifyCredentials` - Confirm that the app's OAuth2 credentials work.
* `PostAPIV1Apps` - Create a new application to obtain OAuth2 credentials.

### Oauth

* `GetOauthAuthorize` - Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.
* `PostOauthRevoke` - Revoke an access token to make it no longer valid for use.
* `PostOauthToken` - Returns an access token, to be used during API calls that are not public.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
