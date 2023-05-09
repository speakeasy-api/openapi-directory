# roleAssignments

### Available Operations

* [directoryRoleAssignmentsDelete](#directoryroleassignmentsdelete) - Deletes a role assignment.
* [directoryRoleAssignmentsGet](#directoryroleassignmentsget) - Retrieves a role assignment.
* [directoryRoleAssignmentsInsert](#directoryroleassignmentsinsert) - Creates a role assignment.
* [directoryRoleAssignmentsList](#directoryroleassignmentslist) - Retrieves a paginated list of all roleAssignments.

## directoryRoleAssignmentsDelete

Deletes a role assignment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryRoleAssignmentsDeleteRequest req = new DirectoryRoleAssignmentsDeleteRequest("consectetur", "cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "adipisci";
                fields = "recusandae";
                key = "tempora";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "sequi";
                uploadProtocol = "voluptatum";
            }};            

            DirectoryRoleAssignmentsDeleteResponse res = sdk.roleAssignments.directoryRoleAssignmentsDelete(req, new DirectoryRoleAssignmentsDeleteSecurity("sit", "rerum") {{
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

## directoryRoleAssignmentsGet

Retrieves a role assignment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsGetRequest;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsGetResponse;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsGetSecurity;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryRoleAssignmentsGetRequest req = new DirectoryRoleAssignmentsGetRequest("veritatis", "tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "deserunt";
                key = "magni";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "animi";
                uploadProtocol = "commodi";
            }};            

            DirectoryRoleAssignmentsGetResponse res = sdk.roleAssignments.directoryRoleAssignmentsGet(req, new DirectoryRoleAssignmentsGetSecurity() {{
                option1 = new DirectoryRoleAssignmentsGetSecurityOption1("alias", "fuga") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.roleAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryRoleAssignmentsInsert

Creates a role assignment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsInsertRequest;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsInsertResponse;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RoleAssignmentInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryRoleAssignmentsInsertRequest req = new DirectoryRoleAssignmentsInsertRequest("aut") {{
                dollarXgafv = XgafvEnum.ONE;
                roleAssignmentInput = new RoleAssignmentInput() {{
                    assignedTo = "maxime";
                    etag = "aliquam";
                    kind = "iste";
                    orgUnitId = "ullam";
                    roleAssignmentId = "eligendi";
                    roleId = "placeat";
                    scopeType = "voluptas";
                }};;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "illo";
                fields = "nihil";
                key = "inventore";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "quasi";
                uploadProtocol = "cumque";
            }};            

            DirectoryRoleAssignmentsInsertResponse res = sdk.roleAssignments.directoryRoleAssignmentsInsert(req, new DirectoryRoleAssignmentsInsertSecurity("dicta", "harum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.roleAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryRoleAssignmentsList

Retrieves a paginated list of all roleAssignments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsListRequest;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsListResponse;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsListSecurity;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryRoleAssignmentsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryRoleAssignmentsListRequest req = new DirectoryRoleAssignmentsListRequest("facere") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "beatae";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "labore";
                includeIndirectRoleAssignments = false;
                key = "expedita";
                maxResults = 548256L;
                oauthToken = "rem";
                pageToken = "atque";
                prettyPrint = false;
                quotaUser = "officiis";
                roleId = "cum";
                uploadType = "pariatur";
                uploadProtocol = "sapiente";
                userKey = "quo";
            }};            

            DirectoryRoleAssignmentsListResponse res = sdk.roleAssignments.directoryRoleAssignmentsList(req, new DirectoryRoleAssignmentsListSecurity() {{
                option1 = new DirectoryRoleAssignmentsListSecurityOption1("incidunt", "quod") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.roleAssignments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
