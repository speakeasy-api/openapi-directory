# actions

### Available Operations

* [actionsGet](#actionsget) - Gets all available Actions of a Device
* [actionsPostForm](#actionspostform) - Set an action for the specified device.
* [actionsPostJson](#actionspostjson) - Set an action for the specified device.
* [actionsPostRaw](#actionspostraw) - Set an action for the specified device.

## actionsGet

Gets all available Actions of a Device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetRequest;
import org.openapis.openapi.models.operations.ActionsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetRequest req = new ActionsGetRequest("illum");            

            ActionsGetResponse res = sdk.actions.actionsGet(req);

            if (res.actionInformations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsPostForm

Set an action for the specified device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsPostFormResponse;
import org.openapis.openapi.models.shared.ActionToPost;
import org.openapis.openapi.models.shared.ActionToPostItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ActionToPost req = new ActionToPost() {{
                actions = new org.openapis.openapi.models.shared.ActionToPostItem[]{{
                    add(new ActionToPostItem() {{
                        obisCode = "error";
                        value = 6458.94;
                    }}),
                    add(new ActionToPostItem() {{
                        obisCode = "suscipit";
                        value = 4375.87;
                    }}),
                }};
                deviceID = "magnam";
            }};            

            ActionsPostFormResponse res = sdk.actions.actionsPostForm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsPostJson

Set an action for the specified device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsPostJsonResponse;
import org.openapis.openapi.models.shared.ActionToPost;
import org.openapis.openapi.models.shared.ActionToPostItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ActionToPost req = new ActionToPost() {{
                actions = new org.openapis.openapi.models.shared.ActionToPostItem[]{{
                    add(new ActionToPostItem() {{
                        obisCode = "ipsa";
                        value = 9636.63;
                    }}),
                    add(new ActionToPostItem() {{
                        obisCode = "tempora";
                        value = 3834.41;
                    }}),
                    add(new ActionToPostItem() {{
                        obisCode = "molestiae";
                        value = 7917.25;
                    }}),
                    add(new ActionToPostItem() {{
                        obisCode = "placeat";
                        value = 5288.95;
                    }}),
                }};
                deviceID = "iusto";
            }};            

            ActionsPostJsonResponse res = sdk.actions.actionsPostJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsPostRaw

Set an action for the specified device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsPostRawResponse;
import org.openapis.openapi.models.shared.ActionToPost;
import org.openapis.openapi.models.shared.ActionToPostItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "excepturi".getBytes()            

            ActionsPostRawResponse res = sdk.actions.actionsPostRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
