# customEvents

### Available Operations

* [dfareportingCustomEventsBatchinsert](#dfareportingcustomeventsbatchinsert) - Inserts custom events.

## dfareportingCustomEventsBatchinsert

Inserts custom events.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCustomEventsBatchinsertRequest;
import org.openapis.openapi.models.operations.DfareportingCustomEventsBatchinsertResponse;
import org.openapis.openapi.models.operations.DfareportingCustomEventsBatchinsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CampaignManagerIds;
import org.openapis.openapi.models.shared.CustomEvent;
import org.openapis.openapi.models.shared.CustomEventClickAnnotation;
import org.openapis.openapi.models.shared.CustomEventEventTypeEnum;
import org.openapis.openapi.models.shared.CustomEventImpressionAnnotation;
import org.openapis.openapi.models.shared.CustomEventInsert;
import org.openapis.openapi.models.shared.CustomEventInsertInsertEventTypeEnum;
import org.openapis.openapi.models.shared.CustomEventsBatchInsertRequest;
import org.openapis.openapi.models.shared.CustomVariable;
import org.openapis.openapi.models.shared.Dv3Ids;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCustomEventsBatchinsertRequest req = new DfareportingCustomEventsBatchinsertRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                customEventsBatchInsertRequest = new CustomEventsBatchInsertRequest() {{
                    customEvents = new org.openapis.openapi.models.shared.CustomEvent[]{{
                        add(new CustomEvent() {{
                            annotateClickEvent = new CustomEventClickAnnotation() {{
                                gclid = "id";
                                kind = "sed";
                            }};
                            annotateImpressionEvent = new CustomEventImpressionAnnotation() {{
                                kind = "fugiat";
                                pathImpressionId = "recusandae";
                            }};
                            customVariables = new org.openapis.openapi.models.shared.CustomVariable[]{{
                                add(new CustomVariable() {{
                                    index = "minima";
                                    kind = "tenetur";
                                    value = "praesentium";
                                }}),
                            }};
                            eventType = CustomEventEventTypeEnum.ANNOTATE;
                            floodlightConfigurationId = "sit";
                            insertEvent = new CustomEventInsert() {{
                                cmDimensions = new CampaignManagerIds() {{
                                    adId = "quasi";
                                    campaignId = "libero";
                                    creativeId = "tenetur";
                                    kind = "dolorem";
                                    placementId = "adipisci";
                                    siteId = "voluptates";
                                }};
                                dv3Dimensions = new Dv3Ids() {{
                                    dvCampaignId = "similique";
                                    dvCreativeId = "id";
                                    dvInsertionOrderId = "quidem";
                                    dvLineItemId = "ut";
                                    dvSiteId = "veniam";
                                    kind = "eius";
                                }};
                                insertEventType = CustomEventInsertInsertEventTypeEnum.UNKNOWN;
                                kind = "dolores";
                                matchId = "dolorum";
                                mobileDeviceId = "quod";
                            }};
                            kind = "sunt";
                            ordinal = "iure";
                            timestampMicros = "voluptatem";
                        }}),
                        add(new CustomEvent() {{
                            annotateClickEvent = new CustomEventClickAnnotation() {{
                                gclid = "incidunt";
                                kind = "soluta";
                            }};
                            annotateImpressionEvent = new CustomEventImpressionAnnotation() {{
                                kind = "a";
                                pathImpressionId = "vitae";
                            }};
                            customVariables = new org.openapis.openapi.models.shared.CustomVariable[]{{
                                add(new CustomVariable() {{
                                    index = "placeat";
                                    kind = "cupiditate";
                                    value = "asperiores";
                                }}),
                                add(new CustomVariable() {{
                                    index = "maxime";
                                    kind = "ex";
                                    value = "dicta";
                                }}),
                                add(new CustomVariable() {{
                                    index = "deserunt";
                                    kind = "laborum";
                                    value = "itaque";
                                }}),
                                add(new CustomVariable() {{
                                    index = "ad";
                                    kind = "voluptates";
                                    value = "harum";
                                }}),
                            }};
                            eventType = CustomEventEventTypeEnum.UNKNOWN;
                            floodlightConfigurationId = "delectus";
                            insertEvent = new CustomEventInsert() {{
                                cmDimensions = new CampaignManagerIds() {{
                                    adId = "sit";
                                    campaignId = "porro";
                                    creativeId = "labore";
                                    kind = "molestias";
                                    placementId = "qui";
                                    siteId = "soluta";
                                }};
                                dv3Dimensions = new Dv3Ids() {{
                                    dvCampaignId = "ullam";
                                    dvCreativeId = "nihil";
                                    dvInsertionOrderId = "ut";
                                    dvLineItemId = "incidunt";
                                    dvSiteId = "quibusdam";
                                    kind = "doloremque";
                                }};
                                insertEventType = CustomEventInsertInsertEventTypeEnum.IMPRESSION;
                                kind = "dolorum";
                                matchId = "explicabo";
                                mobileDeviceId = "odit";
                            }};
                            kind = "laboriosam";
                            ordinal = "esse";
                            timestampMicros = "est";
                        }}),
                        add(new CustomEvent() {{
                            annotateClickEvent = new CustomEventClickAnnotation() {{
                                gclid = "est";
                                kind = "accusamus";
                            }};
                            annotateImpressionEvent = new CustomEventImpressionAnnotation() {{
                                kind = "debitis";
                                pathImpressionId = "esse";
                            }};
                            customVariables = new org.openapis.openapi.models.shared.CustomVariable[]{{
                                add(new CustomVariable() {{
                                    index = "repudiandae";
                                    kind = "ipsum";
                                    value = "minus";
                                }}),
                                add(new CustomVariable() {{
                                    index = "molestiae";
                                    kind = "illo";
                                    value = "est";
                                }}),
                                add(new CustomVariable() {{
                                    index = "placeat";
                                    kind = "sequi";
                                    value = "et";
                                }}),
                            }};
                            eventType = CustomEventEventTypeEnum.ANNOTATE;
                            floodlightConfigurationId = "voluptates";
                            insertEvent = new CustomEventInsert() {{
                                cmDimensions = new CampaignManagerIds() {{
                                    adId = "cumque";
                                    campaignId = "distinctio";
                                    creativeId = "rem";
                                    kind = "consectetur";
                                    placementId = "nulla";
                                    siteId = "magni";
                                }};
                                dv3Dimensions = new Dv3Ids() {{
                                    dvCampaignId = "dolor";
                                    dvCreativeId = "esse";
                                    dvInsertionOrderId = "deleniti";
                                    dvLineItemId = "mollitia";
                                    dvSiteId = "debitis";
                                    kind = "neque";
                                }};
                                insertEventType = CustomEventInsertInsertEventTypeEnum.CLICK;
                                kind = "sapiente";
                                matchId = "maxime";
                                mobileDeviceId = "sed";
                            }};
                            kind = "dolor";
                            ordinal = "nulla";
                            timestampMicros = "sint";
                        }}),
                        add(new CustomEvent() {{
                            annotateClickEvent = new CustomEventClickAnnotation() {{
                                gclid = "eius";
                                kind = "ad";
                            }};
                            annotateImpressionEvent = new CustomEventImpressionAnnotation() {{
                                kind = "aperiam";
                                pathImpressionId = "animi";
                            }};
                            customVariables = new org.openapis.openapi.models.shared.CustomVariable[]{{
                                add(new CustomVariable() {{
                                    index = "rem";
                                    kind = "iure";
                                    value = "error";
                                }}),
                                add(new CustomVariable() {{
                                    index = "aliquam";
                                    kind = "natus";
                                    value = "ad";
                                }}),
                                add(new CustomVariable() {{
                                    index = "cum";
                                    kind = "dolorum";
                                    value = "quod";
                                }}),
                            }};
                            eventType = CustomEventEventTypeEnum.INSERT;
                            floodlightConfigurationId = "quae";
                            insertEvent = new CustomEventInsert() {{
                                cmDimensions = new CampaignManagerIds() {{
                                    adId = "ducimus";
                                    campaignId = "tenetur";
                                    creativeId = "eaque";
                                    kind = "ex";
                                    placementId = "rerum";
                                    siteId = "magni";
                                }};
                                dv3Dimensions = new Dv3Ids() {{
                                    dvCampaignId = "laudantium";
                                    dvCreativeId = "repudiandae";
                                    dvInsertionOrderId = "minus";
                                    dvLineItemId = "porro";
                                    dvSiteId = "atque";
                                    kind = "autem";
                                }};
                                insertEventType = CustomEventInsertInsertEventTypeEnum.UNKNOWN;
                                kind = "unde";
                                matchId = "sunt";
                                mobileDeviceId = "amet";
                            }};
                            kind = "laudantium";
                            ordinal = "commodi";
                            timestampMicros = "a";
                        }}),
                    }};
                    kind = "aliquid";
                }};;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "perspiciatis";
                fields = "eum";
                key = "sint";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "quisquam";
                uploadProtocol = "quod";
            }};            

            DfareportingCustomEventsBatchinsertResponse res = sdk.customEvents.dfareportingCustomEventsBatchinsert(req, new DfareportingCustomEventsBatchinsertSecurity("laboriosam", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customEventsBatchInsertResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
