# volumeActions

### Available Operations

* [getVolumesIdActions](#getvolumesidactions) - Get all Actions for a Volume
* [getVolumesIdActionsActionId](#getvolumesidactionsactionid) - Get an Action for a Volume
* [postVolumesIdActionsAttach](#postvolumesidactionsattach) - Attach Volume to a Server
* [postVolumesIdActionsChangeProtection](#postvolumesidactionschangeprotection) - Change Volume Protection
* [postVolumesIdActionsDetach](#postvolumesidactionsdetach) - Detach Volume
* [postVolumesIdActionsResize](#postvolumesidactionsresize) - Resize Volume

## getVolumesIdActions

Returns all Action objects for a Volume. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVolumesIdActionsRequest;
import org.openapis.openapi.models.operations.GetVolumesIdActionsResponse;
import org.openapis.openapi.models.operations.GetVolumesIdActionsSortParameterSortEnum;
import org.openapis.openapi.models.operations.GetVolumesIdActionsStatusParameterStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVolumesIdActionsRequest req = new GetVolumesIdActionsRequest(630448L) {{
                sort = GetVolumesIdActionsSortParameterSortEnum.STARTED;
                status = GetVolumesIdActionsStatusParameterStatusEnum.ERROR;
            }};            

            GetVolumesIdActionsResponse res = sdk.volumeActions.getVolumesIdActions(req);

            if (res.actionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVolumesIdActionsActionId

Returns a specific Action for a Volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVolumesIdActionsActionIdRequest;
import org.openapis.openapi.models.operations.GetVolumesIdActionsActionIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVolumesIdActionsActionIdRequest req = new GetVolumesIdActionsActionIdRequest(498140L, 293020L);            

            GetVolumesIdActionsActionIdResponse res = sdk.volumeActions.getVolumesIdActionsActionId(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVolumesIdActionsAttach

Attaches a Volume to a Server. Works only if the Server is in the same Location as the Volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVolumesIdActionsAttachAttachVolumeRequest;
import org.openapis.openapi.models.operations.PostVolumesIdActionsAttachRequest;
import org.openapis.openapi.models.operations.PostVolumesIdActionsAttachResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostVolumesIdActionsAttachRequest req = new PostVolumesIdActionsAttachRequest(844550L) {{
                requestBody = new PostVolumesIdActionsAttachAttachVolumeRequest(43L) {{
                    automount = false;
                }};;
            }};            

            PostVolumesIdActionsAttachResponse res = sdk.volumeActions.postVolumesIdActionsAttach(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVolumesIdActionsChangeProtection

Changes the protection configuration of a Volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVolumesIdActionsChangeProtectionRequest;
import org.openapis.openapi.models.operations.PostVolumesIdActionsChangeProtectionRequestBody;
import org.openapis.openapi.models.operations.PostVolumesIdActionsChangeProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostVolumesIdActionsChangeProtectionRequest req = new PostVolumesIdActionsChangeProtectionRequest(848944L) {{
                requestBody = new PostVolumesIdActionsChangeProtectionRequestBody() {{
                    delete = true;
                }};;
            }};            

            PostVolumesIdActionsChangeProtectionResponse res = sdk.volumeActions.postVolumesIdActionsChangeProtection(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVolumesIdActionsDetach

Detaches a Volume from the Server it’s attached to. You may attach it to a Server again at a later time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVolumesIdActionsDetachRequest;
import org.openapis.openapi.models.operations.PostVolumesIdActionsDetachResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostVolumesIdActionsDetachRequest req = new PostVolumesIdActionsDetachRequest(194342L);            

            PostVolumesIdActionsDetachResponse res = sdk.volumeActions.postVolumesIdActionsDetach(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVolumesIdActionsResize

Changes the size of a Volume. Note that downsizing a Volume is not possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVolumesIdActionsResizeRequest;
import org.openapis.openapi.models.operations.PostVolumesIdActionsResizeRequestBody;
import org.openapis.openapi.models.operations.PostVolumesIdActionsResizeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostVolumesIdActionsResizeRequest req = new PostVolumesIdActionsResizeRequest(617877L) {{
                requestBody = new PostVolumesIdActionsResizeRequestBody(50);;
            }};            

            PostVolumesIdActionsResizeResponse res = sdk.volumeActions.postVolumesIdActionsResize(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
