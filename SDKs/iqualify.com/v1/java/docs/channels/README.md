# channels

### Available Operations

* [deleteOfferingsOfferingIdChannelsChannelIdLearners](#deleteofferingsofferingidchannelschannelidlearners) - Remove learners from a group channel
* [getOfferingsOfferingIdAnalyticsChannelsChannelIdComments](#getofferingsofferingidanalyticschannelschannelidcomments) - Find comments
* [getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts](#getofferingsofferingidanalyticschannelschannelidposts) - Find posts
* [getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies](#getofferingsofferingidanalyticschannelschannelidreplies) - Find replies
* [getOfferingsOfferingIdChannels](#getofferingsofferingidchannels) - Find channels
* [getOfferingsOfferingIdChannelsChannelIdLearners](#getofferingsofferingidchannelschannelidlearners) - Find learners in a group channel
* [patchOfferingsOfferingIdChannelsChannelId](#patchofferingsofferingidchannelschannelid) - Update channel
* [postOfferingsOfferingIdChannels](#postofferingsofferingidchannels) - Add channel
* [postOfferingsOfferingIdChannelsChannelIdLearners](#postofferingsofferingidchannelschannelidlearners) - Add learners to a group channel

## deleteOfferingsOfferingIdChannelsChannelIdLearners

Removes a learner from the specified group channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequest;
import org.openapis.openapi.models.operations.DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequestBody;
import org.openapis.openapi.models.operations.DeleteOfferingsOfferingIdChannelsChannelIdLearnersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequest req = new DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequest(                new DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequestBody() {{
                                email = "Caroline_Ziemann@yahoo.com";
                            }};, "numquam", "commodi");            

            DeleteOfferingsOfferingIdChannelsChannelIdLearnersResponse res = sdk.channels.deleteOfferingsOfferingIdChannelsChannelIdLearners(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdAnalyticsChannelsChannelIdComments

Responds with a list of comments made in any posts in a specified channel, within an offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRequest req = new GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRequest("molestiae", "velit");            

            GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsResponse res = sdk.channels.getOfferingsOfferingIdAnalyticsChannelsChannelIdComments(req);

            if (res.comments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts

Responds with a list of posts made in a specified channel, within an offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRequest req = new GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRequest("quia", "quis");            

            GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsResponse res = sdk.channels.getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts(req);

            if (res.httpPosts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies

Responds with a list of replies to comments in any posts in a specified channel, within an offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest req = new GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest("laborum", "animi");            

            GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse res = sdk.channels.getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies(req);

            if (res.comments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdChannels

Responds with a list of channels in an offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdChannelsRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdChannelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdChannelsRequest req = new GetOfferingsOfferingIdChannelsRequest("odit");            

            GetOfferingsOfferingIdChannelsResponse res = sdk.channels.getOfferingsOfferingIdChannels(req);

            if (res.channelResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdChannelsChannelIdLearners

Finds all learners in a specified group channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdChannelsChannelIdLearnersRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdChannelsChannelIdLearnersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdChannelsChannelIdLearnersRequest req = new GetOfferingsOfferingIdChannelsChannelIdLearnersRequest("sequi", "tenetur");            

            GetOfferingsOfferingIdChannelsChannelIdLearnersResponse res = sdk.channels.getOfferingsOfferingIdChannelsChannelIdLearners(req);

            if (res.channelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchOfferingsOfferingIdChannelsChannelId

Updates a channel in an offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchOfferingsOfferingIdChannelsChannelIdRequest;
import org.openapis.openapi.models.operations.PatchOfferingsOfferingIdChannelsChannelIdResponse;
import org.openapis.openapi.models.shared.Channel;
import org.openapis.openapi.models.shared.ChannelGroup;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PatchOfferingsOfferingIdChannelsChannelIdRequest req = new PatchOfferingsOfferingIdChannelsChannelIdRequest(                new Channel() {{
                                group = new ChannelGroup() {{
                                    autoAssign = false;
                                }};;
                                groupDiscussion = false;
                                isBroadcastOnly = false;
                                privateSupport = false;
                                title = "Miss";
                            }};, "possimus", "aut");            

            PatchOfferingsOfferingIdChannelsChannelIdResponse res = sdk.channels.patchOfferingsOfferingIdChannelsChannelId(req);

            if (res.channelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOfferingsOfferingIdChannels

Adds new channel to the specified offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdChannelsRequest;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdChannelsResponse;
import org.openapis.openapi.models.shared.ChannelRequired;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostOfferingsOfferingIdChannelsRequest req = new PostOfferingsOfferingIdChannelsRequest(                new ChannelRequired("error") {{
                                isBroadcastOnly = false;
                            }};, "temporibus");            

            PostOfferingsOfferingIdChannelsResponse res = sdk.channels.postOfferingsOfferingIdChannels(req);

            if (res.channelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOfferingsOfferingIdChannelsChannelIdLearners

Adds a learner to a specified group channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdChannelsChannelIdLearnersRequest;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdChannelsChannelIdLearnersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostOfferingsOfferingIdChannelsChannelIdLearnersRequest req = new PostOfferingsOfferingIdChannelsChannelIdLearnersRequest(                new PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody() {{
                                email = "Wanda.Wolf50@gmail.com";
                            }};, "voluptatibus", "ipsa");            

            PostOfferingsOfferingIdChannelsChannelIdLearnersResponse res = sdk.channels.postOfferingsOfferingIdChannelsChannelIdLearners(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
