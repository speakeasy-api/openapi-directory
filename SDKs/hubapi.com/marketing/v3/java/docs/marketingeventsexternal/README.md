# marketingEventsExternal

### Available Operations

* [deleteMarketingV3MarketingEventsEventsExternalEventIdArchive](#deletemarketingv3marketingeventseventsexternaleventidarchive)
* [getMarketingV3MarketingEventsEventsExternalEventIdGetById](#getmarketingv3marketingeventseventsexternaleventidgetbyid)
* [patchMarketingV3MarketingEventsEventsExternalEventIdUpdate](#patchmarketingv3marketingeventseventsexternaleventidupdate)
* [postMarketingV3MarketingEventsEventsDeleteArchiveBatch](#postmarketingv3marketingeventseventsdeletearchivebatch)
* [postMarketingV3MarketingEventsEventsUpsertDoUpsert](#postmarketingv3marketingeventseventsupsertdoupsert)
* [postMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancel](#postmarketingv3marketingeventseventsexternaleventidcanceldocancel)
* [postMarketingV3MarketingEventsEventsExternalEventIdCompleteComplete](#postmarketingv3marketingeventseventsexternaleventidcompletecomplete)
* [postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertById](#postmarketingv3marketingeventseventsexternaleventidsubscriberstateemailupsertdoemailupsertbyid)
* [postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertById](#postmarketingv3marketingeventseventsexternaleventidsubscriberstateupsertdoupsertbyid)
* [postMarketingV3MarketingEventsEventsCreate](#postmarketingv3marketingeventseventscreate)
* [putMarketingV3MarketingEventsEventsExternalEventIdReplace](#putmarketingv3marketingeventseventsexternaleventidreplace)

## deleteMarketingV3MarketingEventsEventsExternalEventIdArchive

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest;
import org.openapis.openapi.models.operations.DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse;
import org.openapis.openapi.models.operations.DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest req = new DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest("vero", "nihil");            

            DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse res = sdk.marketingEventsExternal.deleteMarketingV3MarketingEventsEventsExternalEventIdArchive(req, new DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## getMarketingV3MarketingEventsEventsExternalEventIdGetById

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest;
import org.openapis.openapi.models.operations.GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse;
import org.openapis.openapi.models.operations.GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest req = new GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest("praesentium", "voluptatibus");            

            GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse res = sdk.marketingEventsExternal.getMarketingV3MarketingEventsEventsExternalEventIdGetById(req, new GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.marketingEventPublicReadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchMarketingV3MarketingEventsEventsExternalEventIdUpdate

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest;
import org.openapis.openapi.models.operations.PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse;
import org.openapis.openapi.models.operations.PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity;
import org.openapis.openapi.models.shared.MarketingEventUpdateRequestParams;
import org.openapis.openapi.models.shared.PropertyValue;
import org.openapis.openapi.models.shared.PropertyValueSourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest req = new PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest(                new MarketingEventUpdateRequestParams() {{
                                customProperties = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                    add(new PropertyValue("quidem", "molestias", false, 566602L, PropertyValueSourceEnum.PAYMENTS, "modi", "praesentium", "rem",                 new Long[]{{
                                                        add(93940L),
                                                        add(921158L),
                                                        add(575947L),
                                                        add(83112L),
                                                    }}, 929297L, "incidunt") {{
                                        name = "Mr. Jared Ritchie";
                                        persistenceTimestamp = 282807L;
                                        requestId = "maiores";
                                        selectedByUser = false;
                                        selectedByUserTimestamp = 120196L;
                                        source = PropertyValueSourceEnum.BCC_TO_CRM;
                                        sourceId = "dolore";
                                        sourceLabel = "iusto";
                                        sourceMetadata = "dicta";
                                        sourceVid = new Long[]{{
                                            add(317983L),
                                            add(880476L),
                                            add(414263L),
                                        }};
                                        timestamp = 918236L;
                                        updatedByUserId = 64147;
                                        useTimestampAsPersistenceTimestamp = false;
                                        value = "ipsum";
                                    }}),
                                }};
                                endDateTime = OffsetDateTime.parse("2022-12-28T14:02:06.064Z");
                                eventCancelled = false;
                                eventDescription = "est";
                                eventName = "quibusdam";
                                eventOrganizer = "explicabo";
                                eventType = "deserunt";
                                eventUrl = "distinctio";
                                startDateTime = OffsetDateTime.parse("2022-02-18T02:24:27.835Z");
                            }};, "modi", "qui");            

            PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse res = sdk.marketingEventsExternal.patchMarketingV3MarketingEventsEventsExternalEventIdUpdate(req, new PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.marketingEventPublicDefaultResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMarketingV3MarketingEventsEventsDeleteArchiveBatch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsDeleteArchiveBatchResponse;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsDeleteArchiveBatchSecurity;
import org.openapis.openapi.models.shared.BatchInputMarketingEventExternalUniqueIdentifier;
import org.openapis.openapi.models.shared.MarketingEventExternalUniqueIdentifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchInputMarketingEventExternalUniqueIdentifier req = new BatchInputMarketingEventExternalUniqueIdentifier(                new org.openapis.openapi.models.shared.MarketingEventExternalUniqueIdentifier[]{{
                                add(new MarketingEventExternalUniqueIdentifier(164940, "assumenda", "ipsam") {{
                                    appId = 586513;
                                    externalAccountId = "quos";
                                    externalEventId = "perferendis";
                                }}),
                                add(new MarketingEventExternalUniqueIdentifier(569618, "tempora", "facilis") {{
                                    appId = 4695;
                                    externalAccountId = "fugit";
                                    externalEventId = "dolorum";
                                }}),
                            }});            

            PostMarketingV3MarketingEventsEventsDeleteArchiveBatchResponse res = sdk.marketingEventsExternal.postMarketingV3MarketingEventsEventsDeleteArchiveBatch(req, new PostMarketingV3MarketingEventsEventsDeleteArchiveBatchSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## postMarketingV3MarketingEventsEventsUpsertDoUpsert

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity;
import org.openapis.openapi.models.shared.BatchInputMarketingEventCreateRequestParams;
import org.openapis.openapi.models.shared.MarketingEventCreateRequestParams;
import org.openapis.openapi.models.shared.PropertyValue;
import org.openapis.openapi.models.shared.PropertyValueSourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchInputMarketingEventCreateRequestParams req = new BatchInputMarketingEventCreateRequestParams(                new org.openapis.openapi.models.shared.MarketingEventCreateRequestParams[]{{
                                add(new MarketingEventCreateRequestParams("odit", "nemo", "quasi", "iure") {{
                                    customProperties = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                        add(new PropertyValue("magnam", "cumque", false, 813798L, PropertyValueSourceEnum.HEISENBERG, "aliquid", "laborum", "accusamus",                 new Long[]{{
                                                            add(581273L),
                                                        }}, 313218L, "accusamus") {{
                                            name = "Andre Franey";
                                            persistenceTimestamp = 396098L;
                                            requestId = "provident";
                                            selectedByUser = false;
                                            selectedByUserTimestamp = 896039L;
                                            source = PropertyValueSourceEnum.EXTENSION;
                                            sourceId = "officia";
                                            sourceLabel = "dolor";
                                            sourceMetadata = "debitis";
                                            sourceVid = new Long[]{{
                                                add(680056L),
                                                add(447125L),
                                                add(449198L),
                                                add(846409L),
                                            }};
                                            timestamp = 978571L;
                                            updatedByUserId = 699479;
                                            useTimestampAsPersistenceTimestamp = false;
                                            value = "dicta";
                                        }}),
                                        add(new PropertyValue("id", "labore", false, 290077L, PropertyValueSourceEnum.ENGAGEMENTS, "natus", "nobis", "eum",                 new Long[]{{
                                                            add(135474L),
                                                            add(102863L),
                                                            add(298282L),
                                                            add(92373L),
                                                        }}, 569965L, "ullam") {{
                                            name = "Abraham McKenzie";
                                            persistenceTimestamp = 501324L;
                                            requestId = "deleniti";
                                            selectedByUser = false;
                                            selectedByUserTimestamp = 956084L;
                                            source = PropertyValueSourceEnum.COMPANIES;
                                            sourceId = "deserunt";
                                            sourceLabel = "nisi";
                                            sourceMetadata = "vel";
                                            sourceVid = new Long[]{{
                                                add(606393L),
                                                add(474867L),
                                                add(19193L),
                                            }};
                                            timestamp = 470132L;
                                            updatedByUserId = 301575;
                                            useTimestampAsPersistenceTimestamp = false;
                                            value = "distinctio";
                                        }}),
                                    }};
                                    endDateTime = OffsetDateTime.parse("2021-11-24T04:10:44.711Z");
                                    eventCancelled = false;
                                    eventDescription = "sint";
                                    eventName = "accusantium";
                                    eventOrganizer = "mollitia";
                                    eventType = "reiciendis";
                                    eventUrl = "mollitia";
                                    externalAccountId = "ad";
                                    externalEventId = "eum";
                                    startDateTime = OffsetDateTime.parse("2022-02-07T18:15:06.372Z");
                                }}),
                                add(new MarketingEventCreateRequestParams("id", "saepe", "eius", "aspernatur") {{
                                    customProperties = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                        add(new PropertyValue("natus", "magni", false, 123820L, PropertyValueSourceEnum.AI_GROUP, "illum", "pariatur", "maxime",                 new Long[]{{
                                                            add(569101L),
                                                            add(139972L),
                                                        }}, 407183L, "accusantium") {{
                                            name = "Frederick Schoen";
                                            persistenceTimestamp = 447926L;
                                            requestId = "architecto";
                                            selectedByUser = false;
                                            selectedByUserTimestamp = 99569L;
                                            source = PropertyValueSourceEnum.FILE_MANAGER;
                                            sourceId = "ullam";
                                            sourceLabel = "expedita";
                                            sourceMetadata = "nihil";
                                            sourceVid = new Long[]{{
                                                add(841140L),
                                                add(149448L),
                                                add(904648L),
                                                add(868126L),
                                            }};
                                            timestamp = 37559L;
                                            updatedByUserId = 162493;
                                            useTimestampAsPersistenceTimestamp = false;
                                            value = "praesentium";
                                        }}),
                                        add(new PropertyValue("dolores", "quis", false, 521037L, PropertyValueSourceEnum.MERGE_COMPANIES, "eaque", "quis", "nesciunt",                 new Long[]{{
                                                            add(18521L),
                                                        }}, 170986L, "minus") {{
                                            name = "Ebony Predovic";
                                            persistenceTimestamp = 420075L;
                                            requestId = "nam";
                                            selectedByUser = false;
                                            selectedByUserTimestamp = 50588L;
                                            source = PropertyValueSourceEnum.PAYMENTS;
                                            sourceId = "nemo";
                                            sourceLabel = "voluptatibus";
                                            sourceMetadata = "perferendis";
                                            sourceVid = new Long[]{{
                                                add(230742L),
                                                add(11714L),
                                                add(764912L),
                                                add(359978L),
                                            }};
                                            timestamp = 944124L;
                                            updatedByUserId = 729991;
                                            useTimestampAsPersistenceTimestamp = false;
                                            value = "nobis";
                                        }}),
                                        add(new PropertyValue("earum", "modi", false, 613966L, PropertyValueSourceEnum.QUOTES, "deleniti", "pariatur", "provident",                 new Long[]{{
                                                            add(730122L),
                                                            add(964490L),
                                                            add(311945L),
                                                            add(554242L),
                                                        }}, 398221L, "dolorem") {{
                                            name = "Rosa Swift";
                                            persistenceTimestamp = 928082L;
                                            requestId = "omnis";
                                            selectedByUser = false;
                                            selectedByUserTimestamp = 704415L;
                                            source = PropertyValueSourceEnum.BOT;
                                            sourceId = "voluptatem";
                                            sourceLabel = "porro";
                                            sourceMetadata = "consequuntur";
                                            sourceVid = new Long[]{{
                                                add(621479L),
                                                add(50370L),
                                                add(577229L),
                                            }};
                                            timestamp = 699098L;
                                            updatedByUserId = 237893;
                                            useTimestampAsPersistenceTimestamp = false;
                                            value = "asperiores";
                                        }}),
                                        add(new PropertyValue("quaerat", "accusamus", false, 696344L, PropertyValueSourceEnum.CRM_UI_BULK_ACTION, "voluptas", "natus", "eos",                 new Long[]{{
                                                            add(24678L),
                                                            add(854614L),
                                                            add(67249L),
                                                        }}, 743835L, "dolorum") {{
                                            name = "Rosa Dibbert";
                                            persistenceTimestamp = 569574L;
                                            requestId = "cum";
                                            selectedByUser = false;
                                            selectedByUserTimestamp = 452109L;
                                            source = PropertyValueSourceEnum.MERGE_COMPANIES;
                                            sourceId = "reiciendis";
                                            sourceLabel = "amet";
                                            sourceMetadata = "dolorum";
                                            sourceVid = new Long[]{{
                                                add(85295L),
                                                add(58029L),
                                            }};
                                            timestamp = 56418L;
                                            updatedByUserId = 434417;
                                            useTimestampAsPersistenceTimestamp = false;
                                            value = "odio";
                                        }}),
                                    }};
                                    endDateTime = OffsetDateTime.parse("2022-07-19T09:36:55.923Z");
                                    eventCancelled = false;
                                    eventDescription = "dolorum";
                                    eventName = "deleniti";
                                    eventOrganizer = "omnis";
                                    eventType = "necessitatibus";
                                    eventUrl = "distinctio";
                                    externalAccountId = "asperiores";
                                    externalEventId = "nihil";
                                    startDateTime = OffsetDateTime.parse("2022-07-18T13:18:42.293Z");
                                }}),
                                add(new MarketingEventCreateRequestParams("sed", "vel", "libero", "voluptas") {{
                                    customProperties = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                        add(new PropertyValue("quod", "officiis", false, 185636L, PropertyValueSourceEnum.QUOTES, "a", "esse", "harum",                 new Long[]{{
                                                            add(215507L),
                                                            add(788740L),
                                                        }}, 947371L, "amet") {{
                                            name = "Marianne Thompson";
                                            persistenceTimestamp = 383464L;
                                            requestId = "deserunt";
                                            selectedByUser = false;
                                            selectedByUserTimestamp = 588317L;
                                            source = PropertyValueSourceEnum.MERGE_CONTACTS;
                                            sourceId = "repellendus";
                                            sourceLabel = "totam";
                                            sourceMetadata = "similique";
                                            sourceVid = new Long[]{{
                                                add(872651L),
                                            }};
                                            timestamp = 311860L;
                                            updatedByUserId = 273542;
                                            useTimestampAsPersistenceTimestamp = false;
                                            value = "vel";
                                        }}),
                                    }};
                                    endDateTime = OffsetDateTime.parse("2021-03-29T09:11:09.370Z");
                                    eventCancelled = false;
                                    eventDescription = "numquam";
                                    eventName = "enim";
                                    eventOrganizer = "dolorem";
                                    eventType = "sapiente";
                                    eventUrl = "totam";
                                    externalAccountId = "nihil";
                                    externalEventId = "sit";
                                    startDateTime = OffsetDateTime.parse("2022-08-02T13:07:26.403Z");
                                }}),
                            }});            

            PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse res = sdk.marketingEventsExternal.postMarketingV3MarketingEventsEventsUpsertDoUpsert(req, new PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchResponseMarketingEventPublicDefaultResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest req = new PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest("deserunt", "quam");            

            PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse res = sdk.marketingEventsExternal.postMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancel(req, new PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.marketingEventDefaultResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMarketingV3MarketingEventsEventsExternalEventIdCompleteComplete

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity;
import org.openapis.openapi.models.shared.MarketingEventCompleteRequestParams;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest req = new PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest(                new MarketingEventCompleteRequestParams(OffsetDateTime.parse("2022-09-21T15:58:20.330Z"), OffsetDateTime.parse("2022-05-31T19:46:08.472Z"));, "maxime", "pariatur");            

            PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse res = sdk.marketingEventsExternal.postMarketingV3MarketingEventsEventsExternalEventIdCompleteComplete(req, new PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.marketingEventDefaultResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertById

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdResponse;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity;
import org.openapis.openapi.models.shared.BatchInputMarketingEventEmailSubscriber;
import org.openapis.openapi.models.shared.MarketingEventEmailSubscriber;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest req = new PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest(                new BatchInputMarketingEventEmailSubscriber(                new org.openapis.openapi.models.shared.MarketingEventEmailSubscriber[]{{
                                                add(new MarketingEventEmailSubscriber("sunt", 355613L) {{
                                                    contactProperties = new java.util.HashMap<String, String>() {{
                                                        put("laborum", "totam");
                                                    }};
                                                    email = "Brendon_Daniel39@gmail.com";
                                                    interactionDateTime = 463150L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("temporibus", "qui");
                                                        put("neque", "fugit");
                                                        put("magni", "odio");
                                                    }};
                                                }}),
                                                add(new MarketingEventEmailSubscriber("dolore", 286915L) {{
                                                    contactProperties = new java.util.HashMap<String, String>() {{
                                                        put("hic", "voluptatem");
                                                        put("cumque", "soluta");
                                                        put("nobis", "et");
                                                    }};
                                                    email = "Cydney_Boehm73@hotmail.com";
                                                    interactionDateTime = 584476L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("delectus", "dolorem");
                                                    }};
                                                }}),
                                                add(new MarketingEventEmailSubscriber("occaecati", 977496L) {{
                                                    contactProperties = new java.util.HashMap<String, String>() {{
                                                        put("dolorum", "architecto");
                                                    }};
                                                    email = "Agnes.Luettgen66@gmail.com";
                                                    interactionDateTime = 833038L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("doloribus", "ut");
                                                        put("facilis", "cupiditate");
                                                        put("qui", "quae");
                                                        put("laudantium", "odio");
                                                    }};
                                                }}),
                                            }});, "quisquam", "vero", "omnis");            

            PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdResponse res = sdk.marketingEventsExternal.postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertById(req, new PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertById

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdResponse;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity;
import org.openapis.openapi.models.shared.BatchInputMarketingEventSubscriber;
import org.openapis.openapi.models.shared.MarketingEventSubscriber;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest req = new PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest(                new BatchInputMarketingEventSubscriber(                new org.openapis.openapi.models.shared.MarketingEventSubscriber[]{{
                                                add(new MarketingEventSubscriber(630448L) {{
                                                    interactionDateTime = 218403L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("voluptate", "consectetur");
                                                        put("vero", "tenetur");
                                                        put("dignissimos", "hic");
                                                        put("distinctio", "quod");
                                                    }};
                                                    vid = 486160;
                                                }}),
                                                add(new MarketingEventSubscriber(347233L) {{
                                                    interactionDateTime = 708548L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("ducimus", "dolore");
                                                        put("quibusdam", "illum");
                                                        put("sequi", "natus");
                                                        put("impedit", "aut");
                                                    }};
                                                    vid = 974259;
                                                }}),
                                            }});, "nulla", "fugit", "porro");            

            PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdResponse res = sdk.marketingEventsExternal.postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertById(req, new PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## postMarketingV3MarketingEventsEventsCreate

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsCreateResponse;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsEventsCreateSecurity;
import org.openapis.openapi.models.shared.MarketingEventCreateRequestParams;
import org.openapis.openapi.models.shared.PropertyValue;
import org.openapis.openapi.models.shared.PropertyValueSourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.MarketingEventCreateRequestParams req = new MarketingEventCreateRequestParams("maiores", "doloribus", "iusto", "eligendi") {{
                customProperties = new org.openapis.openapi.models.shared.PropertyValue[]{{
                    add(new PropertyValue("nulla", "excepturi", false, 972920L, PropertyValueSourceEnum.INTEGRATIONS_PLATFORM, "sapiente", "quisquam", "saepe",                 new Long[]{{
                                        add(774048L),
                                        add(359271L),
                                    }}, 333145L, "aliquid") {{
                        name = "Brandi Glover";
                        persistenceTimestamp = 136900L;
                        requestId = "vel";
                        selectedByUser = false;
                        selectedByUserTimestamp = 822118L;
                        source = PropertyValueSourceEnum.SIDEKICK;
                        sourceId = "ratione";
                        sourceLabel = "ex";
                        sourceMetadata = "laudantium";
                        sourceVid = new Long[]{{
                            add(224317L),
                        }};
                        timestamp = 980700L;
                        updatedByUserId = 97844;
                        useTimestampAsPersistenceTimestamp = false;
                        value = "ex";
                    }}),
                    add(new PropertyValue("accusamus", "inventore", false, 250622L, PropertyValueSourceEnum.CONTACTS_WEB, "dolorum", "laborum", "placeat",                 new Long[]{{
                                        add(432148L),
                                    }}, 420539L, "nobis") {{
                        name = "Megan Jaskolski";
                        persistenceTimestamp = 926213L;
                        requestId = "aspernatur";
                        selectedByUser = false;
                        selectedByUserTimestamp = 325310L;
                        source = PropertyValueSourceEnum.MIGRATION;
                        sourceId = "a";
                        sourceLabel = "libero";
                        sourceMetadata = "aut";
                        sourceVid = new Long[]{{
                            add(533466L),
                        }};
                        timestamp = 770581L;
                        updatedByUserId = 304582;
                        useTimestampAsPersistenceTimestamp = false;
                        value = "fugit";
                    }}),
                }};
                endDateTime = OffsetDateTime.parse("2021-05-05T09:22:07.208Z");
                eventCancelled = false;
                eventDescription = "nulla";
                eventType = "voluptas";
                eventUrl = "libero";
                startDateTime = OffsetDateTime.parse("2022-09-24T07:55:38.504Z");
            }};            

            PostMarketingV3MarketingEventsEventsCreateResponse res = sdk.marketingEventsExternal.postMarketingV3MarketingEventsEventsCreate(req, new PostMarketingV3MarketingEventsEventsCreateSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.marketingEventDefaultResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putMarketingV3MarketingEventsEventsExternalEventIdReplace

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest;
import org.openapis.openapi.models.operations.PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse;
import org.openapis.openapi.models.operations.PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity;
import org.openapis.openapi.models.shared.MarketingEventCreateRequestParams;
import org.openapis.openapi.models.shared.PropertyValue;
import org.openapis.openapi.models.shared.PropertyValueSourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest req = new PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest(                new MarketingEventCreateRequestParams("numquam", "explicabo", "provident", "ipsa") {{
                                customProperties = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                    add(new PropertyValue("ipsa", "id", false, 696997L, PropertyValueSourceEnum.BIDEN, "quo", "illum", "quo",                 new Long[]{{
                                                        add(259422L),
                                                        add(178367L),
                                                        add(373813L),
                                                    }}, 69859L, "cupiditate") {{
                                        name = "Viola Gibson";
                                        persistenceTimestamp = 524593L;
                                        requestId = "fuga";
                                        selectedByUser = false;
                                        selectedByUserTimestamp = 442015L;
                                        source = PropertyValueSourceEnum.BET_ASSIGNMENT;
                                        sourceId = "fugiat";
                                        sourceLabel = "ut";
                                        sourceMetadata = "eum";
                                        sourceVid = new Long[]{{
                                            add(826871L),
                                            add(181151L),
                                        }};
                                        timestamp = 509342L;
                                        updatedByUserId = 788546;
                                        useTimestampAsPersistenceTimestamp = false;
                                        value = "veritatis";
                                    }}),
                                    add(new PropertyValue("odio", "occaecati", false, 414567L, PropertyValueSourceEnum.FORECASTING, "dolores", "deserunt", "molestiae",                 new Long[]{{
                                                        add(783648L),
                                                    }}, 430402L, "quas") {{
                                        name = "Rhonda Toy";
                                        persistenceTimestamp = 197054L;
                                        requestId = "quo";
                                        selectedByUser = false;
                                        selectedByUserTimestamp = 459856L;
                                        source = PropertyValueSourceEnum.MARKETPLACE;
                                        sourceId = "aperiam";
                                        sourceLabel = "distinctio";
                                        sourceMetadata = "quod";
                                        sourceVid = new Long[]{{
                                            add(76956L),
                                            add(469498L),
                                        }};
                                        timestamp = 518835L;
                                        updatedByUserId = 882710;
                                        useTimestampAsPersistenceTimestamp = false;
                                        value = "aliquam";
                                    }}),
                                }};
                                endDateTime = OffsetDateTime.parse("2022-09-06T07:07:42.754Z");
                                eventCancelled = false;
                                eventDescription = "deleniti";
                                eventType = "fugit";
                                eventUrl = "fuga";
                                startDateTime = OffsetDateTime.parse("2022-06-12T08:30:58.411Z");
                            }};, "atque");            

            PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse res = sdk.marketingEventsExternal.putMarketingV3MarketingEventsEventsExternalEventIdReplace(req, new PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.marketingEventPublicDefaultResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
