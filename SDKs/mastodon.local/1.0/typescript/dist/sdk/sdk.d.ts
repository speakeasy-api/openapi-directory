import { Accounts } from "./accounts";
import { Apps } from "./apps";
import * as operations from "./models/operations";
import { Oauth } from "./oauth";
import { TODOSecurity } from "./todosecurity";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://mastodon.local", "https://mastodon.social"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
export declare class SDK {
    todoSecurity: TODOSecurity;
    accounts: Accounts;
    apps: Apps;
    oauth: Oauth;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Undo a react emoji to an announcement.
     */
    deleteApiV1AnnouncementsIdReactionsName(req: operations.DeleteApiV1AnnouncementsIdReactionsNameRequest, security: operations.DeleteApiV1AnnouncementsIdReactionsNameSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV1AnnouncementsIdReactionsNameResponse>;
    /**
     * Remove converstation
     */
    deleteApiV1ConversationsId(req: operations.DeleteApiV1ConversationsIdRequest, security: operations.DeleteApiV1ConversationsIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV1ConversationsIdResponse>;
    /**
     * Remove a domain block, if it exists in the user's array of blocked domains.
     */
    deleteApiV1DomainBlocks(req: operations.DeleteApiV1DomainBlocksRequest, security: operations.DeleteApiV1DomainBlocksSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV1DomainBlocksResponse>;
    /**
     * Unfeature a tag
     */
    deleteApiV1FeaturedTagsId(req: operations.DeleteApiV1FeaturedTagsIdRequest, security: operations.DeleteApiV1FeaturedTagsIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV1FeaturedTagsIdResponse>;
    /**
     * Delete a filter.
     */
    deleteApiV1FiltersId(req: operations.DeleteApiV1FiltersIdRequest, security: operations.DeleteApiV1FiltersIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV1FiltersIdResponse>;
    /**
     * Delete a list
     */
    deleteApiV1Lists(config?: AxiosRequestConfig): Promise<operations.DeleteApiV1ListsResponse>;
    /**
     * Remove accounts from the given list.
     */
    deleteApiV1ListsIdAccounts(req: operations.DeleteApiV1ListsIdAccountsRequest, security: operations.DeleteApiV1ListsIdAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV1ListsIdAccountsResponse>;
    /**
     * Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
     */
    deleteApiV1PushSubscription(config?: AxiosRequestConfig): Promise<operations.DeleteApiV1PushSubscriptionResponse>;
    /**
     * Cancel a scheduled status
     */
    deleteApiV1ScheduledStatusesId(req: operations.DeleteApiV1ScheduledStatusesIdRequest, security: operations.DeleteApiV1ScheduledStatusesIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV1ScheduledStatusesIdResponse>;
    deleteApiV1StatusesId(req: operations.DeleteApiV1StatusesIdRequest, security: operations.DeleteApiV1StatusesIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV1StatusesIdResponse>;
    /**
     * Delete user suggestion
     */
    deleteApiV1SuggestionsId(req: operations.DeleteApiV1SuggestionsIdRequest, security: operations.DeleteApiV1SuggestionsIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV1SuggestionsIdResponse>;
    /**
     * OEmbed as JSON
     */
    getApiOembed(req: operations.GetApiOembedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiOembedResponse>;
    /**
     * View identity proof
     */
    getApiProofs(req: operations.GetApiProofsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiProofsResponse>;
    /**
     * View accounts matching certain criteria for filtering, up to 100 at a time. Pagination may be done with the HTTP Link header in the response.
     */
    getApiV1AdminAccounts(req: operations.GetApiV1AdminAccountsRequest, security: operations.GetApiV1AdminAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1AdminAccountsResponse>;
    /**
     * View admin-level information about the given account.
     */
    getApiV1AdminAccountsId(req: operations.GetApiV1AdminAccountsIdRequest, security: operations.GetApiV1AdminAccountsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1AdminAccountsIdResponse>;
    /**
     * View all reports. Pagination may be done with HTTP Link header in the response.
     */
    getApiV1AdminReports(req: operations.GetApiV1AdminReportsRequest, security: operations.GetApiV1AdminReportsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1AdminReportsResponse>;
    /**
     * View information about the report with the given ID.
     */
    getApiV1AdminReportsId(req: operations.GetApiV1AdminReportsIdRequest, security: operations.GetApiV1AdminReportsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1AdminReportsIdResponse>;
    /**
     * See all currently active announcements set by admins.
     */
    getApiV1Announcements(req: operations.GetApiV1AnnouncementsRequest, security: operations.GetApiV1AnnouncementsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1AnnouncementsResponse>;
    /**
     * Get blocked users.
     */
    getApiV1Blocks(req: operations.GetApiV1BlocksRequest, security: operations.GetApiV1BlocksSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1BlocksResponse>;
    /**
     * Statuses the user has bookmarked.
     */
    getApiV1Bookmarks(req: operations.GetApiV1BookmarksRequest, security: operations.GetApiV1BookmarksSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1BookmarksResponse>;
    /**
     * Show conversation.
     */
    getApiV1Conversations(req: operations.GetApiV1ConversationsRequest, security: operations.GetApiV1ConversationsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1ConversationsResponse>;
    /**
     * Returns custom emojis that are available on the server.
     */
    getApiV1CustomEmojis(config?: AxiosRequestConfig): Promise<operations.GetApiV1CustomEmojisResponse>;
    /**
     * List accounts visible in the directory.
     */
    getApiV1Directory(req: operations.GetApiV1DirectoryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1DirectoryResponse>;
    /**
     * View domains the user has blocked.
     */
    getApiV1DomainBlocks(req: operations.GetApiV1DomainBlocksRequest, security: operations.GetApiV1DomainBlocksSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1DomainBlocksResponse>;
    /**
     * Accounts that the user is currently featuring on their profile.
     */
    getApiV1Endorsements(req: operations.GetApiV1EndorsementsRequest, security: operations.GetApiV1EndorsementsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1EndorsementsResponse>;
    /**
     * Statuses the user has favourited.
     */
    getApiV1Favourites(req: operations.GetApiV1FavouritesRequest, security: operations.GetApiV1FavouritesSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1FavouritesResponse>;
    /**
     * View your featured tags.
     */
    getApiV1FeaturedTags(config?: AxiosRequestConfig): Promise<operations.GetApiV1FeaturedTagsResponse>;
    /**
     * Shows your 10 most-used tags, with usage history for the past week.
     */
    getApiV1FeaturedTagsSuggestions(config?: AxiosRequestConfig): Promise<operations.GetApiV1FeaturedTagsSuggestionsResponse>;
    getApiV1Filters(config?: AxiosRequestConfig): Promise<operations.GetApiV1FiltersResponse>;
    /**
     * Get one filter.
     */
    getApiV1FiltersId(req: operations.GetApiV1FiltersIdRequest, security: operations.GetApiV1FiltersIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1FiltersIdResponse>;
    /**
     * Pending Follows
     */
    getApiV1FollowRequests(req: operations.GetApiV1FollowRequestsRequest, security: operations.GetApiV1FollowRequestsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1FollowRequestsResponse>;
    /**
     * Information about the server.
     */
    getApiV1Instance(config?: AxiosRequestConfig): Promise<operations.GetApiV1InstanceResponse>;
    /**
     * Instance activity over the last 3 months, binned weekly.
     */
    getApiV1InstanceActivity(config?: AxiosRequestConfig): Promise<operations.GetApiV1InstanceActivityResponse>;
    /**
     * Information about the server.
     */
    getApiV1InstancePeers(config?: AxiosRequestConfig): Promise<operations.GetApiV1InstancePeersResponse>;
    /**
     * Fetch all lists that the user owns.
     */
    getApiV1Lists(config?: AxiosRequestConfig): Promise<operations.GetApiV1ListsResponse>;
    /**
     * Remove converstation
     */
    getApiV1ListsId(req: operations.GetApiV1ListsIdRequest, security: operations.GetApiV1ListsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1ListsIdResponse>;
    /**
     * View accounts in List
     */
    getApiV1ListsIdAccounts(req: operations.GetApiV1ListsIdAccountsRequest, security: operations.GetApiV1ListsIdAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1ListsIdAccountsResponse>;
    /**
     * Get an attachement.
     */
    getApiV1MediaId(req: operations.GetApiV1MediaIdRequest, security: operations.GetApiV1MediaIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1MediaIdResponse>;
    /**
     * Accounts the user has muted.
     */
    getApiV1Mutes(req: operations.GetApiV1MutesRequest, security: operations.GetApiV1MutesSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1MutesResponse>;
    /**
     * Notifications concerning the user. This API returns Link headers containing links to the next/previous page. However, the links can also be constructed dynamically using query params and id values.
     */
    getApiV1Notifications(req: operations.GetApiV1NotificationsRequest, security: operations.GetApiV1NotificationsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1NotificationsResponse>;
    /**
     * View information about a notification with a given ID.
     */
    getApiV1NotificationsId(req: operations.GetApiV1NotificationsIdRequest, security: operations.GetApiV1NotificationsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1NotificationsIdResponse>;
    /**
     * View a poll.
     */
    getApiV1PollsId(req: operations.GetApiV1PollsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1PollsIdResponse>;
    /**
     * Shows your 10 most-used tags, with usage history for the past week.
     */
    getApiV1Preferences(config?: AxiosRequestConfig): Promise<operations.GetApiV1PreferencesResponse>;
    /**
     * View the PushSubscription currently associated with this access token.
     */
    getApiV1PushSubscription(config?: AxiosRequestConfig): Promise<operations.GetApiV1PushSubscriptionResponse>;
    /**
     * View scheduled statuses
     */
    getApiV1ScheduledStatuses(req: operations.GetApiV1ScheduledStatusesRequest, security: operations.GetApiV1ScheduledStatusesSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1ScheduledStatusesResponse>;
    /**
     * View a single scheduled status
     */
    getApiV1ScheduledStatusesId(req: operations.GetApiV1ScheduledStatusesIdRequest, security: operations.GetApiV1ScheduledStatusesIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1ScheduledStatusesIdResponse>;
    getApiV1StatusesId(req: operations.GetApiV1StatusesIdRequest, security: operations.GetApiV1StatusesIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1StatusesIdResponse>;
    getApiV1StatusesIdContext(req: operations.GetApiV1StatusesIdContextRequest, security: operations.GetApiV1StatusesIdContextSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1StatusesIdContextResponse>;
    /**
     * View who favourited a given status.
     */
    getApiV1StatusesIdFavouritedBy(req: operations.GetApiV1StatusesIdFavouritedByRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1StatusesIdFavouritedByResponse>;
    /**
     * View who boosted a given status.
     */
    getApiV1StatusesIdRebloggedBy(req: operations.GetApiV1StatusesIdRebloggedByRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1StatusesIdRebloggedByResponse>;
    /**
     * Accounts the user has had past positive interactions with, but is not yet following.
     */
    getApiV1Suggestions(req: operations.GetApiV1SuggestionsRequest, security: operations.GetApiV1SuggestionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1SuggestionsResponse>;
    /**
     * View statuses from followed users.
     */
    getApiV1TimelinesHome(req: operations.GetApiV1TimelinesHomeRequest, security: operations.GetApiV1TimelinesHomeSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1TimelinesHomeResponse>;
    /**
     * View statuses in the given list timeline.
     */
    getApiV1TimelinesListListId(req: operations.GetApiV1TimelinesListListIdRequest, security: operations.GetApiV1TimelinesListListIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1TimelinesListListIdResponse>;
    /**
     * Public timeline
     */
    getApiV1TimelinesPublic(req: operations.GetApiV1TimelinesPublicRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1TimelinesPublicResponse>;
    /**
     * View public statuses containing the given hashtag.
     */
    getApiV1TimelinesTagHashtag(req: operations.GetApiV1TimelinesTagHashtagRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1TimelinesTagHashtagResponse>;
    /**
     * Tags that are being used more frequently within the past week.
     */
    getApiV1Trends(req: operations.GetApiV1TrendsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1TrendsResponse>;
    /**
     * Search results
     */
    getApiV2Search(req: operations.GetApiV2SearchRequest, security: operations.GetApiV2SearchSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2SearchResponse>;
    /**
     * Perform an action against an account and log this action in the moderation history.
     */
    postApiV1AdminAccountsIdAction(req: operations.PostApiV1AdminAccountsIdActionRequest, security: operations.PostApiV1AdminAccountsIdActionSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AdminAccountsIdActionResponse>;
    /**
     * Approve the given local account if it is currently pending approval.
     */
    postApiV1AdminAccountsIdApprove(req: operations.PostApiV1AdminAccountsIdApproveRequest, security: operations.PostApiV1AdminAccountsIdApproveSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AdminAccountsIdApproveResponse>;
    /**
     * Re-enable a local account whose login is currently disabled.
     */
    postApiV1AdminAccountsIdEnable(req: operations.PostApiV1AdminAccountsIdEnableRequest, security: operations.PostApiV1AdminAccountsIdEnableSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AdminAccountsIdEnableResponse>;
    /**
     * Reject the given local account if it is currently pending approval.
     */
    postApiV1AdminAccountsIdReject(req: operations.PostApiV1AdminAccountsIdRejectRequest, security: operations.PostApiV1AdminAccountsIdRejectSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AdminAccountsIdRejectResponse>;
    /**
     * Unsilence a currently silenced account.
     */
    postApiV1AdminAccountsIdUnsilence(req: operations.PostApiV1AdminAccountsIdUnsilenceRequest, security: operations.PostApiV1AdminAccountsIdUnsilenceSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AdminAccountsIdUnsilenceResponse>;
    /**
     * Unsuspend a currently suspended account.
     */
    postApiV1AdminAccountsIdUnsuspend(req: operations.PostApiV1AdminAccountsIdUnsuspendRequest, security: operations.PostApiV1AdminAccountsIdUnsuspendSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AdminAccountsIdUnsuspendResponse>;
    /**
     * Claim the handling of this report to yourself.
     */
    postApiV1AdminReportsIdAssignToSelf(req: operations.PostApiV1AdminReportsIdAssignToSelfRequest, security: operations.PostApiV1AdminReportsIdAssignToSelfSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AdminReportsIdAssignToSelfResponse>;
    /**
     * Mark a report as resolved with no further action taken.
     */
    postApiV1AdminReportsIdReopen(req: operations.PostApiV1AdminReportsIdReopenRequest, security: operations.PostApiV1AdminReportsIdReopenSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AdminReportsIdReopenResponse>;
    /**
     * Mark a report as resolved with no further action taken.
     */
    postApiV1AdminReportsIdResolve(req: operations.PostApiV1AdminReportsIdResolveRequest, security: operations.PostApiV1AdminReportsIdResolveSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AdminReportsIdResolveResponse>;
    /**
     * Unassign a report so that someone else can claim it.
     */
    postApiV1AdminReportsIdUnassign(req: operations.PostApiV1AdminReportsIdUnassignRequest, security: operations.PostApiV1AdminReportsIdUnassignSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AdminReportsIdUnassignResponse>;
    /**
     * Allows a user to mark the announcement as read.
     */
    postApiV1AnnouncementsIdDismiss(req: operations.PostApiV1AnnouncementsIdDismissRequest, security: operations.PostApiV1AnnouncementsIdDismissSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1AnnouncementsIdDismissResponse>;
    /**
     * Remove converstation
     */
    postApiV1ConversationsIdRead(req: operations.PostApiV1ConversationsIdReadRequest, security: operations.PostApiV1ConversationsIdReadSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1ConversationsIdReadResponse>;
    /**
     * "Block a domain to:
     * - hide all public posts from it
     * - hide all notifications from it
     * - remove all followers from it
     * - prevent following new users from it (but does not remove existing follows)"
     *
     */
    postApiV1DomainBlocks(req: Uint8Array, security: operations.PostApiV1DomainBlocksSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1DomainBlocksResponse>;
    /**
     * Create a feature a tag.
     */
    postApiV1FeaturedTags(req: operations.PostApiV1FeaturedTagsRequestBody, security: operations.PostApiV1FeaturedTagsSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1FeaturedTagsResponse>;
    postApiV1Filters(req: Uint8Array, security: operations.PostApiV1FiltersSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1FiltersResponse>;
    /**
     * Accept Follow
     */
    postApiV1FollowRequestsIdAuthorize(req: operations.PostApiV1FollowRequestsIdAuthorizeRequest, security: operations.PostApiV1FollowRequestsIdAuthorizeSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1FollowRequestsIdAuthorizeResponse>;
    /**
     * Accept Follow
     */
    postApiV1FollowRequestsIdReject(req: operations.PostApiV1FollowRequestsIdRejectRequest, security: operations.PostApiV1FollowRequestsIdRejectSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1FollowRequestsIdRejectResponse>;
    /**
     * Create a new list.
     */
    postApiV1Lists(req: operations.PostApiV1ListsRequestBody, security: operations.PostApiV1ListsSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1ListsResponse>;
    /**
     * Add accounts to the given list. Note that the user must be following these accounts.
     */
    postApiV1ListsIdAccounts(req: operations.PostApiV1ListsIdAccountsRequest, security: operations.PostApiV1ListsIdAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1ListsIdAccountsResponse>;
    /**
     * Get saved timeline position
     */
    postApiV1Markers(req: Record<string, any>, security: operations.PostApiV1MarkersSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1MarkersResponse>;
    /**
     * Creates an attachment to be used with a new status.
     */
    postApiV1Media(req: Uint8Array, security: operations.PostApiV1MediaSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1MediaResponse>;
    /**
     * Update an Attachment, before it is attached to a status and posted.
     */
    postApiV1MediaId(req: operations.PostApiV1MediaIdRequest, security: operations.PostApiV1MediaIdSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1MediaIdResponse>;
    /**
     * Clear all notifications from the server.
     */
    postApiV1NotificationsClear(config?: AxiosRequestConfig): Promise<operations.PostApiV1NotificationsClearResponse>;
    /**
     * Clear a single notification from the server.
     */
    postApiV1NotificationsIdDismiss(req: operations.PostApiV1NotificationsIdDismissRequest, security: operations.PostApiV1NotificationsIdDismissSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1NotificationsIdDismissResponse>;
    /**
     * Vote on a poll.
     */
    postApiV1PollsId(req: operations.PostApiV1PollsIdRequest, security: operations.PostApiV1PollsIdSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1PollsIdResponse>;
    /**
     * Add a Web Push API subscription to receive notifications. Each access token can have one push subscription. If you create a new subscription, the old subscription is deleted.
     */
    postApiV1PushSubscription(req: operations.PostApiV1PushSubscriptionRequestBody, security: operations.PostApiV1PushSubscriptionSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1PushSubscriptionResponse>;
    /**
     * File a report.
     */
    postApiV1Reports(req: operations.PostApiV1ReportsRequestBody, security: operations.PostApiV1ReportsSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1ReportsResponse>;
    postApiV1Statuses(req: operations.PostApiV1StatusesRequest, security: operations.PostApiV1StatusesSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1StatusesResponse>;
    /**
     * Privately bookmark a status.
     */
    postApiV1StatusesIdBookmark(req: operations.PostApiV1StatusesIdBookmarkRequest, security: operations.PostApiV1StatusesIdBookmarkSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1StatusesIdBookmarkResponse>;
    /**
     * Add a status to your favourites list.
     */
    postApiV1StatusesIdFavourite(req: operations.PostApiV1StatusesIdFavouriteRequest, security: operations.PostApiV1StatusesIdFavouriteSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1StatusesIdFavouriteResponse>;
    /**
     * Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.
     */
    postApiV1StatusesIdMute(req: operations.PostApiV1StatusesIdMuteRequest, security: operations.PostApiV1StatusesIdMuteSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1StatusesIdMuteResponse>;
    /**
     * Feature one of your own public statuses at the top of your profile.
     */
    postApiV1StatusesIdPin(req: operations.PostApiV1StatusesIdPinRequest, security: operations.PostApiV1StatusesIdPinSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1StatusesIdPinResponse>;
    /**
     * Reshare a status.
     */
    postApiV1StatusesIdReblog(req: operations.PostApiV1StatusesIdReblogRequest, security: operations.PostApiV1StatusesIdReblogSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1StatusesIdReblogResponse>;
    /**
     * Remove a status from your private bookmarks.
     */
    postApiV1StatusesIdUnbookmark(req: operations.PostApiV1StatusesIdUnbookmarkRequest, security: operations.PostApiV1StatusesIdUnbookmarkSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1StatusesIdUnbookmarkResponse>;
    /**
     * Remove a status from your favourites list.
     */
    postApiV1StatusesIdUnfavourite(req: operations.PostApiV1StatusesIdUnfavouriteRequest, security: operations.PostApiV1StatusesIdUnfavouriteSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1StatusesIdUnfavouriteResponse>;
    /**
     * Status's conversation unmuted, or was already unmuted
     */
    postApiV1StatusesIdUnmute(req: operations.PostApiV1StatusesIdUnmuteRequest, security: operations.PostApiV1StatusesIdUnmuteSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1StatusesIdUnmuteResponse>;
    /**
     * Unfeature a status from the top of your profile.
     */
    postApiV1StatusesIdUnpin(req: operations.PostApiV1StatusesIdUnpinRequest, security: operations.PostApiV1StatusesIdUnpinSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1StatusesIdUnpinResponse>;
    /**
     * Undo a reshare of a status.
     */
    postApiV1StatusesIdUnreblog(req: operations.PostApiV1StatusesIdUnreblogRequest, security: operations.PostApiV1StatusesIdUnreblogSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1StatusesIdUnreblogResponse>;
    /**
     * Allows a user to mark the announcement as read.
     */
    putApiV1AnnouncementsIdReactionsName(req: operations.PutApiV1AnnouncementsIdReactionsNameRequest, security: operations.PutApiV1AnnouncementsIdReactionsNameSecurity, config?: AxiosRequestConfig): Promise<operations.PutApiV1AnnouncementsIdReactionsNameResponse>;
    /**
     * Update a filter.
     */
    putApiV1FiltersId(req: operations.PutApiV1FiltersIdRequest, security: operations.PutApiV1FiltersIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutApiV1FiltersIdResponse>;
    /**
     * Change the title of a list, or which replies to show.
     */
    putApiV1Lists(req: operations.PutApiV1ListsRequestBody, security: operations.PutApiV1ListsSecurity, config?: AxiosRequestConfig): Promise<operations.PutApiV1ListsResponse>;
    /**
     * Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
     */
    putApiV1PushSubscription(req: operations.PutApiV1PushSubscriptionRequestBody, security: operations.PutApiV1PushSubscriptionSecurity, config?: AxiosRequestConfig): Promise<operations.PutApiV1PushSubscriptionResponse>;
    /**
     * View a single scheduled status
     */
    putApiV1ScheduledStatusesId(req: operations.PutApiV1ScheduledStatusesIdRequest, security: operations.PutApiV1ScheduledStatusesIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutApiV1ScheduledStatusesIdResponse>;
}
