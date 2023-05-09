# developersFindAndModifyDevelopers

### Available Operations

* [deleteDevelopersDeveloperId](#deletedevelopersdeveloperid) - Removes a single developer
* [getDevelopers](#getdevelopers) - Returns a paginated list of developers
* [getDevelopersDeveloperId](#getdevelopersdeveloperid) - Returns a single developer
* [patchDevelopersDeveloperId](#patchdevelopersdeveloperid) - Updates the developer fields
* [postDevelopersDeveloperId](#postdevelopersdeveloperid) - Updates the developer record or adds the developer if it doesn't exist

## deleteDevelopersDeveloperId

Removes a single developer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDevelopersDeveloperIdRequest;
import org.openapis.openapi.models.operations.DeleteDevelopersDeveloperIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint", "veritatis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteDevelopersDeveloperIdRequest req = new DeleteDevelopersDeveloperIdRequest("itaque");            

            DeleteDevelopersDeveloperIdResponse res = sdk.developersFindAndModifyDevelopers.deleteDevelopersDeveloperId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevelopers

- Results are paginated and the default is value is 100 if no limit is provided


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDevelopersRequest;
import org.openapis.openapi.models.operations.GetDevelopersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt", "enim") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetDevelopersRequest req = new GetDevelopersRequest() {{
                limit = 9356L;
                pageNumber = 667411L;
                query = "quibusdam";
                sort = "explicabo";
            }};            

            GetDevelopersResponse res = sdk.developersFindAndModifyDevelopers.getDevelopers(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevelopersDeveloperId

Returns a single developer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDevelopersDeveloperIdRequest;
import org.openapis.openapi.models.operations.GetDevelopersDeveloperIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "distinctio") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetDevelopersDeveloperIdRequest req = new GetDevelopersDeveloperIdRequest("quibusdam");            

            GetDevelopersDeveloperIdResponse res = sdk.developersFindAndModifyDevelopers.getDevelopersDeveloperId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchDevelopersDeveloperId

Updates the developer fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchDevelopersDeveloperIdRequest;
import org.openapis.openapi.models.operations.PatchDevelopersDeveloperIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore", "modi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PatchDevelopersDeveloperIdRequest req = new PatchDevelopersDeveloperIdRequest("qui") {{
                customData = "aliquid";
                email = "Kavon82@yahoo.com";
                name = "Linda Corkery";
                type = "tempora";
                username = "Mckayla96";
            }};            

            PatchDevelopersDeveloperIdResponse res = sdk.developersFindAndModifyDevelopers.patchDevelopersDeveloperId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDevelopersDeveloperId

Updates the developer record or adds the developer if it doesn't exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDevelopersDeveloperIdRequest;
import org.openapis.openapi.models.operations.PostDevelopersDeveloperIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum", "non") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostDevelopersDeveloperIdRequest req = new PostDevelopersDeveloperIdRequest("eligendi") {{
                customData = "sint";
                email = "Laron_Tremblay@yahoo.com";
                name = "Raquel Wilderman";
                type = "in";
                username = "Rose.Wolff29";
            }};            

            PostDevelopersDeveloperIdResponse res = sdk.developersFindAndModifyDevelopers.postDevelopersDeveloperId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
