# feeds

### Available Operations

* [cloudassetFeedsCreate](#cloudassetfeedscreate) - Creates a feed in a parent project/folder/organization to listen to its asset updates.
* [cloudassetFeedsList](#cloudassetfeedslist) - Lists all asset feeds in a parent project/folder/organization.

## cloudassetFeedsCreate

Creates a feed in a parent project/folder/organization to listen to its asset updates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetFeedsCreateRequest;
import org.openapis.openapi.models.operations.CloudassetFeedsCreateResponse;
import org.openapis.openapi.models.operations.CloudassetFeedsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreateFeedRequest;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Feed;
import org.openapis.openapi.models.shared.FeedContentTypeEnum;
import org.openapis.openapi.models.shared.FeedOutputConfig;
import org.openapis.openapi.models.shared.PubsubDestination;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetFeedsCreateRequest req = new CloudassetFeedsCreateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                createFeedRequest = new CreateFeedRequest() {{
                    feed = new Feed() {{
                        assetNames = new String[]{{
                            add("ad"),
                        }};
                        assetTypes = new String[]{{
                            add("sed"),
                            add("iste"),
                            add("dolor"),
                        }};
                        condition = new Expr() {{
                            description = "natus";
                            expression = "laboriosam";
                            location = "hic";
                            title = "Dr.";
                        }};;
                        contentType = FeedContentTypeEnum.ACCESS_POLICY;
                        feedOutputConfig = new FeedOutputConfig() {{
                            pubsubDestination = new PubsubDestination() {{
                                topic = "in";
                            }};;
                        }};;
                        name = "Sheryl Kertzmann";
                        relationshipTypes = new String[]{{
                            add("ipsa"),
                        }};
                    }};;
                    feedId = "reiciendis";
                }};;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "dolores";
                key = "dolorem";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "nobis";
                uploadProtocol = "enim";
            }};            

            CloudassetFeedsCreateResponse res = sdk.feeds.cloudassetFeedsCreate(req, new CloudassetFeedsCreateSecurity("omnis", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.feed != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudassetFeedsList

Lists all asset feeds in a parent project/folder/organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetFeedsListRequest;
import org.openapis.openapi.models.operations.CloudassetFeedsListResponse;
import org.openapis.openapi.models.operations.CloudassetFeedsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetFeedsListRequest req = new CloudassetFeedsListRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "doloribus";
                key = "sapiente";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "dolorem";
                uploadProtocol = "culpa";
            }};            

            CloudassetFeedsListResponse res = sdk.feeds.cloudassetFeedsList(req, new CloudassetFeedsListSecurity("consequuntur", "repellat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listFeedsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
