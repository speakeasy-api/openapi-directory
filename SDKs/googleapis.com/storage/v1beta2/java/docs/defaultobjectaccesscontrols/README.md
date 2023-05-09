# defaultObjectAccessControls

### Available Operations

* [storageDefaultObjectAccessControlsDelete](#storagedefaultobjectaccesscontrolsdelete) - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* [storageDefaultObjectAccessControlsGet](#storagedefaultobjectaccesscontrolsget) - Returns the default object ACL entry for the specified entity on the specified bucket.
* [storageDefaultObjectAccessControlsInsert](#storagedefaultobjectaccesscontrolsinsert) - Creates a new default object ACL entry on the specified bucket.
* [storageDefaultObjectAccessControlsList](#storagedefaultobjectaccesscontrolslist) - Retrieves default object ACL entries on the specified bucket.
* [storageDefaultObjectAccessControlsPatch](#storagedefaultobjectaccesscontrolspatch) - Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
* [storageDefaultObjectAccessControlsUpdate](#storagedefaultobjectaccesscontrolsupdate) - Updates a default object ACL entry on the specified bucket.

## storageDefaultObjectAccessControlsDelete

Permanently deletes the default object ACL entry for the specified entity on the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsDeleteRequest;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsDeleteResponse;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageDefaultObjectAccessControlsDeleteRequest req = new StorageDefaultObjectAccessControlsDeleteRequest("eum", "dicta") {{
                alt = AltEnum.JSON;
                fields = "minima";
                key = "beatae";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "provident";
                userIp = "earum";
            }};            

            StorageDefaultObjectAccessControlsDeleteResponse res = sdk.defaultObjectAccessControls.storageDefaultObjectAccessControlsDelete(req, new StorageDefaultObjectAccessControlsDeleteSecurity("soluta", "hic") {{
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

## storageDefaultObjectAccessControlsGet

Returns the default object ACL entry for the specified entity on the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsGetRequest;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsGetResponse;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageDefaultObjectAccessControlsGetRequest req = new StorageDefaultObjectAccessControlsGetRequest("illum", "eaque") {{
                alt = AltEnum.JSON;
                fields = "earum";
                key = "perspiciatis";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "debitis";
                userIp = "aliquid";
            }};            

            StorageDefaultObjectAccessControlsGetResponse res = sdk.defaultObjectAccessControls.storageDefaultObjectAccessControlsGet(req, new StorageDefaultObjectAccessControlsGetSecurity("porro", "suscipit") {{
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

## storageDefaultObjectAccessControlsInsert

Creates a new default object ACL entry on the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsInsertRequest;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsInsertResponse;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectAccessControl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageDefaultObjectAccessControlsInsertRequest req = new StorageDefaultObjectAccessControlsInsertRequest("dolorem") {{
                objectAccessControl = new ObjectAccessControl() {{
                    bucket = "fugit";
                    domain = "cumque";
                    email = "Claire_OKon0@hotmail.com";
                    entity = "quasi";
                    entityId = "et";
                    etag = "ducimus";
                    generation = "natus";
                    id = "96312fde-0477-4177-8ff6-1d017476360a";
                    kind = "sunt";
                    object = "nostrum";
                    role = "fugiat";
                    selfLink = "expedita";
                }};;
                alt = AltEnum.JSON;
                fields = "aliquid";
                key = "officia";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "aliquid";
                userIp = "perferendis";
            }};            

            StorageDefaultObjectAccessControlsInsertResponse res = sdk.defaultObjectAccessControls.storageDefaultObjectAccessControlsInsert(req, new StorageDefaultObjectAccessControlsInsertSecurity("eum", "voluptas") {{
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

## storageDefaultObjectAccessControlsList

Retrieves default object ACL entries on the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsListRequest;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsListResponse;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageDefaultObjectAccessControlsListRequest req = new StorageDefaultObjectAccessControlsListRequest("iste") {{
                alt = AltEnum.JSON;
                fields = "id";
                ifMetagenerationMatch = "ab";
                ifMetagenerationNotMatch = "error";
                key = "possimus";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "mollitia";
                userIp = "laborum";
            }};            

            StorageDefaultObjectAccessControlsListResponse res = sdk.defaultObjectAccessControls.storageDefaultObjectAccessControlsList(req, new StorageDefaultObjectAccessControlsListSecurity("libero", "ad") {{
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

## storageDefaultObjectAccessControlsPatch

Updates a default object ACL entry on the specified bucket. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsPatchRequest;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsPatchResponse;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectAccessControl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageDefaultObjectAccessControlsPatchRequest req = new StorageDefaultObjectAccessControlsPatchRequest("deleniti", "enim") {{
                objectAccessControl = new ObjectAccessControl() {{
                    bucket = "vitae";
                    domain = "repellendus";
                    email = "Oral32@yahoo.com";
                    entity = "expedita";
                    entityId = "voluptatem";
                    etag = "molestias";
                    generation = "cum";
                    id = "61891baa-0fe1-4ade-808e-6f8c5f350d8c";
                    kind = "quibusdam";
                    object = "nam";
                    role = "ipsam";
                    selfLink = "culpa";
                }};;
                alt = AltEnum.JSON;
                fields = "dolor";
                key = "aliquam";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "deleniti";
                userIp = "veritatis";
            }};            

            StorageDefaultObjectAccessControlsPatchResponse res = sdk.defaultObjectAccessControls.storageDefaultObjectAccessControlsPatch(req, new StorageDefaultObjectAccessControlsPatchSecurity("tempora", "dolor") {{
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

## storageDefaultObjectAccessControlsUpdate

Updates a default object ACL entry on the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsUpdateRequest;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsUpdateResponse;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectAccessControl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageDefaultObjectAccessControlsUpdateRequest req = new StorageDefaultObjectAccessControlsUpdateRequest("consequatur", "architecto") {{
                objectAccessControl = new ObjectAccessControl() {{
                    bucket = "sit";
                    domain = "modi";
                    email = "Annabel22@gmail.com";
                    entity = "fugiat";
                    entityId = "ipsam";
                    etag = "consequuntur";
                    generation = "ipsa";
                    id = "8ece7e25-3b66-4845-9c6c-6e205e16deab";
                    kind = "sequi";
                    object = "doloribus";
                    role = "repudiandae";
                    selfLink = "optio";
                }};;
                alt = AltEnum.JSON;
                fields = "occaecati";
                key = "nemo";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "blanditiis";
                userIp = "officia";
            }};            

            StorageDefaultObjectAccessControlsUpdateResponse res = sdk.defaultObjectAccessControls.storageDefaultObjectAccessControlsUpdate(req, new StorageDefaultObjectAccessControlsUpdateSecurity("voluptas", "numquam") {{
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
