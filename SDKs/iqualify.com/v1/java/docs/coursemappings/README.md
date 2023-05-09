# courseMappings

### Available Operations

* [deleteCourseMappingsOfferingIdExternalCourseId](#deletecoursemappingsofferingidexternalcourseid) - Remove course mapping
* [getCourseMappings](#getcoursemappings) - Find course mappings
* [getCourseMappingsExternalcourseExternalCourseId](#getcoursemappingsexternalcourseexternalcourseid) - Find course mappings by externalCourseId
* [getCourseMappingsOfferingId](#getcoursemappingsofferingid) - Find course mappings by offeringId
* [putCourseMappingsOfferingIdExternalCourseId](#putcoursemappingsofferingidexternalcourseid) - Add course mapping

## deleteCourseMappingsOfferingIdExternalCourseId

Removes the course mapping between the offering and the externalCourseId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCourseMappingsOfferingIdExternalCourseIdRequest;
import org.openapis.openapi.models.operations.DeleteCourseMappingsOfferingIdExternalCourseIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCourseMappingsOfferingIdExternalCourseIdRequest req = new DeleteCourseMappingsOfferingIdExternalCourseIdRequest("voluptate", "cum");            

            DeleteCourseMappingsOfferingIdExternalCourseIdResponse res = sdk.courseMappings.deleteCourseMappingsOfferingIdExternalCourseId(req);

            if (res.deleteCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCourseMappings

Returns all course mappings for course offerings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCourseMappingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCourseMappingsResponse res = sdk.courseMappings.getCourseMappings();

            if (res.courseMappings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCourseMappingsExternalcourseExternalCourseId

Responds with course mapping details by externalCourseId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCourseMappingsExternalcourseExternalCourseIdRequest;
import org.openapis.openapi.models.operations.GetCourseMappingsExternalcourseExternalCourseIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCourseMappingsExternalcourseExternalCourseIdRequest req = new GetCourseMappingsExternalcourseExternalCourseIdRequest("reprehenderit");            

            GetCourseMappingsExternalcourseExternalCourseIdResponse res = sdk.courseMappings.getCourseMappingsExternalcourseExternalCourseId(req);

            if (res.getCourseMappingsExternalcourseExternalCourseId200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCourseMappingsOfferingId

Responds with course mapping details by offeringId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCourseMappingsOfferingIdRequest;
import org.openapis.openapi.models.operations.GetCourseMappingsOfferingIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCourseMappingsOfferingIdRequest req = new GetCourseMappingsOfferingIdRequest("maiores");            

            GetCourseMappingsOfferingIdResponse res = sdk.courseMappings.getCourseMappingsOfferingId(req);

            if (res.getCourseMappingsOfferingId200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCourseMappingsOfferingIdExternalCourseId

Creates a mapping between the offering and the externalCourseId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCourseMappingsOfferingIdExternalCourseIdRequest;
import org.openapis.openapi.models.operations.PutCourseMappingsOfferingIdExternalCourseIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutCourseMappingsOfferingIdExternalCourseIdRequest req = new PutCourseMappingsOfferingIdExternalCourseIdRequest("corporis", "dolore");            

            PutCourseMappingsOfferingIdExternalCourseIdResponse res = sdk.courseMappings.putCourseMappingsOfferingIdExternalCourseId(req);

            if (res.putCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
