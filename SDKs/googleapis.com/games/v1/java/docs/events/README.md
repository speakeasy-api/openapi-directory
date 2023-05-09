# events

### Available Operations

* [gamesEventsListByPlayer](#gameseventslistbyplayer) - Returns a list showing the current progress on events in this application for the currently authenticated user.
* [gamesEventsListDefinitions](#gameseventslistdefinitions) - Returns a list of the event definitions in this application.
* [gamesEventsRecord](#gameseventsrecord) - Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

## gamesEventsListByPlayer

Returns a list showing the current progress on events in this application for the currently authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesEventsListByPlayerRequest;
import org.openapis.openapi.models.operations.GamesEventsListByPlayerResponse;
import org.openapis.openapi.models.operations.GamesEventsListByPlayerSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesEventsListByPlayerRequest req = new GamesEventsListByPlayerRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "delectus";
                key = "eum";
                language = "non";
                maxResults = 756107L;
                oauthToken = "sint";
                pageToken = "aliquid";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "necessitatibus";
                uploadProtocol = "sint";
            }};            

            GamesEventsListByPlayerResponse res = sdk.events.gamesEventsListByPlayer(req, new GamesEventsListByPlayerSecurity("officia", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.playerEventListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesEventsListDefinitions

Returns a list of the event definitions in this application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesEventsListDefinitionsRequest;
import org.openapis.openapi.models.operations.GamesEventsListDefinitionsResponse;
import org.openapis.openapi.models.operations.GamesEventsListDefinitionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesEventsListDefinitionsRequest req = new GamesEventsListDefinitionsRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "in";
                key = "illum";
                language = "maiores";
                maxResults = 699479L;
                oauthToken = "dicta";
                pageToken = "magnam";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "facere";
                uploadProtocol = "ea";
            }};            

            GamesEventsListDefinitionsResponse res = sdk.events.gamesEventsListDefinitions(req, new GamesEventsListDefinitionsSecurity("aliquid", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.eventDefinitionListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesEventsRecord

Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesEventsRecordRequest;
import org.openapis.openapi.models.operations.GamesEventsRecordResponse;
import org.openapis.openapi.models.operations.GamesEventsRecordSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EventPeriodRange;
import org.openapis.openapi.models.shared.EventPeriodUpdate;
import org.openapis.openapi.models.shared.EventRecordRequest;
import org.openapis.openapi.models.shared.EventUpdateRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesEventsRecordRequest req = new GamesEventsRecordRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                eventRecordRequest = new EventRecordRequest() {{
                    currentTimeMillis = "non";
                    kind = "occaecati";
                    requestId = "enim";
                    timePeriods = new org.openapis.openapi.models.shared.EventPeriodUpdate[]{{
                        add(new EventPeriodUpdate() {{
                            kind = "delectus";
                            timePeriod = new EventPeriodRange() {{
                                kind = "quidem";
                                periodEndMillis = "provident";
                                periodStartMillis = "nam";
                            }};
                            updates = new org.openapis.openapi.models.shared.EventUpdateRequest[]{{
                                add(new EventUpdateRequest() {{
                                    definitionId = "blanditiis";
                                    kind = "deleniti";
                                    updateCount = "sapiente";
                                }}),
                                add(new EventUpdateRequest() {{
                                    definitionId = "amet";
                                    kind = "deserunt";
                                    updateCount = "nisi";
                                }}),
                                add(new EventUpdateRequest() {{
                                    definitionId = "vel";
                                    kind = "natus";
                                    updateCount = "omnis";
                                }}),
                            }};
                        }}),
                        add(new EventPeriodUpdate() {{
                            kind = "molestiae";
                            timePeriod = new EventPeriodRange() {{
                                kind = "perferendis";
                                periodEndMillis = "nihil";
                                periodStartMillis = "magnam";
                            }};
                            updates = new org.openapis.openapi.models.shared.EventUpdateRequest[]{{
                                add(new EventUpdateRequest() {{
                                    definitionId = "id";
                                    kind = "labore";
                                    updateCount = "labore";
                                }}),
                                add(new EventUpdateRequest() {{
                                    definitionId = "suscipit";
                                    kind = "natus";
                                    updateCount = "nobis";
                                }}),
                                add(new EventUpdateRequest() {{
                                    definitionId = "eum";
                                    kind = "vero";
                                    updateCount = "aspernatur";
                                }}),
                            }};
                        }}),
                        add(new EventPeriodUpdate() {{
                            kind = "architecto";
                            timePeriod = new EventPeriodRange() {{
                                kind = "magnam";
                                periodEndMillis = "et";
                                periodStartMillis = "excepturi";
                            }};
                            updates = new org.openapis.openapi.models.shared.EventUpdateRequest[]{{
                                add(new EventUpdateRequest() {{
                                    definitionId = "provident";
                                    kind = "quos";
                                    updateCount = "sint";
                                }}),
                                add(new EventUpdateRequest() {{
                                    definitionId = "accusantium";
                                    kind = "mollitia";
                                    updateCount = "reiciendis";
                                }}),
                            }};
                        }}),
                        add(new EventPeriodUpdate() {{
                            kind = "mollitia";
                            timePeriod = new EventPeriodRange() {{
                                kind = "ad";
                                periodEndMillis = "eum";
                                periodStartMillis = "dolor";
                            }};
                            updates = new org.openapis.openapi.models.shared.EventUpdateRequest[]{{
                                add(new EventUpdateRequest() {{
                                    definitionId = "odit";
                                    kind = "nemo";
                                    updateCount = "quasi";
                                }}),
                                add(new EventUpdateRequest() {{
                                    definitionId = "iure";
                                    kind = "doloribus";
                                    updateCount = "debitis";
                                }}),
                                add(new EventUpdateRequest() {{
                                    definitionId = "eius";
                                    kind = "maxime";
                                    updateCount = "deleniti";
                                }}),
                                add(new EventUpdateRequest() {{
                                    definitionId = "facilis";
                                    kind = "in";
                                    updateCount = "architecto";
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "ullam";
                fields = "expedita";
                key = "nihil";
                language = "repellat";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "saepe";
                uploadProtocol = "pariatur";
            }};            

            GamesEventsRecordResponse res = sdk.events.gamesEventsRecord(req, new GamesEventsRecordSecurity("accusantium", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.eventUpdateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
