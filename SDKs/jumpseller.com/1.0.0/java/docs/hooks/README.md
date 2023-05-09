# hooks

### Available Operations

* [deleteHooksIdJson](#deletehooksidjson) - Delete an existing Hook.
* [getHooksJson](#gethooksjson) - Retrieve all Hooks.
* [getHooksIdJson](#gethooksidjson) - Retrieve a single Hook.
* [postHooksJson](#posthooksjson) - Create a new Hook.
* [putHooksIdJson](#puthooksidjson) - Update a Hook.

## deleteHooksIdJson

Delete an existing Hook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHooksIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteHooksIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteHooksIdJsonRequest req = new DeleteHooksIdJsonRequest("delectus", 311945, "quos");            

            DeleteHooksIdJsonResponse res = sdk.hooks.deleteHooksIdJson(req);

            if (res.deleteHooksIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHooksJson

Retrieve all Hooks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHooksJsonRequest;
import org.openapis.openapi.models.operations.GetHooksJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHooksJsonRequest req = new GetHooksJsonRequest("aliquid", "dolorem") {{
                limit = 209843L;
                page = 222443L;
            }};            

            GetHooksJsonResponse res = sdk.hooks.getHooksJson(req);

            if (res.hooks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHooksIdJson

Retrieve a single Hook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHooksIdJsonRequest;
import org.openapis.openapi.models.operations.GetHooksIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHooksIdJsonRequest req = new GetHooksIdJsonRequest("qui", 218749, "hic");            

            GetHooksIdJsonResponse res = sdk.hooks.getHooksIdJson(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postHooksJson

Create a new Hook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostHooksJsonRequest;
import org.openapis.openapi.models.operations.PostHooksJsonResponse;
import org.openapis.openapi.models.shared.HookEdit;
import org.openapis.openapi.models.shared.HookEditFields;
import org.openapis.openapi.models.shared.HookEditFieldsEventEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostHooksJsonRequest req = new PostHooksJsonRequest(                new HookEdit() {{
                                hook = new HookEditFields(HookEditFieldsEventEnum.PRODUCT_CREATED, "cum");;
                            }};, "voluptate", "dignissimos");            

            PostHooksJsonResponse res = sdk.hooks.postHooksJson(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putHooksIdJson

Update a Hook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutHooksIdJsonRequest;
import org.openapis.openapi.models.operations.PutHooksIdJsonResponse;
import org.openapis.openapi.models.shared.HookEdit;
import org.openapis.openapi.models.shared.HookEditFields;
import org.openapis.openapi.models.shared.HookEditFieldsEventEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutHooksIdJsonRequest req = new PutHooksIdJsonRequest(                new HookEdit() {{
                                hook = new HookEditFields(HookEditFieldsEventEnum.CUSTOMER_DELETED, "amet");;
                            }};, "dolorum", 254356, "veritatis");            

            PutHooksIdJsonResponse res = sdk.hooks.putHooksIdJson(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
