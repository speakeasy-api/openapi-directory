# defaultObjectAccessControls

### Available Operations

* [storageDefaultObjectAccessControlsDelete](#storagedefaultobjectaccesscontrolsdelete) - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* [storageDefaultObjectAccessControlsGet](#storagedefaultobjectaccesscontrolsget) - Returns the default object ACL entry for the specified entity on the specified bucket.
* [storageDefaultObjectAccessControlsInsert](#storagedefaultobjectaccesscontrolsinsert) - Creates a new default object ACL entry on the specified bucket.
* [storageDefaultObjectAccessControlsList](#storagedefaultobjectaccesscontrolslist) - Retrieves default object ACL entries on the specified bucket.
* [storageDefaultObjectAccessControlsPatch](#storagedefaultobjectaccesscontrolspatch) - Patches a default object ACL entry on the specified bucket.
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
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageDefaultObjectAccessControlsDeleteRequest req = new StorageDefaultObjectAccessControlsDeleteRequest("consectetur", "velit") {{
                alt = AltEnum.JSON;
                fields = "atque";
                key = "ipsum";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "soluta";
                userIp = "repudiandae";
                userProject = "nam";
            }};            

            StorageDefaultObjectAccessControlsDeleteResponse res = sdk.defaultObjectAccessControls.storageDefaultObjectAccessControlsDelete(req, new StorageDefaultObjectAccessControlsDeleteSecurity() {{
                option1 = new StorageDefaultObjectAccessControlsDeleteSecurityOption1("dolore", "iusto") {{
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

## storageDefaultObjectAccessControlsGet

Returns the default object ACL entry for the specified entity on the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsGetRequest;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsGetResponse;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsGetSecurity;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsGetSecurityOption1;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageDefaultObjectAccessControlsGetRequest req = new StorageDefaultObjectAccessControlsGetRequest("voluptate", "sequi") {{
                alt = AltEnum.JSON;
                fields = "dignissimos";
                key = "neque";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "quibusdam";
                userIp = "iure";
                userProject = "odit";
            }};            

            StorageDefaultObjectAccessControlsGetResponse res = sdk.defaultObjectAccessControls.storageDefaultObjectAccessControlsGet(req, new StorageDefaultObjectAccessControlsGetSecurity() {{
                option1 = new StorageDefaultObjectAccessControlsGetSecurityOption1("voluptatibus", "vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsInsertSecurityOption1;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageDefaultObjectAccessControlsInsertRequest req = new StorageDefaultObjectAccessControlsInsertRequest("magnam") {{
                objectAccessControl = new ObjectAccessControl() {{
                    bucket = "quibusdam";
                    domain = "inventore";
                    email = "Mona.Brakus78@hotmail.com";
                    entity = "aliquam";
                    entityId = "velit";
                    etag = "illo";
                    generation = "accusantium";
                    id = "661e9634-9e1c-4f9e-86e3-a437000ae6b6";
                    kind = "facilis";
                    object = "placeat";
                    projectTeam = new ObjectAccessControlProjectTeam() {{
                        projectNumber = "perspiciatis";
                        team = "expedita";
                    }};;
                    role = "deleniti";
                    selfLink = "a";
                }};;
                alt = AltEnum.JSON;
                fields = "voluptate";
                key = "ullam";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "animi";
                userIp = "impedit";
                userProject = "ipsam";
            }};            

            StorageDefaultObjectAccessControlsInsertResponse res = sdk.defaultObjectAccessControls.storageDefaultObjectAccessControlsInsert(req, new StorageDefaultObjectAccessControlsInsertSecurity() {{
                option1 = new StorageDefaultObjectAccessControlsInsertSecurityOption1("corporis", "est") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsListSecurityOption1;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageDefaultObjectAccessControlsListRequest req = new StorageDefaultObjectAccessControlsListRequest("error") {{
                alt = AltEnum.JSON;
                fields = "esse";
                ifMetagenerationMatch = "labore";
                ifMetagenerationNotMatch = "veritatis";
                key = "vero";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "inventore";
                userIp = "dolorem";
                userProject = "ad";
            }};            

            StorageDefaultObjectAccessControlsListResponse res = sdk.defaultObjectAccessControls.storageDefaultObjectAccessControlsList(req, new StorageDefaultObjectAccessControlsListSecurity() {{
                option1 = new StorageDefaultObjectAccessControlsListSecurityOption1("qui", "iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

Patches a default object ACL entry on the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsPatchRequest;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsPatchResponse;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsPatchSecurity;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsPatchSecurityOption1;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageDefaultObjectAccessControlsPatchRequest req = new StorageDefaultObjectAccessControlsPatchRequest("ex", "nemo") {{
                objectAccessControl = new ObjectAccessControl() {{
                    bucket = "soluta";
                    domain = "libero";
                    email = "Maribel0@yahoo.com";
                    entity = "magni";
                    entityId = "vel";
                    etag = "quae";
                    generation = "quae";
                    id = "435e139d-bc22-459b-9abd-a8c070e1084c";
                    kind = "distinctio";
                    object = "voluptatem";
                    projectTeam = new ObjectAccessControlProjectTeam() {{
                        projectNumber = "autem";
                        team = "esse";
                    }};;
                    role = "dolores";
                    selfLink = "assumenda";
                }};;
                alt = AltEnum.JSON;
                fields = "beatae";
                key = "est";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "molestiae";
                userIp = "provident";
                userProject = "accusamus";
            }};            

            StorageDefaultObjectAccessControlsPatchResponse res = sdk.defaultObjectAccessControls.storageDefaultObjectAccessControlsPatch(req, new StorageDefaultObjectAccessControlsPatchSecurity() {{
                option1 = new StorageDefaultObjectAccessControlsPatchSecurityOption1("necessitatibus", "tempore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.StorageDefaultObjectAccessControlsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageDefaultObjectAccessControlsUpdateRequest req = new StorageDefaultObjectAccessControlsUpdateRequest("sint", "ea") {{
                objectAccessControl = new ObjectAccessControl() {{
                    bucket = "autem";
                    domain = "ipsam";
                    email = "Jordyn_Hermiston73@hotmail.com";
                    entity = "at";
                    entityId = "alias";
                    etag = "quia";
                    generation = "quidem";
                    id = "ae0be2d7-8225-49e3-aa4b-5197f92443da";
                    kind = "dignissimos";
                    object = "optio";
                    projectTeam = new ObjectAccessControlProjectTeam() {{
                        projectNumber = "necessitatibus";
                        team = "corporis";
                    }};;
                    role = "qui";
                    selfLink = "expedita";
                }};;
                alt = AltEnum.JSON;
                fields = "voluptatum";
                key = "cupiditate";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "enim";
                userIp = "neque";
                userProject = "in";
            }};            

            StorageDefaultObjectAccessControlsUpdateResponse res = sdk.defaultObjectAccessControls.storageDefaultObjectAccessControlsUpdate(req, new StorageDefaultObjectAccessControlsUpdateSecurity() {{
                option1 = new StorageDefaultObjectAccessControlsUpdateSecurityOption1("minus", "eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
