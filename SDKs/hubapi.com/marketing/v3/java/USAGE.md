<!-- Start SDK Example Usage -->
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
                                                add(new MarketingEventSubscriber(645894L) {{
                                                    interactionDateTime = 592845L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("quibusdam", "unde");
                                                        put("nulla", "corrupti");
                                                        put("illum", "vel");
                                                    }};
                                                    vid = 623564;
                                                }}),
                                                add(new MarketingEventSubscriber(383441L) {{
                                                    interactionDateTime = 384382L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("magnam", "debitis");
                                                        put("ipsa", "delectus");
                                                    }};
                                                    vid = 272656;
                                                }}),
                                                add(new MarketingEventSubscriber(87129L) {{
                                                    interactionDateTime = 477665L;
                                                    properties = new java.util.HashMap<String, String>() {{
                                                        put("placeat", "voluptatum");
                                                        put("iusto", "excepturi");
                                                        put("nisi", "recusandae");
                                                        put("temporibus", "ab");
                                                    }};
                                                    vid = 337396;
                                                }}),
                                            }});, "deserunt", "perferendis") {{
                externalAccountId = "ipsam";
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
<!-- End SDK Example Usage -->