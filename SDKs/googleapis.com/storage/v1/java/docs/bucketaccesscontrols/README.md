# bucketAccessControls

### Available Operations

* [storageBucketAccessControlsDelete](#storagebucketaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* [storageBucketAccessControlsGet](#storagebucketaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified bucket.
* [storageBucketAccessControlsInsert](#storagebucketaccesscontrolsinsert) - Creates a new ACL entry on the specified bucket.
* [storageBucketAccessControlsList](#storagebucketaccesscontrolslist) - Retrieves ACL entries on the specified bucket.
* [storageBucketAccessControlsPatch](#storagebucketaccesscontrolspatch) - Patches an ACL entry on the specified bucket.
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
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketAccessControlsDeleteRequest req = new StorageBucketAccessControlsDeleteRequest("suscipit", "iure") {{
                alt = AltEnum.JSON;
                fields = "magnam";
                key = "debitis";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "tempora";
                userIp = "suscipit";
                userProject = "molestiae";
            }};            

            StorageBucketAccessControlsDeleteResponse res = sdk.bucketAccessControls.storageBucketAccessControlsDelete(req, new StorageBucketAccessControlsDeleteSecurity() {{
                option1 = new StorageBucketAccessControlsDeleteSecurityOption1("minus", "placeat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
import org.openapis.openapi.models.operations.StorageBucketAccessControlsGetSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketAccessControlsGetRequest req = new StorageBucketAccessControlsGetRequest("voluptatum", "iusto") {{
                alt = AltEnum.JSON;
                fields = "excepturi";
                key = "nisi";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                userIp = "quis";
                userProject = "veritatis";
            }};            

            StorageBucketAccessControlsGetResponse res = sdk.bucketAccessControls.storageBucketAccessControlsGet(req, new StorageBucketAccessControlsGetSecurity() {{
                option1 = new StorageBucketAccessControlsGetSecurityOption1("deserunt", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
import org.openapis.openapi.models.operations.StorageBucketAccessControlsInsertSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BucketAccessControl;
import org.openapis.openapi.models.shared.BucketAccessControlProjectTeam;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketAccessControlsInsertRequest req = new StorageBucketAccessControlsInsertRequest("ipsam") {{
                bucketAccessControl = new BucketAccessControl() {{
                    bucket = "repellendus";
                    domain = "sapiente";
                    email = "Brooke_Strosin47@hotmail.com";
                    entity = "quod";
                    entityId = "quod";
                    etag = "esse";
                    id = "8ca1ba92-8fc8-4167-82cb-739205929396";
                    kind = "hic";
                    projectTeam = new BucketAccessControlProjectTeam() {{
                        projectNumber = "saepe";
                        team = "fuga";
                    }};;
                    role = "in";
                    selfLink = "corporis";
                }};;
                alt = AltEnum.JSON;
                fields = "iste";
                key = "iure";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "architecto";
                userIp = "ipsa";
                userProject = "reiciendis";
            }};            

            StorageBucketAccessControlsInsertResponse res = sdk.bucketAccessControls.storageBucketAccessControlsInsert(req, new StorageBucketAccessControlsInsertSecurity() {{
                option1 = new StorageBucketAccessControlsInsertSecurityOption1("est", "mollitia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
import org.openapis.openapi.models.operations.StorageBucketAccessControlsListSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketAccessControlsListRequest req = new StorageBucketAccessControlsListRequest("laborum") {{
                alt = AltEnum.JSON;
                fields = "dolores";
                key = "dolorem";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "nobis";
                userIp = "enim";
                userProject = "omnis";
            }};            

            StorageBucketAccessControlsListResponse res = sdk.bucketAccessControls.storageBucketAccessControlsList(req, new StorageBucketAccessControlsListSecurity() {{
                option1 = new StorageBucketAccessControlsListSecurityOption1("nemo", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

Patches an ACL entry on the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsPatchRequest;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsPatchResponse;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsPatchSecurity;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsPatchSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BucketAccessControl;
import org.openapis.openapi.models.shared.BucketAccessControlProjectTeam;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketAccessControlsPatchRequest req = new StorageBucketAccessControlsPatchRequest("excepturi", "accusantium") {{
                bucketAccessControl = new BucketAccessControl() {{
                    bucket = "iure";
                    domain = "culpa";
                    email = "Veronica.Brakus@hotmail.com";
                    entity = "culpa";
                    entityId = "consequuntur";
                    etag = "repellat";
                    id = "a9467739-251a-4a52-83f5-ad019da1ffe7";
                    kind = "praesentium";
                    projectTeam = new BucketAccessControlProjectTeam() {{
                        projectNumber = "voluptatibus";
                        team = "ipsa";
                    }};;
                    role = "omnis";
                    selfLink = "voluptate";
                }};;
                alt = AltEnum.JSON;
                fields = "cum";
                key = "perferendis";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "ut";
                userIp = "maiores";
                userProject = "dicta";
            }};            

            StorageBucketAccessControlsPatchResponse res = sdk.bucketAccessControls.storageBucketAccessControlsPatch(req, new StorageBucketAccessControlsPatchSecurity() {{
                option1 = new StorageBucketAccessControlsPatchSecurityOption1("corporis", "dolore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
import org.openapis.openapi.models.operations.StorageBucketAccessControlsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BucketAccessControl;
import org.openapis.openapi.models.shared.BucketAccessControlProjectTeam;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketAccessControlsUpdateRequest req = new StorageBucketAccessControlsUpdateRequest("iusto", "dicta") {{
                bucketAccessControl = new BucketAccessControl() {{
                    bucket = "harum";
                    domain = "enim";
                    email = "Harry21@hotmail.com";
                    entity = "quidem";
                    entityId = "molestias";
                    etag = "excepturi";
                    id = "d488e1e9-1e45-40ad-aabd-44269802d502";
                    kind = "dolorum";
                    projectTeam = new BucketAccessControlProjectTeam() {{
                        projectNumber = "excepturi";
                        team = "tempora";
                    }};;
                    role = "facilis";
                    selfLink = "tempore";
                }};;
                alt = AltEnum.JSON;
                fields = "labore";
                key = "delectus";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "eligendi";
                userIp = "sint";
                userProject = "aliquid";
            }};            

            StorageBucketAccessControlsUpdateResponse res = sdk.bucketAccessControls.storageBucketAccessControlsUpdate(req, new StorageBucketAccessControlsUpdateSecurity() {{
                option1 = new StorageBucketAccessControlsUpdateSecurityOption1("provident", "necessitatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
