# timeline

### Available Operations

* [mirrorTimelineAttachmentsDelete](#mirrortimelineattachmentsdelete) - Deletes an attachment from a timeline item.
* [mirrorTimelineAttachmentsGet](#mirrortimelineattachmentsget) - Retrieves an attachment on a timeline item by item ID and attachment ID.
* [mirrorTimelineAttachmentsInsert](#mirrortimelineattachmentsinsert) - Adds a new attachment to a timeline item.
* [mirrorTimelineAttachmentsList](#mirrortimelineattachmentslist) - Returns a list of attachments for a timeline item.
* [mirrorTimelineDelete](#mirrortimelinedelete) - Deletes a timeline item.
* [mirrorTimelineGet](#mirrortimelineget) - Gets a single timeline item by ID.
* [mirrorTimelineInsert](#mirrortimelineinsert) - Inserts a new item into the timeline.
* [mirrorTimelineList](#mirrortimelinelist) - Retrieves a list of timeline items for the authenticated user.
* [mirrorTimelinePatch](#mirrortimelinepatch) - Updates a timeline item in place. This method supports patch semantics.
* [mirrorTimelineUpdate](#mirrortimelineupdate) - Updates a timeline item in place.

## mirrorTimelineAttachmentsDelete

Deletes an attachment from a timeline item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorTimelineAttachmentsDeleteRequest;
import org.openapis.openapi.models.operations.MirrorTimelineAttachmentsDeleteResponse;
import org.openapis.openapi.models.operations.MirrorTimelineAttachmentsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorTimelineAttachmentsDeleteRequest req = new MirrorTimelineAttachmentsDeleteRequest("asperiores", "nihil") {{
                alt = AltEnum.JSON;
                fields = "ipsum";
                key = "voluptate";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "saepe";
                userIp = "eius";
            }};            

            MirrorTimelineAttachmentsDeleteResponse res = sdk.timeline.mirrorTimelineAttachmentsDelete(req, new MirrorTimelineAttachmentsDeleteSecurity("aspernatur", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## mirrorTimelineAttachmentsGet

Retrieves an attachment on a timeline item by item ID and attachment ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorTimelineAttachmentsGetRequest;
import org.openapis.openapi.models.operations.MirrorTimelineAttachmentsGetResponse;
import org.openapis.openapi.models.operations.MirrorTimelineAttachmentsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorTimelineAttachmentsGetRequest req = new MirrorTimelineAttachmentsGetRequest("amet", "optio") {{
                alt = AltEnum.JSON;
                fields = "accusamus";
                key = "ad";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "suscipit";
                userIp = "deserunt";
            }};            

            MirrorTimelineAttachmentsGetResponse res = sdk.timeline.mirrorTimelineAttachmentsGet(req, new MirrorTimelineAttachmentsGetSecurity("provident", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorTimelineAttachmentsInsert

Adds a new attachment to a timeline item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorTimelineAttachmentsInsertRequest;
import org.openapis.openapi.models.operations.MirrorTimelineAttachmentsInsertResponse;
import org.openapis.openapi.models.operations.MirrorTimelineAttachmentsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorTimelineAttachmentsInsertRequest req = new MirrorTimelineAttachmentsInsertRequest("repellendus") {{
                alt = AltEnum.JSON;
                fields = "totam";
                key = "similique";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "at";
                userIp = "quaerat";
            }};            

            MirrorTimelineAttachmentsInsertResponse res = sdk.timeline.mirrorTimelineAttachmentsInsert(req, new MirrorTimelineAttachmentsInsertSecurity("tempora", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorTimelineAttachmentsList

Returns a list of attachments for a timeline item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorTimelineAttachmentsListRequest;
import org.openapis.openapi.models.operations.MirrorTimelineAttachmentsListResponse;
import org.openapis.openapi.models.operations.MirrorTimelineAttachmentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorTimelineAttachmentsListRequest req = new MirrorTimelineAttachmentsListRequest("quod") {{
                alt = AltEnum.JSON;
                fields = "officiis";
                key = "qui";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "a";
                userIp = "esse";
            }};            

            MirrorTimelineAttachmentsListResponse res = sdk.timeline.mirrorTimelineAttachmentsList(req, new MirrorTimelineAttachmentsListSecurity("harum", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorTimelineDelete

Deletes a timeline item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorTimelineDeleteRequest;
import org.openapis.openapi.models.operations.MirrorTimelineDeleteResponse;
import org.openapis.openapi.models.operations.MirrorTimelineDeleteSecurity;
import org.openapis.openapi.models.operations.MirrorTimelineDeleteSecurityOption1;
import org.openapis.openapi.models.operations.MirrorTimelineDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorTimelineDeleteRequest req = new MirrorTimelineDeleteRequest("ipsum") {{
                alt = AltEnum.JSON;
                fields = "quisquam";
                key = "tenetur";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "tempore";
                userIp = "accusamus";
            }};            

            MirrorTimelineDeleteResponse res = sdk.timeline.mirrorTimelineDelete(req, new MirrorTimelineDeleteSecurity() {{
                option1 = new MirrorTimelineDeleteSecurityOption1("numquam", "enim") {{
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

## mirrorTimelineGet

Gets a single timeline item by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorTimelineGetRequest;
import org.openapis.openapi.models.operations.MirrorTimelineGetResponse;
import org.openapis.openapi.models.operations.MirrorTimelineGetSecurity;
import org.openapis.openapi.models.operations.MirrorTimelineGetSecurityOption1;
import org.openapis.openapi.models.operations.MirrorTimelineGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorTimelineGetRequest req = new MirrorTimelineGetRequest("dolorem") {{
                alt = AltEnum.JSON;
                fields = "sapiente";
                key = "totam";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "sit";
                userIp = "expedita";
            }};            

            MirrorTimelineGetResponse res = sdk.timeline.mirrorTimelineGet(req, new MirrorTimelineGetSecurity() {{
                option1 = new MirrorTimelineGetSecurityOption1("neque", "sed") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorTimelineInsert

Inserts a new item into the timeline.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorTimelineInsertRequest;
import org.openapis.openapi.models.operations.MirrorTimelineInsertResponse;
import org.openapis.openapi.models.operations.MirrorTimelineInsertSecurity;
import org.openapis.openapi.models.operations.MirrorTimelineInsertSecurityOption1;
import org.openapis.openapi.models.operations.MirrorTimelineInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Attachment;
import org.openapis.openapi.models.shared.Command;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.MenuItem;
import org.openapis.openapi.models.shared.MenuValue;
import org.openapis.openapi.models.shared.NotificationConfig;
import org.openapis.openapi.models.shared.TimelineItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorTimelineInsertRequest req = new MirrorTimelineInsertRequest() {{
                requestBody = "vel".getBytes();
                alt = AltEnum.JSON;
                fields = "libero";
                key = "voluptas";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "quam";
                userIp = "ipsum";
            }};            

            MirrorTimelineInsertResponse res = sdk.timeline.mirrorTimelineInsert(req, new MirrorTimelineInsertSecurity() {{
                option1 = new MirrorTimelineInsertSecurityOption1("incidunt", "qui") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorTimelineList

Retrieves a list of timeline items for the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorTimelineListOrderByEnum;
import org.openapis.openapi.models.operations.MirrorTimelineListRequest;
import org.openapis.openapi.models.operations.MirrorTimelineListResponse;
import org.openapis.openapi.models.operations.MirrorTimelineListSecurity;
import org.openapis.openapi.models.operations.MirrorTimelineListSecurityOption1;
import org.openapis.openapi.models.operations.MirrorTimelineListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorTimelineListRequest req = new MirrorTimelineListRequest() {{
                alt = AltEnum.JSON;
                bundleId = "cupiditate";
                fields = "maxime";
                includeDeleted = false;
                key = "pariatur";
                maxResults = 747080L;
                oauthToken = "dicta";
                orderBy = MirrorTimelineListOrderByEnum.WRITE_TIME;
                pageToken = "totam";
                pinnedOnly = false;
                prettyPrint = false;
                quotaUser = "incidunt";
                sourceItemId = "aspernatur";
                userIp = "dolores";
            }};            

            MirrorTimelineListResponse res = sdk.timeline.mirrorTimelineList(req, new MirrorTimelineListSecurity() {{
                option1 = new MirrorTimelineListSecurityOption1("distinctio", "facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorTimelinePatch

Updates a timeline item in place. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorTimelinePatchRequest;
import org.openapis.openapi.models.operations.MirrorTimelinePatchResponse;
import org.openapis.openapi.models.operations.MirrorTimelinePatchSecurity;
import org.openapis.openapi.models.operations.MirrorTimelinePatchSecurityOption1;
import org.openapis.openapi.models.operations.MirrorTimelinePatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Attachment;
import org.openapis.openapi.models.shared.Command;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.MenuItem;
import org.openapis.openapi.models.shared.MenuValue;
import org.openapis.openapi.models.shared.NotificationConfig;
import org.openapis.openapi.models.shared.TimelineItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorTimelinePatchRequest req = new MirrorTimelinePatchRequest("aliquid") {{
                timelineItem = new TimelineItem() {{
                    attachments = new org.openapis.openapi.models.shared.Attachment[]{{
                        add(new Attachment() {{
                            contentType = "molestias";
                            contentUrl = "temporibus";
                            id = "2322715b-f0cb-4b1e-b1b8-b90f3443a110";
                            isProcessingContent = false;
                        }}),
                        add(new Attachment() {{
                            contentType = "quas";
                            contentUrl = "itaque";
                            id = "0adcf4b9-2187-49fc-a953-f73ef7fbc7ab";
                            isProcessingContent = false;
                        }}),
                    }};
                    bundleId = "vero";
                    canonicalUrl = "ducimus";
                    created = OffsetDateTime.parse("2022-02-26T17:44:28.591Z");
                    creator = new Contact() {{
                        acceptCommands = new org.openapis.openapi.models.shared.Command[]{{
                            add(new Command() {{
                                type = "sequi";
                            }}),
                            add(new Command() {{
                                type = "natus";
                            }}),
                            add(new Command() {{
                                type = "impedit";
                            }}),
                            add(new Command() {{
                                type = "aut";
                            }}),
                        }};
                        acceptTypes = new String[]{{
                            add("exercitationem"),
                            add("nulla"),
                            add("fugit"),
                            add("porro"),
                        }};
                        displayName = "maiores";
                        id = "f7c70a45-626d-4436-813f-16d9f5fce6c5";
                        imageUrls = new String[]{{
                            add("aliquid"),
                            add("inventore"),
                        }};
                        kind = "magnam";
                        phoneNumber = "ea";
                        priority = 775220L;
                        sharingFeatures = new String[]{{
                            add("recusandae"),
                        }};
                        source = "aspernatur";
                        speakableName = "minima";
                        type = "eaque";
                    }};;
                    displayTime = OffsetDateTime.parse("2020-10-28T11:22:47.751Z");
                    etag = "aut";
                    html = "aut";
                    id = "8c42e141-aac3-466c-8dd6-b14429074747";
                    inReplyTo = "esse";
                    isBundleCover = false;
                    isDeleted = false;
                    isPinned = false;
                    kind = "rem";
                    location = new Location() {{
                        accuracy = 6832.82;
                        address = "6824 Reyna Dam";
                        displayName = "praesentium";
                        id = "c10ab3cd-ca42-4519-84e5-23c7e0bc7178";
                        kind = "accusamus";
                        latitude = 3068.1;
                        longitude = 4884.1;
                        timestamp = OffsetDateTime.parse("2022-03-04T08:46:39.442Z");
                    }};;
                    menuItems = new org.openapis.openapi.models.shared.MenuItem[]{{
                        add(new MenuItem() {{
                            action = "dolores";
                            contextualCommand = "deserunt";
                            id = "70c68828-2aa4-4825-a2f2-22e9817ee17c";
                            payload = "nam";
                            removeWhenSelected = false;
                            values = new org.openapis.openapi.models.shared.MenuValue[]{{
                                add(new MenuValue() {{
                                    displayName = "aliquid";
                                    iconUrl = "quasi";
                                    state = "saepe";
                                }}),
                                add(new MenuValue() {{
                                    displayName = "vel";
                                    iconUrl = "harum";
                                    state = "molestiae";
                                }}),
                                add(new MenuValue() {{
                                    displayName = "rerum";
                                    iconUrl = "occaecati";
                                    state = "minima";
                                }}),
                                add(new MenuValue() {{
                                    displayName = "distinctio";
                                    iconUrl = "eligendi";
                                    state = "sit";
                                }}),
                            }};
                        }}),
                        add(new MenuItem() {{
                            action = "culpa";
                            contextualCommand = "tempore";
                            id = "3c20c4f3-789f-4d87-9f99-dd2efd121aa6";
                            payload = "tenetur";
                            removeWhenSelected = false;
                            values = new org.openapis.openapi.models.shared.MenuValue[]{{
                                add(new MenuValue() {{
                                    displayName = "earum";
                                    iconUrl = "vel";
                                    state = "in";
                                }}),
                            }};
                        }}),
                        add(new MenuItem() {{
                            action = "eius";
                            contextualCommand = "libero";
                            id = "db04f157-5608-42d6-8ea1-9f1d17051339";
                            payload = "temporibus";
                            removeWhenSelected = false;
                            values = new org.openapis.openapi.models.shared.MenuValue[]{{
                                add(new MenuValue() {{
                                    displayName = "rem";
                                    iconUrl = "aut";
                                    state = "laudantium";
                                }}),
                            }};
                        }}),
                        add(new MenuItem() {{
                            action = "eum";
                            contextualCommand = "mollitia";
                            id = "1840394c-2607-41f9-bf5f-0642dac7af51";
                            payload = "quaerat";
                            removeWhenSelected = false;
                            values = new org.openapis.openapi.models.shared.MenuValue[]{{
                                add(new MenuValue() {{
                                    displayName = "quod";
                                    iconUrl = "labore";
                                    state = "ab";
                                }}),
                                add(new MenuValue() {{
                                    displayName = "adipisci";
                                    iconUrl = "fuga";
                                    state = "id";
                                }}),
                                add(new MenuValue() {{
                                    displayName = "suscipit";
                                    iconUrl = "velit";
                                    state = "culpa";
                                }}),
                                add(new MenuValue() {{
                                    displayName = "est";
                                    iconUrl = "recusandae";
                                    state = "totam";
                                }}),
                            }};
                        }}),
                    }};
                    notification = new NotificationConfig() {{
                        deliveryTime = OffsetDateTime.parse("2021-09-23T14:56:28.537Z");
                        level = "ducimus";
                    }};;
                    pinScore = 554688;
                    recipients = new org.openapis.openapi.models.shared.Contact[]{{
                        add(new Contact() {{
                            acceptCommands = new org.openapis.openapi.models.shared.Command[]{{
                                add(new Command() {{
                                    type = "possimus";
                                }}),
                                add(new Command() {{
                                    type = "facilis";
                                }}),
                            }};
                            acceptTypes = new String[]{{
                                add("commodi"),
                                add("in"),
                                add("corporis"),
                            }};
                            displayName = "reiciendis";
                            id = "d5e60b37-5ed4-4f6f-bee4-1f33317fe35b";
                            imageUrls = new String[]{{
                                add("ipsa"),
                                add("voluptates"),
                            }};
                            kind = "libero";
                            phoneNumber = "vitae";
                            priority = 881721L;
                            sharingFeatures = new String[]{{
                                add("tempora"),
                                add("aspernatur"),
                                add("voluptas"),
                            }};
                            source = "voluptas";
                            speakableName = "voluptas";
                            type = "minima";
                        }}),
                        add(new Contact() {{
                            acceptCommands = new org.openapis.openapi.models.shared.Command[]{{
                                add(new Command() {{
                                    type = "dolorum";
                                }}),
                                add(new Command() {{
                                    type = "adipisci";
                                }}),
                                add(new Command() {{
                                    type = "minus";
                                }}),
                            }};
                            acceptTypes = new String[]{{
                                add("blanditiis"),
                            }};
                            displayName = "in";
                            id = "44ed53b8-8f3a-48d8-b5c0-b2f2fb7b194a";
                            imageUrls = new String[]{{
                                add("in"),
                            }};
                            kind = "commodi";
                            phoneNumber = "quidem";
                            priority = 131289L;
                            sharingFeatures = new String[]{{
                                add("unde"),
                                add("architecto"),
                            }};
                            source = "suscipit";
                            speakableName = "sapiente";
                            type = "debitis";
                        }}),
                    }};
                    selfLink = "illo";
                    sourceItemId = "reiciendis";
                    speakableText = "perferendis";
                    speakableType = "corrupti";
                    text = "maiores";
                    title = "Mrs.";
                    updated = OffsetDateTime.parse("2022-05-29T20:03:41.130Z");
                }};;
                alt = AltEnum.JSON;
                fields = "eius";
                key = "necessitatibus";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "ea";
                userIp = "occaecati";
            }};            

            MirrorTimelinePatchResponse res = sdk.timeline.mirrorTimelinePatch(req, new MirrorTimelinePatchSecurity() {{
                option1 = new MirrorTimelinePatchSecurityOption1("quos", "voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorTimelineUpdate

Updates a timeline item in place.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorTimelineUpdateRequest;
import org.openapis.openapi.models.operations.MirrorTimelineUpdateResponse;
import org.openapis.openapi.models.operations.MirrorTimelineUpdateSecurity;
import org.openapis.openapi.models.operations.MirrorTimelineUpdateSecurityOption1;
import org.openapis.openapi.models.operations.MirrorTimelineUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Attachment;
import org.openapis.openapi.models.shared.Command;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.MenuItem;
import org.openapis.openapi.models.shared.MenuValue;
import org.openapis.openapi.models.shared.NotificationConfig;
import org.openapis.openapi.models.shared.TimelineItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorTimelineUpdateRequest req = new MirrorTimelineUpdateRequest("tempora") {{
                requestBody = "tempora".getBytes();
                alt = AltEnum.JSON;
                fields = "voluptate";
                key = "reiciendis";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "sit";
                userIp = "non";
            }};            

            MirrorTimelineUpdateResponse res = sdk.timeline.mirrorTimelineUpdate(req, new MirrorTimelineUpdateSecurity() {{
                option1 = new MirrorTimelineUpdateSecurityOption1("officiis", "praesentium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
