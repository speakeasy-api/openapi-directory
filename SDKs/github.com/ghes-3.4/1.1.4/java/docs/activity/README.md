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
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityCheckRepoIsStarredByAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ActivityCheckRepoIsStarredByAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityCheckRepoIsStarredByAuthenticatedUserRequest req = new ActivityCheckRepoIsStarredByAuthenticatedUserRequest("quis", "totam");            

            ActivityCheckRepoIsStarredByAuthenticatedUserResponse res = sdk.activity.activityCheckRepoIsStarredByAuthenticatedUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityDeleteRepoSubscription

This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/enterprise-server@3.4/rest/reference/activity#set-a-repository-subscription).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#delete-a-repository-subscription>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityDeleteRepoSubscriptionRequest;
import org.openapis.openapi.models.operations.ActivityDeleteRepoSubscriptionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityDeleteRepoSubscriptionRequest req = new ActivityDeleteRepoSubscriptionRequest("dignissimos", "eaque");            

            ActivityDeleteRepoSubscriptionResponse res = sdk.activity.activityDeleteRepoSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityDeleteThreadSubscription

Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/enterprise-server@3.4/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#delete-a-thread-subscription>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityDeleteThreadSubscriptionRequest;
import org.openapis.openapi.models.operations.ActivityDeleteThreadSubscriptionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityDeleteThreadSubscriptionRequest req = new ActivityDeleteThreadSubscriptionRequest(338985L);            

            ActivityDeleteThreadSubscriptionResponse res = sdk.activity.activityDeleteThreadSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityGetFeeds

GitHub Enterprise Server provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:

