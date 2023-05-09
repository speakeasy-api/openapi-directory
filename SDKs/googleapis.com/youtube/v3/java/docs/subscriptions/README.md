# subscriptions

### Available Operations

* [youtubeSubscriptionsDelete](#youtubesubscriptionsdelete) - Deletes a resource.
* [youtubeSubscriptionsInsert](#youtubesubscriptionsinsert) - Inserts a new resource into this collection.
* [youtubeSubscriptionsList](#youtubesubscriptionslist) - Retrieves a list of resources, possibly filtered.

## youtubeSubscriptionsDelete

Deletes a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsDeleteResponse;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeSubscriptionsDeleteRequest req = new YoutubeSubscriptionsDeleteRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "eveniet";
                fields = "earum";
                key = "velit";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "rerum";
                uploadProtocol = "itaque";
            }};            

            YoutubeSubscriptionsDeleteResponse res = sdk.subscriptions.youtubeSubscriptionsDelete(req, new YoutubeSubscriptionsDeleteSecurity() {{
                option1 = new YoutubeSubscriptionsDeleteSecurityOption1("dignissimos", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## youtubeSubscriptionsInsert

Inserts a new resource into this collection.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsInsertRequest;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsInsertResponse;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsInsertSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsInsertSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ResourceId;
import org.openapis.openapi.models.shared.Subscription;
import org.openapis.openapi.models.shared.SubscriptionContentDetails;
import org.openapis.openapi.models.shared.SubscriptionContentDetailsActivityTypeEnum;
import org.openapis.openapi.models.shared.SubscriptionSnippet;
import org.openapis.openapi.models.shared.SubscriptionSubscriberSnippet;
import org.openapis.openapi.models.shared.Thumbnail;
import org.openapis.openapi.models.shared.ThumbnailDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeSubscriptionsInsertRequest req = new YoutubeSubscriptionsInsertRequest(                new String[]{{
                                add("impedit"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                subscription = new Subscription() {{
                    contentDetails = new SubscriptionContentDetails() {{
                        activityType = SubscriptionContentDetailsActivityTypeEnum.ALL;
                        newItemCount = 704402L;
                        totalItemCount = 218128L;
                    }};;
                    etag = "ut";
                    id = "418e3bb9-1c8d-4975-a0e8-419d8f84f144";
                    kind = "maiores";
                    snippet = new SubscriptionSnippet() {{
                        channelId = "sequi";
                        channelTitle = "saepe";
                        description = "consequatur";
                        publishedAt = OffsetDateTime.parse("2022-02-09T16:11:59.064Z");
                        resourceId = new ResourceId() {{
                            channelId = "facere";
                            kind = "quisquam";
                            playlistId = "cumque";
                            videoId = "aliquam";
                        }};;
                        thumbnails = new ThumbnailDetails() {{
                            high = new Thumbnail() {{
                                height = 677895L;
                                url = "deserunt";
                                width = 319834L;
                            }};;
                            maxres = new Thumbnail() {{
                                height = 970411L;
                                url = "sequi";
                                width = 785555L;
                            }};;
                            medium = new Thumbnail() {{
                                height = 671528L;
                                url = "nobis";
                                width = 842974L;
                            }};;
                            standard = new Thumbnail() {{
                                height = 607624L;
                                url = "aut";
                                width = 369941L;
                            }};;
                        }};;
                        title = "Miss";
                    }};;
                    subscriberSnippet = new SubscriptionSubscriberSnippet() {{
                        channelId = "cupiditate";
                        description = "reprehenderit";
                        thumbnails = new ThumbnailDetails() {{
                            high = new Thumbnail() {{
                                height = 157281L;
                                url = "necessitatibus";
                                width = 37764L;
                            }};;
                            maxres = new Thumbnail() {{
                                height = 321473L;
                                url = "nisi";
                                width = 474185L;
                            }};;
                            medium = new Thumbnail() {{
                                height = 154130L;
                                url = "laudantium";
                                width = 152742L;
                            }};;
                            standard = new Thumbnail() {{
                                height = 140439L;
                                url = "iusto";
                                width = 712893L;
                            }};;
                        }};;
                        title = "Mr.";
                    }};;
                }};;
                accessToken = "repellendus";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "sint";
                key = "dolore";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "distinctio";
                uploadProtocol = "sapiente";
            }};            

            YoutubeSubscriptionsInsertResponse res = sdk.subscriptions.youtubeSubscriptionsInsert(req, new YoutubeSubscriptionsInsertSecurity() {{
                option1 = new YoutubeSubscriptionsInsertSecurityOption1("quam", "est") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeSubscriptionsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsListOrderEnum;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsListRequest;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsListResponse;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsListSecurity;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsListSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeSubscriptionsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeSubscriptionsListRequest req = new YoutubeSubscriptionsListRequest(                new String[]{{
                                add("delectus"),
                                add("culpa"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                channelId = "voluptas";
                fields = "non";
                forChannelId = "ullam";
                id = new String[]{{
                    add("voluptas"),
                    add("doloribus"),
                    add("animi"),
                }};
                key = "recusandae";
                maxResults = 359453L;
                mine = false;
                myRecentSubscribers = false;
                mySubscribers = false;
                oauthToken = "non";
                onBehalfOfContentOwner = "necessitatibus";
                onBehalfOfContentOwnerChannel = "distinctio";
                order = YoutubeSubscriptionsListOrderEnum.ALPHABETICAL;
                pageToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "optio";
                uploadProtocol = "sequi";
            }};            

            YoutubeSubscriptionsListResponse res = sdk.subscriptions.youtubeSubscriptionsList(req, new YoutubeSubscriptionsListSecurity() {{
                option1 = new YoutubeSubscriptionsListSecurityOption1("sunt", "vitae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.subscriptionListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
