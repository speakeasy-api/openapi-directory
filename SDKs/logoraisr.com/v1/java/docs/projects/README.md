# projects

### Available Operations

* [projectsCreate](#projectscreate) - Create a new project.
* [projectsList](#projectslist) - Get user project list.
* [projectsRead](#projectsread) - Get project details.

## projectsCreate

This POST-Method creates a new project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsCreateResponse;
import org.openapis.openapi.models.shared.Process;
import org.openapis.openapi.models.shared.ProjectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProjectRequest req = new ProjectRequest("8d69a674-e0f4-467c-8879-6ed151a05dfc", "odit") {{
                process = new Process("at") {{
                    crop = "at";
                    flip = false;
                    mirror = false;
                    resize = "maiores";
                    rotate = 473608L;
                }};;
            }};            

            ProjectsCreateResponse res = sdk.projects.projectsCreate(req);

            if (res.projectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsList

This GET-Method lists the user's projects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectsListResponse res = sdk.projects.projectsList();

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsRead

This GET-Method returns a specific project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsReadRequest;
import org.openapis.openapi.models.operations.ProjectsReadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectsReadRequest req = new ProjectsReadRequest("esse");            

            ProjectsReadResponse res = sdk.projects.projectsRead(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
