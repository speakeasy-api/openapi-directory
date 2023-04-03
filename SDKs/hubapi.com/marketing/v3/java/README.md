# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest;
import org.openapis.openapi.models.operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse;
import org.openapis.openapi.models.shared.BatchInputMarketingEventSubscriber;
import org.openapis.openapi.models.shared.MarketingEventSubscriber;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest req = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest() {{
                batchInputMarketingEventSubscriber = new BatchInputMarketingEventSubscriber() {{
                    inputs = new org.openapis.openapi.models.shared.MarketingEventSubscriber[]{{
                        add(new MarketingEventSubscriber() {{
                            interactionDateTime = 592845;
                            properties = new java.util.HashMap<String, String>() {{
                                put("quibusdam", "unde");
                                put("nulla", "corrupti");
                                put("illum", "vel");
                            }};
                            vid = 623564;
                        }}),
                        add(new MarketingEventSubscriber() {{
                            interactionDateTime = 645894;
                            properties = new java.util.HashMap<String, String>() {{
                                put("iure", "magnam");
                                put("debitis", "ipsa");
                            }};
                            vid = 963663;
                        }}),
                        add(new MarketingEventSubscriber() {{
                            interactionDateTime = 272656;
                            properties = new java.util.HashMap<String, String>() {{
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }};
                            vid = 479977;
                        }}),
                    }};
                }};
                externalAccountId = "excepturi";
                externalEventId = "nisi";
                subscriberState = "recusandae";
            }}            

            PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse res = sdk.attendanceSubscriberStateChanges.postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate(req, new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchResponseSubscriberVidResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### attendanceSubscriberStateChanges

* `postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate` - Record
* `postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmail` - Record

### marketingEventsExternal

* `deleteMarketingV3MarketingEventsEventsExternalEventIdArchive`
* `getMarketingV3MarketingEventsEventsExternalEventIdGetById`
* `patchMarketingV3MarketingEventsEventsExternalEventIdUpdate`
* `postMarketingV3MarketingEventsEventsDeleteArchiveBatch`
* `postMarketingV3MarketingEventsEventsUpsertDoUpsert`
* `postMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancel`
* `postMarketingV3MarketingEventsEventsExternalEventIdCompleteComplete`
* `postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertById`
* `postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertById`
* `postMarketingV3MarketingEventsEventsCreate`
* `putMarketingV3MarketingEventsEventsExternalEventIdReplace`

### search

* `getMarketingV3MarketingEventsEventsSearchDoSearch` - Search for marketing events

### settingsExternal

* `getMarketingV3MarketingEventsAppIdSettingsGetAll`
* `postMarketingV3MarketingEventsAppIdSettingsCreate`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
