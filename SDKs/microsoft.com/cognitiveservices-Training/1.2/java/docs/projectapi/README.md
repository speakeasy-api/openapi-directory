# projectApi

### Available Operations

* [createProject](#createproject) - Create a project
* [deleteIteration](#deleteiteration) - Delete a specific iteration of a project
* [deleteProject](#deleteproject) - Delete a specific project
* [exportIteration](#exportiteration) - Export a trained iteration
* [getExports](#getexports) - Get the list of exports for a specific iteration
* [getIteration](#getiteration) - Get a specific iteration
* [getIterationPerformance](#getiterationperformance) - Get detailed performance information about a trained iteration
* [getIterations](#getiterations) - Get iterations for the project
* [getProject](#getproject) - Get a specific project
* [getProjects](#getprojects) - Get your projects
* [trainProject](#trainproject) - Queues project for training
* [updateIterationForm](#updateiterationform) - Update a specific iteration
* [updateIterationJson](#updateiterationjson) - Update a specific iteration
* [updateIterationRaw](#updateiterationraw) - Update a specific iteration
* [updateProjectForm](#updateprojectform) - Update a specific project
* [updateProjectJson](#updateprojectjson) - Update a specific project
* [updateProjectRaw](#updateprojectraw) - Update a specific project

## createProject

Create a project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateProjectRequest req = new CreateProjectRequest("dicta", "quia") {{
                description = "commodi";
                domainId = "3d48e935-c2c9-4e81-b30b-e3e43202d721";
            }};            

            CreateProjectResponse res = sdk.projectApi.createProject(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIteration

Delete a specific iteration of a project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIterationRequest;
import org.openapis.openapi.models.operations.DeleteIterationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteIterationRequest req = new DeleteIterationRequest("aliquid", "57650664-1870-4d9d-a1f9-ad030c4ecc11", "a0836429-068b-4850-aa55-e7f73bc845e3");            

            DeleteIterationResponse res = sdk.projectApi.deleteIteration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProject

Delete a specific project

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

            DeleteProjectRequest req = new DeleteProjectRequest("magni", "0a319f4b-adf9-447c-9a86-7bc424266658");            

            DeleteProjectResponse res = sdk.projectApi.deleteProject(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportIteration

Export a trained iteration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportIterationRequest;
import org.openapis.openapi.models.operations.ExportIterationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportIterationRequest req = new ExportIterationRequest("illo", "6ddca8ef-51fc-4b4c-993e-c12cdaad0ec7", "similique", "fedbd80d-f448-4a47-b939-0c58880983da");            

            ExportIterationResponse res = sdk.projectApi.exportIteration(req);

            if (res.export != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExports

Get the list of exports for a specific iteration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExportsRequest;
import org.openapis.openapi.models.operations.GetExportsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetExportsRequest req = new GetExportsRequest("facilis", "f9ef3ffd-d9f7-4f07-9af4-d35724cdb0f4", "d281187d-5684-44ed-ad85-a9065e628bdf");            

            GetExportsResponse res = sdk.projectApi.getExports(req);

            if (res.exports != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIteration

Get a specific iteration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIterationRequest;
import org.openapis.openapi.models.operations.GetIterationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIterationRequest req = new GetIterationRequest("placeat", "2032b6c8-7992-43b7-a135-84f7ae12c689", "1f82ce11-5717-4230-9377-dcfa89df975e");            

            GetIterationResponse res = sdk.projectApi.getIteration(req);

            if (res.iteration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIterationPerformance

Get detailed performance information about a trained iteration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIterationPerformanceRequest;
import org.openapis.openapi.models.operations.GetIterationPerformanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIterationPerformanceRequest req = new GetIterationPerformanceRequest("sequi", "56686092-e9c3-4ddc-9f11-1dea1026d541", "a4d190fe-b217-480b-8cc0-dbbddb484708", 9714.81);            

            GetIterationPerformanceResponse res = sdk.projectApi.getIterationPerformance(req);

            if (res.iterationPerformance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIterations

Get iterations for the project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIterationsRequest;
import org.openapis.openapi.models.operations.GetIterationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIterationsRequest req = new GetIterationsRequest("facilis", "4e391e6b-c158-4c4c-8e54-599ea342260e");            

            GetIterationsResponse res = sdk.projectApi.getIterations(req);

            if (res.iterations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProject

Get a specific project

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

            GetProjectRequest req = new GetProjectRequest("sint", "b200ce78-a1bd-48fb-ba0a-116ce723d409");            

            GetProjectResponse res = sdk.projectApi.getProject(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjects

Get your projects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectsRequest;
import org.openapis.openapi.models.operations.GetProjectsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProjectsRequest req = new GetProjectsRequest("esse");            

            GetProjectsResponse res = sdk.projectApi.getProjects(req);

            if (res.projects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## trainProject

Queues project for training

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrainProjectRequest;
import org.openapis.openapi.models.operations.TrainProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TrainProjectRequest req = new TrainProjectRequest("delectus", "a30e9af7-25b2-4912-a030-d83f5aeb7799");            

            TrainProjectResponse res = sdk.projectApi.trainProject(req);

            if (res.iteration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIterationForm

Update a specific iteration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIterationFormRequest;
import org.openapis.openapi.models.operations.UpdateIterationFormResponse;
import org.openapis.openapi.models.shared.IterationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateIterationFormRequest req = new UpdateIterationFormRequest(                new IterationInput() {{
                                isDefault = false;
                                name = "Nicholas Conroy";
                            }};, "optio", "1f849382-5fdc-442c-876c-2c2dfb4cfc1c", "76230f84-1fb1-4bd2-bfdb-14db6be5a685");            

            UpdateIterationFormResponse res = sdk.projectApi.updateIterationForm(req);

            if (res.iteration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIterationJson

Update a specific iteration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIterationJsonRequest;
import org.openapis.openapi.models.operations.UpdateIterationJsonResponse;
import org.openapis.openapi.models.shared.IterationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateIterationJsonRequest req = new UpdateIterationJsonRequest(                new IterationInput() {{
                                isDefault = false;
                                name = "Luther Leuschke";
                            }};, "dolores", "ae20da16-fc2b-4271-a289-c57e854e9043", "9d222465-6946-4240-b084-f7ab37cef022");            

            UpdateIterationJsonResponse res = sdk.projectApi.updateIterationJson(req);

            if (res.iteration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIterationRaw

Update a specific iteration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIterationRawRequest;
import org.openapis.openapi.models.operations.UpdateIterationRawResponse;
import org.openapis.openapi.models.shared.IterationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateIterationRawRequest req = new UpdateIterationRawRequest("consequuntur".getBytes(), "quis", "194db554-10ad-4c66-9af9-0a26c7cdc981", "f068981d-6bb3-43cf-aa34-8c31bf407ee4");            

            UpdateIterationRawResponse res = sdk.projectApi.updateIterationRaw(req);

            if (res.iteration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProjectForm

Update a specific project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectFormRequest;
import org.openapis.openapi.models.operations.UpdateProjectFormResponse;
import org.openapis.openapi.models.shared.ProjectInput;
import org.openapis.openapi.models.shared.ProjectSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProjectFormRequest req = new UpdateProjectFormRequest(                new ProjectInput() {{
                                description = "doloribus";
                                name = "Timmy Abbott";
                                settings = new ProjectSettings() {{
                                    domainId = "2b78f156-2639-48a0-9c76-6324ccb06c8c";
                                }};;
                            }};, "est", "12d02529-270b-48d5-b22d-d895b8bcf24d");            

            UpdateProjectFormResponse res = sdk.projectApi.updateProjectForm(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProjectJson

Update a specific project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectJsonRequest;
import org.openapis.openapi.models.operations.UpdateProjectJsonResponse;
import org.openapis.openapi.models.shared.ProjectInput;
import org.openapis.openapi.models.shared.ProjectSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProjectJsonRequest req = new UpdateProjectJsonRequest(                new ProjectInput() {{
                                description = "facilis";
                                name = "Herman Morissette";
                                settings = new ProjectSettings() {{
                                    domainId = "3352f745-3399-44d7-8de3-b6e9389f5abb";
                                }};;
                            }};, "in", "f662550a-2838-42ac-883a-fd2315bba650");            

            UpdateProjectJsonResponse res = sdk.projectApi.updateProjectJson(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProjectRaw

Update a specific project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectRawRequest;
import org.openapis.openapi.models.operations.UpdateProjectRawResponse;
import org.openapis.openapi.models.shared.ProjectInput;
import org.openapis.openapi.models.shared.ProjectSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProjectRawRequest req = new UpdateProjectRawRequest("illo".getBytes(), "iure", "4e06f5bf-6ae5-491b-88bd-ef3612b63c20");            

            UpdateProjectRawResponse res = sdk.projectApi.updateProjectRaw(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
