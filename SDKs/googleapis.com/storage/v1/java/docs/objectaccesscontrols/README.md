# objectAccessControls

### Available Operations

* [storageObjectAccessControlsDelete](#storageobjectaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified object.
* [storageObjectAccessControlsGet](#storageobjectaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified object.
* [storageObjectAccessControlsInsert](#storageobjectaccesscontrolsinsert) - Creates a new ACL entry on the specified object.
* [storageObjectAccessControlsList](#storageobjectaccesscontrolslist) - Retrieves ACL entries on the specified object.
* [storageObjectAccessControlsPatch](#storageobjectaccesscontrolspatch) - Patches an ACL entry on the specified object.
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
import org.openapis.openapi.models.operations.StorageObjectAccessControlsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectAccessControlsDeleteRequest req = new StorageObjectAccessControlsDeleteRequest("enim", "hic", "animi") {{
                alt = AltEnum.JSON;
                fields = "quas";
                generation = "totam";
                key = "molestias";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "saepe";
                userIp = "architecto";
                userProject = "quos";
            }};            

            StorageObjectAccessControlsDeleteResponse res = sdk.objectAccessControls.storageObjectAccessControlsDelete(req, new StorageObjectAccessControlsDeleteSecurity() {{
                option1 = new StorageObjectAccessControlsDeleteSecurityOption1("iste", "assumenda") {{
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

## storageObjectAccessControlsGet

Returns the ACL entry for the specified entity on the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsGetRequest;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsGetResponse;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsGetSecurity;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsGetSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectAccessControlsGetRequest req = new StorageObjectAccessControlsGetRequest("tempore", "libero", "velit") {{
                alt = AltEnum.JSON;
                fields = "doloremque";
                generation = "delectus";
                key = "impedit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "adipisci";
                userIp = "saepe";
                userProject = "deserunt";
            }};            

            StorageObjectAccessControlsGetResponse res = sdk.objectAccessControls.storageObjectAccessControlsGet(req, new StorageObjectAccessControlsGetSecurity() {{
                option1 = new StorageObjectAccessControlsGetSecurityOption1("doloremque", "quis") {{
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

## storageObjectAccessControlsInsert

Creates a new ACL entry on the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsInsertRequest;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsInsertResponse;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsInsertSecurity;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsInsertSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectAccessControlsInsertRequest req = new StorageObjectAccessControlsInsertRequest("veniam", "libero") {{
                objectAccessControl = new ObjectAccessControl() {{
                    bucket = "architecto";
                    domain = "cupiditate";
                    email = "Nikita29@yahoo.com";
                    entity = "itaque";
                    entityId = "sed";
                    etag = "asperiores";
                    generation = "veniam";
                    id = "2d82d351-3bb6-4f48-b656-bcdb35ff2e4b";
                    kind = "eos";
                    object = "reprehenderit";
                    projectTeam = new ObjectAccessControlProjectTeam() {{
                        projectNumber = "nostrum";
                        team = "neque";
                    }};;
                    role = "iusto";
                    selfLink = "est";
                }};;
                alt = AltEnum.JSON;
                fields = "rem";
                generation = "eligendi";
                key = "fugiat";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "ducimus";
                userIp = "dolor";
                userProject = "dicta";
            }};            

            StorageObjectAccessControlsInsertResponse res = sdk.objectAccessControls.storageObjectAccessControlsInsert(req, new StorageObjectAccessControlsInsertSecurity() {{
                option1 = new StorageObjectAccessControlsInsertSecurityOption1("error", "porro") {{
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

## storageObjectAccessControlsList

Retrieves ACL entries on the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsListRequest;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsListResponse;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsListSecurity;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsListSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectAccessControlsListRequest req = new StorageObjectAccessControlsListRequest("vitae", "dignissimos") {{
                alt = AltEnum.JSON;
                fields = "esse";
                generation = "fugiat";
                key = "ad";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "delectus";
                userIp = "iusto";
                userProject = "dignissimos";
            }};            

            StorageObjectAccessControlsListResponse res = sdk.objectAccessControls.storageObjectAccessControlsList(req, new StorageObjectAccessControlsListSecurity() {{
                option1 = new StorageObjectAccessControlsListSecurityOption1("libero", "illo") {{
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

## storageObjectAccessControlsPatch

Patches an ACL entry on the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsPatchRequest;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsPatchResponse;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsPatchSecurity;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsPatchSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectAccessControlsPatchRequest req = new StorageObjectAccessControlsPatchRequest("ab", "incidunt", "accusamus") {{
                objectAccessControl = new ObjectAccessControl() {{
                    bucket = "saepe";
                    domain = "tempore";
                    email = "Charles.Wisozk50@yahoo.com";
                    entity = "nemo";
                    entityId = "repellat";
                    etag = "quisquam";
                    generation = "sequi";
                    id = "7814d4c9-8e0c-42bb-89eb-75dad636c600";
                    kind = "ad";
                    object = "quae";
                    projectTeam = new ObjectAccessControlProjectTeam() {{
                        projectNumber = "amet";
                        team = "illum";
                    }};;
                    role = "praesentium";
                    selfLink = "quidem";
                }};;
                alt = AltEnum.JSON;
                fields = "cum";
                generation = "amet";
                key = "quasi";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "doloremque";
                userIp = "earum";
                userProject = "iusto";
            }};            

            StorageObjectAccessControlsPatchResponse res = sdk.objectAccessControls.storageObjectAccessControlsPatch(req, new StorageObjectAccessControlsPatchSecurity() {{
                option1 = new StorageObjectAccessControlsPatchSecurityOption1("amet", "provident") {{
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

## storageObjectAccessControlsUpdate

Updates an ACL entry on the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsUpdateRequest;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsUpdateResponse;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsUpdateSecurity;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectAccessControlsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectAccessControlsUpdateRequest req = new StorageObjectAccessControlsUpdateRequest("dolorum", "necessitatibus", "provident") {{
                objectAccessControl = new ObjectAccessControl() {{
                    bucket = "repudiandae";
                    domain = "consequatur";
                    email = "Jarrett_Waters4@yahoo.com";
                    entity = "sint";
                    entityId = "accusamus";
                    etag = "eos";
                    generation = "totam";
                    id = "10331f39-81d4-4c70-8b60-7f3c93c73b9d";
                    kind = "officia";
                    object = "amet";
                    projectTeam = new ObjectAccessControlProjectTeam() {{
                        projectNumber = "tenetur";
                        team = "aspernatur";
                    }};;
                    role = "quo";
                    selfLink = "itaque";
                }};;
                alt = AltEnum.JSON;
                fields = "illum";
                generation = "laborum";
                key = "dignissimos";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "consectetur";
                userIp = "repellat";
                userProject = "explicabo";
            }};            

            StorageObjectAccessControlsUpdateResponse res = sdk.objectAccessControls.storageObjectAccessControlsUpdate(req, new StorageObjectAccessControlsUpdateSecurity() {{
                option1 = new StorageObjectAccessControlsUpdateSecurityOption1("explicabo", "exercitationem") {{
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
