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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV1AnnouncementsIdReactionsNameRequest;
import org.openapis.openapi.models.operations.DeleteApiV1AnnouncementsIdReactionsNameResponse;
import org.openapis.openapi.models.operations.DeleteApiV1AnnouncementsIdReactionsNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1AnnouncementsIdReactionsNameRequest req = new DeleteApiV1AnnouncementsIdReactionsNameRequest("quibusdam", "unde");            

            DeleteApiV1AnnouncementsIdReactionsNameResponse res = sdk.sdk.deleteApiV1AnnouncementsIdReactionsName(req, new DeleteApiV1AnnouncementsIdReactionsNameSecurity("nulla") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.deleteApiV1AnnouncementsIdReactionsName200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiV1ConversationsId

Remove converstation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV1ConversationsIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV1ConversationsIdResponse;
import org.openapis.openapi.models.operations.DeleteApiV1ConversationsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1ConversationsIdRequest req = new DeleteApiV1ConversationsIdRequest("corrupti");            

            DeleteApiV1ConversationsIdResponse res = sdk.sdk.deleteApiV1ConversationsId(req, new DeleteApiV1ConversationsIdSecurity("illum") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.deleteApiV1ConversationsId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiV1DomainBlocks

Remove a domain block, if it exists in the user's array of blocked domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV1DomainBlocksRequest;
import org.openapis.openapi.models.operations.DeleteApiV1DomainBlocksResponse;
import org.openapis.openapi.models.operations.DeleteApiV1DomainBlocksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1DomainBlocksRequest req = new DeleteApiV1DomainBlocksRequest("vel");            

            DeleteApiV1DomainBlocksResponse res = sdk.sdk.deleteApiV1DomainBlocks(req, new DeleteApiV1DomainBlocksSecurity("error") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.deleteApiV1DomainBlocks200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiV1FeaturedTagsId

Unfeature a tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV1FeaturedTagsIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV1FeaturedTagsIdResponse;
import org.openapis.openapi.models.operations.DeleteApiV1FeaturedTagsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1FeaturedTagsIdRequest req = new DeleteApiV1FeaturedTagsIdRequest("deserunt");            

            DeleteApiV1FeaturedTagsIdResponse res = sdk.sdk.deleteApiV1FeaturedTagsId(req, new DeleteApiV1FeaturedTagsIdSecurity("suscipit") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.deleteApiV1FeaturedTagsId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiV1FiltersId

Delete a filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV1FiltersIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV1FiltersIdResponse;
import org.openapis.openapi.models.operations.DeleteApiV1FiltersIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1FiltersIdRequest req = new DeleteApiV1FiltersIdRequest("iure");            

            DeleteApiV1FiltersIdResponse res = sdk.sdk.deleteApiV1FiltersId(req, new DeleteApiV1FiltersIdSecurity("magnam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiV1Lists

Delete a list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV1ListsResponse;
import org.openapis.openapi.models.operations.DeleteApiV1ListsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1ListsResponse res = sdk.sdk.deleteApiV1Lists(new DeleteApiV1ListsSecurity("debitis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.deleteApiV1Lists200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiV1ListsIdAccounts

Remove accounts from the given list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV1ListsIdAccountsRequest;
import org.openapis.openapi.models.operations.DeleteApiV1ListsIdAccountsResponse;
import org.openapis.openapi.models.operations.DeleteApiV1ListsIdAccountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1ListsIdAccountsRequest req = new DeleteApiV1ListsIdAccountsRequest(                new String[]{{
                                add("delectus"),
                            }}, "tempora");            

            DeleteApiV1ListsIdAccountsResponse res = sdk.sdk.deleteApiV1ListsIdAccounts(req, new DeleteApiV1ListsIdAccountsSecurity("suscipit") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.deleteApiV1ListsIdAccounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiV1PushSubscription

Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV1PushSubscriptionResponse;
import org.openapis.openapi.models.operations.DeleteApiV1PushSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1PushSubscriptionResponse res = sdk.sdk.deleteApiV1PushSubscription(new DeleteApiV1PushSubscriptionSecurity("molestiae") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.deleteApiV1PushSubscription200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiV1ScheduledStatusesId

Cancel a scheduled status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV1ScheduledStatusesIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV1ScheduledStatusesIdResponse;
import org.openapis.openapi.models.operations.DeleteApiV1ScheduledStatusesIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1ScheduledStatusesIdRequest req = new DeleteApiV1ScheduledStatusesIdRequest("minus");            

            DeleteApiV1ScheduledStatusesIdResponse res = sdk.sdk.deleteApiV1ScheduledStatusesId(req, new DeleteApiV1ScheduledStatusesIdSecurity("placeat") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.deleteApiV1ScheduledStatusesId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiV1StatusesId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV1StatusesIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV1StatusesIdResponse;
import org.openapis.openapi.models.operations.DeleteApiV1StatusesIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1StatusesIdRequest req = new DeleteApiV1StatusesIdRequest("voluptatum");            

            DeleteApiV1StatusesIdResponse res = sdk.sdk.deleteApiV1StatusesId(req, new DeleteApiV1StatusesIdSecurity("iusto") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiV1SuggestionsId

Delete user suggestion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV1SuggestionsIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV1SuggestionsIdResponse;
import org.openapis.openapi.models.operations.DeleteApiV1SuggestionsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1SuggestionsIdRequest req = new DeleteApiV1SuggestionsIdRequest("excepturi");            

            DeleteApiV1SuggestionsIdResponse res = sdk.sdk.deleteApiV1SuggestionsId(req, new DeleteApiV1SuggestionsIdSecurity("nisi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.deleteApiV1SuggestionsId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiOembed

OEmbed as JSON

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiOembedRequest;
import org.openapis.openapi.models.operations.GetApiOembedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiOembedRequest req = new GetApiOembedRequest() {{
                maxheight = 925597L;
                maxwidth = 836079L;
                url = "ab";
            }};            

            GetApiOembedResponse res = sdk.sdk.getApiOembed(req);

            if (res.card != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiProofs

View identity proof

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiProofsRequest;
import org.openapis.openapi.models.operations.GetApiProofsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiProofsRequest req = new GetApiProofsRequest() {{
                provider = "quis";
                username = "Ashlee36";
            }};            

            GetApiProofsResponse res = sdk.sdk.getApiProofs(req);

            if (res.identityProof != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1AdminAccounts

View accounts matching certain criteria for filtering, up to 100 at a time. Pagination may be done with the HTTP Link header in the response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AdminAccountsRequest;
import org.openapis.openapi.models.operations.GetApiV1AdminAccountsResponse;
import org.openapis.openapi.models.operations.GetApiV1AdminAccountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AdminAccountsRequest req = new GetApiV1AdminAccountsRequest() {{
                active = false;
                byDomain = "repellendus";
                disabled = false;
                displayName = "sapiente";
                email = "Brooke_Strosin47@hotmail.com";
                ip = "quod";
                local = false;
                pending = false;
                remote = false;
                silenced = false;
                staff = false;
                suspended = false;
                username = "Presley_Koepp";
            }};            

            GetApiV1AdminAccountsResponse res = sdk.sdk.getApiV1AdminAccounts(req, new GetApiV1AdminAccountsSecurity("dolorum") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.adminAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1AdminAccountsId

View admin-level information about the given account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AdminAccountsIdRequest;
import org.openapis.openapi.models.operations.GetApiV1AdminAccountsIdResponse;
import org.openapis.openapi.models.operations.GetApiV1AdminAccountsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AdminAccountsIdRequest req = new GetApiV1AdminAccountsIdRequest("dicta");            

            GetApiV1AdminAccountsIdResponse res = sdk.sdk.getApiV1AdminAccountsId(req, new GetApiV1AdminAccountsIdSecurity("nam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.adminAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1AdminReports

View all reports. Pagination may be done with HTTP Link header in the response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AdminReportsRequest;
import org.openapis.openapi.models.operations.GetApiV1AdminReportsResponse;
import org.openapis.openapi.models.operations.GetApiV1AdminReportsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AdminReportsRequest req = new GetApiV1AdminReportsRequest() {{
                accountId = "officia";
                resolved = false;
                targetAccountId = "occaecati";
            }};            

            GetApiV1AdminReportsResponse res = sdk.sdk.getApiV1AdminReports(req, new GetApiV1AdminReportsSecurity("fugit") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.adminReports != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1AdminReportsId

View information about the report with the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AdminReportsIdRequest;
import org.openapis.openapi.models.operations.GetApiV1AdminReportsIdResponse;
import org.openapis.openapi.models.operations.GetApiV1AdminReportsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AdminReportsIdRequest req = new GetApiV1AdminReportsIdRequest("deleniti");            

            GetApiV1AdminReportsIdResponse res = sdk.sdk.getApiV1AdminReportsId(req, new GetApiV1AdminReportsIdSecurity("hic") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.adminReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Announcements

See all currently active announcements set by admins.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AnnouncementsRequest;
import org.openapis.openapi.models.operations.GetApiV1AnnouncementsResponse;
import org.openapis.openapi.models.operations.GetApiV1AnnouncementsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AnnouncementsRequest req = new GetApiV1AnnouncementsRequest() {{
                withDismissed = false;
            }};            

            GetApiV1AnnouncementsResponse res = sdk.sdk.getApiV1Announcements(req, new GetApiV1AnnouncementsSecurity("optio") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.announcements != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Blocks

Get blocked users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1BlocksRequest;
import org.openapis.openapi.models.operations.GetApiV1BlocksResponse;
import org.openapis.openapi.models.operations.GetApiV1BlocksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1BlocksRequest req = new GetApiV1BlocksRequest() {{
                limit = 521848L;
                maxId = "beatae";
                sinceId = "commodi";
            }};            

            GetApiV1BlocksResponse res = sdk.sdk.getApiV1Blocks(req, new GetApiV1BlocksSecurity("molestiae") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Bookmarks

Statuses the user has bookmarked.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1BookmarksRequest;
import org.openapis.openapi.models.operations.GetApiV1BookmarksResponse;
import org.openapis.openapi.models.operations.GetApiV1BookmarksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1BookmarksRequest req = new GetApiV1BookmarksRequest() {{
                limit = 264555L;
                maxId = "qui";
                minId = "impedit";
                sinceId = "cum";
            }};            

            GetApiV1BookmarksResponse res = sdk.sdk.getApiV1Bookmarks(req, new GetApiV1BookmarksSecurity("esse") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Conversations

Show conversation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1ConversationsRequest;
import org.openapis.openapi.models.operations.GetApiV1ConversationsResponse;
import org.openapis.openapi.models.operations.GetApiV1ConversationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1ConversationsRequest req = new GetApiV1ConversationsRequest() {{
                limit = 216550L;
                maxId = "excepturi";
                minId = "aspernatur";
                sinceId = "perferendis";
            }};            

            GetApiV1ConversationsResponse res = sdk.sdk.getApiV1Conversations(req, new GetApiV1ConversationsSecurity("ad") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.conversations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1CustomEmojis

Returns custom emojis that are available on the server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1CustomEmojisResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1CustomEmojisResponse res = sdk.sdk.getApiV1CustomEmojis();

            if (res.emojis != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Directory

List accounts visible in the directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1DirectoryOrderEnum;
import org.openapis.openapi.models.operations.GetApiV1DirectoryRequest;
import org.openapis.openapi.models.operations.GetApiV1DirectoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1DirectoryRequest req = new GetApiV1DirectoryRequest() {{
                limit = 617636L;
                local = false;
                offset = 149675L;
                order = GetApiV1DirectoryOrderEnum.NEW_;
            }};            

            GetApiV1DirectoryResponse res = sdk.sdk.getApiV1Directory(req);

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1DomainBlocks

View domains the user has blocked.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1DomainBlocksRequest;
import org.openapis.openapi.models.operations.GetApiV1DomainBlocksResponse;
import org.openapis.openapi.models.operations.GetApiV1DomainBlocksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1DomainBlocksRequest req = new GetApiV1DomainBlocksRequest() {{
                limit = 222321L;
                maxId = "natus";
                sinceId = "laboriosam";
            }};            

            GetApiV1DomainBlocksResponse res = sdk.sdk.getApiV1DomainBlocks(req, new GetApiV1DomainBlocksSecurity("hic") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.getApiV1DomainBlocks200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Endorsements

Accounts that the user is currently featuring on their profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1EndorsementsRequest;
import org.openapis.openapi.models.operations.GetApiV1EndorsementsResponse;
import org.openapis.openapi.models.operations.GetApiV1EndorsementsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1EndorsementsRequest req = new GetApiV1EndorsementsRequest() {{
                limit = 902599L;
                maxId = "fuga";
                sinceId = "in";
            }};            

            GetApiV1EndorsementsResponse res = sdk.sdk.getApiV1Endorsements(req, new GetApiV1EndorsementsSecurity("corporis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Favourites

Statuses the user has favourited.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1FavouritesRequest;
import org.openapis.openapi.models.operations.GetApiV1FavouritesResponse;
import org.openapis.openapi.models.operations.GetApiV1FavouritesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1FavouritesRequest req = new GetApiV1FavouritesRequest() {{
                limit = "iste";
                maxId = "iure";
                minId = "saepe";
            }};            

            GetApiV1FavouritesResponse res = sdk.sdk.getApiV1Favourites(req, new GetApiV1FavouritesSecurity("quidem") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1FeaturedTags

View your featured tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1FeaturedTagsResponse;
import org.openapis.openapi.models.operations.GetApiV1FeaturedTagsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1FeaturedTagsResponse res = sdk.sdk.getApiV1FeaturedTags(new GetApiV1FeaturedTagsSecurity("architecto") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.featuredTags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1FeaturedTagsSuggestions

Shows your 10 most-used tags, with usage history for the past week.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1FeaturedTagsSuggestionsResponse;
import org.openapis.openapi.models.operations.GetApiV1FeaturedTagsSuggestionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1FeaturedTagsSuggestionsResponse res = sdk.sdk.getApiV1FeaturedTagsSuggestions(new GetApiV1FeaturedTagsSuggestionsSecurity("ipsa") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.featuredTags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Filters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1FiltersResponse;
import org.openapis.openapi.models.operations.GetApiV1FiltersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1FiltersResponse res = sdk.sdk.getApiV1Filters(new GetApiV1FiltersSecurity("reiciendis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.filters != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1FiltersId

Get one filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1FiltersIdRequest;
import org.openapis.openapi.models.operations.GetApiV1FiltersIdResponse;
import org.openapis.openapi.models.operations.GetApiV1FiltersIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1FiltersIdRequest req = new GetApiV1FiltersIdRequest("est");            

            GetApiV1FiltersIdResponse res = sdk.sdk.getApiV1FiltersId(req, new GetApiV1FiltersIdSecurity("mollitia") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.filter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1FollowRequests

Pending Follows

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1FollowRequestsRequest;
import org.openapis.openapi.models.operations.GetApiV1FollowRequestsResponse;
import org.openapis.openapi.models.operations.GetApiV1FollowRequestsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1FollowRequestsRequest req = new GetApiV1FollowRequestsRequest() {{
                limit = 670638L;
            }};            

            GetApiV1FollowRequestsResponse res = sdk.sdk.getApiV1FollowRequests(req, new GetApiV1FollowRequestsSecurity("dolores") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Instance

Information about the server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1InstanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1InstanceResponse res = sdk.sdk.getApiV1Instance();

            if (res.instance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1InstanceActivity

Instance activity over the last 3 months, binned weekly.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1InstanceActivityResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1InstanceActivityResponse res = sdk.sdk.getApiV1InstanceActivity();

            if (res.activities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1InstancePeers

Information about the server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1InstancePeersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1InstancePeersResponse res = sdk.sdk.getApiV1InstancePeers();

            if (res.getApiV1InstancePeers200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Lists

Fetch all lists that the user owns.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1ListsResponse;
import org.openapis.openapi.models.operations.GetApiV1ListsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1ListsResponse res = sdk.sdk.getApiV1Lists(new GetApiV1ListsSecurity("dolorem") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.lists != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1ListsId

Remove converstation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1ListsIdRequest;
import org.openapis.openapi.models.operations.GetApiV1ListsIdResponse;
import org.openapis.openapi.models.operations.GetApiV1ListsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1ListsIdRequest req = new GetApiV1ListsIdRequest("corporis");            

            GetApiV1ListsIdResponse res = sdk.sdk.getApiV1ListsId(req, new GetApiV1ListsIdSecurity("explicabo") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.list != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1ListsIdAccounts

View accounts in List

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1ListsIdAccountsRequest;
import org.openapis.openapi.models.operations.GetApiV1ListsIdAccountsResponse;
import org.openapis.openapi.models.operations.GetApiV1ListsIdAccountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1ListsIdAccountsRequest req = new GetApiV1ListsIdAccountsRequest("nobis") {{
                limit = 315428L;
                maxId = "omnis";
                sinceId = "nemo";
            }};            

            GetApiV1ListsIdAccountsResponse res = sdk.sdk.getApiV1ListsIdAccounts(req, new GetApiV1ListsIdAccountsSecurity("minima") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1MediaId

Get an attachement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1MediaIdRequest;
import org.openapis.openapi.models.operations.GetApiV1MediaIdResponse;
import org.openapis.openapi.models.operations.GetApiV1MediaIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1MediaIdRequest req = new GetApiV1MediaIdRequest("excepturi");            

            GetApiV1MediaIdResponse res = sdk.sdk.getApiV1MediaId(req, new GetApiV1MediaIdSecurity("accusantium") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Mutes

Accounts the user has muted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1MutesRequest;
import org.openapis.openapi.models.operations.GetApiV1MutesResponse;
import org.openapis.openapi.models.operations.GetApiV1MutesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1MutesRequest req = new GetApiV1MutesRequest() {{
                limit = "iure";
                maxId = "culpa";
                sinceId = "doloribus";
            }};            

            GetApiV1MutesResponse res = sdk.sdk.getApiV1Mutes(req, new GetApiV1MutesSecurity("sapiente") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Notifications

Notifications concerning the user. This API returns Link headers containing links to the next/previous page. However, the links can also be constructed dynamically using query params and id values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1NotificationsRequest;
import org.openapis.openapi.models.operations.GetApiV1NotificationsResponse;
import org.openapis.openapi.models.operations.GetApiV1NotificationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1NotificationsRequest req = new GetApiV1NotificationsRequest() {{
                accountId = "architecto";
                excludeTypes = new String[]{{
                    add("dolorem"),
                    add("culpa"),
                    add("consequuntur"),
                }};
                limit = 995300L;
                maxId = "mollitia";
                minId = "occaecati";
                sinceId = "numquam";
            }};            

            GetApiV1NotificationsResponse res = sdk.sdk.getApiV1Notifications(req, new GetApiV1NotificationsSecurity("commodi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.notifications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1NotificationsId

View information about a notification with a given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1NotificationsIdRequest;
import org.openapis.openapi.models.operations.GetApiV1NotificationsIdResponse;
import org.openapis.openapi.models.operations.GetApiV1NotificationsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1NotificationsIdRequest req = new GetApiV1NotificationsIdRequest("quam");            

            GetApiV1NotificationsIdResponse res = sdk.sdk.getApiV1NotificationsId(req, new GetApiV1NotificationsIdSecurity("molestiae") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.notification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1PollsId

View a poll.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1PollsIdRequest;
import org.openapis.openapi.models.operations.GetApiV1PollsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1PollsIdRequest req = new GetApiV1PollsIdRequest("velit");            

            GetApiV1PollsIdResponse res = sdk.sdk.getApiV1PollsId(req);

            if (res.poll != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Preferences

Shows your 10 most-used tags, with usage history for the past week.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1PreferencesResponse;
import org.openapis.openapi.models.operations.GetApiV1PreferencesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1PreferencesResponse res = sdk.sdk.getApiV1Preferences(new GetApiV1PreferencesSecurity("error") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.preferences != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1PushSubscription

View the PushSubscription currently associated with this access token.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1PushSubscriptionResponse;
import org.openapis.openapi.models.operations.GetApiV1PushSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1PushSubscriptionResponse res = sdk.sdk.getApiV1PushSubscription(new GetApiV1PushSubscriptionSecurity("quia") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.pushSubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1ScheduledStatuses

View scheduled statuses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1ScheduledStatusesRequest;
import org.openapis.openapi.models.operations.GetApiV1ScheduledStatusesResponse;
import org.openapis.openapi.models.operations.GetApiV1ScheduledStatusesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1ScheduledStatusesRequest req = new GetApiV1ScheduledStatusesRequest() {{
                limit = 338007L;
                maxId = "vitae";
                minId = "laborum";
                sinceId = "animi";
            }};            

            GetApiV1ScheduledStatusesResponse res = sdk.sdk.getApiV1ScheduledStatuses(req, new GetApiV1ScheduledStatusesSecurity("enim") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.scheduledStatuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1ScheduledStatusesId

View a single scheduled status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1ScheduledStatusesIdRequest;
import org.openapis.openapi.models.operations.GetApiV1ScheduledStatusesIdResponse;
import org.openapis.openapi.models.operations.GetApiV1ScheduledStatusesIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1ScheduledStatusesIdRequest req = new GetApiV1ScheduledStatusesIdRequest("odit");            

            GetApiV1ScheduledStatusesIdResponse res = sdk.sdk.getApiV1ScheduledStatusesId(req, new GetApiV1ScheduledStatusesIdSecurity("quo") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.scheduledStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1StatusesId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1StatusesIdRequest;
import org.openapis.openapi.models.operations.GetApiV1StatusesIdResponse;
import org.openapis.openapi.models.operations.GetApiV1StatusesIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1StatusesIdRequest req = new GetApiV1StatusesIdRequest("sequi");            

            GetApiV1StatusesIdResponse res = sdk.sdk.getApiV1StatusesId(req, new GetApiV1StatusesIdSecurity("tenetur") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1StatusesIdContext

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1StatusesIdContextRequest;
import org.openapis.openapi.models.operations.GetApiV1StatusesIdContextResponse;
import org.openapis.openapi.models.operations.GetApiV1StatusesIdContextSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1StatusesIdContextRequest req = new GetApiV1StatusesIdContextRequest("ipsam");            

            GetApiV1StatusesIdContextResponse res = sdk.sdk.getApiV1StatusesIdContext(req, new GetApiV1StatusesIdContextSecurity("id") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.context != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1StatusesIdFavouritedBy

View who favourited a given status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1StatusesIdFavouritedByRequest;
import org.openapis.openapi.models.operations.GetApiV1StatusesIdFavouritedByResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1StatusesIdFavouritedByRequest req = new GetApiV1StatusesIdFavouritedByRequest("possimus");            

            GetApiV1StatusesIdFavouritedByResponse res = sdk.sdk.getApiV1StatusesIdFavouritedBy(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1StatusesIdRebloggedBy

View who boosted a given status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1StatusesIdRebloggedByRequest;
import org.openapis.openapi.models.operations.GetApiV1StatusesIdRebloggedByResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1StatusesIdRebloggedByRequest req = new GetApiV1StatusesIdRebloggedByRequest("aut");            

            GetApiV1StatusesIdRebloggedByResponse res = sdk.sdk.getApiV1StatusesIdRebloggedBy(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Suggestions

Accounts the user has had past positive interactions with, but is not yet following.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1SuggestionsRequest;
import org.openapis.openapi.models.operations.GetApiV1SuggestionsResponse;
import org.openapis.openapi.models.operations.GetApiV1SuggestionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1SuggestionsRequest req = new GetApiV1SuggestionsRequest() {{
                limit = 97101L;
            }};            

            GetApiV1SuggestionsResponse res = sdk.sdk.getApiV1Suggestions(req, new GetApiV1SuggestionsSecurity("error") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1TimelinesHome

View statuses from followed users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1TimelinesHomeRequest;
import org.openapis.openapi.models.operations.GetApiV1TimelinesHomeResponse;
import org.openapis.openapi.models.operations.GetApiV1TimelinesHomeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1TimelinesHomeRequest req = new GetApiV1TimelinesHomeRequest() {{
                limit = 837945L;
                local = false;
                maxId = "laborum";
                minId = "quasi";
                sinceId = "reiciendis";
            }};            

            GetApiV1TimelinesHomeResponse res = sdk.sdk.getApiV1TimelinesHome(req, new GetApiV1TimelinesHomeSecurity("voluptatibus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1TimelinesListListId

View statuses in the given list timeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1TimelinesListListIdRequest;
import org.openapis.openapi.models.operations.GetApiV1TimelinesListListIdResponse;
import org.openapis.openapi.models.operations.GetApiV1TimelinesListListIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1TimelinesListListIdRequest req = new GetApiV1TimelinesListListIdRequest("vero") {{
                limit = 468651L;
                maxId = "praesentium";
                minId = "voluptatibus";
                sinceId = "ipsa";
            }};            

            GetApiV1TimelinesListListIdResponse res = sdk.sdk.getApiV1TimelinesListListId(req, new GetApiV1TimelinesListListIdSecurity("omnis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1TimelinesPublic

Public timeline

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1TimelinesPublicRequest;
import org.openapis.openapi.models.operations.GetApiV1TimelinesPublicResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1TimelinesPublicRequest req = new GetApiV1TimelinesPublicRequest() {{
                limit = 451159L;
                local = false;
                maxId = "cum";
                minId = "perferendis";
                onlyMedia = false;
                remote = false;
                sinceId = "doloremque";
            }};            

            GetApiV1TimelinesPublicResponse res = sdk.sdk.getApiV1TimelinesPublic(req);

            if (res.statuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1TimelinesTagHashtag

View public statuses containing the given hashtag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1TimelinesTagHashtagRequest;
import org.openapis.openapi.models.operations.GetApiV1TimelinesTagHashtagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1TimelinesTagHashtagRequest req = new GetApiV1TimelinesTagHashtagRequest("reprehenderit") {{
                limit = 282807L;
                local = false;
                maxId = "maiores";
                minId = "dicta";
                onlyMedia = false;
                remote = false;
                sinceId = "corporis";
            }};            

            GetApiV1TimelinesTagHashtagResponse res = sdk.sdk.getApiV1TimelinesTagHashtag(req);

            if (res.statuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1Trends

Tags that are being used more frequently within the past week.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1TrendsRequest;
import org.openapis.openapi.models.operations.GetApiV1TrendsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1TrendsRequest req = new GetApiV1TrendsRequest() {{
                limit = 296140L;
            }};            

            GetApiV1TrendsResponse res = sdk.sdk.getApiV1Trends(req);

            if (res.tags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2Search

Search results

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2SearchRequest;
import org.openapis.openapi.models.operations.GetApiV2SearchResponse;
import org.openapis.openapi.models.operations.GetApiV2SearchSecurity;
import org.openapis.openapi.models.operations.GetApiV2SearchTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2SearchRequest req = new GetApiV2SearchRequest("iusto") {{
                accountId = "dicta";
                excludeUnreviewed = false;
                following = false;
                limit = 688661L;
                maxId = "enim";
                minId = "accusamus";
                offset = 414263L;
                resolve = "repudiandae";
                type = GetApiV2SearchTypeEnum.ACCOUNTS;
            }};            

            GetApiV2SearchResponse res = sdk.sdk.getApiV2Search(req, new GetApiV2SearchSecurity("ipsum") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.getApiV2Search200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AdminAccountsIdAction

Perform an action against an account and log this action in the moderation history.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdActionRequest;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdActionRequestBody;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdActionRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdActionResponse;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdActionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AdminAccountsIdActionRequest req = new PostApiV1AdminAccountsIdActionRequest("quidem") {{
                requestBody = new PostApiV1AdminAccountsIdActionRequestBody() {{
                    reportId = "molestias";
                    sendEmailNotification = false;
                    text = "excepturi";
                    type = PostApiV1AdminAccountsIdActionRequestBodyTypeEnum.SUSPEND;
                    warningPresetId = "modi";
                }};;
            }};            

            PostApiV1AdminAccountsIdActionResponse res = sdk.sdk.postApiV1AdminAccountsIdAction(req, new PostApiV1AdminAccountsIdActionSecurity("praesentium") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AdminAccountsIdApprove

Approve the given local account if it is currently pending approval.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdApproveRequest;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdApproveResponse;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdApproveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AdminAccountsIdApproveRequest req = new PostApiV1AdminAccountsIdApproveRequest("rem");            

            PostApiV1AdminAccountsIdApproveResponse res = sdk.sdk.postApiV1AdminAccountsIdApprove(req, new PostApiV1AdminAccountsIdApproveSecurity("voluptates") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AdminAccountsIdEnable

Re-enable a local account whose login is currently disabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdEnableRequest;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdEnableResponse;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdEnableSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AdminAccountsIdEnableRequest req = new PostApiV1AdminAccountsIdEnableRequest("quasi");            

            PostApiV1AdminAccountsIdEnableResponse res = sdk.sdk.postApiV1AdminAccountsIdEnable(req, new PostApiV1AdminAccountsIdEnableSecurity("repudiandae") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AdminAccountsIdReject

Reject the given local account if it is currently pending approval.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdRejectRequest;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdRejectResponse;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdRejectSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AdminAccountsIdRejectRequest req = new PostApiV1AdminAccountsIdRejectRequest("sint");            

            PostApiV1AdminAccountsIdRejectResponse res = sdk.sdk.postApiV1AdminAccountsIdReject(req, new PostApiV1AdminAccountsIdRejectSecurity("veritatis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AdminAccountsIdUnsilence

Unsilence a currently silenced account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdUnsilenceRequest;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdUnsilenceResponse;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdUnsilenceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AdminAccountsIdUnsilenceRequest req = new PostApiV1AdminAccountsIdUnsilenceRequest("itaque");            

            PostApiV1AdminAccountsIdUnsilenceResponse res = sdk.sdk.postApiV1AdminAccountsIdUnsilence(req, new PostApiV1AdminAccountsIdUnsilenceSecurity("incidunt") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AdminAccountsIdUnsuspend

Unsuspend a currently suspended account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdUnsuspendRequest;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdUnsuspendResponse;
import org.openapis.openapi.models.operations.PostApiV1AdminAccountsIdUnsuspendSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AdminAccountsIdUnsuspendRequest req = new PostApiV1AdminAccountsIdUnsuspendRequest("enim");            

            PostApiV1AdminAccountsIdUnsuspendResponse res = sdk.sdk.postApiV1AdminAccountsIdUnsuspend(req, new PostApiV1AdminAccountsIdUnsuspendSecurity("consequatur") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AdminReportsIdAssignToSelf

Claim the handling of this report to yourself.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AdminReportsIdAssignToSelfRequest;
import org.openapis.openapi.models.operations.PostApiV1AdminReportsIdAssignToSelfResponse;
import org.openapis.openapi.models.operations.PostApiV1AdminReportsIdAssignToSelfSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AdminReportsIdAssignToSelfRequest req = new PostApiV1AdminReportsIdAssignToSelfRequest("est");            

            PostApiV1AdminReportsIdAssignToSelfResponse res = sdk.sdk.postApiV1AdminReportsIdAssignToSelf(req, new PostApiV1AdminReportsIdAssignToSelfSecurity("quibusdam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.adminReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AdminReportsIdReopen

Mark a report as resolved with no further action taken.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AdminReportsIdReopenRequest;
import org.openapis.openapi.models.operations.PostApiV1AdminReportsIdReopenResponse;
import org.openapis.openapi.models.operations.PostApiV1AdminReportsIdReopenSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AdminReportsIdReopenRequest req = new PostApiV1AdminReportsIdReopenRequest("explicabo");            

            PostApiV1AdminReportsIdReopenResponse res = sdk.sdk.postApiV1AdminReportsIdReopen(req, new PostApiV1AdminReportsIdReopenSecurity("deserunt") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.adminReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AdminReportsIdResolve

Mark a report as resolved with no further action taken.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AdminReportsIdResolveRequest;
import org.openapis.openapi.models.operations.PostApiV1AdminReportsIdResolveResponse;
import org.openapis.openapi.models.operations.PostApiV1AdminReportsIdResolveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AdminReportsIdResolveRequest req = new PostApiV1AdminReportsIdResolveRequest("distinctio");            

            PostApiV1AdminReportsIdResolveResponse res = sdk.sdk.postApiV1AdminReportsIdResolve(req, new PostApiV1AdminReportsIdResolveSecurity("quibusdam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.adminReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AdminReportsIdUnassign

Unassign a report so that someone else can claim it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AdminReportsIdUnassignRequest;
import org.openapis.openapi.models.operations.PostApiV1AdminReportsIdUnassignResponse;
import org.openapis.openapi.models.operations.PostApiV1AdminReportsIdUnassignSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AdminReportsIdUnassignRequest req = new PostApiV1AdminReportsIdUnassignRequest("labore");            

            PostApiV1AdminReportsIdUnassignResponse res = sdk.sdk.postApiV1AdminReportsIdUnassign(req, new PostApiV1AdminReportsIdUnassignSecurity("modi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.adminReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1AnnouncementsIdDismiss

Allows a user to mark the announcement as read.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AnnouncementsIdDismissRequest;
import org.openapis.openapi.models.operations.PostApiV1AnnouncementsIdDismissResponse;
import org.openapis.openapi.models.operations.PostApiV1AnnouncementsIdDismissSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1AnnouncementsIdDismissRequest req = new PostApiV1AnnouncementsIdDismissRequest("qui");            

            PostApiV1AnnouncementsIdDismissResponse res = sdk.sdk.postApiV1AnnouncementsIdDismiss(req, new PostApiV1AnnouncementsIdDismissSecurity("aliquid") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.postApiV1AnnouncementsIdDismiss200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1ConversationsIdRead

Remove converstation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1ConversationsIdReadRequest;
import org.openapis.openapi.models.operations.PostApiV1ConversationsIdReadResponse;
import org.openapis.openapi.models.operations.PostApiV1ConversationsIdReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1ConversationsIdReadRequest req = new PostApiV1ConversationsIdReadRequest("cupiditate");            

            PostApiV1ConversationsIdReadResponse res = sdk.sdk.postApiV1ConversationsIdRead(req, new PostApiV1ConversationsIdReadSecurity("quos") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.conversation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1DomainBlocks

"Block a domain to:
- hide all public posts from it
- hide all notifications from it
- remove all followers from it
- prevent following new users from it (but does not remove existing follows)"


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1DomainBlocksRequestBody;
import org.openapis.openapi.models.operations.PostApiV1DomainBlocksResponse;
import org.openapis.openapi.models.operations.PostApiV1DomainBlocksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "perferendis".getBytes()            

            PostApiV1DomainBlocksResponse res = sdk.sdk.postApiV1DomainBlocks(req, new PostApiV1DomainBlocksSecurity("magni") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.postApiV1DomainBlocks200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1FeaturedTags

Create a feature a tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1FeaturedTagsRequestBody;
import org.openapis.openapi.models.operations.PostApiV1FeaturedTagsResponse;
import org.openapis.openapi.models.operations.PostApiV1FeaturedTagsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1FeaturedTagsRequestBody req = new PostApiV1FeaturedTagsRequestBody() {{
                name = "Vernon Abshire";
            }};            

            PostApiV1FeaturedTagsResponse res = sdk.sdk.postApiV1FeaturedTags(req, new PostApiV1FeaturedTagsSecurity("excepturi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.featuredTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1Filters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1FiltersRequestBody;
import org.openapis.openapi.models.operations.PostApiV1FiltersRequestBodyContextEnum;
import org.openapis.openapi.models.operations.PostApiV1FiltersResponse;
import org.openapis.openapi.models.operations.PostApiV1FiltersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "tempora".getBytes()            

            PostApiV1FiltersResponse res = sdk.sdk.postApiV1Filters(req, new PostApiV1FiltersSecurity("facilis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.filter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1FollowRequestsIdAuthorize

Accept Follow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1FollowRequestsIdAuthorizeRequest;
import org.openapis.openapi.models.operations.PostApiV1FollowRequestsIdAuthorizeResponse;
import org.openapis.openapi.models.operations.PostApiV1FollowRequestsIdAuthorizeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1FollowRequestsIdAuthorizeRequest req = new PostApiV1FollowRequestsIdAuthorizeRequest("tempore");            

            PostApiV1FollowRequestsIdAuthorizeResponse res = sdk.sdk.postApiV1FollowRequestsIdAuthorize(req, new PostApiV1FollowRequestsIdAuthorizeSecurity("labore") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.relationship != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1FollowRequestsIdReject

Accept Follow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1FollowRequestsIdRejectRequest;
import org.openapis.openapi.models.operations.PostApiV1FollowRequestsIdRejectResponse;
import org.openapis.openapi.models.operations.PostApiV1FollowRequestsIdRejectSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1FollowRequestsIdRejectRequest req = new PostApiV1FollowRequestsIdRejectRequest("delectus");            

            PostApiV1FollowRequestsIdRejectResponse res = sdk.sdk.postApiV1FollowRequestsIdReject(req, new PostApiV1FollowRequestsIdRejectSecurity("eum") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.relationship != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1Lists

Create a new list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1ListsRequestBody;
import org.openapis.openapi.models.operations.PostApiV1ListsRequestBodyRepliesPolicyEnum;
import org.openapis.openapi.models.operations.PostApiV1ListsResponse;
import org.openapis.openapi.models.operations.PostApiV1ListsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1ListsRequestBody req = new PostApiV1ListsRequestBody("non") {{
                repliesPolicy = PostApiV1ListsRequestBodyRepliesPolicyEnum.NONE;
            }};            

            PostApiV1ListsResponse res = sdk.sdk.postApiV1Lists(req, new PostApiV1ListsSecurity("sint") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.list != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1ListsIdAccounts

Add accounts to the given list. Note that the user must be following these accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1ListsIdAccountsRequest;
import org.openapis.openapi.models.operations.PostApiV1ListsIdAccountsRequestBody;
import org.openapis.openapi.models.operations.PostApiV1ListsIdAccountsResponse;
import org.openapis.openapi.models.operations.PostApiV1ListsIdAccountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1ListsIdAccountsRequest req = new PostApiV1ListsIdAccountsRequest("aliquid") {{
                requestBody = new PostApiV1ListsIdAccountsRequestBody(                new String[]{{
                                    add("necessitatibus"),
                                    add("sint"),
                                    add("officia"),
                                }});;
            }};            

            PostApiV1ListsIdAccountsResponse res = sdk.sdk.postApiV1ListsIdAccounts(req, new PostApiV1ListsIdAccountsSecurity("dolor") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.postApiV1ListsIdAccounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1Markers

Get saved timeline position

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1MarkersResponse;
import org.openapis.openapi.models.operations.PostApiV1MarkersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("a", "dolorum");
                put("in", "in");
                put("illum", "maiores");
                put("rerum", "dicta");
            }}            

            PostApiV1MarkersResponse res = sdk.sdk.postApiV1Markers(req, new PostApiV1MarkersSecurity("magnam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.postApiV1Markers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1Media

Creates an attachment to be used with a new status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1MediaRequestBody;
import org.openapis.openapi.models.operations.PostApiV1MediaResponse;
import org.openapis.openapi.models.operations.PostApiV1MediaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "cumque".getBytes()            

            PostApiV1MediaResponse res = sdk.sdk.postApiV1Media(req, new PostApiV1MediaSecurity("facere") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1MediaId

Update an Attachment, before it is attached to a status and posted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1MediaIdRequest;
import org.openapis.openapi.models.operations.PostApiV1MediaIdRequestBody;
import org.openapis.openapi.models.operations.PostApiV1MediaIdResponse;
import org.openapis.openapi.models.operations.PostApiV1MediaIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1MediaIdRequest req = new PostApiV1MediaIdRequest("ea") {{
                requestBody = "aliquid".getBytes();
            }};            

            PostApiV1MediaIdResponse res = sdk.sdk.postApiV1MediaId(req, new PostApiV1MediaIdSecurity("laborum") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1NotificationsClear

Clear all notifications from the server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1NotificationsClearResponse;
import org.openapis.openapi.models.operations.PostApiV1NotificationsClearSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1NotificationsClearResponse res = sdk.sdk.postApiV1NotificationsClear(new PostApiV1NotificationsClearSecurity("accusamus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.postApiV1NotificationsClear200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1NotificationsIdDismiss

Clear a single notification from the server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1NotificationsIdDismissRequest;
import org.openapis.openapi.models.operations.PostApiV1NotificationsIdDismissResponse;
import org.openapis.openapi.models.operations.PostApiV1NotificationsIdDismissSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1NotificationsIdDismissRequest req = new PostApiV1NotificationsIdDismissRequest("non");            

            PostApiV1NotificationsIdDismissResponse res = sdk.sdk.postApiV1NotificationsIdDismiss(req, new PostApiV1NotificationsIdDismissSecurity("occaecati") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.notification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1PollsId

Vote on a poll.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1PollsIdRequest;
import org.openapis.openapi.models.operations.PostApiV1PollsIdRequestBody;
import org.openapis.openapi.models.operations.PostApiV1PollsIdResponse;
import org.openapis.openapi.models.operations.PostApiV1PollsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1PollsIdRequest req = new PostApiV1PollsIdRequest("enim") {{
                requestBody = new PostApiV1PollsIdRequestBody(                new String[]{{
                                    add("delectus"),
                                    add("quidem"),
                                    add("provident"),
                                    add("nam"),
                                }});;
            }};            

            PostApiV1PollsIdResponse res = sdk.sdk.postApiV1PollsId(req, new PostApiV1PollsIdSecurity("id") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.poll != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1PushSubscription

Add a Web Push API subscription to receive notifications. Each access token can have one push subscription. If you create a new subscription, the old subscription is deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1PushSubscriptionRequestBody;
import org.openapis.openapi.models.operations.PostApiV1PushSubscriptionResponse;
import org.openapis.openapi.models.operations.PostApiV1PushSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1PushSubscriptionRequestBody req = new PostApiV1PushSubscriptionRequestBody("blanditiis", "deleniti");            

            PostApiV1PushSubscriptionResponse res = sdk.sdk.postApiV1PushSubscription(req, new PostApiV1PushSubscriptionSecurity("sapiente") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.pushSubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1Reports

File a report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1ReportsRequestBody;
import org.openapis.openapi.models.operations.PostApiV1ReportsResponse;
import org.openapis.openapi.models.operations.PostApiV1ReportsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1ReportsRequestBody req = new PostApiV1ReportsRequestBody("amet") {{
                comment = "deserunt";
                forward = false;
                statusIds = new String[]{{
                    add("vel"),
                    add("natus"),
                }};
            }};            

            PostApiV1ReportsResponse res = sdk.sdk.postApiV1Reports(req, new PostApiV1ReportsSecurity("omnis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1Statuses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1StatusesRequest;
import org.openapis.openapi.models.operations.PostApiV1StatusesRequestBody;
import org.openapis.openapi.models.operations.PostApiV1StatusesRequestBodyVisibilityEnum;
import org.openapis.openapi.models.operations.PostApiV1StatusesResponse;
import org.openapis.openapi.models.operations.PostApiV1StatusesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1StatusesRequest req = new PostApiV1StatusesRequest() {{
                idempotencyKey = "molestiae";
                requestBody = new org.openapis.openapi.models.operations.PostApiV1StatusesRequestBody[]{{
                    add(new PostApiV1StatusesRequestBody() {{
                        inReplyToId = "nihil";
                        language = "magnam";
                        mediaIds = new String[]{{
                            add("id"),
                            add("labore"),
                            add("labore"),
                        }};
                        poll = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("nobis", "eum");
                                put("vero", "aspernatur");
                                put("architecto", "magnam");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("excepturi", "ullam");
                            }}),
                        }};
                        scheduledAt = "provident";
                        sensitive = false;
                        spoilerText = "quos";
                        status = "sint";
                        visibility = PostApiV1StatusesRequestBodyVisibilityEnum.PUBLIC_;
                    }}),
                }};
            }};            

            PostApiV1StatusesResponse res = sdk.sdk.postApiV1Statuses(req, new PostApiV1StatusesSecurity("mollitia") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.postApiV1Statuses200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1StatusesIdBookmark

Privately bookmark a status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdBookmarkRequest;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdBookmarkResponse;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdBookmarkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1StatusesIdBookmarkRequest req = new PostApiV1StatusesIdBookmarkRequest("reiciendis");            

            PostApiV1StatusesIdBookmarkResponse res = sdk.sdk.postApiV1StatusesIdBookmark(req, new PostApiV1StatusesIdBookmarkSecurity("mollitia") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1StatusesIdFavourite

Add a status to your favourites list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdFavouriteRequest;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdFavouriteResponse;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdFavouriteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1StatusesIdFavouriteRequest req = new PostApiV1StatusesIdFavouriteRequest("ad");            

            PostApiV1StatusesIdFavouriteResponse res = sdk.sdk.postApiV1StatusesIdFavourite(req, new PostApiV1StatusesIdFavouriteSecurity("eum") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1StatusesIdMute

Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdMuteRequest;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdMuteResponse;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdMuteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1StatusesIdMuteRequest req = new PostApiV1StatusesIdMuteRequest("dolor");            

            PostApiV1StatusesIdMuteResponse res = sdk.sdk.postApiV1StatusesIdMute(req, new PostApiV1StatusesIdMuteSecurity("necessitatibus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1StatusesIdPin

Feature one of your own public statuses at the top of your profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdPinRequest;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdPinResponse;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdPinSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1StatusesIdPinRequest req = new PostApiV1StatusesIdPinRequest("odit");            

            PostApiV1StatusesIdPinResponse res = sdk.sdk.postApiV1StatusesIdPin(req, new PostApiV1StatusesIdPinSecurity("nemo") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1StatusesIdReblog

Reshare a status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdReblogRequest;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdReblogRequestBody;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdReblogResponse;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdReblogSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1StatusesIdReblogRequest req = new PostApiV1StatusesIdReblogRequest("quasi") {{
                requestBody = new PostApiV1StatusesIdReblogRequestBody() {{
                    visibility = "iure";
                }};;
            }};            

            PostApiV1StatusesIdReblogResponse res = sdk.sdk.postApiV1StatusesIdReblog(req, new PostApiV1StatusesIdReblogSecurity("doloribus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1StatusesIdUnbookmark

Remove a status from your private bookmarks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnbookmarkRequest;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnbookmarkResponse;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnbookmarkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1StatusesIdUnbookmarkRequest req = new PostApiV1StatusesIdUnbookmarkRequest("debitis");            

            PostApiV1StatusesIdUnbookmarkResponse res = sdk.sdk.postApiV1StatusesIdUnbookmark(req, new PostApiV1StatusesIdUnbookmarkSecurity("eius") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1StatusesIdUnfavourite

Remove a status from your favourites list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnfavouriteRequest;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnfavouriteResponse;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnfavouriteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1StatusesIdUnfavouriteRequest req = new PostApiV1StatusesIdUnfavouriteRequest("maxime");            

            PostApiV1StatusesIdUnfavouriteResponse res = sdk.sdk.postApiV1StatusesIdUnfavourite(req, new PostApiV1StatusesIdUnfavouriteSecurity("deleniti") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1StatusesIdUnmute

Status's conversation unmuted, or was already unmuted

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnmuteRequest;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnmuteResponse;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnmuteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1StatusesIdUnmuteRequest req = new PostApiV1StatusesIdUnmuteRequest("facilis");            

            PostApiV1StatusesIdUnmuteResponse res = sdk.sdk.postApiV1StatusesIdUnmute(req, new PostApiV1StatusesIdUnmuteSecurity("in") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1StatusesIdUnpin

Unfeature a status from the top of your profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnpinRequest;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnpinResponse;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnpinSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1StatusesIdUnpinRequest req = new PostApiV1StatusesIdUnpinRequest("architecto");            

            PostApiV1StatusesIdUnpinResponse res = sdk.sdk.postApiV1StatusesIdUnpin(req, new PostApiV1StatusesIdUnpinSecurity("architecto") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1StatusesIdUnreblog

Undo a reshare of a status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnreblogRequest;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnreblogResponse;
import org.openapis.openapi.models.operations.PostApiV1StatusesIdUnreblogSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1StatusesIdUnreblogRequest req = new PostApiV1StatusesIdUnreblogRequest("repudiandae");            

            PostApiV1StatusesIdUnreblogResponse res = sdk.sdk.postApiV1StatusesIdUnreblog(req, new PostApiV1StatusesIdUnreblogSecurity("ullam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putApiV1AnnouncementsIdReactionsName

Allows a user to mark the announcement as read.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutApiV1AnnouncementsIdReactionsNameRequest;
import org.openapis.openapi.models.operations.PutApiV1AnnouncementsIdReactionsNameResponse;
import org.openapis.openapi.models.operations.PutApiV1AnnouncementsIdReactionsNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutApiV1AnnouncementsIdReactionsNameRequest req = new PutApiV1AnnouncementsIdReactionsNameRequest("expedita", "nihil");            

            PutApiV1AnnouncementsIdReactionsNameResponse res = sdk.sdk.putApiV1AnnouncementsIdReactionsName(req, new PutApiV1AnnouncementsIdReactionsNameSecurity("repellat") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.putApiV1AnnouncementsIdReactionsName200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putApiV1FiltersId

Update a filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutApiV1FiltersIdRequest;
import org.openapis.openapi.models.operations.PutApiV1FiltersIdRequestBody;
import org.openapis.openapi.models.operations.PutApiV1FiltersIdRequestBodyContextEnum;
import org.openapis.openapi.models.operations.PutApiV1FiltersIdResponse;
import org.openapis.openapi.models.operations.PutApiV1FiltersIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutApiV1FiltersIdRequest req = new PutApiV1FiltersIdRequest("quibusdam") {{
                requestBody = "sed".getBytes();
            }};            

            PutApiV1FiltersIdResponse res = sdk.sdk.putApiV1FiltersId(req, new PutApiV1FiltersIdSecurity("saepe") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.filter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putApiV1Lists

Change the title of a list, or which replies to show.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutApiV1ListsRequestBody;
import org.openapis.openapi.models.operations.PutApiV1ListsRequestBodyRepliesPolicyEnum;
import org.openapis.openapi.models.operations.PutApiV1ListsResponse;
import org.openapis.openapi.models.operations.PutApiV1ListsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutApiV1ListsRequestBody req = new PutApiV1ListsRequestBody() {{
                repliesPolicy = PutApiV1ListsRequestBodyRepliesPolicyEnum.NONE;
                title = "Mr.";
            }};            

            PutApiV1ListsResponse res = sdk.sdk.putApiV1Lists(req, new PutApiV1ListsSecurity("consequuntur") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.list != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putApiV1PushSubscription

Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutApiV1PushSubscriptionRequestBody;
import org.openapis.openapi.models.operations.PutApiV1PushSubscriptionResponse;
import org.openapis.openapi.models.operations.PutApiV1PushSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutApiV1PushSubscriptionRequestBody req = new PutApiV1PushSubscriptionRequestBody("praesentium");            

            PutApiV1PushSubscriptionResponse res = sdk.sdk.putApiV1PushSubscription(req, new PutApiV1PushSubscriptionSecurity("natus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.pushSubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putApiV1ScheduledStatusesId

View a single scheduled status

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutApiV1ScheduledStatusesIdRequest;
import org.openapis.openapi.models.operations.PutApiV1ScheduledStatusesIdRequestBody;
import org.openapis.openapi.models.operations.PutApiV1ScheduledStatusesIdResponse;
import org.openapis.openapi.models.operations.PutApiV1ScheduledStatusesIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutApiV1ScheduledStatusesIdRequest req = new PutApiV1ScheduledStatusesIdRequest("magni") {{
                requestBody = new PutApiV1ScheduledStatusesIdRequestBody() {{
                    scheduledAt = OffsetDateTime.parse("2022-03-22T15:30:46.869Z");
                }};;
            }};            

            PutApiV1ScheduledStatusesIdResponse res = sdk.sdk.putApiV1ScheduledStatusesId(req, new PutApiV1ScheduledStatusesIdSecurity("illum") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.scheduledStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
