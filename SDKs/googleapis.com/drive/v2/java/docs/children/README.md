# children

### Available Operations

* [driveChildrenDelete](#drivechildrendelete) - Removes a child from a folder.
* [driveChildrenGet](#drivechildrenget) - Gets a specific child reference.
* [driveChildrenInsert](#drivechildreninsert) - Inserts a file into a folder.
* [driveChildrenList](#drivechildrenlist) - Lists a folder's children.

## driveChildrenDelete

Removes a child from a folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveChildrenDeleteRequest;
import org.openapis.openapi.models.operations.DriveChildrenDeleteResponse;
import org.openapis.openapi.models.operations.DriveChildrenDeleteSecurity;
import org.openapis.openapi.models.operations.DriveChildrenDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DriveChildrenDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveChildrenDeleteRequest req = new DriveChildrenDeleteRequest("magni", "assumenda") {{
                alt = AltEnum.JSON;
                enforceSingleParent = false;
                fields = "ipsam";
                key = "alias";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "dolorum";
                userIp = "excepturi";
            }};            

            DriveChildrenDeleteResponse res = sdk.children.driveChildrenDelete(req, new DriveChildrenDeleteSecurity() {{
                option1 = new DriveChildrenDeleteSecurityOption1("tempora", "facilis") {{
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

## driveChildrenGet

Gets a specific child reference.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveChildrenGetRequest;
import org.openapis.openapi.models.operations.DriveChildrenGetResponse;
import org.openapis.openapi.models.operations.DriveChildrenGetSecurity;
import org.openapis.openapi.models.operations.DriveChildrenGetSecurityOption1;
import org.openapis.openapi.models.operations.DriveChildrenGetSecurityOption2;
import org.openapis.openapi.models.operations.DriveChildrenGetSecurityOption3;
import org.openapis.openapi.models.operations.DriveChildrenGetSecurityOption4;
import org.openapis.openapi.models.operations.DriveChildrenGetSecurityOption5;
import org.openapis.openapi.models.operations.DriveChildrenGetSecurityOption6;
import org.openapis.openapi.models.operations.DriveChildrenGetSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveChildrenGetRequest req = new DriveChildrenGetRequest("tempore", "labore") {{
                alt = AltEnum.JSON;
                fields = "delectus";
                key = "eum";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "eligendi";
                userIp = "sint";
            }};            

            DriveChildrenGetResponse res = sdk.children.driveChildrenGet(req, new DriveChildrenGetSecurity() {{
                option1 = new DriveChildrenGetSecurityOption1("aliquid", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.childReference != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveChildrenInsert

Inserts a file into a folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveChildrenInsertRequest;
import org.openapis.openapi.models.operations.DriveChildrenInsertResponse;
import org.openapis.openapi.models.operations.DriveChildrenInsertSecurity;
import org.openapis.openapi.models.operations.DriveChildrenInsertSecurityOption1;
import org.openapis.openapi.models.operations.DriveChildrenInsertSecurityOption2;
import org.openapis.openapi.models.operations.DriveChildrenInsertSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChildReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveChildrenInsertRequest req = new DriveChildrenInsertRequest("necessitatibus") {{
                childReference = new ChildReference() {{
                    childLink = "sint";
                    id = "a3efa77d-fb14-4cd6-aae3-95efb9ba88f3";
                    kind = "deserunt";
                    selfLink = "nisi";
                }};;
                alt = AltEnum.JSON;
                enforceSingleParent = false;
                fields = "vel";
                key = "natus";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "molestiae";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                userIp = "perferendis";
            }};            

            DriveChildrenInsertResponse res = sdk.children.driveChildrenInsert(req, new DriveChildrenInsertSecurity() {{
                option1 = new DriveChildrenInsertSecurityOption1("nihil", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.childReference != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveChildrenList

Lists a folder's children.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveChildrenListRequest;
import org.openapis.openapi.models.operations.DriveChildrenListResponse;
import org.openapis.openapi.models.operations.DriveChildrenListSecurity;
import org.openapis.openapi.models.operations.DriveChildrenListSecurityOption1;
import org.openapis.openapi.models.operations.DriveChildrenListSecurityOption2;
import org.openapis.openapi.models.operations.DriveChildrenListSecurityOption3;
import org.openapis.openapi.models.operations.DriveChildrenListSecurityOption4;
import org.openapis.openapi.models.operations.DriveChildrenListSecurityOption5;
import org.openapis.openapi.models.operations.DriveChildrenListSecurityOption6;
import org.openapis.openapi.models.operations.DriveChildrenListSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveChildrenListRequest req = new DriveChildrenListRequest("distinctio") {{
                alt = AltEnum.JSON;
                fields = "id";
                key = "labore";
                maxResults = 290077L;
                oauthToken = "suscipit";
                orderBy = "natus";
                pageToken = "nobis";
                prettyPrint = false;
                q = "eum";
                quotaUser = "vero";
                userIp = "aspernatur";
            }};            

            DriveChildrenListResponse res = sdk.children.driveChildrenList(req, new DriveChildrenListSecurity() {{
                option1 = new DriveChildrenListSecurityOption1("architecto", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.childList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
