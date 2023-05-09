# objectAccessControls

### Available Operations

* [storageObjectAccessControlsDelete](#storageobjectaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified object.
* [storageObjectAccessControlsGet](#storageobjectaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified object.
* [storageObjectAccessControlsInsert](#storageobjectaccesscontrolsinsert) - Creates a new ACL entry on the specified object.
* [storageObjectAccessControlsList](#storageobjectaccesscontrolslist) - Retrieves ACL entries on the specified object.
* [storageObjectAccessControlsPatch](#storageobjectaccesscontrolspatch) - Updates an ACL entry on the specified object. This method supports patch semantics.
* [storageObjectAccessControlsUpdate](#storageobjectaccesscontrolsupdate) - Updates an ACL entry on the specified object.

## storageObjectAccessControlsDelete

Permanently deletes the ACL entry for the specified entity on the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsDeleteRequest;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsDeleteResponse;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectAccessControlsDeleteRequest req = new StorageObjectAccessControlsDeleteRequest("nemo", "quos", "eius") {{
                alt = AltEnum.JSON;
                fields = "aspernatur";
                generation = "ducimus";
                key = "nesciunt";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "laudantium";
                userIp = "incidunt";
            }};            

            StorageObjectAccessControlsDeleteResponse res = sdk.objectAccessControls.storageObjectAccessControlsDelete(req, new StorageObjectAccessControlsDeleteSecurity("quasi", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectAccessControlsGet

Returns the ACL entry for the specified entity on the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsGetRequest;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsGetResponse;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectAccessControlsGetRequest req = new StorageObjectAccessControlsGetRequest("fugiat", "dicta", "nisi") {{
                alt = AltEnum.JSON;
                fields = "consequuntur";
                generation = "consectetur";
                key = "aperiam";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "reiciendis";
                userIp = "soluta";
            }};            

            StorageObjectAccessControlsGetResponse res = sdk.objectAccessControls.storageObjectAccessControlsGet(req, new StorageObjectAccessControlsGetSecurity("alias", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.objectAccessControl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectAccessControlsInsert

Creates a new ACL entry on the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsInsertRequest;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsInsertResponse;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectAccessControl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectAccessControlsInsertRequest req = new StorageObjectAccessControlsInsertRequest("eos", "occaecati") {{
                objectAccessControl = new ObjectAccessControl() {{
                    bucket = "iste";
                    domain = "magni";
                    email = "Marques_Tillman60@gmail.com";
                    entity = "delectus";
                    entityId = "minima";
                    etag = "praesentium";
                    generation = "maxime";
                    id = "4d86e68e-4be0-4560-93f5-9da757a59ecf";
                    kind = "necessitatibus";
                    object = "asperiores";
                    role = "ex";
                    selfLink = "voluptas";
                }};;
                alt = AltEnum.JSON;
                fields = "debitis";
                generation = "delectus";
                key = "quae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "fuga";
                userIp = "laborum";
            }};            

            StorageObjectAccessControlsInsertResponse res = sdk.objectAccessControls.storageObjectAccessControlsInsert(req, new StorageObjectAccessControlsInsertSecurity("consectetur", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.objectAccessControl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectAccessControlsList

Retrieves ACL entries on the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsListRequest;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsListResponse;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectAccessControlsListRequest req = new StorageObjectAccessControlsListRequest("atque", "ipsum") {{
                alt = AltEnum.JSON;
                fields = "impedit";
                generation = "magni";
                key = "soluta";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "nam";
                userIp = "dolore";
            }};            

            StorageObjectAccessControlsListResponse res = sdk.objectAccessControls.storageObjectAccessControlsList(req, new StorageObjectAccessControlsListSecurity("iusto", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.objectAccessControls != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectAccessControlsPatch

Updates an ACL entry on the specified object. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsPatchRequest;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsPatchResponse;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectAccessControl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectAccessControlsPatchRequest req = new StorageObjectAccessControlsPatchRequest("sequi", "dignissimos", "neque") {{
                objectAccessControl = new ObjectAccessControl() {{
                    bucket = "quo";
                    domain = "deleniti";
                    email = "Hyman.Conn30@hotmail.com";
                    entity = "quibusdam";
                    entityId = "inventore";
                    etag = "facere";
                    generation = "libero";
                    id = "1f2c4310-661e-4963-89e1-cf9e06e3a437";
                    kind = "sit";
                    object = "doloremque";
                    role = "consequatur";
                    selfLink = "officia";
                }};;
                alt = AltEnum.JSON;
                fields = "recusandae";
                generation = "ea";
                key = "quidem";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "facilis";
                userIp = "placeat";
            }};            

            StorageObjectAccessControlsPatchResponse res = sdk.objectAccessControls.storageObjectAccessControlsPatch(req, new StorageObjectAccessControlsPatchSecurity("perspiciatis", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.objectAccessControl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectAccessControlsUpdate

Updates an ACL entry on the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsUpdateRequest;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsUpdateResponse;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectAccessControl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectAccessControlsUpdateRequest req = new StorageObjectAccessControlsUpdateRequest("deleniti", "a", "voluptate") {{
                objectAccessControl = new ObjectAccessControl() {{
                    bucket = "ullam";
                    domain = "unde";
                    email = "Madeline.Russel@hotmail.com";
                    entity = "est";
                    entityId = "error";
                    etag = "esse";
                    generation = "labore";
                    id = "1d311352-965b-4b8a-b202-611435e139db";
                    kind = "maxime";
                    object = "quia";
                    role = "quia";
                    selfLink = "nostrum";
                }};;
                alt = AltEnum.JSON;
                fields = "omnis";
                generation = "libero";
                key = "dicta";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "libero";
                userIp = "fugiat";
            }};            

            StorageObjectAccessControlsUpdateResponse res = sdk.objectAccessControls.storageObjectAccessControlsUpdate(req, new StorageObjectAccessControlsUpdateSecurity("officia", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.objectAccessControl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
