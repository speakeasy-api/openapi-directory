# employees

### Available Operations

* [getV2Employees](#getv2employees) - ListEmployees
* [getV2EmployeesId](#getv2employeesid) - RetrieveEmployee

## getV2Employees

ListEmployees

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2EmployeesRequest;
import org.openapis.openapi.models.operations.GetV2EmployeesResponse;
import org.openapis.openapi.models.operations.GetV2EmployeesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2EmployeesRequest req = new GetV2EmployeesRequest() {{
                cursor = "voluptatem";
                limit = 873059L;
                locationId = "nisi";
                status = "quis";
            }};            

            GetV2EmployeesResponse res = sdk.employees.getV2Employees(req, new GetV2EmployeesSecurity("perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEmployeesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2EmployeesId

RetrieveEmployee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2EmployeesIdRequest;
import org.openapis.openapi.models.operations.GetV2EmployeesIdResponse;
import org.openapis.openapi.models.operations.GetV2EmployeesIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2EmployeesIdRequest req = new GetV2EmployeesIdRequest("itaque");            

            GetV2EmployeesIdResponse res = sdk.employees.getV2EmployeesId(req, new GetV2EmployeesIdSecurity("facere") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveEmployeeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