*   **Timeline**: The GitHub Enterprise Server global public timeline
*   **User**: The public timeline for any user, using [URI template](https://docs.github.com/enterprise-server@3.4/rest/overview/resources-in-the-rest-api#hypermedia)
*   **Current user public**: The public timeline for the authenticated user
*   **Current user**: The private timeline for the authenticated user
*   **Current user actor**: The private timeline for activity created by the authenticated user
*   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
*   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub Enterprise Server.

**Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/enterprise-server@3.4/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#get-feeds>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityGetFeedsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityGetFeedsResponse res = sdk.activity.activityGetFeeds();

            if (res.feed != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityGetRepoSubscription

Get a repository subscription

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#get-a-repository-subscription>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityGetRepoSubscriptionRequest;
import org.openapis.openapi.models.operations.ActivityGetRepoSubscriptionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityGetRepoSubscriptionRequest req = new ActivityGetRepoSubscriptionRequest("nesciunt", "eos");            

            ActivityGetRepoSubscriptionResponse res = sdk.activity.activityGetRepoSubscription(req);

            if (res.repositorySubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityGetThread

Gets information about a notification thread.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#get-a-thread>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityGetThreadRequest;
import org.openapis.openapi.models.operations.ActivityGetThreadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityGetThreadRequest req = new ActivityGetThreadRequest(18521L);            

            ActivityGetThreadResponse res = sdk.activity.activityGetThread(req);

            if (res.thread != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityGetThreadSubscriptionForAuthenticatedUser

This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/enterprise-server@3.4/rest/reference/activity#get-a-repository-subscription).

Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityGetThreadSubscriptionForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ActivityGetThreadSubscriptionForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityGetThreadSubscriptionForAuthenticatedUserRequest req = new ActivityGetThreadSubscriptionForAuthenticatedUserRequest(170986L);            

            ActivityGetThreadSubscriptionForAuthenticatedUserResponse res = sdk.activity.activityGetThreadSubscriptionForAuthenticatedUser(req);

            if (res.threadSubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListEventsForAuthenticatedUser

If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-events-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListEventsForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ActivityListEventsForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListEventsForAuthenticatedUserRequest req = new ActivityListEventsForAuthenticatedUserRequest("minus") {{
                page = 463451L;
                perPage = 223924L;
            }};            

            ActivityListEventsForAuthenticatedUserResponse res = sdk.activity.activityListEventsForAuthenticatedUser(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListNotificationsForAuthenticatedUser

List all notifications for the current user, sorted by most recently updated.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-notifications-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListNotificationsForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ActivityListNotificationsForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListNotificationsForAuthenticatedUserRequest req = new ActivityListNotificationsForAuthenticatedUserRequest() {{
                all = false;
                before = OffsetDateTime.parse("2021-12-18T20:09:27.741Z");
                page = 944120L;
                participating = false;
                perPage = 928082L;
                since = OffsetDateTime.parse("2021-08-04T18:39:34.709Z");
            }};            

            ActivityListNotificationsForAuthenticatedUserResponse res = sdk.activity.activityListNotificationsForAuthenticatedUser(req);

            if (res.threads != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListOrgEventsForAuthenticatedUser

This is the user's organization dashboard. You must be authenticated as the user to view this.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-organization-events-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListOrgEventsForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ActivityListOrgEventsForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListOrgEventsForAuthenticatedUserRequest req = new ActivityListOrgEventsForAuthenticatedUserRequest("perspiciatis", "voluptatem") {{
                page = 783645L;
                perPage = 164694L;
            }};            

            ActivityListOrgEventsForAuthenticatedUserResponse res = sdk.activity.activityListOrgEventsForAuthenticatedUser(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListPublicEvents

We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-public-events>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListPublicEventsRequest;
import org.openapis.openapi.models.operations.ActivityListPublicEventsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListPublicEventsRequest req = new ActivityListPublicEventsRequest() {{
                page = 500026L;
                perPage = 621479L;
            }};            

            ActivityListPublicEventsResponse res = sdk.activity.activityListPublicEvents(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListPublicEventsForRepoNetwork

List public events for a network of repositories

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-public-events-for-a-network-of-repositories>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListPublicEventsForRepoNetworkRequest;
import org.openapis.openapi.models.operations.ActivityListPublicEventsForRepoNetworkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListPublicEventsForRepoNetworkRequest req = new ActivityListPublicEventsForRepoNetworkRequest("eaque", "occaecati") {{
                page = 699098L;
                perPage = 237893L;
            }};            

            ActivityListPublicEventsForRepoNetworkResponse res = sdk.activity.activityListPublicEventsForRepoNetwork(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListPublicEventsForUser

List public events for a user

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-public-events-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListPublicEventsForUserRequest;
import org.openapis.openapi.models.operations.ActivityListPublicEventsForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListPublicEventsForUserRequest req = new ActivityListPublicEventsForUserRequest("asperiores") {{
                page = 934214L;
                perPage = 267262L;
            }};            

            ActivityListPublicEventsForUserResponse res = sdk.activity.activityListPublicEventsForUser(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListPublicOrgEvents

List public organization events

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-public-organization-events>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListPublicOrgEventsRequest;
import org.openapis.openapi.models.operations.ActivityListPublicOrgEventsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListPublicOrgEventsRequest req = new ActivityListPublicOrgEventsRequest("iste") {{
                page = 679091L;
                perPage = 535633L;
            }};            

            ActivityListPublicOrgEventsResponse res = sdk.activity.activityListPublicOrgEvents(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListReceivedEventsForUser

These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-events-received-by-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListReceivedEventsForUserRequest;
import org.openapis.openapi.models.operations.ActivityListReceivedEventsForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListReceivedEventsForUserRequest req = new ActivityListReceivedEventsForUserRequest("pariatur") {{
                page = 589910L;
                perPage = 750844L;
            }};            

            ActivityListReceivedEventsForUserResponse res = sdk.activity.activityListReceivedEventsForUser(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListReceivedPublicEventsForUser

List public events received by a user

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-public-events-received-by-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListReceivedPublicEventsForUserRequest;
import org.openapis.openapi.models.operations.ActivityListReceivedPublicEventsForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListReceivedPublicEventsForUserRequest req = new ActivityListReceivedPublicEventsForUserRequest("libero") {{
                page = 964490L;
                perPage = 311945L;
            }};            

            ActivityListReceivedPublicEventsForUserResponse res = sdk.activity.activityListReceivedPublicEventsForUser(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListRepoEvents

List repository events

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-repository-events>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListRepoEventsRequest;
import org.openapis.openapi.models.operations.ActivityListRepoEventsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListRepoEventsRequest req = new ActivityListRepoEventsRequest("quos", "aliquid") {{
                page = 212390L;
                perPage = 209843L;
            }};            

            ActivityListRepoEventsResponse res = sdk.activity.activityListRepoEvents(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListRepoNotificationsForAuthenticatedUser

Lists all notifications for the current user in the specified repository.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-repository-notifications-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListRepoNotificationsForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ActivityListRepoNotificationsForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListRepoNotificationsForAuthenticatedUserRequest req = new ActivityListRepoNotificationsForAuthenticatedUserRequest("dolor", "qui") {{
                all = false;
                before = OffsetDateTime.parse("2022-01-21T07:17:52.299Z");
                page = 569574L;
                participating = false;
                perPage = 739551L;
                since = OffsetDateTime.parse("2022-07-05T23:34:50.715Z");
            }};            

            ActivityListRepoNotificationsForAuthenticatedUserResponse res = sdk.activity.activityListRepoNotificationsForAuthenticatedUser(req);

            if (res.threads != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListReposStarredByAuthenticatedUser

Lists repositories the authenticated user has starred.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.4/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-repositories-starred-by-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListReposStarredByAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ActivityListReposStarredByAuthenticatedUserResponse;
import org.openapis.openapi.models.shared.DirectionEnum;
import org.openapis.openapi.models.shared.SortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListReposStarredByAuthenticatedUserRequest req = new ActivityListReposStarredByAuthenticatedUserRequest() {{
                direction = DirectionEnum.DESC;
                page = 227414L;
                perPage = 680545L;
                sort = SortEnum.CREATED;
            }};            

            ActivityListReposStarredByAuthenticatedUserResponse res = sdk.activity.activityListReposStarredByAuthenticatedUser(req);

            if (res.repositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListReposStarredByUser

Lists repositories a user has starred.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.4/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-repositories-starred-by-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListReposStarredByUserRequest;
import org.openapis.openapi.models.operations.ActivityListReposStarredByUserResponse;
import org.openapis.openapi.models.shared.DirectionEnum;
import org.openapis.openapi.models.shared.SortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListReposStarredByUserRequest req = new ActivityListReposStarredByUserRequest("veritatis") {{
                direction = DirectionEnum.ASC;
                page = 56418L;
                perPage = 434417L;
                sort = SortEnum.CREATED;
            }};            

            ActivityListReposStarredByUserResponse res = sdk.activity.activityListReposStarredByUser(req);

            if (res.activityListReposStarredByUser200ApplicationJSONAnyOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListReposWatchedByUser

Lists repositories a user is watching.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-repositories-watched-by-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListReposWatchedByUserRequest;
import org.openapis.openapi.models.operations.ActivityListReposWatchedByUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListReposWatchedByUserRequest req = new ActivityListReposWatchedByUserRequest("quaerat") {{
                page = 881005L;
                perPage = 696344L;
            }};            

            ActivityListReposWatchedByUserResponse res = sdk.activity.activityListReposWatchedByUser(req);

            if (res.minimalRepositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListStargazersForRepo

Lists the people that have starred the repository.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.4/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-stargazers>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListStargazersForRepoRequest;
import org.openapis.openapi.models.operations.ActivityListStargazersForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListStargazersForRepoRequest req = new ActivityListStargazersForRepoRequest("voluptatibus", "voluptas") {{
                page = 617658L;
                perPage = 179603L;
            }};            

            ActivityListStargazersForRepoResponse res = sdk.activity.activityListStargazersForRepo(req);

            if (res.activityListStargazersForRepo200ApplicationJSONAnyOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListWatchedReposForAuthenticatedUser

Lists repositories the authenticated user is watching.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-repositories-watched-by-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListWatchedReposForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ActivityListWatchedReposForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListWatchedReposForAuthenticatedUserRequest req = new ActivityListWatchedReposForAuthenticatedUserRequest() {{
                page = 542499L;
                perPage = 24678L;
            }};            

            ActivityListWatchedReposForAuthenticatedUserResponse res = sdk.activity.activityListWatchedReposForAuthenticatedUser(req);

            if (res.minimalRepositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityListWatchersForRepo

Lists the people watching the specified repository.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-watchers>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityListWatchersForRepoRequest;
import org.openapis.openapi.models.operations.ActivityListWatchersForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityListWatchersForRepoRequest req = new ActivityListWatchersForRepoRequest("fugiat", "ab") {{
                page = 743835L;
                perPage = 679393L;
            }};            

            ActivityListWatchersForRepoResponse res = sdk.activity.activityListWatchersForRepo(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityMarkNotificationsAsRead

Marks all notifications as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#mark-notifications-as-read>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityMarkNotificationsAsReadRequestBody;
import org.openapis.openapi.models.operations.ActivityMarkNotificationsAsReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityMarkNotificationsAsReadRequestBody req = new ActivityMarkNotificationsAsReadRequestBody() {{
                lastReadAt = OffsetDateTime.parse("2022-07-19T09:36:55.923Z");
                read = false;
            }};            

            ActivityMarkNotificationsAsReadResponse res = sdk.activity.activityMarkNotificationsAsRead(req);

            if (res.activityMarkNotificationsAsRead202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityMarkRepoNotificationsAsRead

Marks all notifications in a repository as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/enterprise-server@3.4/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#mark-repository-notifications-as-read>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityMarkRepoNotificationsAsReadRequest;
import org.openapis.openapi.models.operations.ActivityMarkRepoNotificationsAsReadRequestBody;
import org.openapis.openapi.models.operations.ActivityMarkRepoNotificationsAsReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityMarkRepoNotificationsAsReadRequest req = new ActivityMarkRepoNotificationsAsReadRequest("dolorum", "deleniti") {{
                requestBody = new ActivityMarkRepoNotificationsAsReadRequestBody() {{
                    lastReadAt = OffsetDateTime.parse("2021-03-17T10:19:08.276Z");
                }};;
            }};            

            ActivityMarkRepoNotificationsAsReadResponse res = sdk.activity.activityMarkRepoNotificationsAsRead(req);

            if (res.activityMarkRepoNotificationsAsRead202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityMarkThreadAsRead

Marks a thread as "read." Marking a thread as "read" is equivalent to clicking a notification in your notification inbox on GitHub Enterprise Server: https://github.com/notifications.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#mark-a-thread-as-read>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityMarkThreadAsReadRequest;
import org.openapis.openapi.models.operations.ActivityMarkThreadAsReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityMarkThreadAsReadRequest req = new ActivityMarkThreadAsReadRequest(714697L);            

            ActivityMarkThreadAsReadResponse res = sdk.activity.activityMarkThreadAsRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activitySetRepoSubscription

If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/enterprise-server@3.4/rest/reference/activity#delete-a-repository-subscription) completely.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#set-a-repository-subscription>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivitySetRepoSubscriptionRequest;
import org.openapis.openapi.models.operations.ActivitySetRepoSubscriptionRequestBody;
import org.openapis.openapi.models.operations.ActivitySetRepoSubscriptionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivitySetRepoSubscriptionRequest req = new ActivitySetRepoSubscriptionRequest("asperiores", "nihil") {{
                requestBody = new ActivitySetRepoSubscriptionRequestBody() {{
                    ignored = false;
                    subscribed = false;
                }};;
            }};            

            ActivitySetRepoSubscriptionResponse res = sdk.activity.activitySetRepoSubscription(req);

            if (res.repositorySubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activitySetThreadSubscription

If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.

You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.

Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/enterprise-server@3.4/rest/reference/activity#delete-a-thread-subscription) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#set-a-thread-subscription>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivitySetThreadSubscriptionRequest;
import org.openapis.openapi.models.operations.ActivitySetThreadSubscriptionRequestBody;
import org.openapis.openapi.models.operations.ActivitySetThreadSubscriptionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivitySetThreadSubscriptionRequest req = new ActivitySetThreadSubscriptionRequest(216897L) {{
                requestBody = new ActivitySetThreadSubscriptionRequestBody() {{
                    ignored = false;
                }};;
            }};            

            ActivitySetThreadSubscriptionResponse res = sdk.activity.activitySetThreadSubscription(req);

            if (res.threadSubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityStarRepoForAuthenticatedUser

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.4/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#star-a-repository-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityStarRepoForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ActivityStarRepoForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityStarRepoForAuthenticatedUserRequest req = new ActivityStarRepoForAuthenticatedUserRequest("voluptate", "id");            

            ActivityStarRepoForAuthenticatedUserResponse res = sdk.activity.activityStarRepoForAuthenticatedUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activityUnstarRepoForAuthenticatedUser

Unstar a repository for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/activity#unstar-a-repository-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivityUnstarRepoForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ActivityUnstarRepoForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityUnstarRepoForAuthenticatedUserRequest req = new ActivityUnstarRepoForAuthenticatedUserRequest("saepe", "eius");            

            ActivityUnstarRepoForAuthenticatedUserResponse res = sdk.activity.activityUnstarRepoForAuthenticatedUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
