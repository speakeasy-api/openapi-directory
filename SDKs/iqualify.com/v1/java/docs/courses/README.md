# courses

### Available Operations

* [getCourses](#getcourses) - Find courses
* [getCoursesContentId](#getcoursescontentid) - Find course by contentId
* [getCoursesContentIdActivations](#getcoursescontentidactivations) - Find activations for a contentId
* [getCoursesContentIdPermissions](#getcoursescontentidpermissions) - Find users who have access to the contentId provided
* [postCoursesRootContentIdPermissionsUserEmail](#postcoursesrootcontentidpermissionsuseremail) - Update course access

## getCourses

Responds with all courses (draft and published.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCoursesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCoursesResponse res = sdk.courses.getCourses();

            if (res.courseResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCoursesContentId

Responds with a course matching the contentId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCoursesContentIdRequest;
import org.openapis.openapi.models.operations.GetCoursesContentIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCoursesContentIdRequest req = new GetCoursesContentIdRequest("rem");            

            GetCoursesContentIdResponse res = sdk.courses.getCoursesContentId(req);

            if (res.courseMetaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCoursesContentIdActivations

Responds with all activations for the contentId provided.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCoursesContentIdActivationsRequest;
import org.openapis.openapi.models.operations.GetCoursesContentIdActivationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCoursesContentIdActivationsRequest req = new GetCoursesContentIdActivationsRequest("quasi");            

            GetCoursesContentIdActivationsResponse res = sdk.courses.getCoursesContentIdActivations(req);

            if (res.activationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCoursesContentIdPermissions

Responds with users who have access to a specific course by contentId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCoursesContentIdPermissionsRequest;
import org.openapis.openapi.models.operations.GetCoursesContentIdPermissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCoursesContentIdPermissionsRequest req = new GetCoursesContentIdPermissionsRequest("sint");            

            GetCoursesContentIdPermissionsResponse res = sdk.courses.getCoursesContentIdPermissions(req);

            if (res.userPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCoursesRootContentIdPermissionsUserEmail

Provide a user with access to a specific course by rootContentId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser;
import org.openapis.openapi.models.operations.PostCoursesRootContentIdPermissionsUserEmailRequest;
import org.openapis.openapi.models.operations.PostCoursesRootContentIdPermissionsUserEmailResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostCoursesRootContentIdPermissionsUserEmailRequest req = new PostCoursesRootContentIdPermissionsUserEmailRequest(                new PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser() {{
                                isBuilder = false;
                                isReviewer = false;
                            }};, "itaque", "incidunt");            

            PostCoursesRootContentIdPermissionsUserEmailResponse res = sdk.courses.postCoursesRootContentIdPermissionsUserEmail(req);

            if (res.postCoursesRootContentIdPermissionsUserEmail201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
