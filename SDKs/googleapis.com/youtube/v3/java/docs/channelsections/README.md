# channelSections

### Available Operations

* [youtubeChannelSectionsDelete](#youtubechannelsectionsdelete) - Deletes a resource.
* [youtubeChannelSectionsInsert](#youtubechannelsectionsinsert) - Inserts a new resource into this collection.
* [youtubeChannelSectionsList](#youtubechannelsectionslist) - Retrieves a list of resources, possibly filtered.
* [youtubeChannelSectionsUpdate](#youtubechannelsectionsupdate) - Updates an existing resource.

## youtubeChannelSectionsDelete

Deletes a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsDeleteResponse;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeChannelSectionsDeleteRequest req = new YoutubeChannelSectionsDeleteRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ex";
                alt = AltEnum.PROTO;
                callback = "excepturi";
                fields = "voluptatibus";
                key = "nostrum";
                oauthToken = "sapiente";
                onBehalfOfContentOwner = "quisquam";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "ea";
                uploadProtocol = "impedit";
            }};            

            YoutubeChannelSectionsDeleteResponse res = sdk.channelSections.youtubeChannelSectionsDelete(req, new YoutubeChannelSectionsDeleteSecurity() {{
                option1 = new YoutubeChannelSectionsDeleteSecurityOption1("corporis", "veniam") {{
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

## youtubeChannelSectionsInsert

Inserts a new resource into this collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsInsertRequest;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsInsertResponse;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsInsertSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsInsertSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelSection;
import org.openapis.openapi.models.shared.ChannelSectionContentDetails;
import org.openapis.openapi.models.shared.ChannelSectionLocalization;
import org.openapis.openapi.models.shared.ChannelSectionSnippet;
import org.openapis.openapi.models.shared.ChannelSectionSnippetStyleEnum;
import org.openapis.openapi.models.shared.ChannelSectionSnippetTypeEnum;
import org.openapis.openapi.models.shared.ChannelSectionTargeting;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeChannelSectionsInsertRequest req = new YoutubeChannelSectionsInsertRequest(                new String[]{{
                                add("inventore"),
                                add("magnam"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                channelSection = new ChannelSection() {{
                    contentDetails = new ChannelSectionContentDetails() {{
                        channels = new String[]{{
                            add("consectetur"),
                            add("recusandae"),
                            add("aspernatur"),
                            add("minima"),
                        }};
                        playlists = new String[]{{
                            add("a"),
                        }};
                    }};;
                    etag = "libero";
                    id = "008c42e1-41aa-4c36-ac8d-d6b144290747";
                    kind = "eius";
                    localizations = new java.util.HashMap<String, org.openapis.openapi.models.shared.ChannelSectionLocalization>() {{
                        put("esse", new ChannelSectionLocalization() {{
                            title = "Ms.";
                        }});
                        put("fuga", new ChannelSectionLocalization() {{
                            title = "Ms.";
                        }});
                    }};
                    snippet = new ChannelSectionSnippet() {{
                        channelId = "quidem";
                        defaultLanguage = "fugiat";
                        localized = new ChannelSectionLocalization() {{
                            title = "Mrs.";
                        }};;
                        position = 433439L;
                        style = ChannelSectionSnippetStyleEnum.HORIZONTAL_ROW;
                        title = "Dr.";
                        type = ChannelSectionSnippetTypeEnum.POPULAR_UPLOADS;
                    }};;
                    targeting = new ChannelSectionTargeting() {{
                        countries = new String[]{{
                            add("quisquam"),
                            add("veritatis"),
                            add("ipsa"),
                        }};
                        languages = new String[]{{
                            add("quidem"),
                            add("neque"),
                            add("quo"),
                        }};
                        regions = new String[]{{
                            add("quo"),
                            add("fuga"),
                            add("eius"),
                            add("eos"),
                        }};
                    }};;
                }};;
                accessToken = "voluptas";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "consequatur";
                key = "tempora";
                oauthToken = "debitis";
                onBehalfOfContentOwner = "ipsam";
                onBehalfOfContentOwnerChannel = "aspernatur";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "quo";
                uploadProtocol = "esse";
            }};            

            YoutubeChannelSectionsInsertResponse res = sdk.channelSections.youtubeChannelSectionsInsert(req, new YoutubeChannelSectionsInsertSecurity() {{
                option1 = new YoutubeChannelSectionsInsertSecurityOption1("recusandae", "aperiam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.channelSection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeChannelSectionsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsListRequest;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsListResponse;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsListSecurity;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsListSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeChannelSectionsListRequest req = new YoutubeChannelSectionsListRequest(                new String[]{{
                                add("quod"),
                                add("dignissimos"),
                                add("inventore"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                channelId = "odio";
                fields = "occaecati";
                hl = "commodi";
                id = new String[]{{
                    add("dolores"),
                    add("deserunt"),
                    add("molestiae"),
                    add("accusantium"),
                }};
                key = "porro";
                mine = false;
                oauthToken = "eum";
                onBehalfOfContentOwner = "quas";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "consequuntur";
                uploadProtocol = "deleniti";
            }};            

            YoutubeChannelSectionsListResponse res = sdk.channelSections.youtubeChannelSectionsList(req, new YoutubeChannelSectionsListSecurity() {{
                option1 = new YoutubeChannelSectionsListSecurityOption1("fugit", "fuga") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.channelSectionListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeChannelSectionsUpdate

Updates an existing resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsUpdateRequest;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsUpdateResponse;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsUpdateSecurity;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsUpdateSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeChannelSectionsUpdateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelSection;
import org.openapis.openapi.models.shared.ChannelSectionContentDetails;
import org.openapis.openapi.models.shared.ChannelSectionLocalization;
import org.openapis.openapi.models.shared.ChannelSectionSnippet;
import org.openapis.openapi.models.shared.ChannelSectionSnippetStyleEnum;
import org.openapis.openapi.models.shared.ChannelSectionSnippetTypeEnum;
import org.openapis.openapi.models.shared.ChannelSectionTargeting;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeChannelSectionsUpdateRequest req = new YoutubeChannelSectionsUpdateRequest(                new String[]{{
                                add("incidunt"),
                                add("atque"),
                                add("explicabo"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                channelSection = new ChannelSection() {{
                    contentDetails = new ChannelSectionContentDetails() {{
                        channels = new String[]{{
                            add("fugit"),
                            add("sapiente"),
                        }};
                        playlists = new String[]{{
                            add("ratione"),
                        }};
                    }};;
                    etag = "explicabo";
                    id = "e9817ee1-7cbe-461e-ab7b-95bc0ab3c20c";
                    kind = "quaerat";
                    localizations = new java.util.HashMap<String, org.openapis.openapi.models.shared.ChannelSectionLocalization>() {{
                        put("consectetur", new ChannelSectionLocalization() {{
                            title = "Ms.";
                        }});
                        put("blanditiis", new ChannelSectionLocalization() {{
                            title = "Ms.";
                        }});
                        put("a", new ChannelSectionLocalization() {{
                            title = "Dr.";
                        }});
                        put("quas", new ChannelSectionLocalization() {{
                            title = "Ms.";
                        }});
                    }};
                    snippet = new ChannelSectionSnippet() {{
                        channelId = "quasi";
                        defaultLanguage = "a";
                        localized = new ChannelSectionLocalization() {{
                            title = "Miss";
                        }};;
                        position = 575751L;
                        style = ChannelSectionSnippetStyleEnum.VERTICAL_LIST;
                        title = "Dr.";
                        type = ChannelSectionSnippetTypeEnum.MULTIPLE_PLAYLISTS;
                    }};;
                    targeting = new ChannelSectionTargeting() {{
                        countries = new String[]{{
                            add("asperiores"),
                            add("facere"),
                            add("veritatis"),
                            add("consequuntur"),
                        }};
                        languages = new String[]{{
                            add("similique"),
                        }};
                        regions = new String[]{{
                            add("aliquid"),
                            add("tenetur"),
                            add("quae"),
                        }};
                    }};;
                }};;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "eius";
                key = "libero";
                oauthToken = "illum";
                onBehalfOfContentOwner = "soluta";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "aliquam";
                uploadProtocol = "sapiente";
            }};            

            YoutubeChannelSectionsUpdateResponse res = sdk.channelSections.youtubeChannelSectionsUpdate(req, new YoutubeChannelSectionsUpdateSecurity() {{
                option1 = new YoutubeChannelSectionsUpdateSecurityOption1("dicta", "ullam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.channelSection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
