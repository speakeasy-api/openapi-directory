# project

### Available Operations

* [attachProjectJson](#attachprojectjson) - Attach children projects to specific Project
* [attachProjectRaw](#attachprojectraw) - Attach children projects to specific Project
* [deleteProject](#deleteproject) - Archieve a specific Project
* [getProject](#getproject) - Get a specific Project
* [getProjectList](#getprojectlist) - List the projects
* [patchProjectJson](#patchprojectjson) - Patch a specific Project
* [patchProjectRaw](#patchprojectraw) - Patch a specific Project
* [postProjectJson](#postprojectjson) - Create a Project
* [postProjectRaw](#postprojectraw) - Create a Project
* [putProjectJson](#putprojectjson) - Update a specific Project
* [putProjectRaw](#putprojectraw) - Update a specific Project

## attachProjectJson

Attach children projects to specific Project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachProjectJsonRequest;
import org.openapis.openapi.models.operations.AttachProjectJsonResponse;
import org.openapis.openapi.models.shared.ProjectIdListVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AttachProjectJsonRequest req = new AttachProjectJsonRequest("aspernatur", "architecto") {{
                projectIdListVO = new ProjectIdListVO() {{
                    childProjectIds = new Long[]{{
                        add(1L),
                        add(1L),
                    }};
                }};;
            }};            

            AttachProjectJsonResponse res = sdk.project.attachProjectJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## attachProjectRaw

Attach children projects to specific Project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachProjectRawRequest;
import org.openapis.openapi.models.operations.AttachProjectRawResponse;
import org.openapis.openapi.models.shared.ProjectIdListVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AttachProjectRawRequest req = new AttachProjectRawRequest("et", "excepturi") {{
                requestBody = "ullam".getBytes();
            }};            

            AttachProjectRawResponse res = sdk.project.attachProjectRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProject

Archieve a specific Project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectRequest;
import org.openapis.openapi.models.operations.DeleteProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProjectRequest req = new DeleteProjectRequest("provident", "quos");            

            DeleteProjectResponse res = sdk.project.deleteProject(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProject

Get a specific Project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectRequest;
import org.openapis.openapi.models.operations.GetProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProjectRequest req = new GetProjectRequest("sint", "accusantium");            

            GetProjectResponse res = sdk.project.getProject(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectList

List the projects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectListRequest;
import org.openapis.openapi.models.operations.GetProjectListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProjectListRequest req = new GetProjectListRequest("mollitia");            

            GetProjectListResponse res = sdk.project.getProjectList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchProjectJson

Patch a specific Project

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchProjectJsonRequest;
import org.openapis.openapi.models.operations.PatchProjectJsonResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.ProjectPatchPO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchProjectJsonRequest req = new PatchProjectJsonRequest("reiciendis", "mollitia") {{
                projectPatchPO = new ProjectPatchPO() {{
                    clientUserId = 1L;
                    clientWorkgroupId = 1L;
                    comments = "sample comments";
                    completionDate = LocalDate.parse("2022-07-27");
                    customFields = new org.openapis.openapi.models.shared.CustomFieldPersistVO[]{{
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-07-30");
                            numberValue = "nemo";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                    }};
                    deactivationReasonId = 1L;
                    isActive = true;
                    isHot = true;
                    projectCategoryId = 1L;
                    projectDescription = "sample project_description";
                    projectName = "sample project_name";
                    projectNumber = "sample project_number";
                    projectStatusId = 1L;
                }};;
            }};            

            PatchProjectJsonResponse res = sdk.project.patchProjectJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchProjectRaw

Patch a specific Project

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchProjectRawRequest;
import org.openapis.openapi.models.operations.PatchProjectRawResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.ProjectPatchPO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchProjectRawRequest req = new PatchProjectRawRequest("quasi", "iure") {{
                requestBody = "doloribus".getBytes();
            }};            

            PatchProjectRawResponse res = sdk.project.patchProjectRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProjectJson

Create a Project

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProjectJsonRequest;
import org.openapis.openapi.models.operations.PostProjectJsonResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.ProjectPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostProjectJsonRequest req = new PostProjectJsonRequest("debitis") {{
                projectPersistVO = new ProjectPersistVO(1L) {{
                    clientAccount = "sample client_account";
                    clientUserId = 1L;
                    clientWorkgroupId = 1L;
                    comments = "sample comments";
                    completionDate = LocalDate.parse("2022-03-12");
                    customFields = new org.openapis.openapi.models.shared.CustomFieldPersistVO[]{{
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-02-08");
                            numberValue = "architecto";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-01-30");
                            numberValue = "ullam";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-01-23");
                            numberValue = "repellat";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                    }};
                    deactivationReasonId = 1L;
                    isActive = true;
                    isHot = true;
                    isPaperDirect = true;
                    projectCategoryId = 1L;
                    projectDescription = "sample project_description";
                    projectName = "sample project_name";
                    projectNumber = "sample project_number";
                    projectOwnerUserId = 1L;
                }};;
            }};            

            PostProjectJsonResponse res = sdk.project.postProjectJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProjectRaw

Create a Project

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProjectRawRequest;
import org.openapis.openapi.models.operations.PostProjectRawResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.ProjectPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostProjectRawRequest req = new PostProjectRawRequest("quibusdam") {{
                requestBody = "sed".getBytes();
            }};            

            PostProjectRawResponse res = sdk.project.postProjectRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putProjectJson

Update a specific Project

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutProjectJsonRequest;
import org.openapis.openapi.models.operations.PutProjectJsonResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.ProjectPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutProjectJsonRequest req = new PutProjectJsonRequest("saepe", "pariatur") {{
                projectPersistVO = new ProjectPersistVO(1L) {{
                    clientAccount = "sample client_account";
                    clientUserId = 1L;
                    clientWorkgroupId = 1L;
                    comments = "sample comments";
                    completionDate = LocalDate.parse("2022-11-02");
                    customFields = new org.openapis.openapi.models.shared.CustomFieldPersistVO[]{{
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-09-01");
                            numberValue = "sunt";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2020-06-16");
                            numberValue = "pariatur";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2021-10-07");
                            numberValue = "excepturi";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                    }};
                    deactivationReasonId = 1L;
                    isActive = true;
                    isHot = true;
                    isPaperDirect = true;
                    projectCategoryId = 1L;
                    projectDescription = "sample project_description";
                    projectName = "sample project_name";
                    projectNumber = "sample project_number";
                    projectOwnerUserId = 1L;
                }};;
            }};            

            PutProjectJsonResponse res = sdk.project.putProjectJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putProjectRaw

Update a specific Project

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutProjectRawRequest;
import org.openapis.openapi.models.operations.PutProjectRawResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.ProjectPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutProjectRawRequest req = new PutProjectRawRequest("odit", "ea") {{
                requestBody = "accusantium".getBytes();
            }};            

            PutProjectRawResponse res = sdk.project.putProjectRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
