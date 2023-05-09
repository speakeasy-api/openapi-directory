# events

### Available Operations

* [deleteEventsId](#deleteeventsid) - Delete event
* [getEventsId](#geteventsid) - Get event
* [getScenariosIdEvents](#getscenariosidevents) - List events in scenario.
* [getUsersIdEvents](#getusersidevents) - List events in user.
* [postScenariosIdEvents](#postscenariosidevents) - Create event in scenario
* [putEventsId](#puteventsid) - Update event

## deleteEventsId

Deletes an event by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEventsIdBehaviourEnum;
import org.openapis.openapi.models.operations.DeleteEventsIdRequest;
import org.openapis.openapi.models.operations.DeleteEventsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEventsIdRequest req = new DeleteEventsIdRequest(DeleteEventsIdBehaviourEnum.ONE, "commodi");            

            DeleteEventsIdResponse res = sdk.events.deleteEventsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventsId

Gets a particular event by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsIdRequest;
import org.openapis.openapi.models.operations.GetEventsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEventsIdRequest req = new GetEventsIdRequest("molestiae");            

            GetEventsIdResponse res = sdk.events.getEventsId(req);

            if (res.event != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScenariosIdEvents

Lists events belonging to a scenario by their ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScenariosIdEventsRequest;
import org.openapis.openapi.models.operations.GetScenariosIdEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetScenariosIdEventsRequest req = new GetScenariosIdEventsRequest("error", 158969L, "quis");            

            GetScenariosIdEventsResponse res = sdk.events.getScenariosIdEvents(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdEvents

Lists events belonging to a user by their ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdEventsRequest;
import org.openapis.openapi.models.operations.GetUsersIdEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersIdEventsRequest req = new GetUsersIdEventsRequest("laborum", 656330L, "enim");            

            GetUsersIdEventsResponse res = sdk.events.getUsersIdEvents(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postScenariosIdEvents

Creates an event in a scenario by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostScenariosIdEventsRequest;
import org.openapis.openapi.models.operations.PostScenariosIdEventsRequestBody;
import org.openapis.openapi.models.operations.PostScenariosIdEventsRequestBodyRepeatTypeEnum;
import org.openapis.openapi.models.operations.PostScenariosIdEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostScenariosIdEventsRequest req = new PostScenariosIdEventsRequest(778346L) {{
                requestBody = new PostScenariosIdEventsRequestBody(11.5, 42L, "2020-10-27", PostScenariosIdEventsRequestBodyRepeatTypeEnum.WEEKLY) {{
                    note = "New beers for sampling over the weekends.";
                    repeatInterval = 1L;
                }};;
            }};            

            PostScenariosIdEventsResponse res = sdk.events.postScenariosIdEvents(req);

            if (res.event != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putEventsId

Updates an event by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEventsIdRequest;
import org.openapis.openapi.models.operations.PutEventsIdRequestBody;
import org.openapis.openapi.models.operations.PutEventsIdRequestBodyBehaviourEnum;
import org.openapis.openapi.models.operations.PutEventsIdRequestBodyRepeatTypeEnum;
import org.openapis.openapi.models.operations.PutEventsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEventsIdRequest req = new PutEventsIdRequest("tenetur") {{
                requestBody = new PutEventsIdRequestBody(PutEventsIdRequestBodyBehaviourEnum.ALL) {{
                    amount = 11.5;
                    note = "Need more beer.";
                    repeatInterval = 1L;
                    repeatType = PutEventsIdRequestBodyRepeatTypeEnum.WEEKLY;
                }};;
            }};            

            PutEventsIdResponse res = sdk.events.putEventsId(req);

            if (res.event != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
