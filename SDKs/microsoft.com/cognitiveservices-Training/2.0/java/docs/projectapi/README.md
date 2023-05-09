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
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateProjectRequest req = new CreateProjectRequest("earum", "occaecati") {{
                description = "dicta";
                domainId = "b9a9f748-46e2-4c33-89db-0536d9e75ca0";
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

            DeleteIterationRequest req = new DeleteIterationRequest("sit", "6f5392c1-1a25-4a8b-b92f-97428ad9a9f8", "bf822112-5359-4d98-b87f-7a79cd72cd24");            

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

            DeleteProjectRequest req = new DeleteProjectRequest("voluptatum", "4da21729-f2ac-441e-b572-5f1169ac1e41");            

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

            ExportIterationRequest req = new ExportIterationRequest("temporibus", "8a23c23e-34f2-4dfa-8a19-7f6de922151f", "saepe", "17120998-53e9-4f54-bd85-4439ee224460") {{
                flavor = "tempora";
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

            GetExportsRequest req = new GetExportsRequest("aliquam", "3bc15418-8c2f-456e-85da-7832eabd617c", "3b0d51a4-4bf0-41ba-9870-6d46082bfbdc");            

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

            GetImagePerformanceCountRequest req = new GetImagePerformanceCountRequest("modi", "1ff5d4e2-ae4f-4b5c-b35d-17638f1edb78", "359ecc5c-b860-4f8c-9580-ba73810e4fe4") {{
                tagIds = new String[]{{
                    add("magnam"),
                    add("voluptate"),
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

            GetImagePerformancesRequest req = new GetImagePerformancesRequest("magni", "97cd3b1d-d3bb-4ce2-87b7-684eff50126d", "71cffbd0-eb74-4b84-a195-3b44bd3c4315") {{
                orderBy = GetImagePerformancesOrderByEnum.OLDEST;
                skip = 825303;
                tagIds = new String[]{{
                    add("velit"),
                }};
                take = 881549;
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

            GetIterationRequest req = new GetIterationRequest("veniam", "953c0011-3986-43aa-81e6-c31cc2f1fcb5", "1c9a41ff-be9c-4bd7-95ee-65e076cc7abf");            

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

            GetIterationPerformanceRequest req = new GetIterationPerformanceRequest("eum", "16ea5c71-6419-434b-90f2-e09d19d2fc2f", "9e2e1059-44b9-435d-a37a-72f90849d6ae") {{
                overlapThreshold = 8266.83;
                threshold = 3105.08;
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

            GetIterationsRequest req = new GetIterationsRequest("id", "ecb7537c-d922-42c9-bf57-491aabfa2e76");            

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

            GetProjectRequest req = new GetProjectRequest("quasi", "f0ca4d45-6ef1-4031-a689-9f0c2001e22c");            

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

            GetProjectsRequest req = new GetProjectsRequest("illum");            

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

            TrainProjectRequest req = new TrainProjectRequest("veniam", "5cc0584a-184d-476d-971f-c820c65b037b");            

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
                                name = "Miss Guy Turcotte";
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProjectFormRequest req = new UpdateProjectFormRequest(                new ProjectInput() {{
                                description = "ipsa";
                                name = "Wilbur Kuvalis";
                                settings = new ProjectSettings() {{
                                    domainId = "70d3c5a1-f9c2-442c-bb66-a1f30c73df5b";
                                }};;
                            }};, "ea", "719890f4-2a4b-4b43-8d85-b260591d745e");            

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
                                description = "sequi";
                                name = "Russell Beier";
                                settings = new ProjectSettings() {{
                                    domainId = "c9c3f567-e0e2-4527-a5b1-d62fcdace1f0";
                                }};;
                            }};, "sunt", "216ce223-9e8f-425c-90d1-9d959f439e39");            

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

            UpdateProjectRawRequest req = new UpdateProjectRawRequest("eos".getBytes(), "nisi", "6cbd95f7-aa2b-4241-9369-5d1e6698fcc4");            

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
