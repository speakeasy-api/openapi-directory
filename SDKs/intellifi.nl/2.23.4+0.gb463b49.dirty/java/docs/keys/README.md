# keys

## Overview

The `keys` resource contains the access keys used to authenticate requests to this API.

Note that this resource is only accessible for administrator users logged into the Brain Management Console.
It is not possible to access this resource using API key authentication.
This resource is therefore irrelevant to most applications.


### Available Operations

* [addKey](#addkey) - Create key
* [deleteKey](#deletekey) - Delete key
* [getKeyById](#getkeybyid) - Get key
* [getKeys](#getkeys) - Get all keys
* [updateKey](#updatekey) - Update existing key

## addKey

Can only be used by an **administrative** user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddKeyResponse;
import org.openapis.openapi.models.operations.AddKeySecurity;
import org.openapis.openapi.models.shared.KeyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.KeyInput req = new KeyInput() {{
                isReadOnly = false;
                label = "omnis";
            }};            

            AddKeyResponse res = sdk.keys.addKey(req, new AddKeySecurity("nemo") {{
                cookieSid = "YOUR_API_KEY_HERE";
            }});

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteKey

Can only be used by an **administrative** user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteKeyRequest;
import org.openapis.openapi.models.operations.DeleteKeyResponse;
import org.openapis.openapi.models.operations.DeleteKeySecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteKeyRequest req = new DeleteKeyRequest("minima");            

            DeleteKeyResponse res = sdk.keys.deleteKey(req, new DeleteKeySecurity("excepturi") {{
                cookieSid = "YOUR_API_KEY_HERE";
            }});

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKeyById

Can only be used by an **administrative** user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeyByIdRequest;
import org.openapis.openapi.models.operations.GetKeyByIdResponse;
import org.openapis.openapi.models.operations.GetKeyByIdSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetKeyByIdRequest req = new GetKeyByIdRequest("accusantium");            

            GetKeyByIdResponse res = sdk.keys.getKeyById(req, new GetKeyByIdSecurity("iure") {{
                cookieSid = "YOUR_API_KEY_HERE";
            }});

            if (res.key != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKeys

Can only be used by an **administrative** user.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeysRequest;
import org.openapis.openapi.models.operations.GetKeysResponse;
import org.openapis.openapi.models.operations.GetKeysSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetKeysRequest req = new GetKeysRequest() {{
                after = OffsetDateTime.parse("2021-01-09T11:41:25.666Z");
                afterId = "sapiente";
                before = "architecto";
                beforeId = "mollitia";
                from = "dolorem";
                fromId = "culpa";
                id = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                isReadOnly = false;
                label = "consequuntur";
                limit = 995300L;
                populate = "mollitia";
                resultsOnly = false;
                secret = "occaecati";
                select = "numquam";
                sort = "commodi";
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeUpdated = "2018-08-30T09:51:59.737Z";
                timeoutS = 4663.11;
                until = "molestiae";
                untilId = "velit";
            }};            

            GetKeysResponse res = sdk.keys.getKeys(req, new GetKeysSecurity("error") {{
                cookieSid = "YOUR_API_KEY_HERE";
            }});

            if (res.getKeys200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateKey

Can only be used by an **administrative** user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateKeyRequest;
import org.openapis.openapi.models.operations.UpdateKeyResponse;
import org.openapis.openapi.models.operations.UpdateKeySecurity;
import org.openapis.openapi.models.shared.KeyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateKeyRequest req = new UpdateKeyRequest(                new KeyInput() {{
                                isReadOnly = false;
                                label = "quia";
                            }};, "quis");            

            UpdateKeyResponse res = sdk.keys.updateKey(req, new UpdateKeySecurity("vitae") {{
                cookieSid = "YOUR_API_KEY_HERE";
            }});

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
