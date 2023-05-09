# hooks

## Overview

Hooks allows configuring Truora Platform to notify via requests to your service (or another third-party service) whenever an event occurs in Truora Platform. They are the easiest way to get a warning when something happens in another system, in this case, Truora platform. This service allows sending notifications via requests to your service or another third-party service whenever certain events occur.

### Available Operations

* [createHook](#createhook) - Creates a hook subscription
* [deletHook](#delethook) - Deletes hook
* [listHook](#listhook) - Lists all hooks
* [updateHook](#updatehook) - Updates hook

## createHook

Creates a hook subscription to notify events in Truora plataform. Subscriptions broadcast data as events occur and additional subscription instances are not required in order to refresh the information. Events are received in an array as a JWT and are decoded using the signing key returned by this endpoint. Their structure is as follows:

```
{
    "events": [
        {
            "event_action": "created",
            "event_type": "check",
            "id": "HKEdd28c569cf5eb74e45f0f4c092096e62c1c95ba2",
            "object": {
                "check_id": "CHK9c39003424c521aec8566ce59e1ddc86",
                "country": "CO",
                "creation_date": "2020-04-01T23:00:30.581232281Z",
                "homonym_score": 0,
                "id_score": 0,
                "national_id": "1151959906",
                "previous_check": "CHK4ec814fecd147eaae41027081d7d5caf",
                "score": -1,
                "status": "not_started",
                "type": "person",
                "update_date": "2020-04-01T23:00:30.680937413Z"
            },
            "timestamp": "2020-04-01T23:00:30Z",
            "version": "1.0"
        }
    ],
    "iat": 1585782031,
    "iss": "Truora"
}
```

Keep in mind that the object attribute varies depending on the event_type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHookResponse;
import org.openapis.openapi.models.operations.CreateHookSecurity;
import org.openapis.openapi.models.shared.CreateHookInput;
import org.openapis.openapi.models.shared.CreateHookInputEventTypeEnum;
import org.openapis.openapi.models.shared.CreateHookInputStatusEnum;
import org.openapis.openapi.models.shared.CreateHookInputSubscriberLanguageEnum;
import org.openapis.openapi.models.shared.CreateHookInputSubscriberTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateHookInput req = new CreateHookInput(CreateHookInputEventTypeEnum.CHECK, CreateHookInputSubscriberTypeEnum.WEB) {{
                actions = new String[]{{
                    add("quo"),
                }};
                status = CreateHookInputStatusEnum.ENABLED;
                subscriberAddress = "tenetur";
                subscriberLanguage = CreateHookInputSubscriberLanguageEnum.HI;
                subscriberName = "id";
                subscriberUrl = "possimus";
            }};            

            CreateHookResponse res = sdk.hooks.createHook(req, new CreateHookSecurity("aut") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletHook

Deletes hook configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletHookRequest;
import org.openapis.openapi.models.operations.DeletHookResponse;
import org.openapis.openapi.models.operations.DeletHookSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletHookRequest req = new DeletHookRequest("quasi");            

            DeletHookResponse res = sdk.hooks.deletHook(req, new DeletHookSecurity("error") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deletHook200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHook

Lists all the configured hooks in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHookResponse;
import org.openapis.openapi.models.operations.ListHookSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListHookResponse res = sdk.hooks.listHook(new ListHookSecurity("temporibus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.hookOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateHook

Updates a hook configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateHookRequest;
import org.openapis.openapi.models.operations.UpdateHookResponse;
import org.openapis.openapi.models.operations.UpdateHookSecurity;
import org.openapis.openapi.models.shared.CreateHookInput;
import org.openapis.openapi.models.shared.CreateHookInputEventTypeEnum;
import org.openapis.openapi.models.shared.CreateHookInputStatusEnum;
import org.openapis.openapi.models.shared.CreateHookInputSubscriberLanguageEnum;
import org.openapis.openapi.models.shared.CreateHookInputSubscriberTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateHookRequest req = new UpdateHookRequest(                new CreateHookInput(CreateHookInputEventTypeEnum.CONTINUOUS_CHECK, CreateHookInputSubscriberTypeEnum.WEB) {{
                                actions = new String[]{{
                                    add("voluptatibus"),
                                    add("vero"),
                                    add("nihil"),
                                    add("praesentium"),
                                }};
                                status = CreateHookInputStatusEnum.DISABLED;
                                subscriberAddress = "ipsa";
                                subscriberLanguage = CreateHookInputSubscriberLanguageEnum.NL;
                                subscriberName = "voluptate";
                                subscriberUrl = "cum";
                            }};, "perferendis");            

            UpdateHookResponse res = sdk.hooks.updateHook(req, new UpdateHookSecurity("doloremque") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
