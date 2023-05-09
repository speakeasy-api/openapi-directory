# projects

### Available Operations

* [cloudresourcemanagerProjectsCreate](#cloudresourcemanagerprojectscreate) - Request that a new project be created. The result is an `Operation` which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking `Operation` is automatically deleted after a few hours, so there is no need to call `DeleteOperation`.
* [cloudresourcemanagerProjectsList](#cloudresourcemanagerprojectslist) - Lists projects that are direct children of the specified folder or organization resource. `list()` provides a strongly consistent view of the projects underneath the specified parent resource. `list()` returns projects sorted based upon the (ascending) lexical ordering of their `display_name`. The caller must have `resourcemanager.projects.list` permission on the identified parent.
* [cloudresourcemanagerProjectsMove](#cloudresourcemanagerprojectsmove) - Move a project to another place in your resource hierarchy, under a new resource parent. Returns an operation which can be used to track the process of the project move workflow. Upon success, the `Operation.response` field will be populated with the moved project. The caller must have `resourcemanager.projects.move` permission on the project, on the project's current and proposed new parent. If project has no current parent, or it currently does not have an associated organization resource, you will also need the `resourcemanager.projects.setIamPolicy` permission in the project. 
* [cloudresourcemanagerProjectsSearch](#cloudresourcemanagerprojectssearch) - Search for projects that the caller has both `resourcemanager.projects.get` permission on, and also satisfy the specified query. This method returns projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method.
* [cloudresourcemanagerProjectsUndelete](#cloudresourcemanagerprojectsundelete) - Restores the project identified by the specified `name` (for example, `projects/415104041262`). You can only use this method for a project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the project cannot be restored. The caller must have `resourcemanager.projects.undelete` permission for this project.

## cloudresourcemanagerProjectsCreate

Request that a new project be created. The result is an `Operation` which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking `Operation` is automatically deleted after a few hours, so there is no need to call `DeleteOperation`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsCreateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsCreateResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ProjectInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsCreateRequest req = new CloudresourcemanagerProjectsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                projectInput = new ProjectInput() {{
                    displayName = "ipsam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("possimus", "aut");
                        put("quasi", "error");
                        put("temporibus", "laborum");
                    }};
                    parent = "quasi";
                    projectId = "reiciendis";
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "praesentium";
                key = "voluptatibus";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "voluptate";
                uploadProtocol = "cum";
            }};            

            CloudresourcemanagerProjectsCreateResponse res = sdk.projects.cloudresourcemanagerProjectsCreate(req, new CloudresourcemanagerProjectsCreateSecurity("perferendis", "doloremque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerProjectsList

Lists projects that are direct children of the specified folder or organization resource. `list()` provides a strongly consistent view of the projects underneath the specified parent resource. `list()` returns projects sorted based upon the (ascending) lexical ordering of their `display_name`. The caller must have `resourcemanager.projects.list` permission on the identified parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsListRequest req = new CloudresourcemanagerProjectsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "corporis";
                key = "dolore";
                oauthToken = "iusto";
                pageSize = 118727L;
                pageToken = "harum";
                parent = "enim";
                prettyPrint = false;
                quotaUser = "accusamus";
                showDeleted = false;
                uploadType = "commodi";
                uploadProtocol = "repudiandae";
            }};            

            CloudresourcemanagerProjectsListResponse res = sdk.projects.cloudresourcemanagerProjectsList(req, new CloudresourcemanagerProjectsListSecurity() {{
                option1 = new CloudresourcemanagerProjectsListSecurityOption1("quae", "ipsum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listProjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerProjectsMove

Move a project to another place in your resource hierarchy, under a new resource parent. Returns an operation which can be used to track the process of the project move workflow. Upon success, the `Operation.response` field will be populated with the moved project. The caller must have `resourcemanager.projects.move` permission on the project, on the project's current and proposed new parent. If project has no current parent, or it currently does not have an associated organization resource, you will also need the `resourcemanager.projects.setIamPolicy` permission in the project. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsMoveRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsMoveResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsMoveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MoveProjectRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsMoveRequest req = new CloudresourcemanagerProjectsMoveRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                moveProjectRequest = new MoveProjectRequest() {{
                    destinationParent = "excepturi";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "rem";
                key = "voluptates";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "sint";
                uploadProtocol = "veritatis";
            }};            

            CloudresourcemanagerProjectsMoveResponse res = sdk.projects.cloudresourcemanagerProjectsMove(req, new CloudresourcemanagerProjectsMoveSecurity("itaque", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerProjectsSearch

Search for projects that the caller has both `resourcemanager.projects.get` permission on, and also satisfy the specified query. This method returns projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsSearchRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsSearchResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsSearchSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsSearchSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsSearchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsSearchRequest req = new CloudresourcemanagerProjectsSearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "explicabo";
                key = "deserunt";
                oauthToken = "distinctio";
                pageSize = 841386L;
                pageToken = "labore";
                prettyPrint = false;
                query = "modi";
                quotaUser = "qui";
                uploadType = "aliquid";
                uploadProtocol = "cupiditate";
            }};            

            CloudresourcemanagerProjectsSearchResponse res = sdk.projects.cloudresourcemanagerProjectsSearch(req, new CloudresourcemanagerProjectsSearchSecurity() {{
                option1 = new CloudresourcemanagerProjectsSearchSecurityOption1("quos", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchProjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerProjectsUndelete

Restores the project identified by the specified `name` (for example, `projects/415104041262`). You can only use this method for a project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the project cannot be restored. The caller must have `resourcemanager.projects.undelete` permission for this project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsUndeleteRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsUndeleteResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerProjectsUndeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerProjectsUndeleteRequest req = new CloudresourcemanagerProjectsUndeleteRequest("magni") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("alias", "fugit");
                    put("dolorum", "excepturi");
                }};
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "labore";
                key = "delectus";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "eligendi";
                uploadProtocol = "sint";
            }};            

            CloudresourcemanagerProjectsUndeleteResponse res = sdk.projects.cloudresourcemanagerProjectsUndelete(req, new CloudresourcemanagerProjectsUndeleteSecurity("aliquid", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
