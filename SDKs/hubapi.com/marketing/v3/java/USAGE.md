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
                    externalEventId = "sit";
                    subscriberState = "voluptas";
                }};
                queryParams = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams() {{
                    externalAccountId = "culpa";
                }};
                request = new BatchInputMarketingEventSubscriber() {{
                    inputs = new openapisdk.models.shared.MarketingEventSubscriber[]() {{
                        add(new MarketingEventSubscriber() {{
                            interactionDateTime = 3390393562759376202;
                            properties = new java.util.HashMap<String, String>() {{
                                put("expedita", "voluptas");
                                put("fugit", "et");
                            }};
                            vid = 2661732831099943416;
                        }}),
                        add(new MarketingEventSubscriber() {{
                            interactionDateTime = 8325060299420976708;
                            properties = new java.util.HashMap<String, String>() {{
                                put("debitis", "voluptatum");
                                put("et", "ut");
                                put("dolorem", "et");
                            }};
                            vid = 7373105480197164748;
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