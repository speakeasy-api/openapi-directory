# dpsMessage

### Available Operations

* [deleteDpsMessage](#deletedpsmessage) - Deletes the DPS message
* [getDpsMessageFromEmployer](#getdpsmessagefromemployer) - Gets the DPS message
* [getDpsMessagesFromEmployer](#getdpsmessagesfromemployer) - Gets the DPS messages
* [patchDpsMessage](#patchdpsmessage) - Patches the DPS message
* [postDpsMessage](#postdpsmessage) - Posta the DPS message
* [putDpsMessage](#putdpsmessage) - Puts the DPS message

## deleteDpsMessage

Deletes the DPS message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDpsMessageRequest;
import org.openapis.openapi.models.operations.DeleteDpsMessageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDpsMessageRequest req = new DeleteDpsMessageRequest("ea", "accusantium", "ab", "maiores");            

            DeleteDpsMessageResponse res = sdk.dpsMessage.deleteDpsMessage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDpsMessageFromEmployer

Gets the DPS message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDpsMessageFromEmployerRequest;
import org.openapis.openapi.models.operations.GetDpsMessageFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDpsMessageFromEmployerRequest req = new GetDpsMessageFromEmployerRequest("quidem", "ipsam", "voluptate", "autem");            

            GetDpsMessageFromEmployerResponse res = sdk.dpsMessage.getDpsMessageFromEmployer(req);

            if (res.dpsMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDpsMessagesFromEmployer

Gets the DPS message links

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDpsMessagesFromEmployerRequest;
import org.openapis.openapi.models.operations.GetDpsMessagesFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDpsMessagesFromEmployerRequest req = new GetDpsMessagesFromEmployerRequest("nam", "eaque", "pariatur");            

            GetDpsMessagesFromEmployerResponse res = sdk.dpsMessage.getDpsMessagesFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchDpsMessage

Patches the specified DPS message with the supplied values

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchDpsMessageRequest;
import org.openapis.openapi.models.operations.PatchDpsMessageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchDpsMessageRequest req = new PatchDpsMessageRequest("nemo", "voluptatibus", "perferendis", "fugiat");            

            PatchDpsMessageResponse res = sdk.dpsMessage.patchDpsMessage(req);

            if (res.dpsMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDpsMessage

Insert new DPS message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDpsMessageRequest;
import org.openapis.openapi.models.operations.PostDpsMessageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostDpsMessageRequest req = new PostDpsMessageRequest("amet", "aut", "cumque");            

            PostDpsMessageResponse res = sdk.dpsMessage.postDpsMessage(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDpsMessage

Puts the DPS message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDpsMessageRequest;
import org.openapis.openapi.models.operations.PutDpsMessageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutDpsMessageRequest req = new PutDpsMessageRequest("corporis", "hic", "libero", "nobis");            

            PutDpsMessageResponse res = sdk.dpsMessage.putDpsMessage(req);

            if (res.dpsMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
