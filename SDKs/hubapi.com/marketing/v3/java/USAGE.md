<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest req = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest() {{
                security = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity() {{
                    privateAppsLegacy = new SchemePrivateAppsLegacy() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams() {{
                    externalEventId = "ducimus";
                    subscriberState = "sed";
                }};
                queryParams = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams() {{
                    externalAccountId = "aut";
                }};
                request = new BatchInputMarketingEventSubscriber() {{
                    inputs = new openapisdk.models.shared.MarketingEventSubscriber[]() {{
                        add(new MarketingEventSubscriber() {{
                            interactionDateTime = 5793214711952816415;
                            properties = new java.util.HashMap<String, String>() {{
                                put("saepe", "itaque");
                                put("non", "possimus");
                            }};
                            vid = 1049477164893788740;
                        }}),
                        add(new MarketingEventSubscriber() {{
                            interactionDateTime = 8843465368839867075;
                            properties = new java.util.HashMap<String, String>() {{
                                put("ratione", "voluptas");
                                put("impedit", "deserunt");
                                put("vel", "omnis");
                            }};
                            vid = 314412379615829377;
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