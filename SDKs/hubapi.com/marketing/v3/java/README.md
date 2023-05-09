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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [attendanceSubscriberStateChanges](docs/attendancesubscriberstatechanges/README.md)

* [postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate](docs/attendancesubscriberstatechanges/README.md#postmarketingv3marketingeventsattendanceexternaleventidsubscriberstatecreatecreate) - Record
* [postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmail](docs/attendancesubscriberstatechanges/README.md#postmarketingv3marketingeventsattendanceexternaleventidsubscriberstateemailcreatecreatebyemail) - Record

### [marketingEventsExternal](docs/marketingeventsexternal/README.md)

* [deleteMarketingV3MarketingEventsEventsExternalEventIdArchive](docs/marketingeventsexternal/README.md#deletemarketingv3marketingeventseventsexternaleventidarchive)
* [getMarketingV3MarketingEventsEventsExternalEventIdGetById](docs/marketingeventsexternal/README.md#getmarketingv3marketingeventseventsexternaleventidgetbyid)
* [patchMarketingV3MarketingEventsEventsExternalEventIdUpdate](docs/marketingeventsexternal/README.md#patchmarketingv3marketingeventseventsexternaleventidupdate)
* [postMarketingV3MarketingEventsEventsDeleteArchiveBatch](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsdeletearchivebatch)
* [postMarketingV3MarketingEventsEventsUpsertDoUpsert](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsupsertdoupsert)
* [postMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancel](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsexternaleventidcanceldocancel)
* [postMarketingV3MarketingEventsEventsExternalEventIdCompleteComplete](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsexternaleventidcompletecomplete)
* [postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertById](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsexternaleventidsubscriberstateemailupsertdoemailupsertbyid)
* [postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertById](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsexternaleventidsubscriberstateupsertdoupsertbyid)
* [postMarketingV3MarketingEventsEventsCreate](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventscreate)
* [putMarketingV3MarketingEventsEventsExternalEventIdReplace](docs/marketingeventsexternal/README.md#putmarketingv3marketingeventseventsexternaleventidreplace)

### [search](docs/search/README.md)

* [getMarketingV3MarketingEventsEventsSearchDoSearch](docs/search/README.md#getmarketingv3marketingeventseventssearchdosearch) - Search for marketing events

### [settingsExternal](docs/settingsexternal/README.md)

* [getMarketingV3MarketingEventsAppIdSettingsGetAll](docs/settingsexternal/README.md#getmarketingv3marketingeventsappidsettingsgetall)
* [postMarketingV3MarketingEventsAppIdSettingsCreate](docs/settingsexternal/README.md#postmarketingv3marketingeventsappidsettingscreate)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
