# bucketAccessControls

### Available Operations

* [storageBucketAccessControlsDelete](#storagebucketaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* [storageBucketAccessControlsGet](#storagebucketaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified bucket.
* [storageBucketAccessControlsInsert](#storagebucketaccesscontrolsinsert) - Creates a new ACL entry on the specified bucket.
* [storageBucketAccessControlsList](#storagebucketaccesscontrolslist) - Retrieves ACL entries on the specified bucket.
* [storageBucketAccessControlsPatch](#storagebucketaccesscontrolspatch) - Updates an ACL entry on the specified bucket. This method supports patch semantics.
* [storageBucketAccessControlsUpdate](#storagebucketaccesscontrolsupdate) - Updates an ACL entry on the specified bucket.

## storageBucketAccessControlsDelete

Permanently deletes the ACL entry for the specified entity on the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteRequest;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteResponse;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketAccessControlsDeleteRequest req = new StorageBucketAccessControlsDeleteRequest("error", "deserunt") {{
                alt = AltEnum.JSON;
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                userIp = "ipsa";
            }};            

            StorageBucketAccessControlsDeleteResponse res = sdk.bucketAccessControls.storageBucketAccessControlsDelete(req, new StorageBucketAccessControlsDeleteSecurity("delectus", "tempora") {{
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

## storageBucketAccessControlsGet

Returns the ACL entry for the specified entity on the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsGetRequest;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsGetResponse;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketAccessControlsGetRequest req = new StorageBucketAccessControlsGetRequest("suscipit", "molestiae") {{
                alt = AltEnum.JSON;
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                userIp = "excepturi";
            }};            

            StorageBucketAccessControlsGetResponse res = sdk.bucketAccessControls.storageBucketAccessControlsGet(req, new StorageBucketAccessControlsGetSecurity("nisi", "recusandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bucketAccessControl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageBucketAccessControlsInsert

Creates a new ACL entry on the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsInsertRequest;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsInsertResponse;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BucketAccessControl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketAccessControlsInsertRequest req = new StorageBucketAccessControlsInsertRequest("temporibus") {{
                bucketAccessControl = new BucketAccessControl() {{
                    bucket = "ab";
                    domain = "quis";
                    email = "Lydia_Aufderhar@gmail.com";
                    entity = "sapiente";
                    entityId = "quo";
                    etag = "odit";
                    id = "ddf7cc78-ca1b-4a92-8fc8-16742cb73920";
                    kind = "ad";
                    role = "natus";
                    selfLink = "sed";
                }};;
                alt = AltEnum.JSON;
                fields = "iste";
                key = "dolor";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "laboriosam";
                userIp = "hic";
            }};            

            StorageBucketAccessControlsInsertResponse res = sdk.bucketAccessControls.storageBucketAccessControlsInsert(req, new StorageBucketAccessControlsInsertSecurity("saepe", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bucketAccessControl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageBucketAccessControlsList

Retrieves ACL entries on the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsListRequest;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsListResponse;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketAccessControlsListRequest req = new StorageBucketAccessControlsListRequest("in") {{
                alt = AltEnum.JSON;
                fields = "corporis";
                key = "iste";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "saepe";
                userIp = "quidem";
            }};            

            StorageBucketAccessControlsListResponse res = sdk.bucketAccessControls.storageBucketAccessControlsList(req, new StorageBucketAccessControlsListSecurity("architecto", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bucketAccessControls != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageBucketAccessControlsPatch

Updates an ACL entry on the specified bucket. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsPatchRequest;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsPatchResponse;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BucketAccessControl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketAccessControlsPatchRequest req = new StorageBucketAccessControlsPatchRequest("reiciendis", "est") {{
                bucketAccessControl = new BucketAccessControl() {{
                    bucket = "mollitia";
                    domain = "laborum";
                    email = "Corrine75@gmail.com";
                    entity = "enim";
                    entityId = "omnis";
                    etag = "nemo";
                    id = "5907aff1-a3a2-4fa9-8677-39251aa52c3f";
                    kind = "ipsam";
                    role = "id";
                    selfLink = "possimus";
                }};;
                alt = AltEnum.JSON;
                fields = "aut";
                key = "quasi";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "temporibus";
                userIp = "laborum";
            }};            

            StorageBucketAccessControlsPatchResponse res = sdk.bucketAccessControls.storageBucketAccessControlsPatch(req, new StorageBucketAccessControlsPatchSecurity("quasi", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bucketAccessControl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageBucketAccessControlsUpdate

Updates an ACL entry on the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsUpdateRequest;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsUpdateResponse;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BucketAccessControl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketAccessControlsUpdateRequest req = new StorageBucketAccessControlsUpdateRequest("voluptatibus", "vero") {{
                bucketAccessControl = new BucketAccessControl() {{
                    bucket = "nihil";
                    domain = "praesentium";
                    email = "Ana_Moen@hotmail.com";
                    entity = "perferendis";
                    entityId = "doloremque";
                    etag = "reprehenderit";
                    id = "4f15471b-5e6e-413b-99d4-88e1e91e450a";
                    kind = "quibusdam";
                    role = "explicabo";
                    selfLink = "deserunt";
                }};;
                alt = AltEnum.JSON;
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "modi";
                userIp = "qui";
            }};            

            StorageBucketAccessControlsUpdateResponse res = sdk.bucketAccessControls.storageBucketAccessControlsUpdate(req, new StorageBucketAccessControlsUpdateSecurity("aliquid", "cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bucketAccessControl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
