# attendanceSubscriberStateChanges

## Overview

Operations to mark HubSpot contacts as registered, attended or cancelled a registration to a Marketing Event.

### Available Operations

* [postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate](#postmarketingv3marketingeventsattendanceexternaleventidsubscriberstatecreatecreate) - Record
* [postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmail](#postmarketingv3marketingeventsattendanceexternaleventidsubscriberstateemailcreatecreatebyemail) - Record

## postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate

Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity;
import org.openapis.openapi.models.shared.BatchInputMarketingEventSubscriber;
import org.openapis.openapi.models.shared.MarketingEventSubscriber;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest req = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest(                new BatchInputMarketingEventSubscriber(                new org.openapis.openapi.models.shared.MarketingEventSubscriber[]{{
                                                add(new MarketingEventSubscriber(780529L) {{
                                                    interactionDateTime = 957156L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("odit", "at");
                                                        put("at", "maiores");
                                                        put("molestiae", "quod");
                                                        put("quod", "esse");
                                                    }};
                                                    vid = 520478;
                                                }}),
                                                add(new MarketingEventSubscriber(143353L) {{
                                                    interactionDateTime = 678880L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("nam", "officia");
                                                    }};
                                                    vid = 582020;
                                                }}),
                                                add(new MarketingEventSubscriber(456150L) {{
                                                    interactionDateTime = 537373L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("optio", "totam");
                                                        put("beatae", "commodi");
                                                        put("molestiae", "modi");
                                                        put("qui", "impedit");
                                                    }};
                                                    vid = 736918;
                                                }}),
                                                add(new MarketingEventSubscriber(616934L) {{
                                                    interactionDateTime = 216550L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("aspernatur", "perferendis");
                                                        put("ad", "natus");
                                                        put("sed", "iste");
                                                    }};
                                                    vid = 222321;
                                                }}),
                                            }});, "laboriosam", "hic") {{
                externalAccountId = "saepe";
            }};            

            PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse res = sdk.attendanceSubscriberStateChanges.postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate(req, new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchResponseSubscriberVidResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmail

Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. If you set params 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity;
import org.openapis.openapi.models.shared.BatchInputMarketingEventEmailSubscriber;
import org.openapis.openapi.models.shared.MarketingEventEmailSubscriber;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest req = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest(                new BatchInputMarketingEventEmailSubscriber(                new org.openapis.openapi.models.shared.MarketingEventEmailSubscriber[]{{
                                                add(new MarketingEventEmailSubscriber("explicabo", 750686L) {{
                                                    contactProperties = new java.util.HashMap<String, String>() {{
                                                        put("corporis", "iste");
                                                        put("iure", "saepe");
                                                    }};
                                                    email = "Baby_Beier65@hotmail.com";
                                                    interactionDateTime = 670638L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("dolorem", "corporis");
                                                    }};
                                                }}),
                                                add(new MarketingEventEmailSubscriber("repellat", 653108L) {{
                                                    contactProperties = new java.util.HashMap<String, String>() {{
                                                        put("omnis", "nemo");
                                                        put("minima", "excepturi");
                                                    }};
                                                    email = "Ibrahim_Nicolas10@gmail.com";
                                                    interactionDateTime = 652790L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("culpa", "consequuntur");
                                                    }};
                                                }}),
                                                add(new MarketingEventEmailSubscriber("temporibus", 673660L) {{
                                                    contactProperties = new java.util.HashMap<String, String>() {{
                                                        put("numquam", "commodi");
                                                        put("quam", "molestiae");
                                                        put("velit", "error");
                                                    }};
                                                    email = "Eugene_Brown31@gmail.com";
                                                    interactionDateTime = 138183L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("sequi", "tenetur");
                                                        put("ipsam", "id");
                                                        put("possimus", "aut");
                                                        put("quasi", "error");
                                                    }};
                                                }}),
                                            }});, "quasi", "reiciendis") {{
                externalAccountId = "voluptatibus";
            }};            

            PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse res = sdk.attendanceSubscriberStateChanges.postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmail(req, new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchResponseSubscriberEmailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
