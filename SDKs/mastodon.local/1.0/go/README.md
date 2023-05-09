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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DeleteAPIV1AnnouncementsIDReactionsName(ctx, operations.DeleteAPIV1AnnouncementsIDReactionsNameRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        Name: "Christopher Hills",
    }, operations.DeleteAPIV1AnnouncementsIDReactionsNameSecurity{
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

### [SDK](docs/sdk/README.md)

* [DeleteAPIV1AnnouncementsIDReactionsName](docs/sdk/README.md#deleteapiv1announcementsidreactionsname) - Undo a react emoji to an announcement.
* [DeleteAPIV1ConversationsID](docs/sdk/README.md#deleteapiv1conversationsid) - Remove converstation
* [DeleteAPIV1DomainBlocks](docs/sdk/README.md#deleteapiv1domainblocks) - Remove a domain block, if it exists in the user's array of blocked domains.
* [DeleteAPIV1FeaturedTagsID](docs/sdk/README.md#deleteapiv1featuredtagsid) - Unfeature a tag
* [DeleteAPIV1FiltersID](docs/sdk/README.md#deleteapiv1filtersid) - Delete a filter.
* [DeleteAPIV1Lists](docs/sdk/README.md#deleteapiv1lists) - Delete a list
* [DeleteAPIV1ListsIDAccounts](docs/sdk/README.md#deleteapiv1listsidaccounts) - Remove accounts from the given list.
* [DeleteAPIV1PushSubscription](docs/sdk/README.md#deleteapiv1pushsubscription) - Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
* [DeleteAPIV1ScheduledStatusesID](docs/sdk/README.md#deleteapiv1scheduledstatusesid) - Cancel a scheduled status
* [DeleteAPIV1StatusesID](docs/sdk/README.md#deleteapiv1statusesid)
* [DeleteAPIV1SuggestionsID](docs/sdk/README.md#deleteapiv1suggestionsid) - Delete user suggestion
* [GetAPIOembed](docs/sdk/README.md#getapioembed) - OEmbed as JSON
* [GetAPIProofs](docs/sdk/README.md#getapiproofs) - View identity proof
* [GetAPIV1AdminAccounts](docs/sdk/README.md#getapiv1adminaccounts) - View accounts matching certain criteria for filtering, up to 100 at a time. Pagination may be done with the HTTP Link header in the response.
* [GetAPIV1AdminAccountsID](docs/sdk/README.md#getapiv1adminaccountsid) - View admin-level information about the given account.
* [GetAPIV1AdminReports](docs/sdk/README.md#getapiv1adminreports) - View all reports. Pagination may be done with HTTP Link header in the response.
* [GetAPIV1AdminReportsID](docs/sdk/README.md#getapiv1adminreportsid) - View information about the report with the given ID.
* [GetAPIV1Announcements](docs/sdk/README.md#getapiv1announcements) - See all currently active announcements set by admins.
* [GetAPIV1Blocks](docs/sdk/README.md#getapiv1blocks) - Get blocked users.
* [GetAPIV1Bookmarks](docs/sdk/README.md#getapiv1bookmarks) - Statuses the user has bookmarked.
* [GetAPIV1Conversations](docs/sdk/README.md#getapiv1conversations) - Show conversation.
* [GetAPIV1CustomEmojis](docs/sdk/README.md#getapiv1customemojis) - Returns custom emojis that are available on the server.
* [GetAPIV1Directory](docs/sdk/README.md#getapiv1directory) - List accounts visible in the directory.
* [GetAPIV1DomainBlocks](docs/sdk/README.md#getapiv1domainblocks) - View domains the user has blocked.
* [GetAPIV1Endorsements](docs/sdk/README.md#getapiv1endorsements) - Accounts that the user is currently featuring on their profile.
* [GetAPIV1Favourites](docs/sdk/README.md#getapiv1favourites) - Statuses the user has favourited.
* [GetAPIV1FeaturedTags](docs/sdk/README.md#getapiv1featuredtags) - View your featured tags.
* [GetAPIV1FeaturedTagsSuggestions](docs/sdk/README.md#getapiv1featuredtagssuggestions) - Shows your 10 most-used tags, with usage history for the past week.
* [GetAPIV1Filters](docs/sdk/README.md#getapiv1filters)
* [GetAPIV1FiltersID](docs/sdk/README.md#getapiv1filtersid) - Get one filter.
* [GetAPIV1FollowRequests](docs/sdk/README.md#getapiv1followrequests) - Pending Follows
* [GetAPIV1Instance](docs/sdk/README.md#getapiv1instance) - Information about the server.
* [GetAPIV1InstanceActivity](docs/sdk/README.md#getapiv1instanceactivity) - Instance activity over the last 3 months, binned weekly.
* [GetAPIV1InstancePeers](docs/sdk/README.md#getapiv1instancepeers) - Information about the server.
* [GetAPIV1Lists](docs/sdk/README.md#getapiv1lists) - Fetch all lists that the user owns.
* [GetAPIV1ListsID](docs/sdk/README.md#getapiv1listsid) - Remove converstation
* [GetAPIV1ListsIDAccounts](docs/sdk/README.md#getapiv1listsidaccounts) - View accounts in List
* [GetAPIV1MediaID](docs/sdk/README.md#getapiv1mediaid) - Get an attachement.
* [GetAPIV1Mutes](docs/sdk/README.md#getapiv1mutes) - Accounts the user has muted.
* [GetAPIV1Notifications](docs/sdk/README.md#getapiv1notifications) - Notifications concerning the user. This API returns Link headers containing links to the next/previous page. However, the links can also be constructed dynamically using query params and id values.
* [GetAPIV1NotificationsID](docs/sdk/README.md#getapiv1notificationsid) - View information about a notification with a given ID.
* [GetAPIV1PollsID](docs/sdk/README.md#getapiv1pollsid) - View a poll.
* [GetAPIV1Preferences](docs/sdk/README.md#getapiv1preferences) - Shows your 10 most-used tags, with usage history for the past week.
* [GetAPIV1PushSubscription](docs/sdk/README.md#getapiv1pushsubscription) - View the PushSubscription currently associated with this access token.
* [GetAPIV1ScheduledStatuses](docs/sdk/README.md#getapiv1scheduledstatuses) - View scheduled statuses
* [GetAPIV1ScheduledStatusesID](docs/sdk/README.md#getapiv1scheduledstatusesid) - View a single scheduled status
* [GetAPIV1StatusesID](docs/sdk/README.md#getapiv1statusesid)
* [GetAPIV1StatusesIDContext](docs/sdk/README.md#getapiv1statusesidcontext)
* [GetAPIV1StatusesIDFavouritedBy](docs/sdk/README.md#getapiv1statusesidfavouritedby) - View who favourited a given status.
* [GetAPIV1StatusesIDRebloggedBy](docs/sdk/README.md#getapiv1statusesidrebloggedby) - View who boosted a given status.
* [GetAPIV1Suggestions](docs/sdk/README.md#getapiv1suggestions) - Accounts the user has had past positive interactions with, but is not yet following.
* [GetAPIV1TimelinesHome](docs/sdk/README.md#getapiv1timelineshome) - View statuses from followed users.
* [GetAPIV1TimelinesListListID](docs/sdk/README.md#getapiv1timelineslistlistid) - View statuses in the given list timeline.
* [GetAPIV1TimelinesPublic](docs/sdk/README.md#getapiv1timelinespublic) - Public timeline
* [GetAPIV1TimelinesTagHashtag](docs/sdk/README.md#getapiv1timelinestaghashtag) - View public statuses containing the given hashtag.
* [GetAPIV1Trends](docs/sdk/README.md#getapiv1trends) - Tags that are being used more frequently within the past week.
* [GetAPIV2Search](docs/sdk/README.md#getapiv2search) - Search results
* [PostAPIV1AdminAccountsIDAction](docs/sdk/README.md#postapiv1adminaccountsidaction) - Perform an action against an account and log this action in the moderation history.
* [PostAPIV1AdminAccountsIDApprove](docs/sdk/README.md#postapiv1adminaccountsidapprove) - Approve the given local account if it is currently pending approval.
* [PostAPIV1AdminAccountsIDEnable](docs/sdk/README.md#postapiv1adminaccountsidenable) - Re-enable a local account whose login is currently disabled.
* [PostAPIV1AdminAccountsIDReject](docs/sdk/README.md#postapiv1adminaccountsidreject) - Reject the given local account if it is currently pending approval.
* [PostAPIV1AdminAccountsIDUnsilence](docs/sdk/README.md#postapiv1adminaccountsidunsilence) - Unsilence a currently silenced account.
* [PostAPIV1AdminAccountsIDUnsuspend](docs/sdk/README.md#postapiv1adminaccountsidunsuspend) - Unsuspend a currently suspended account.
* [PostAPIV1AdminReportsIDAssignToSelf](docs/sdk/README.md#postapiv1adminreportsidassigntoself) - Claim the handling of this report to yourself.
* [PostAPIV1AdminReportsIDReopen](docs/sdk/README.md#postapiv1adminreportsidreopen) - Mark a report as resolved with no further action taken.
* [PostAPIV1AdminReportsIDResolve](docs/sdk/README.md#postapiv1adminreportsidresolve) - Mark a report as resolved with no further action taken.
* [PostAPIV1AdminReportsIDUnassign](docs/sdk/README.md#postapiv1adminreportsidunassign) - Unassign a report so that someone else can claim it.
* [PostAPIV1AnnouncementsIDDismiss](docs/sdk/README.md#postapiv1announcementsiddismiss) - Allows a user to mark the announcement as read.
* [PostAPIV1ConversationsIDRead](docs/sdk/README.md#postapiv1conversationsidread) - Remove converstation
* [PostAPIV1DomainBlocks](docs/sdk/README.md#postapiv1domainblocks) - "Block a domain to:
- hide all public posts from it
- hide all notifications from it
- remove all followers from it
- prevent following new users from it (but does not remove existing follows)"

* [PostAPIV1FeaturedTags](docs/sdk/README.md#postapiv1featuredtags) - Create a feature a tag.
* [PostAPIV1Filters](docs/sdk/README.md#postapiv1filters)
* [PostAPIV1FollowRequestsIDAuthorize](docs/sdk/README.md#postapiv1followrequestsidauthorize) - Accept Follow
* [PostAPIV1FollowRequestsIDReject](docs/sdk/README.md#postapiv1followrequestsidreject) - Accept Follow
* [PostAPIV1Lists](docs/sdk/README.md#postapiv1lists) - Create a new list.
* [PostAPIV1ListsIDAccounts](docs/sdk/README.md#postapiv1listsidaccounts) - Add accounts to the given list. Note that the user must be following these accounts.
* [PostAPIV1Markers](docs/sdk/README.md#postapiv1markers) - Get saved timeline position
* [PostAPIV1Media](docs/sdk/README.md#postapiv1media) - Creates an attachment to be used with a new status.
* [PostAPIV1MediaID](docs/sdk/README.md#postapiv1mediaid) - Update an Attachment, before it is attached to a status and posted.
* [PostAPIV1NotificationsClear](docs/sdk/README.md#postapiv1notificationsclear) - Clear all notifications from the server.
* [PostAPIV1NotificationsIDDismiss](docs/sdk/README.md#postapiv1notificationsiddismiss) - Clear a single notification from the server.
* [PostAPIV1PollsID](docs/sdk/README.md#postapiv1pollsid) - Vote on a poll.
* [PostAPIV1PushSubscription](docs/sdk/README.md#postapiv1pushsubscription) - Add a Web Push API subscription to receive notifications. Each access token can have one push subscription. If you create a new subscription, the old subscription is deleted.
* [PostAPIV1Reports](docs/sdk/README.md#postapiv1reports) - File a report.
* [PostAPIV1Statuses](docs/sdk/README.md#postapiv1statuses)
* [PostAPIV1StatusesIDBookmark](docs/sdk/README.md#postapiv1statusesidbookmark) - Privately bookmark a status.
* [PostAPIV1StatusesIDFavourite](docs/sdk/README.md#postapiv1statusesidfavourite) - Add a status to your favourites list.
* [PostAPIV1StatusesIDMute](docs/sdk/README.md#postapiv1statusesidmute) - Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.
* [PostAPIV1StatusesIDPin](docs/sdk/README.md#postapiv1statusesidpin) - Feature one of your own public statuses at the top of your profile.
* [PostAPIV1StatusesIDReblog](docs/sdk/README.md#postapiv1statusesidreblog) - Reshare a status.
* [PostAPIV1StatusesIDUnbookmark](docs/sdk/README.md#postapiv1statusesidunbookmark) - Remove a status from your private bookmarks.
* [PostAPIV1StatusesIDUnfavourite](docs/sdk/README.md#postapiv1statusesidunfavourite) - Remove a status from your favourites list.
* [PostAPIV1StatusesIDUnmute](docs/sdk/README.md#postapiv1statusesidunmute) - Status's conversation unmuted, or was already unmuted
* [PostAPIV1StatusesIDUnpin](docs/sdk/README.md#postapiv1statusesidunpin) - Unfeature a status from the top of your profile.
* [PostAPIV1StatusesIDUnreblog](docs/sdk/README.md#postapiv1statusesidunreblog) - Undo a reshare of a status.
* [PutAPIV1AnnouncementsIDReactionsName](docs/sdk/README.md#putapiv1announcementsidreactionsname) - Allows a user to mark the announcement as read.
* [PutAPIV1FiltersID](docs/sdk/README.md#putapiv1filtersid) - Update a filter.
* [PutAPIV1Lists](docs/sdk/README.md#putapiv1lists) - Change the title of a list, or which replies to show.
* [PutAPIV1PushSubscription](docs/sdk/README.md#putapiv1pushsubscription) - Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
* [PutAPIV1ScheduledStatusesID](docs/sdk/README.md#putapiv1scheduledstatusesid) - View a single scheduled status

### [TODOSecurity](docs/todosecurity/README.md)

* [PostAPIV1Accounts](docs/todosecurity/README.md#postapiv1accounts) - Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.

### [Accounts](docs/accounts/README.md)

* [GetAPIV1AccountsRelationships](docs/accounts/README.md#getapiv1accountsrelationships) - Sets a private note on a user.
* [GetAPIV1AccountsSearch](docs/accounts/README.md#getapiv1accountssearch) - Search for matching accounts by username or display name.
* [GetAPIV1AccountsVerifyCredentials](docs/accounts/README.md#getapiv1accountsverifycredentials) - Test to make sure that the user token works.
* [GetAPIV1AccountsID](docs/accounts/README.md#getapiv1accountsid)
* [GetAPIV1AccountsIDFeaturedTags](docs/accounts/README.md#getapiv1accountsidfeaturedtags) - Tags featured by this account.
* [GetAPIV1AccountsIDFollowers](docs/accounts/README.md#getapiv1accountsidfollowers) - Accounts which follow the given account, if network is not hidden by the account owner.
* [GetAPIV1AccountsIDFollowing](docs/accounts/README.md#getapiv1accountsidfollowing) - Accounts which the given account is following, if network is not hidden by the account owner.
* [GetAPIV1AccountsIDIdentityProofs](docs/accounts/README.md#getapiv1accountsididentityproofs) - Array of IdentityProof
* [GetAPIV1AccountsIDLists](docs/accounts/README.md#getapiv1accountsidlists) - User lists that you have added this account to.
* [GetAPIV1AccountsIDStatuses](docs/accounts/README.md#getapiv1accountsidstatuses) - Statuses posted to the given account.
* [PatchAPIV1AccountsUpdateCredentials](docs/accounts/README.md#patchapiv1accountsupdatecredentials) - Update the user's display and preferences.
* [PostAPIV1Accounts](docs/accounts/README.md#postapiv1accounts) - Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.
* [PostAPIV1AccountsIDBlock](docs/accounts/README.md#postapiv1accountsidblock) - Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
* [PostAPIV1AccountsIDFollow](docs/accounts/README.md#postapiv1accountsidfollow) - Follow the given account. Can also be used to update whether to show reblogs or enable notifications.
* [PostAPIV1AccountsIDMute](docs/accounts/README.md#postapiv1accountsidmute) - Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).
* [PostAPIV1AccountsIDNote](docs/accounts/README.md#postapiv1accountsidnote) - Sets a private note on a user.
* [PostAPIV1AccountsIDPin](docs/accounts/README.md#postapiv1accountsidpin) - Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)
* [PostAPIV1AccountsIDUnblock](docs/accounts/README.md#postapiv1accountsidunblock) - Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
* [PostAPIV1AccountsIDUnfollow](docs/accounts/README.md#postapiv1accountsidunfollow) - Unfollow the given account.
* [PostAPIV1AccountsIDUnmute](docs/accounts/README.md#postapiv1accountsidunmute) - Unmute the given account.
* [PostAPIV1AccountsIDUnpin](docs/accounts/README.md#postapiv1accountsidunpin) - Remove the given account from the user's featured profiles.

### [Apps](docs/apps/README.md)

* [GetAPIV1AppsVerifyCredentials](docs/apps/README.md#getapiv1appsverifycredentials) - Confirm that the app's OAuth2 credentials work.
* [PostAPIV1Apps](docs/apps/README.md#postapiv1apps) - Create a new application to obtain OAuth2 credentials.

### [Oauth](docs/oauth/README.md)

* [GetOauthAuthorize](docs/oauth/README.md#getoauthauthorize) - Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.
* [PostOauthRevoke](docs/oauth/README.md#postoauthrevoke) - Revoke an access token to make it no longer valid for use.
* [PostOauthToken](docs/oauth/README.md#postoauthtoken) - Returns an access token, to be used during API calls that are not public.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
