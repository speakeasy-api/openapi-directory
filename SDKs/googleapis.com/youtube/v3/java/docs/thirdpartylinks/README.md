# thirdPartyLinks

### Available Operations

* [youtubeThirdPartyLinksDelete](#youtubethirdpartylinksdelete) - Deletes a resource.
* [youtubeThirdPartyLinksInsert](#youtubethirdpartylinksinsert) - Inserts a new resource into this collection.
* [youtubeThirdPartyLinksList](#youtubethirdpartylinkslist) - Retrieves a list of resources, possibly filtered.
* [youtubeThirdPartyLinksUpdate](#youtubethirdpartylinksupdate) - Updates an existing resource.

## youtubeThirdPartyLinksDelete

Deletes a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeThirdPartyLinksDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeThirdPartyLinksDeleteResponse;
import org.openapis.openapi.models.operations.YoutubeThirdPartyLinksDeleteTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeThirdPartyLinksDeleteRequest req = new YoutubeThirdPartyLinksDeleteRequest("saepe", YoutubeThirdPartyLinksDeleteTypeEnum.CHANNEL_TO_STORE_LINK) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "ipsum";
                externalChannelId = "ducimus";
                fields = "laudantium";
                key = "rerum";
                oauthToken = "deserunt";
                part = new String[]{{
                    add("ad"),
                }};
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "beatae";
                uploadProtocol = "iusto";
            }};            

            YoutubeThirdPartyLinksDeleteResponse res = sdk.thirdPartyLinks.youtubeThirdPartyLinksDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeThirdPartyLinksInsert

Inserts a new resource into this collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeThirdPartyLinksInsertRequest;
import org.openapis.openapi.models.operations.YoutubeThirdPartyLinksInsertResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelToStoreLinkDetails;
import org.openapis.openapi.models.shared.ThirdPartyLink;
import org.openapis.openapi.models.shared.ThirdPartyLinkSnippet;
import org.openapis.openapi.models.shared.ThirdPartyLinkSnippetTypeEnum;
import org.openapis.openapi.models.shared.ThirdPartyLinkStatus;
import org.openapis.openapi.models.shared.ThirdPartyLinkStatusLinkStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeThirdPartyLinksInsertRequest req = new YoutubeThirdPartyLinksInsertRequest(                new String[]{{
                                add("magnam"),
                                add("odio"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                thirdPartyLink = new ThirdPartyLink() {{
                    etag = "impedit";
                    kind = "cupiditate";
                    linkingToken = "illo";
                    snippet = new ThirdPartyLinkSnippet() {{
                        channelToStoreLink = new ChannelToStoreLinkDetails() {{
                            merchantId = "exercitationem";
                            storeName = "laborum";
                            storeUrl = "illum";
                        }};;
                        type = ThirdPartyLinkSnippetTypeEnum.LINK_UNSPECIFIED;
                    }};;
                    status = new ThirdPartyLinkStatus() {{
                        linkStatus = ThirdPartyLinkStatusLinkStatusEnum.LINKED;
                    }};;
                }};;
                accessToken = "dolorum";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                externalChannelId = "illum";
                fields = "quibusdam";
                key = "commodi";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "consectetur";
                uploadProtocol = "temporibus";
            }};            

            YoutubeThirdPartyLinksInsertResponse res = sdk.thirdPartyLinks.youtubeThirdPartyLinksInsert(req);

            if (res.thirdPartyLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeThirdPartyLinksList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeThirdPartyLinksListRequest;
import org.openapis.openapi.models.operations.YoutubeThirdPartyLinksListResponse;
import org.openapis.openapi.models.operations.YoutubeThirdPartyLinksListTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeThirdPartyLinksListRequest req = new YoutubeThirdPartyLinksListRequest(                new String[]{{
                                add("ipsa"),
                                add("maiores"),
                                add("exercitationem"),
                                add("culpa"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aspernatur";
                alt = AltEnum.PROTO;
                callback = "neque";
                externalChannelId = "officia";
                fields = "suscipit";
                key = "harum";
                linkingToken = "ducimus";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "perferendis";
                type = YoutubeThirdPartyLinksListTypeEnum.CHANNEL_TO_STORE_LINK;
                uploadType = "iusto";
                uploadProtocol = "corrupti";
            }};            

            YoutubeThirdPartyLinksListResponse res = sdk.thirdPartyLinks.youtubeThirdPartyLinksList(req);

            if (res.thirdPartyLinkListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeThirdPartyLinksUpdate

Updates an existing resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeThirdPartyLinksUpdateRequest;
import org.openapis.openapi.models.operations.YoutubeThirdPartyLinksUpdateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelToStoreLinkDetails;
import org.openapis.openapi.models.shared.ThirdPartyLink;
import org.openapis.openapi.models.shared.ThirdPartyLinkSnippet;
import org.openapis.openapi.models.shared.ThirdPartyLinkSnippetTypeEnum;
import org.openapis.openapi.models.shared.ThirdPartyLinkStatus;
import org.openapis.openapi.models.shared.ThirdPartyLinkStatusLinkStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeThirdPartyLinksUpdateRequest req = new YoutubeThirdPartyLinksUpdateRequest(                new String[]{{
                                add("quis"),
                                add("iure"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                thirdPartyLink = new ThirdPartyLink() {{
                    etag = "quaerat";
                    kind = "amet";
                    linkingToken = "sapiente";
                    snippet = new ThirdPartyLinkSnippet() {{
                        channelToStoreLink = new ChannelToStoreLinkDetails() {{
                            merchantId = "corporis";
                            storeName = "est";
                            storeUrl = "iure";
                        }};;
                        type = ThirdPartyLinkSnippetTypeEnum.CHANNEL_TO_STORE_LINK;
                    }};;
                    status = new ThirdPartyLinkStatus() {{
                        linkStatus = ThirdPartyLinkStatusLinkStatusEnum.PENDING;
                    }};;
                }};;
                accessToken = "laudantium";
                alt = AltEnum.PROTO;
                callback = "nemo";
                externalChannelId = "enim";
                fields = "ipsam";
                key = "minima";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "corrupti";
                uploadProtocol = "doloremque";
            }};            

            YoutubeThirdPartyLinksUpdateResponse res = sdk.thirdPartyLinks.youtubeThirdPartyLinksUpdate(req);

            if (res.thirdPartyLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
