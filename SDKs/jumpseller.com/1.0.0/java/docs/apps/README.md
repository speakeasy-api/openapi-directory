# apps

### Available Operations

* [deleteJsappsCodeJson](#deletejsappscodejson) - Delete an existing JSApp.
* [getJsappsJson](#getjsappsjson) - Retrieve all the Store's JSApps.
* [getJsappsCodeJson](#getjsappscodejson) - Retrieve a JSApp.
* [postJsappsJson](#postjsappsjson) - Create a Store JSApp.

## deleteJsappsCodeJson

Delete an existing JSApp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteJsappsCodeJsonRequest;
import org.openapis.openapi.models.operations.DeleteJsappsCodeJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteJsappsCodeJsonRequest req = new DeleteJsappsCodeJsonRequest("quibusdam", "unde", "nulla");            

            DeleteJsappsCodeJsonResponse res = sdk.apps.deleteJsappsCodeJson(req);

            if (res.deleteJsappsCodeJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJsappsJson

Retrieve all the Store's JSApps.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJsappsJsonRequest;
import org.openapis.openapi.models.operations.GetJsappsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJsappsJsonRequest req = new GetJsappsJsonRequest("corrupti", "illum");            

            GetJsappsJsonResponse res = sdk.apps.getJsappsJson(req);

            if (res.app != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJsappsCodeJson

Retrieve a JSApp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJsappsCodeJsonRequest;
import org.openapis.openapi.models.operations.GetJsappsCodeJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJsappsCodeJsonRequest req = new GetJsappsCodeJsonRequest("vel", "error", "deserunt");            

            GetJsappsCodeJsonResponse res = sdk.apps.getJsappsCodeJson(req);

            if (res.jsApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postJsappsJson

Create a Store JSApp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostJsappsJsonRequest;
import org.openapis.openapi.models.operations.PostJsappsJsonResponse;
import org.openapis.openapi.models.shared.JSApp;
import org.openapis.openapi.models.shared.JSAppEdit;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostJsappsJsonRequest req = new PostJsappsJsonRequest(                new JSAppEdit() {{
                                app = new JSApp() {{
                                    element = "suscipit";
                                    template = "iure";
                                    url = "magnam";
                                }};;
                            }};, "debitis", "ipsa");            

            PostJsappsJsonResponse res = sdk.apps.postJsappsJson(req);

            if (res.jsApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
