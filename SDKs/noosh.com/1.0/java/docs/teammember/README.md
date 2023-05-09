# teamMember

### Available Operations

* [deleteTeamMemberOfProject](#deleteteammemberofproject) - Delete a team member for the specific project.
* [getTeamMemberListOfClientProject](#getteammemberlistofclientproject) - List team member of client project side.
* [getTeamMemberListOfProject](#getteammemberlistofproject) - List team member of project.
* [postTeamMemberOfProjectJson](#postteammemberofprojectjson) - Invite a team member or all the members of team template for the specific project.
* [postTeamMemberOfProjectRaw](#postteammemberofprojectraw) - Invite a team member or all the members of team template for the specific project.
* [postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJson](#postv1workgroupsworkgroupidprojectsprojectidteammembersjson) - Deprecated, please use 1.1 Version
* [postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRaw](#postv1workgroupsworkgroupidprojectsprojectidteammembersraw) - Deprecated, please use 1.1 Version

## deleteTeamMemberOfProject

Delete a team member for the specific project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTeamMemberOfProjectRequest;
import org.openapis.openapi.models.operations.DeleteTeamMemberOfProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTeamMemberOfProjectRequest req = new DeleteTeamMemberOfProjectRequest("soluta", "nobis", "et");            

            DeleteTeamMemberOfProjectResponse res = sdk.teamMember.deleteTeamMemberOfProject(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamMemberListOfClientProject

List team member of client project side.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamMemberListOfClientProjectRequest;
import org.openapis.openapi.models.operations.GetTeamMemberListOfClientProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamMemberListOfClientProjectRequest req = new GetTeamMemberListOfClientProjectRequest("saepe", "ipsum");            

            GetTeamMemberListOfClientProjectResponse res = sdk.teamMember.getTeamMemberListOfClientProject(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamMemberListOfProject

List team member of project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamMemberListOfProjectRequest;
import org.openapis.openapi.models.operations.GetTeamMemberListOfProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamMemberListOfProjectRequest req = new GetTeamMemberListOfProjectRequest("veritatis", "nobis");            

            GetTeamMemberListOfProjectResponse res = sdk.teamMember.getTeamMemberListOfProject(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTeamMemberOfProjectJson

Invite a team member or all the members of team template for the specific project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTeamMemberOfProjectJsonRequest;
import org.openapis.openapi.models.operations.PostTeamMemberOfProjectJsonResponse;
import org.openapis.openapi.models.shared.TeamMemberPO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostTeamMemberOfProjectJsonRequest req = new PostTeamMemberOfProjectJsonRequest("quos", "tempore") {{
                teamMemberPO = new TeamMemberPO() {{
                    roleId = 1L;
                    teamTemplateId = 1L;
                    userId = 1L;
                }};;
            }};            

            PostTeamMemberOfProjectJsonResponse res = sdk.teamMember.postTeamMemberOfProjectJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTeamMemberOfProjectRaw

Invite a team member or all the members of team template for the specific project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTeamMemberOfProjectRawRequest;
import org.openapis.openapi.models.operations.PostTeamMemberOfProjectRawResponse;
import org.openapis.openapi.models.shared.TeamMemberPO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostTeamMemberOfProjectRawRequest req = new PostTeamMemberOfProjectRawRequest("cupiditate", "aperiam") {{
                requestBody = "delectus".getBytes();
            }};            

            PostTeamMemberOfProjectRawResponse res = sdk.teamMember.postTeamMemberOfProjectRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJson

Deprecated, please use 1.1 Version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJsonRequest;
import org.openapis.openapi.models.operations.PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJsonResponse;
import org.openapis.openapi.models.shared.ContactUserVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJsonRequest req = new PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJsonRequest("dolorem", "dolore") {{
                contactUserVO = new ContactUserVO(1L, 1L);;
            }};            

            PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJsonResponse res = sdk.teamMember.postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRaw

Deprecated, please use 1.1 Version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRawRequest;
import org.openapis.openapi.models.operations.PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRawResponse;
import org.openapis.openapi.models.shared.ContactUserVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRawRequest req = new PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRawRequest("labore", "adipisci") {{
                requestBody = "dolorum".getBytes();
            }};            

            PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRawResponse res = sdk.teamMember.postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
