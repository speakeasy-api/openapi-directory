# attachment

### Available Operations

* [createAttachment](#createattachment)
* [deleteAttachment](#deleteattachment)

## createAttachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAttachmentRequest;
import org.openapis.openapi.models.operations.CreateAttachmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAttachmentRequest req = new CreateAttachmentRequest("quibusdam", "unde", "nulla");            

            CreateAttachmentResponse res = sdk.attachment.createAttachment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAttachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAttachmentRequest;
import org.openapis.openapi.models.operations.DeleteAttachmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAttachmentRequest req = new DeleteAttachmentRequest("corrupti", "illum", "vel");            

            DeleteAttachmentResponse res = sdk.attachment.deleteAttachment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
