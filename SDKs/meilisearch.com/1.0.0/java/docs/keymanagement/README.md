# keyManagement

### Available Operations

* [createAKey](#createakey) - Create a key
* [deleteAKey](#deleteakey) - Delete a key
* [getKeys](#getkeys) - Get keys
* [getOneKey](#getonekey) - Get one key
* [updateAKey](#updateakey) - Update a key

## createAKey

Create a key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAKeyRequestBody;
import org.openapis.openapi.models.operations.CreateAKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAKeyRequestBody req = new CreateAKeyRequestBody() {{
                actions = new String[]{{
                    add("documents.add"),
                    add("documents.add"),
                    add("documents.add"),
                }};
                description = "Key to add and delete documents, in `books` index.";
                expiresAt = "suscipit";
                indexes = new String[]{{
                    add("books"),
                    add("books"),
                }};
                name = "docs-key";
            }};            

            CreateAKeyResponse res = sdk.keyManagement.createAKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAKey

Delete a key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAKeyResponse res = sdk.keyManagement.deleteAKey();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKeys

Get keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeysRequest;
import org.openapis.openapi.models.operations.GetKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetKeysRequest req = new GetKeysRequest() {{
                limit = "10";
                offset = "0";
            }};            

            GetKeysResponse res = sdk.keyManagement.getKeys(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOneKey

Get one key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOneKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOneKeyResponse res = sdk.keyManagement.getOneKey();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAKey

Update a key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAKeyRequestBody;
import org.openapis.openapi.models.operations.UpdateAKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAKeyRequestBody req = new UpdateAKeyRequestBody() {{
                description = "Key to add and delete documents, but also to create indexes, in `book` index.";
            }};            

            UpdateAKeyResponse res = sdk.keyManagement.updateAKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
