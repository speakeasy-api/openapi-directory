# ownershipFindOwnership

### Available Operations

* [getOwnership](#getownership) - Returns a paginated list of app licenses
* [getOwnershipOwnershipId](#getownershipownershipid) - Returns an ownership record
* [patchOwnershipOwnershipId](#patchownershipownershipid) - Updates ownership fields
* [postOwnershipInstall](#postownershipinstall) - Aquires an app license for a user (installs app)
* [postOwnershipUninstallOwnershipId](#postownershipuninstallownershipid) - Uninstalls a license for a particular user and app (uninstalls app)
* [postOwnershipOwnershipId](#postownershipownershipid) - Updates an ownership record

## getOwnership

 - Results are returned for the market provided within the basic authentication credentials 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOwnershipRequest;
import org.openapis.openapi.models.operations.GetOwnershipResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil", "magnam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetOwnershipRequest req = new GetOwnershipRequest() {{
                limit = 716075L;
                pageNumber = 660174L;
                query = "labore";
                sort = "labore";
            }};            

            GetOwnershipResponse res = sdk.ownershipFindOwnership.getOwnership(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOwnershipOwnershipId

 - Results are returned for the market provided within the basic authentication credentials 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOwnershipOwnershipIdRequest;
import org.openapis.openapi.models.operations.GetOwnershipOwnershipIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit", "natus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetOwnershipOwnershipIdRequest req = new GetOwnershipOwnershipIdRequest("nobis");            

            GetOwnershipOwnershipIdResponse res = sdk.ownershipFindOwnership.getOwnershipOwnershipId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchOwnershipOwnershipId

 - Results are returned for the market provided within the basic authentication credentials 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchOwnershipOwnershipIdRequest;
import org.openapis.openapi.models.operations.PatchOwnershipOwnershipIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum", "vero") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PatchOwnershipOwnershipIdRequest req = new PatchOwnershipOwnershipIdRequest("aspernatur") {{
                customData = "architecto";
                expires = 298282L;
            }};            

            PatchOwnershipOwnershipIdResponse res = sdk.ownershipFindOwnership.patchOwnershipOwnershipId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOwnershipInstall

 - This method is called on behalf of a user - This method requires either a modelId from the app or a custom model - User data and statistics are recorded when this method is called 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOwnershipInstallRequest;
import org.openapis.openapi.models.operations.PostOwnershipInstallResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et", "excepturi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostOwnershipInstallRequest req = new PostOwnershipInstallRequest("ullam", "provident") {{
                customData = "quos";
                model = "sint";
                modelId = "accusantium";
            }};            

            PostOwnershipInstallResponse res = sdk.ownershipFindOwnership.postOwnershipInstall(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOwnershipUninstallOwnershipId

 - This method is called on behalf of a user - User data and statistics are recorded when this method is called 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOwnershipUninstallOwnershipIdRequest;
import org.openapis.openapi.models.operations.PostOwnershipUninstallOwnershipIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia", "reiciendis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostOwnershipUninstallOwnershipIdRequest req = new PostOwnershipUninstallOwnershipIdRequest("mollitia", "ad") {{
                cancelOwnership = false;
                customData = "eum";
            }};            

            PostOwnershipUninstallOwnershipIdResponse res = sdk.ownershipFindOwnership.postOwnershipUninstallOwnershipId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOwnershipOwnershipId

 - Results are returned for the market provided within the basic authentication credentials 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOwnershipOwnershipIdRequest;
import org.openapis.openapi.models.operations.PostOwnershipOwnershipIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor", "necessitatibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostOwnershipOwnershipIdRequest req = new PostOwnershipOwnershipIdRequest("odit") {{
                customData = "nemo";
                expires = 97260L;
            }};            

            PostOwnershipOwnershipIdResponse res = sdk.ownershipFindOwnership.postOwnershipOwnershipId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
