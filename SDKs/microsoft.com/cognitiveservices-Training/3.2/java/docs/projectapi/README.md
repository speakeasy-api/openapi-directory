# projectApi

### Available Operations

* [createProject](#createproject) - Create a project.
* [deleteIteration](#deleteiteration) - Delete a specific iteration of a project.
* [deleteProject](#deleteproject) - Delete a specific project.
* [exportIteration](#exportiteration) - Export a trained iteration.
* [exportProject](#exportproject) - Exports a project.
* [getExports](#getexports) - Get the list of exports for a specific iteration.
* [getImagePerformanceCount](#getimageperformancecount) - Gets the number of images tagged with the provided {tagIds} that have prediction results from
training for the provided iteration {iterationId}.
* [getImagePerformances](#getimageperformances) - Get image with its prediction for a given project iteration.
* [getIteration](#getiteration) - Get a specific iteration.
* [getIterationPerformance](#getiterationperformance) - Get detailed performance information about an iteration.
* [getIterations](#getiterations) - Get iterations for the project.
* [getProject](#getproject) - Get a specific project.
* [getProjects](#getprojects) - Get your projects.
* [importProject](#importproject) - Imports a project.
* [publishIteration](#publishiteration) - Publish a specific iteration.
* [trainProjectForm](#trainprojectform) - Queues project for training.
* [trainProjectJson](#trainprojectjson) - Queues project for training.
* [trainProjectRaw](#trainprojectraw) - Queues project for training.
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProjectRequest req = new CreateProjectRequest("vitae") {{
                classificationType = CreateProjectClassificationTypeEnum.MULTICLASS;
                description = "non";
                domainId = "82bd7ed5-6507-4621-858f-4d7396564c20";
                targetExportPlatforms = new org.openapis.openapi.models.operations.CreateProjectTargetExportPlatformsEnum[]{{
                    add(CreateProjectTargetExportPlatformsEnum.CORE_ML),
                    add(CreateProjectTargetExportPlatformsEnum.DOCKER_FILE),
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteIterationRequest req = new DeleteIterationRequest("a961d24a-7dbb-48f5-b2d8-92cf7812cb51", "2c878240-bf54-48f8-8f8f-1bf0bc8e1f20");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProjectRequest req = new DeleteProjectRequest("d5d831d0-0810-490f-a706-673f3a681c57");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportIterationRequest req = new ExportIterationRequest("8dce7424-09a2-415e-8860-1489a5f63e3a", ExportIterationPlatformEnum.VAIDK, "3dd9dda3-3dcd-4634-83e4-a7a98e4df37e") {{
                flavor = ExportIterationFlavorEnum.ONNX10;
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

## exportProject

Exports a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportProjectRequest;
import org.openapis.openapi.models.operations.ExportProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportProjectRequest req = new ExportProjectRequest("b8955d41-3e13-4a48-a310-907bd354c092");            

            ExportProjectResponse res = sdk.projectApi.exportProject(req);

            if (res.projectExport != null) {
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExportsRequest req = new GetExportsRequest("d734f024-49d8-46f4-bb20-fe5d911cbfe7", "49caf45a-27f6-49e2-89e6-d10e9db3ad4c");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetImagePerformanceCountRequest req = new GetImagePerformanceCountRequest("b03108d9-c337-4473-882b-94f2ab1fd567", "1e9c3263-50a4-4671-8378-9ce0e991594d") {{
                tagIds = new String[]{{
                    add("3a74c025-2fe3-4b4b-8db8-b778ebb6e1d2"),
                    add("cf502baf-b2cb-4c46-b5d5-e65da028c3e9"),
                    add("51a1e30f-da96-4648-9d7b-78673e13a12a"),
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetImagePerformancesRequest req = new GetImagePerformancesRequest("b9924945-9448-47f5-8843-836b86b3cdf6", "415b0449-f9df-413f-8eed-be78bf606825") {{
                orderBy = GetImagePerformancesOrderByEnum.OLDEST;
                skip = 564067;
                tagIds = new String[]{{
                    add("ea763d5c-7279-45b7-8514-8d6d549e5635"),
                    add("b33bc0f9-70c4-42fc-9f48-44225e75b796"),
                }};
                take = 41800;
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIterationRequest req = new GetIterationRequest("5c0efa6f-93b9-40a1-b8c9-5be1254b739f", "4fe77210-d1f6-4558-899c-722d2bc0f940");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIterationPerformanceRequest req = new GetIterationPerformanceRequest("7d9caae0-42dd-47ca-ac9b-4caa1cfe9e15", "df903907-f378-4319-83d4-2e54a8546659") {{
                overlapThreshold = 4826.7;
                threshold = 7619.61;
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIterationsRequest req = new GetIterationsRequest("0233c147-1d51-4aaa-addf-5abd6487c5fc");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectRequest req = new GetProjectRequest("b862a00b-ef69-4e10-8157-630bda7afded");            

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
import org.openapis.openapi.models.operations.GetProjectsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectsResponse res = sdk.projectApi.getProjects();

            if (res.projects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importProject

Imports a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportProjectRequest;
import org.openapis.openapi.models.operations.ImportProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportProjectRequest req = new ImportProjectRequest("similique");            

            ImportProjectResponse res = sdk.projectApi.importProject(req);

            if (res.project != null) {
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PublishIterationRequest req = new PublishIterationRequest("5a41238e-1a73-45ac-a6ae-33bef971a8f4", "ex", "bca1106f-e965-4b71-9d08-cf88ec9f7b99", "officia");            

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

## trainProjectForm

Queues project for training.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrainProjectFormRequest;
import org.openapis.openapi.models.operations.TrainProjectFormResponse;
import org.openapis.openapi.models.operations.TrainProjectFormTrainingTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TrainingParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TrainProjectFormRequest req = new TrainProjectFormRequest("50a656ed-333b-4b0c-a8aa-65432a986eb7") {{
                trainingParameters = new TrainingParameters() {{
                    selectedTags = new String[]{{
                        add("14ca5640-8915-4009-b019-a48f88ece7bf"),
                        add("904e0110-5d38-4908-962c-6beb68a0f657"),
                        add("b7d03a14-80f8-4de3-8f06-9d810618d97e"),
                        add("15229751-0da8-4031-a292-cc61c2a702bb"),
                    }};
                }};;
                forceTrain = false;
                notificationEmailAddress = "sint";
                reservedBudgetInHours = 487746;
                trainingType = TrainProjectFormTrainingTypeEnum.ADVANCED;
            }};            

            TrainProjectFormResponse res = sdk.projectApi.trainProjectForm(req);

            if (res.iteration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## trainProjectJson

Queues project for training.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrainProjectJsonRequest;
import org.openapis.openapi.models.operations.TrainProjectJsonResponse;
import org.openapis.openapi.models.operations.TrainProjectJsonTrainingTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TrainingParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TrainProjectJsonRequest req = new TrainProjectJsonRequest("102da2de-35f8-4e01-bf33-eaab45402ac1") {{
                trainingParameters = new TrainingParameters() {{
                    selectedTags = new String[]{{
                        add("04bf1cc9-fc61-4aae-9eb5-f0c492b5744d"),
                        add("08a2267a-aee7-49e3-871a-d31becb83d23"),
                    }};
                }};;
                forceTrain = false;
                notificationEmailAddress = "esse";
                reservedBudgetInHours = 537738;
                trainingType = TrainProjectJsonTrainingTypeEnum.ADVANCED;
            }};            

            TrainProjectJsonResponse res = sdk.projectApi.trainProjectJson(req);

            if (res.iteration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## trainProjectRaw

Queues project for training.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrainProjectRawRequest;
import org.openapis.openapi.models.operations.TrainProjectRawResponse;
import org.openapis.openapi.models.operations.TrainProjectRawTrainingTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TrainingParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TrainProjectRawRequest req = new TrainProjectRawRequest("3bfc23d9-450a-4986-a495-bac707f06b28") {{
                requestBody = "repudiandae".getBytes();
                forceTrain = false;
                notificationEmailAddress = "minus";
                reservedBudgetInHours = 783992;
                trainingType = TrainProjectRawTrainingTypeEnum.ADVANCED;
            }};            

            TrainProjectRawResponse res = sdk.projectApi.trainProjectRaw(req);

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnpublishIterationRequest req = new UnpublishIterationRequest("492386f6-2c96-49c4-8c6b-78890a3fd3c8", "1da10f8c-23df-4931-9a3e-db51fad94acc");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateIterationFormRequest req = new UpdateIterationFormRequest(                new IterationInput("aliquam");, "35137726-d153-421b-832a-56d69180ff60", "eb9a6658-e69a-44b8-83d3-82dbec75c68c");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateIterationJsonRequest req = new UpdateIterationJsonRequest(                new IterationInput("aut");, "659468ce-304d-4884-9bf8-214c337f96bb", "0c69e372-db13-444b-a9f7-8a5c0ed7aab6");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateIterationRawRequest req = new UpdateIterationRawRequest("recusandae".getBytes(), "97261fb0-c58d-427b-9199-6b5b4b50eef7", "12b7a7ab-0344-4b17-9068-8deebef897f3");            

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
import org.openapis.openapi.models.shared.ProjectStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProjectFormRequest req = new UpdateProjectFormRequest(                new ProjectInput("pariatur", "voluptatem",                 new ProjectSettingsInput() {{
                                                classificationType = ProjectSettingsClassificationTypeEnum.MULTILABEL;
                                                domainId = "cd33f11b-3e4e-4080-aa10-4186ec759e02";
                                                imageProcessingSettings = new ImageProcessingSettings() {{
                                                    augmentationMethods = new java.util.HashMap<String, Boolean>() {{
                                                        put("dolor", false);
                                                        put("dignissimos", false);
                                                        put("doloremque", false);
                                                        put("consequuntur", false);
                                                    }};
                                                }};;
                                                targetExportPlatforms = new org.openapis.openapi.models.shared.ProjectSettingsTargetExportPlatformsEnum[]{{
                                                    add(ProjectSettingsTargetExportPlatformsEnum.TENSOR_FLOW),
                                                    add(ProjectSettingsTargetExportPlatformsEnum.ONNX),
                                                    add(ProjectSettingsTargetExportPlatformsEnum.DOCKER_FILE),
                                                    add(ProjectSettingsTargetExportPlatformsEnum.VAIDK),
                                                }};
                                            }};) {{
                                status = ProjectStatusEnum.SUCCEEDED;
                            }};, "d30ead31-04fa-4447-87bf-375b44282821");            

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
import org.openapis.openapi.models.shared.ProjectStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProjectJsonRequest req = new UpdateProjectJsonRequest(                new ProjectInput("nulla", "libero",                 new ProjectSettingsInput() {{
                                                classificationType = ProjectSettingsClassificationTypeEnum.MULTICLASS;
                                                domainId = "f69e5926-7c71-4cc8-93cd-4258d0358a82";
                                                imageProcessingSettings = new ImageProcessingSettings() {{
                                                    augmentationMethods = new java.util.HashMap<String, Boolean>() {{
                                                        put("rem", false);
                                                        put("aut", false);
                                                        put("atque", false);
                                                        put("repellat", false);
                                                    }};
                                                }};;
                                                targetExportPlatforms = new org.openapis.openapi.models.shared.ProjectSettingsTargetExportPlatformsEnum[]{{
                                                    add(ProjectSettingsTargetExportPlatformsEnum.CORE_ML),
                                                    add(ProjectSettingsTargetExportPlatformsEnum.DOCKER_FILE),
                                                    add(ProjectSettingsTargetExportPlatformsEnum.TENSOR_FLOW),
                                                    add(ProjectSettingsTargetExportPlatformsEnum.CORE_ML),
                                                }};
                                            }};) {{
                                status = ProjectStatusEnum.FAILED;
                            }};, "2047c044-9e14-43f9-a19b-b7d40d5a11fa");            

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
import org.openapis.openapi.models.shared.ProjectStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProjectRawRequest req = new UpdateProjectRawRequest("nesciunt".getBytes(), "6e625923-3f95-4c9d-a373-97c785b5db4f");            

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
