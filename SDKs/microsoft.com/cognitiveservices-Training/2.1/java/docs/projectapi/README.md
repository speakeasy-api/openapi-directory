# projectApi

### Available Operations

* [createProject](#createproject) - Create a project
* [deleteIteration](#deleteiteration) - Delete a specific iteration of a project
* [deleteProject](#deleteproject) - Delete a specific project
* [exportIteration](#exportiteration) - Export a trained iteration
* [getExports](#getexports) - Get the list of exports for a specific iteration
* [getImagePerformanceCount](#getimageperformancecount) - Gets the number of images tagged with the provided {tagIds} that have prediction results from
training for the provided iteration {iterationId}
* [getImagePerformances](#getimageperformances) - Get image with its prediction for a given project iteration
* [getIteration](#getiteration) - Get a specific iteration
* [getIterationPerformance](#getiterationperformance) - Get detailed performance information about an iteration
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
import org.openapis.openapi.models.operations.CreateProjectClassificationTypeEnum;
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateProjectRequest req = new CreateProjectRequest("earum", "occaecati") {{
                classificationType = CreateProjectClassificationTypeEnum.MULTICLASS;
                description = "quidem";
                domainId = "9a9f7484-6e2c-4330-9db0-536d9e75ca00";
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

            DeleteIterationRequest req = new DeleteIterationRequest("iure", "f5392c11-a25a-48bf-92f9-7428ad9a9f8b", "f8221125-359d-4983-87f7-a79cd72cd248");            

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

            DeleteProjectRequest req = new DeleteProjectRequest("dolore", "da21729f-2ac4-41ef-9725-f1169ac1e41d");            

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
import org.openapis.openapi.models.operations.ExportIterationFlavorEnum;
import org.openapis.openapi.models.operations.ExportIterationPlatformEnum;
import org.openapis.openapi.models.operations.ExportIterationRequest;
import org.openapis.openapi.models.operations.ExportIterationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportIterationRequest req = new ExportIterationRequest("voluptatum", "a23c23e3-4f2d-4fa4-a197-f6de922151fe", ExportIterationPlatformEnum.CORE_ML, "71209985-3e9f-4543-9854-439ee2244604") {{
                flavor = ExportIterationFlavorEnum.LINUX;
            }};            

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

            GetExportsRequest req = new GetExportsRequest("dolorem", "bc154188-c2f5-46e8-9da7-832eabd617c3", "b0d51a44-bf01-4bad-8706-d46082bfbdc4");            

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

## getImagePerformanceCount

The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImagePerformanceCountRequest;
import org.openapis.openapi.models.operations.GetImagePerformanceCountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImagePerformanceCountRequest req = new GetImagePerformanceCountRequest("vitae", "ff5d4e2a-e4fb-45cb-b5d1-7638f1edb783", "59ecc5cb-860f-48cd-980b-a73810e4fe44") {{
                tagIds = new String[]{{
                    add("voluptate"),
                    add("magni"),
                }};
            }};            

            GetImagePerformanceCountResponse res = sdk.projectApi.getImagePerformanceCount(req);

            if (res.getImagePerformanceCount200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImagePerformances

This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.
The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImagePerformancesOrderByEnum;
import org.openapis.openapi.models.operations.GetImagePerformancesRequest;
import org.openapis.openapi.models.operations.GetImagePerformancesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImagePerformancesRequest req = new GetImagePerformancesRequest("excepturi", "7cd3b1dd-3bbc-4e24-bb76-84eff50126d7", "1cffbd0e-b74b-4842-9953-b44bd3c43159") {{
                orderBy = GetImagePerformancesOrderByEnum.OLDEST;
                skip = 239892;
                tagIds = new String[]{{
                    add("accusamus"),
                }};
                take = 331602;
            }};            

            GetImagePerformancesResponse res = sdk.projectApi.getImagePerformances(req);

            if (res.imagePerformances != null) {
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

            GetIterationRequest req = new GetIterationRequest("provident", "53c00113-9863-4aa4-9e6c-31cc2f1fcb51", "c9a41ffb-e9cb-4d79-9ee6-5e076cc7abf6");            

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

Get detailed performance information about an iteration

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

            GetIterationPerformanceRequest req = new GetIterationPerformanceRequest("beatae", "6ea5c716-4193-44b9-8f2e-09d19d2fc2f9", "e2e10594-4b93-45d2-b7a7-2f90849d6aed") {{
                overlapThreshold = 3105.08;
                threshold = 6602.91;
            }};            

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

            GetIterationsRequest req = new GetIterationsRequest("eveniet", "cb7537cd-9222-4c9f-b574-91aabfa2e761");            

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

            GetProjectRequest req = new GetProjectRequest("tenetur", "0ca4d456-ef10-431e-a899-f0c2001e22cd");            

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

            GetProjectsRequest req = new GetProjectsRequest("veniam");            

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

            TrainProjectRequest req = new TrainProjectRequest("exercitationem", "cc0584a1-84d7-46d9-b1fc-820c65b037bb");            

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
                                name = "Alonzo Balistreri";
                            }};, "corrupti", "85187e4d-e04a-4f28-85dd-db46aa1cfd6d", "828da013-1911-4296-8664-5c1d81f29042");            

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
                                name = "Corey Hudson";
                            }};, "iusto", "aff0ea22-16cb-4e07-9bc1-63e279a3b084", "da99257d-04f4-4084-ba74-2d84496cbdee");            

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

            UpdateIterationRawRequest req = new UpdateIterationRawRequest("impedit".getBytes(), "reiciendis", "6b99bc63-562e-4bfd-b55c-294c060b06a1", "287764ee-f6d0-4c6d-aed9-c73dd6345715");            

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
import org.openapis.openapi.models.shared.ProjectSettingsClassificationTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProjectFormRequest req = new UpdateProjectFormRequest(                new ProjectInput() {{
                                description = "ipsa";
                                name = "Wilbur Kuvalis";
                                settings = new ProjectSettings() {{
                                    classificationType = ProjectSettingsClassificationTypeEnum.MULTICLASS;
                                    domainId = "0d3c5a1f-9c24-42c7-b66a-1f30c73df5b6";
                                }};;
                            }};, "molestiae", "19890f42-a4bb-4438-985b-260591d745e3");            

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
import org.openapis.openapi.models.shared.ProjectSettingsClassificationTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProjectJsonRequest req = new UpdateProjectJsonRequest(                new ProjectInput() {{
                                description = "eligendi";
                                name = "Brenda Harris";
                                settings = new ProjectSettings() {{
                                    classificationType = ProjectSettingsClassificationTypeEnum.MULTILABEL;
                                    domainId = "c3f567e0-e252-4765-b1d6-2fcdace1f012";
                                }};;
                            }};, "inventore", "6ce2239e-8f25-4cd0-919d-959f439e3926");            

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
import org.openapis.openapi.models.shared.ProjectSettingsClassificationTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProjectRawRequest req = new UpdateProjectRawRequest("commodi".getBytes(), "impedit", "bd95f7aa-2b24-4113-a95d-1e6698fcc459");            

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
