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

            CreateProjectRequest req = new CreateProjectRequest("eligendi", "perspiciatis") {{
                classificationType = CreateProjectClassificationTypeEnum.MULTICLASS;
                description = "sint";
                domainId = "c4cc6b78-890a-43fd-bc81-da10f8c23df9";
                targetExportPlatforms = new org.openapis.openapi.models.operations.CreateProjectTargetExportPlatformsEnum[]{{
                    add(CreateProjectTargetExportPlatformsEnum.CORE_ML),
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

            DeleteIterationRequest req = new DeleteIterationRequest("pariatur", "a3edb51f-ad94-4acc-9435-137726d15321", "b832a56d-6918-40ff-a0eb-9a6658e69a4b");            

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

            DeleteProjectRequest req = new DeleteProjectRequest("totam", "43d382db-ec75-4c68-8606-59468ce304d8");            

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

            ExportIterationRequest req = new ExportIterationRequest("quas", "49bf8214-c337-4f96-bb0c-69e372db1344", ExportIterationPlatformEnum.ONNX, "a9f78a5c-0ed7-4aab-a2e9-7261fb0c58d2") {{
                flavor = ExportIterationFlavorEnum.ONNX12;
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

            GetExportsRequest req = new GetExportsRequest("nobis", "51996b5b-4b50-4eef-b12b-7a7ab0344b17", "10688dee-bef8-497f-bdd0-ccd33f11b3e4");            

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

            GetImagePerformanceCountRequest req = new GetImagePerformanceCountRequest("voluptates", "080aa104-186e-4c75-9e02-f3702c5c8e2d", "30ead310-4fa4-4470-bbf3-75b44282821f") {{
                tagIds = new String[]{{
                    add("b2f69e59-267c-471c-88d3-cd4258d0358a"),
                    add("82c808fe-2751-4a20-87c0-449e143f9619"),
                    add("bb7d40d5-a11f-4a43-ae62-59233f95c9d2"),
                    add("37397c78-5b5d-4b4f-9001-83febdf676b7"),
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

            GetImagePerformancesRequest req = new GetImagePerformancesRequest("consequuntur", "06dab750-052a-4564-bedc-439ed8c4320f", "41240d44-87ac-4693-b94c-3b9d2488d795") {{
                orderBy = GetImagePerformancesOrderByEnum.OLDEST;
                skip = 686421;
                tagIds = new String[]{{
                    add("2fc40566-9f69-4a00-ad21-249450819d7c"),
                    add("3b1b4184-4060-4e00-b10d-023dc901f5af"),
                }};
                take = 866821;
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

            GetIterationRequest req = new GetIterationRequest("eos", "a6c44846-ae9d-4892-93c8-962f4896bf51", "e4652d3c-343d-4617-b8af-491247725e62");            

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

            GetIterationPerformanceRequest req = new GetIterationPerformanceRequest("et", "909e9104-4a5d-4e59-ac77-06670cf1cf59", "32605251-e66b-4b42-a897-d99a2d335670") {{
                overlapThreshold = 8842.06;
                threshold = 6241.81;
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

            GetIterationsRequest req = new GetIterationsRequest("velit", "ee6cf59f-358a-4aea-8ae3-23a31bf7ba1c");            

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

            GetProjectRequest req = new GetProjectRequest("minus", "97716c80-2cc9-4e0c-bd9d-323f1aa63ed9");            

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

            GetProjectsRequest req = new GetProjectsRequest("optio");            

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

            PublishIterationRequest req = new PublishIterationRequest("asperiores", "1c856bcb-a51e-4f24-94a4-7facf116cdd5", "ut", "44a75628-73c7-4dd9-afaf-43dc623620f3", "et");            

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

            TrainProjectRequest req = new TrainProjectRequest("dolor", "8f30df3d-b022-4faa-965f-b8f652ebb9d3") {{
                forceTrain = false;
                notificationEmailAddress = "praesentium";
                reservedBudgetInHours = 249962;
                trainingType = TrainProjectTrainingTypeEnum.ADVANCED;
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

            UnpublishIterationRequest req = new UnpublishIterationRequest("dolor", "8790243b-293d-4ab3-8e91-7f50fda04c8b", "1bb55a29-2b0b-4c3b-b744-664eb1d03388");            

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

            UpdateIterationFormRequest req = new UpdateIterationFormRequest(                new IterationInput("facilis");, "consequatur", "d1bb17af-ee74-4b6f-ab94-57c7edaf39d1", "6fbf76fd-162b-4303-a302-3b93e34316cf");            

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

            UpdateIterationJsonRequest req = new UpdateIterationJsonRequest(                new IterationInput("corporis");, "nemo", "b4313553-ccf1-4c20-8c4a-dcc9904c5195", "b8648cef-a78f-41e2-93b9-01e0952bbb4c");            

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

            UpdateIterationRawRequest req = new UpdateIterationRawRequest("harum".getBytes(), "quidem", "19f713d9-5a41-469c-9387-271e18ea9e45", "118c2cc5-7fbd-460b-9a78-ed29a9d4eea8");            

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
import org.openapis.openapi.models.shared.ImageProcessingSettings;
import org.openapis.openapi.models.shared.ProjectInput;
import org.openapis.openapi.models.shared.ProjectSettingsClassificationTypeEnum;
import org.openapis.openapi.models.shared.ProjectSettingsInput;
import org.openapis.openapi.models.shared.ProjectSettingsTargetExportPlatformsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProjectFormRequest req = new UpdateProjectFormRequest(                new ProjectInput("ullam", "nisi",                 new ProjectSettingsInput() {{
                                                classificationType = ProjectSettingsClassificationTypeEnum.MULTICLASS;
                                                domainId = "8c2d4f4c-88be-44f2-b8fd-9667e46c51d2";
                                                imageProcessingSettings = new ImageProcessingSettings() {{
                                                    augmentationMethods = new java.util.HashMap<String, Boolean>() {{
                                                        put("repellat", false);
                                                        put("id", false);
                                                        put("fuga", false);
                                                        put("ad", false);
                                                    }};
                                                }};;
                                                targetExportPlatforms = new org.openapis.openapi.models.shared.ProjectSettingsTargetExportPlatformsEnum[]{{
                                                    add(ProjectSettingsTargetExportPlatformsEnum.VAIDK),
                                                    add(ProjectSettingsTargetExportPlatformsEnum.ONNX),
                                                    add(ProjectSettingsTargetExportPlatformsEnum.VAIDK),
                                                }};
                                            }};);, "repellat", "234c955b-9bdf-4219-8abd-9bbcc2725ec2");            

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
import org.openapis.openapi.models.shared.ImageProcessingSettings;
import org.openapis.openapi.models.shared.ProjectInput;
import org.openapis.openapi.models.shared.ProjectSettingsClassificationTypeEnum;
import org.openapis.openapi.models.shared.ProjectSettingsInput;
import org.openapis.openapi.models.shared.ProjectSettingsTargetExportPlatformsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProjectJsonRequest req = new UpdateProjectJsonRequest(                new ProjectInput("suscipit", "ipsam",                 new ProjectSettingsInput() {{
                                                classificationType = ProjectSettingsClassificationTypeEnum.MULTILABEL;
                                                domainId = "ce028084-0c69-4ef6-8e45-c8addfac7545";
                                                imageProcessingSettings = new ImageProcessingSettings() {{
                                                    augmentationMethods = new java.util.HashMap<String, Boolean>() {{
                                                        put("ipsa", false);
                                                    }};
                                                }};;
                                                targetExportPlatforms = new org.openapis.openapi.models.shared.ProjectSettingsTargetExportPlatformsEnum[]{{
                                                    add(ProjectSettingsTargetExportPlatformsEnum.TENSOR_FLOW),
                                                    add(ProjectSettingsTargetExportPlatformsEnum.CORE_ML),
                                                }};
                                            }};);, "optio", "6632b439-1fdf-401c-be91-e8f7bc69d460");            

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
import org.openapis.openapi.models.shared.ImageProcessingSettings;
import org.openapis.openapi.models.shared.ProjectInput;
import org.openapis.openapi.models.shared.ProjectSettingsClassificationTypeEnum;
import org.openapis.openapi.models.shared.ProjectSettingsInput;
import org.openapis.openapi.models.shared.ProjectSettingsTargetExportPlatformsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProjectRawRequest req = new UpdateProjectRawRequest("est".getBytes(), "iusto", "7eceb26d-10f1-4ef2-a31c-7c0f0f873f9d");            

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
