# parents

### Available Operations

* [driveParentsDelete](#driveparentsdelete) - Removes a parent from a file.
* [driveParentsGet](#driveparentsget) - Gets a specific parent reference.
* [driveParentsInsert](#driveparentsinsert) - Adds a parent folder for a file.
* [driveParentsList](#driveparentslist) - Lists a file's parents.

## driveParentsDelete

Removes a parent from a file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveParentsDeleteRequest;
import org.openapis.openapi.models.operations.DriveParentsDeleteResponse;
import org.openapis.openapi.models.operations.DriveParentsDeleteSecurity;
import org.openapis.openapi.models.operations.DriveParentsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DriveParentsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveParentsDeleteRequest req = new DriveParentsDeleteRequest("quae", "deleniti") {{
                alt = AltEnum.JSON;
                enforceSingleParent = false;
                fields = "expedita";
                key = "hic";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "aliquid";
                userIp = "sed";
            }};            

            DriveParentsDeleteResponse res = sdk.parents.driveParentsDelete(req, new DriveParentsDeleteSecurity() {{
                option1 = new DriveParentsDeleteSecurityOption1("beatae", "similique") {{
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

## driveParentsGet

Gets a specific parent reference.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveParentsGetRequest;
import org.openapis.openapi.models.operations.DriveParentsGetResponse;
import org.openapis.openapi.models.operations.DriveParentsGetSecurity;
import org.openapis.openapi.models.operations.DriveParentsGetSecurityOption1;
import org.openapis.openapi.models.operations.DriveParentsGetSecurityOption2;
import org.openapis.openapi.models.operations.DriveParentsGetSecurityOption3;
import org.openapis.openapi.models.operations.DriveParentsGetSecurityOption4;
import org.openapis.openapi.models.operations.DriveParentsGetSecurityOption5;
import org.openapis.openapi.models.operations.DriveParentsGetSecurityOption6;
import org.openapis.openapi.models.operations.DriveParentsGetSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveParentsGetRequest req = new DriveParentsGetRequest("ea", "animi") {{
                alt = AltEnum.JSON;
                fields = "dolore";
                key = "tenetur";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "esse";
                userIp = "animi";
            }};            

            DriveParentsGetResponse res = sdk.parents.driveParentsGet(req, new DriveParentsGetSecurity() {{
                option1 = new DriveParentsGetSecurityOption1("laudantium", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.parentReference != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveParentsInsert

Adds a parent folder for a file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveParentsInsertRequest;
import org.openapis.openapi.models.operations.DriveParentsInsertResponse;
import org.openapis.openapi.models.operations.DriveParentsInsertSecurity;
import org.openapis.openapi.models.operations.DriveParentsInsertSecurityOption1;
import org.openapis.openapi.models.operations.DriveParentsInsertSecurityOption2;
import org.openapis.openapi.models.operations.DriveParentsInsertSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ParentReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveParentsInsertRequest req = new DriveParentsInsertRequest("eveniet") {{
                parentReference = new ParentReference() {{
                    id = "e3e4be75-2c65-4b34-818e-3bb91c8d975e";
                    isRoot = false;
                    kind = "aperiam";
                    parentLink = "voluptates";
                    selfLink = "laudantium";
                }};;
                alt = AltEnum.JSON;
                enforceSingleParent = false;
                fields = "tempora";
                key = "quae";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "illum";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                userIp = "rem";
            }};            

            DriveParentsInsertResponse res = sdk.parents.driveParentsInsert(req, new DriveParentsInsertSecurity() {{
                option1 = new DriveParentsInsertSecurityOption1("tenetur", "deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.parentReference != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveParentsList

Lists a file's parents.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveParentsListRequest;
import org.openapis.openapi.models.operations.DriveParentsListResponse;
import org.openapis.openapi.models.operations.DriveParentsListSecurity;
import org.openapis.openapi.models.operations.DriveParentsListSecurityOption1;
import org.openapis.openapi.models.operations.DriveParentsListSecurityOption2;
import org.openapis.openapi.models.operations.DriveParentsListSecurityOption3;
import org.openapis.openapi.models.operations.DriveParentsListSecurityOption4;
import org.openapis.openapi.models.operations.DriveParentsListSecurityOption5;
import org.openapis.openapi.models.operations.DriveParentsListSecurityOption6;
import org.openapis.openapi.models.operations.DriveParentsListSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveParentsListRequest req = new DriveParentsListRequest("modi") {{
                alt = AltEnum.JSON;
                fields = "earum";
                key = "architecto";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "labore";
                userIp = "maiores";
            }};            

            DriveParentsListResponse res = sdk.parents.driveParentsList(req, new DriveParentsListSecurity() {{
                option1 = new DriveParentsListSecurityOption1("sequi", "saepe") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.parentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
