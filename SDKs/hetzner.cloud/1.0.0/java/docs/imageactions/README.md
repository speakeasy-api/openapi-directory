# imageActions

### Available Operations

* [getImagesIdActions](#getimagesidactions) - Get all Actions for an Image
* [getImagesIdActionsActionId](#getimagesidactionsactionid) - Get an Action for an Image
* [postImagesIdActionsChangeProtection](#postimagesidactionschangeprotection) - Change Image Protection

## getImagesIdActions

Returns all Action objects for an Image. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImagesIdActionsRequest;
import org.openapis.openapi.models.operations.GetImagesIdActionsResponse;
import org.openapis.openapi.models.operations.GetImagesIdActionsSortParameterSortEnum;
import org.openapis.openapi.models.operations.GetImagesIdActionsStatusParameterStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImagesIdActionsRequest req = new GetImagesIdActionsRequest(249796L) {{
                sort = GetImagesIdActionsSortParameterSortEnum.PROGRESS_ASC;
                status = GetImagesIdActionsStatusParameterStatusEnum.RUNNING;
            }};            

            GetImagesIdActionsResponse res = sdk.imageActions.getImagesIdActions(req);

            if (res.actionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImagesIdActionsActionId

Returns a specific Action for an Image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImagesIdActionsActionIdRequest;
import org.openapis.openapi.models.operations.GetImagesIdActionsActionIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImagesIdActionsActionIdRequest req = new GetImagesIdActionsActionIdRequest(881736L, 965417L);            

            GetImagesIdActionsActionIdResponse res = sdk.imageActions.getImagesIdActionsActionId(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postImagesIdActionsChangeProtection

Changes the protection configuration of the Image. Can only be used on snapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostImagesIdActionsChangeProtectionRequest;
import org.openapis.openapi.models.operations.PostImagesIdActionsChangeProtectionRequestBody;
import org.openapis.openapi.models.operations.PostImagesIdActionsChangeProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostImagesIdActionsChangeProtectionRequest req = new PostImagesIdActionsChangeProtectionRequest(692532L) {{
                requestBody = new PostImagesIdActionsChangeProtectionRequestBody() {{
                    delete = true;
                }};;
            }};            

            PostImagesIdActionsChangeProtectionResponse res = sdk.imageActions.postImagesIdActionsChangeProtection(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
