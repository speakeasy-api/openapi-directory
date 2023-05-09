# projectApi

### Available Operations

* [createProject](#createproject) - Create a project.
* [deleteIteration](#deleteiteration) - Delete a specific iteration of a project.
* [deleteProject](#deleteproject) - Delete a specific project.
* [exportIteration](#exportiteration) - Export a trained iteration.
* [getExports](#getexports) - Get the list of exports for a specific iteration.
* [getImagePerformanceCount](#getimageperformancecount) - Gets the number of images tagged with the provided {tagIds} that have prediction results from
training for the provided iteration {iterationId}.
* [getImagePerformances](#getimageperformances) - Get image with its prediction for a given project iteration.
* [getIteration](#getiteration) - Get a specific iteration.
* [getIterationPerformance](#getiterationperformance) - Get detailed performance information about an iteration.
* [getIterations](#getiterations) - Get iterations for the project.
* [getProject](#getproject) - Get a specific project.
* [getProjects](#getprojects) - Get your projects.
* [publishIteration](#publishiteration) - Publish a specific iteration.
* [trainProject](#trainproject) - Queues project for training.
* [unpublishIteration](#unpublishiteration) - Unpublish a specific iteration.
* [updateIterationForm](#updateiterationform) - Update a specific iteration.
* [updateIterationJson](#updateiterationjson) - Update a specific iteration.
* [updateIterationRaw](#updateiterationraw) - Update a specific iteration.
* [updateProjectForm](#updateprojectform) - Update a specific project.
* [updateProjectJson](#updateprojectjson) - Update a specific project.
* [updateProjectRaw](#updateprojectraw) - Update a specific project.

## createProject

Create a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectClassificationTypeEnum;
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectResponse;
import org.openapis.openapi.models.operations.CreateProjectTargetExportPlatformsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateProjectRequest req = new CreateProjectRequest("accusantium", "excepturi") {{
                classificationType = CreateProjectClassificationTypeEnum.MULTILABEL;
                description = "odit";
                domainId = "15e08601-489a-45f6-be3a-f3dd9dda33dc";
                targetExportPlatforms = new org.openapis.openapi.models.operations.CreateProjectTargetExportPlatformsEnum[]{{
                    add(CreateProjectTargetExportPlatformsEnum.DOCKER_FILE),
                    add(CreateProjectTargetExportPlatformsEnum.TENSOR_FLOW),
                    add(CreateProjectTargetExportPlatformsEnum.TENSOR_FLOW),
                    add(CreateProjectTargetExportPlatformsEnum.DOCKER_FILE),
                }};
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

Delete a specific iteration of a project.

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

            DeleteIterationRequest req = new DeleteIterationRequest("ipsum", "e4a7a98e-4df3-47e4-9b89-55d413e13a48", "2310907b-d354-4c09-abd7-34f02449d86f");            

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

Delete a specific project.

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

            DeleteProjectRequest req = new DeleteProjectRequest("modi", "bb20fe5d-911c-4bfe-b49c-af45a27f69e2");            

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

Export a trained iteration.

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

            ExportIterationRequest req = new ExportIterationRequest("quod", "9e6d10e9-db3a-4d4c-ab03-108d9c337473", ExportIterationPlatformEnum.CORE_ML, "82b94f2a-b1fd-4567-9e9c-326350a46714") {{
                flavor = ExportIterationFlavorEnum.WINDOWS;
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

Get the list of exports for a specific iteration.

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

            GetExportsRequest req = new GetExportsRequest("nihil", "89ce0e99-1594-4d93-a74c-0252fe3b4b4d", "b8b778eb-b6e1-4d2c-b502-bafb2cbc4635");            

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

            GetImagePerformanceCountRequest req = new GetImagePerformanceCountRequest("fugiat", "5e65da02-8c3e-4951-a1e3-0fda966489d7", "b78673e1-3a12-4a6b-9924-94594487f5c8") {{
                tagIds = new String[]{{
                    add("3836b86b-3cdf-4641-9b04-49f9df13f4ee"),
                    add("dbe78bf6-0682-4589-8ea7-63d5c72795b7"),
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

            GetImagePerformancesRequest req = new GetImagePerformancesRequest("laudantium", "5148d6d5-49e5-4635-b33b-c0f970c42fc9", "f4844225-e75b-4796-865c-0efa6f93b90a") {{
                orderBy = GetImagePerformancesOrderByEnum.NEWEST;
                skip = 714977;
                tagIds = new String[]{{
                    add("c95be125-4b73-49f4-be77-210d1f6558c9"),
                    add("9c722d2b-c0f9-4408-bd9c-aae042dd7caa"),
                    add("c9b4caa1-cfe9-4e15-9f90-3907f3783198"),
                }};
                take = 193200;
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

Get a specific iteration.

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

            GetIterationRequest req = new GetIterationRequest("fugiat", "42e54a85-4665-497c-9023-3c1471d51aaa", "6ddf5abd-6487-4c5f-82b8-62a00bef69e1");            

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

Get detailed performance information about an iteration.

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

            GetIterationPerformanceRequest req = new GetIterationPerformanceRequest("aperiam", "0157630b-da7a-4fde-984a-35a41238e1a7", "35ac26ae-33be-4f97-9a8f-46bca1106fe9") {{
                overlapThreshold = 4078.27;
                threshold = 3697.61;
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

Get iterations for the project.

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

            GetIterationsRequest req = new GetIterationsRequest("soluta", "711d08cf-88ec-49f7-b99a-550a656ed333");            

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

Get a specific project.

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

            GetProjectRequest req = new GetProjectRequest("soluta", "b0ce8aa6-5432-4a98-aeb7-e14ca5640891");            

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

Get your projects.

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

            GetProjectsRequest req = new GetProjectsRequest("nemo");            

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

## publishIteration

Publish a specific iteration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishIterationRequest;
import org.openapis.openapi.models.operations.PublishIterationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishIterationRequest req = new PublishIterationRequest("eaque", "097019a4-8f88-4ece-bbf9-04e01105d389", "alias", "8162c6be-b68a-40f6-97b7-d03a1480f8de", "ipsum");            

            PublishIterationResponse res = sdk.projectApi.publishIteration(req);

            if (res.publishIteration200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## trainProject

Queues project for training.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrainProjectRequest;
import org.openapis.openapi.models.operations.TrainProjectResponse;
import org.openapis.openapi.models.operations.TrainProjectTrainingTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TrainProjectRequest req = new TrainProjectRequest("voluptatem", "f069d810-618d-497e-9522-97510da80312") {{
                forceTrain = false;
                notificationEmailAddress = "quia";
                reservedBudgetInHours = 591082;
                trainingType = TrainProjectTrainingTypeEnum.REGULAR;
            }};            

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

## unpublishIteration

Unpublish a specific iteration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnpublishIterationRequest;
import org.openapis.openapi.models.operations.UnpublishIterationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnpublishIterationRequest req = new UnpublishIterationRequest("nobis", "c61c2a70-2bb9-47ee-902d-a2de35f8e01b", "f33eaab4-5402-4ac1-b04b-f1cc9fc61aae");            

            UnpublishIterationResponse res = sdk.projectApi.unpublishIteration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIterationForm

Update a specific iteration.

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

            UpdateIterationFormRequest req = new UpdateIterationFormRequest(                new IterationInput("ad");, "voluptates", "b5f0c492-b574-44d0-8a22-67aaee79e3c7", "1ad31bec-b83d-4237-8ae3-bfc23d9450a9");            

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

Update a specific iteration.

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

            UpdateIterationJsonRequest req = new UpdateIterationJsonRequest(                new IterationInput("rem");, "iure", "a495bac7-07f0-46b2-8ecc-86492386f62c", "969c4cc6-b788-490a-bfd3-c81da10f8c23");            

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

Update a specific iteration.

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

            UpdateIterationRawRequest req = new UpdateIterationRawRequest("fugiat".getBytes(), "voluptatibus", "931da3ed-b51f-4ad9-8acc-9435137726d1", "5321b832-a56d-4691-80ff-60eb9a6658e6");            

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

Update a specific project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectFormRequest;
import org.openapis.openapi.models.operations.UpdateProjectFormResponse;
import org.openapis.openapi.models.shared.ProjectInput;
import org.openapis.openapi.models.shared.ProjectSettings;
import org.openapis.openapi.models.shared.ProjectSettingsClassificationTypeEnum;
import org.openapis.openapi.models.shared.ProjectSettingsTargetExportPlatformsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProjectFormRequest req = new UpdateProjectFormRequest(                new ProjectInput("molestias", "fuga",                 new ProjectSettings() {{
                                                classificationType = ProjectSettingsClassificationTypeEnum.MULTICLASS;
                                                domainId = "b843d382-dbec-475c-a8c6-0659468ce304";
                                                targetExportPlatforms = new org.openapis.openapi.models.shared.ProjectSettingsTargetExportPlatformsEnum[]{{
                                                    add(ProjectSettingsTargetExportPlatformsEnum.DOCKER_FILE),
                                                    add(ProjectSettingsTargetExportPlatformsEnum.DOCKER_FILE),
                                                    add(ProjectSettingsTargetExportPlatformsEnum.TENSOR_FLOW),
                                                    add(ProjectSettingsTargetExportPlatformsEnum.DOCKER_FILE),
                                                }};
                                            }};);, "expedita", "f8214c33-7f96-4bb0-869e-372db1344ba9");            

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

Update a specific project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectJsonRequest;
import org.openapis.openapi.models.operations.UpdateProjectJsonResponse;
import org.openapis.openapi.models.shared.ProjectInput;
import org.openapis.openapi.models.shared.ProjectSettings;
import org.openapis.openapi.models.shared.ProjectSettingsClassificationTypeEnum;
import org.openapis.openapi.models.shared.ProjectSettingsTargetExportPlatformsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProjectJsonRequest req = new UpdateProjectJsonRequest(                new ProjectInput("doloribus", "reprehenderit",                 new ProjectSettings() {{
                                                classificationType = ProjectSettingsClassificationTypeEnum.MULTILABEL;
                                                domainId = "a5c0ed7a-ab62-4e97-a61f-b0c58d27b519";
                                                targetExportPlatforms = new org.openapis.openapi.models.shared.ProjectSettingsTargetExportPlatformsEnum[]{{
                                                    add(ProjectSettingsTargetExportPlatformsEnum.DOCKER_FILE),
                                                    add(ProjectSettingsTargetExportPlatformsEnum.ONNX),
                                                    add(ProjectSettingsTargetExportPlatformsEnum.TENSOR_FLOW),
                                                }};
                                            }};);, "expedita", "4b50eef7-12b7-4a7a-b034-4b1710688dee");            

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

Update a specific project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectRawRequest;
import org.openapis.openapi.models.operations.UpdateProjectRawResponse;
import org.openapis.openapi.models.shared.ProjectInput;
import org.openapis.openapi.models.shared.ProjectSettings;
import org.openapis.openapi.models.shared.ProjectSettingsClassificationTypeEnum;
import org.openapis.openapi.models.shared.ProjectSettingsTargetExportPlatformsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProjectRawRequest req = new UpdateProjectRawRequest("facilis".getBytes(), "necessitatibus", "f897f3dd-0ccd-433f-91b3-e4e080aa1041");            

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
