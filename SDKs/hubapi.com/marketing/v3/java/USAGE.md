<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse;
import org.openapis.openapi.models.shared.BatchInputMarketingEventSubscriber;
import org.openapis.openapi.models.shared.MarketingEventSubscriber;
import org.openapis.openapi.models.shared.SchemeOauth2Legacy;
import org.openapis.openapi.models.shared.SchemePrivateAppsLegacy;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest req = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest() {{
                security = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity() {{
                    oauth2Legacy = new SchemeOauth2Legacy() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams() {{
                    externalEventId = "corrupti";
                    subscriberState = "provident";
                }};
                queryParams = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams() {{
                    externalAccountId = "distinctio";
                }};
                request = new BatchInputMarketingEventSubscriber() {{
                    inputs = new org.openapis.openapi.models.shared.MarketingEventSubscriber[]{{
                        add(new MarketingEventSubscriber() {{
                            interactionDateTime = 602763;
                            properties = new java.util.HashMap<String, String>() {{
                                put("corrupti", "illum");
                                put("vel", "error");
                                put("deserunt", "suscipit");
                                put("iure", "magnam");
                            }};
                            vid = 891773;
                        }}),
                        add(new MarketingEventSubscriber() {{
                            interactionDateTime = 56713;
                            properties = new java.util.HashMap<String, String>() {{
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                                put("iusto", "excepturi");
                            }};
                            vid = 392785;
                        }}),
                        add(new MarketingEventSubscriber() {{
                            interactionDateTime = 925597;
                            properties = new java.util.HashMap<String, String>() {{
                                put("ab", "quis");
                                put("veritatis", "deserunt");
                                put("perferendis", "ipsam");
                                put("repellendus", "sapiente");
                            }};
                            vid = 778157;
                        }}),
                        add(new MarketingEventSubscriber() {{
                            interactionDateTime = 140350;
                            properties = new java.util.HashMap<String, String>() {{
                                put("at", "maiores");
                                put("molestiae", "quod");
                                put("quod", "esse");
                                put("totam", "porro");
                            }};
                            vid = 678880;
                        }}),
                    }};
                }};
            }};            

            PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse res = sdk.attendanceSubscriberStateChanges.postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate(req);

            if (res.batchResponseSubscriberVidResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->