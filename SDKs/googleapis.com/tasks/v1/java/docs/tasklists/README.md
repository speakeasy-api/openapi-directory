# tasklists

### Available Operations

* [tasksTasklistsDelete](#taskstasklistsdelete) - Deletes the authenticated user's specified task list.
* [tasksTasklistsGet](#taskstasklistsget) - Returns the authenticated user's specified task list.
* [tasksTasklistsInsert](#taskstasklistsinsert) - Creates a new task list and adds it to the authenticated user's task lists.
* [tasksTasklistsList](#taskstasklistslist) - Returns all the authenticated user's task lists.
* [tasksTasklistsPatch](#taskstasklistspatch) - Updates the authenticated user's specified task list. This method supports patch semantics.
* [tasksTasklistsUpdate](#taskstasklistsupdate) - Updates the authenticated user's specified task list.

## tasksTasklistsDelete

Deletes the authenticated user's specified task list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksTasklistsDeleteRequest;
import org.openapis.openapi.models.operations.TasksTasklistsDeleteResponse;
import org.openapis.openapi.models.operations.TasksTasklistsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasklistsDeleteRequest req = new TasksTasklistsDeleteRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            TasksTasklistsDeleteResponse res = sdk.tasklists.tasksTasklistsDelete(req, new TasksTasklistsDeleteSecurity("excepturi", "nisi") {{
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

## tasksTasklistsGet

Returns the authenticated user's specified task list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksTasklistsGetRequest;
import org.openapis.openapi.models.operations.TasksTasklistsGetResponse;
import org.openapis.openapi.models.operations.TasksTasklistsGetSecurity;
import org.openapis.openapi.models.operations.TasksTasklistsGetSecurityOption1;
import org.openapis.openapi.models.operations.TasksTasklistsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasklistsGetRequest req = new TasksTasklistsGetRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "sapiente";
                uploadProtocol = "quo";
            }};            

            TasksTasklistsGetResponse res = sdk.tasklists.tasksTasklistsGet(req, new TasksTasklistsGetSecurity() {{
                option1 = new TasksTasklistsGetSecurityOption1("odit", "at") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.taskList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksTasklistsInsert

Creates a new task list and adds it to the authenticated user's task lists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksTasklistsInsertRequest;
import org.openapis.openapi.models.operations.TasksTasklistsInsertResponse;
import org.openapis.openapi.models.operations.TasksTasklistsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TaskList;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasklistsInsertRequest req = new TasksTasklistsInsertRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                taskList = new TaskList() {{
                    etag = "maiores";
                    id = "7cc78ca1-ba92-48fc-8167-42cb73920592";
                    kind = "iste";
                    selfLink = "dolor";
                    title = "Miss";
                    updated = "laboriosam";
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "fuga";
                fields = "in";
                key = "corporis";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "saepe";
                uploadProtocol = "quidem";
            }};            

            TasksTasklistsInsertResponse res = sdk.tasklists.tasksTasklistsInsert(req, new TasksTasklistsInsertSecurity("architecto", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksTasklistsList

Returns all the authenticated user's task lists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksTasklistsListRequest;
import org.openapis.openapi.models.operations.TasksTasklistsListResponse;
import org.openapis.openapi.models.operations.TasksTasklistsListSecurity;
import org.openapis.openapi.models.operations.TasksTasklistsListSecurityOption1;
import org.openapis.openapi.models.operations.TasksTasklistsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasklistsListRequest req = new TasksTasklistsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "dolores";
                key = "dolorem";
                maxResults = 358152L;
                oauthToken = "explicabo";
                pageToken = "nobis";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "omnis";
                uploadProtocol = "nemo";
            }};            

            TasksTasklistsListResponse res = sdk.tasklists.tasksTasklistsList(req, new TasksTasklistsListSecurity() {{
                option1 = new TasksTasklistsListSecurityOption1("minima", "excepturi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.taskLists != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksTasklistsPatch

Updates the authenticated user's specified task list. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksTasklistsPatchRequest;
import org.openapis.openapi.models.operations.TasksTasklistsPatchResponse;
import org.openapis.openapi.models.operations.TasksTasklistsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TaskList;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasklistsPatchRequest req = new TasksTasklistsPatchRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                taskList = new TaskList() {{
                    etag = "culpa";
                    id = "ff1a3a2f-a946-4773-9251-aa52c3f5ad01";
                    kind = "error";
                    selfLink = "temporibus";
                    title = "Miss";
                    updated = "quasi";
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "nihil";
                key = "praesentium";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "omnis";
                uploadProtocol = "voluptate";
            }};            

            TasksTasklistsPatchResponse res = sdk.tasklists.tasksTasklistsPatch(req, new TasksTasklistsPatchSecurity("cum", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksTasklistsUpdate

Updates the authenticated user's specified task list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksTasklistsUpdateRequest;
import org.openapis.openapi.models.operations.TasksTasklistsUpdateResponse;
import org.openapis.openapi.models.operations.TasksTasklistsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TaskList;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasklistsUpdateRequest req = new TasksTasklistsUpdateRequest("doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                taskList = new TaskList() {{
                    etag = "ut";
                    id = "f15471b5-e6e1-43b9-9d48-8e1e91e450ad";
                    kind = "explicabo";
                    selfLink = "deserunt";
                    title = "Miss";
                    updated = "quibusdam";
                }};;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "aliquid";
                key = "cupiditate";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "magni";
                uploadProtocol = "assumenda";
            }};            

            TasksTasklistsUpdateResponse res = sdk.tasklists.tasksTasklistsUpdate(req, new TasksTasklistsUpdateSecurity("ipsam", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
