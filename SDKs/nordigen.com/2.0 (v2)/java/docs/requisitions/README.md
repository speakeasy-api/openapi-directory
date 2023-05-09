# requisitions

### Available Operations

* [deleteRequisitionByIdV2](#deleterequisitionbyidv2) - Delete requisition and its end user agreement
* [requisitionById](#requisitionbyid) - Retrieve a requisition by ID
* [requisitionCreated](#requisitioncreated) - Create a new requisition
* [retrieveAllRequisitions](#retrieveallrequisitions) - Retrieve all requisitions belonging to the company

## deleteRequisitionByIdV2

Delete requisition and its end user agreement

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRequisitionByIdV2Request;
import org.openapis.openapi.models.operations.DeleteRequisitionByIdV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteRequisitionByIdV2Request req = new DeleteRequisitionByIdV2Request("4b8abf60-3a79-4f9d-be0a-b7da8a50ce18");            

            DeleteRequisitionByIdV2Response res = sdk.requisitions.deleteRequisitionByIdV2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requisitionById

Retrieve a requisition by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequisitionByIdRequest;
import org.openapis.openapi.models.operations.RequisitionByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RequisitionByIdRequest req = new RequisitionByIdRequest("f86bc173-d689-4eee-9526-f8d986e881ea");            

            RequisitionByIdResponse res = sdk.requisitions.requisitionById(req);

            if (res.requisition != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requisitionCreated

Create a new requisition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequisitionCreatedResponse;
import org.openapis.openapi.models.shared.RequisitionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.RequisitionRequest req = new RequisitionRequest("labore", "https://arctic-tracking.com") {{
                accountSelection = false;
                agreement = "012563f9-4e29-4e97-be92-2a57a15be3e0";
                redirectImmediate = false;
                reference = "iure";
                ssn = "ipsa";
                userLanguage = "totam";
            }};            

            RequisitionCreatedResponse res = sdk.requisitions.requisitionCreated(req);

            if (res.spectacularRequisition != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveAllRequisitions

Retrieve all requisitions belonging to the company

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveAllRequisitionsRequest;
import org.openapis.openapi.models.operations.RetrieveAllRequisitionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrieveAllRequisitionsRequest req = new RetrieveAllRequisitionsRequest() {{
                limit = 474668L;
                offset = 907733L;
            }};            

            RetrieveAllRequisitionsResponse res = sdk.requisitions.retrieveAllRequisitions(req);

            if (res.paginatedRequisitionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
