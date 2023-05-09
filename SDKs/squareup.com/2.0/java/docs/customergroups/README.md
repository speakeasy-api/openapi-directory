# customerGroups

### Available Operations

* [createCustomerGroup](#createcustomergroup) - CreateCustomerGroup
* [deleteCustomerGroup](#deletecustomergroup) - DeleteCustomerGroup
* [listCustomerGroups](#listcustomergroups) - ListCustomerGroups
* [retrieveCustomerGroup](#retrievecustomergroup) - RetrieveCustomerGroup
* [updateCustomerGroup](#updatecustomergroup) - UpdateCustomerGroup

## createCustomerGroup

Creates a new customer group for a business.

The request must include the `name` value of the group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomerGroupResponse;
import org.openapis.openapi.models.operations.CreateCustomerGroupSecurity;
import org.openapis.openapi.models.shared.CreateCustomerGroupRequest;
import org.openapis.openapi.models.shared.CustomerGroup;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateCustomerGroupRequest req = new CreateCustomerGroupRequest(                new CustomerGroup("ratione") {{
                                createdAt = "itaque";
                                id = "42c1aa01-0e9a-4ac2-a913-5586d18f9f97";
                                updatedAt = "est";
                            }};) {{
                idempotencyKey = "numquam";
            }};            

            CreateCustomerGroupResponse res = sdk.customerGroups.createCustomerGroup(req, new CreateCustomerGroupSecurity("nam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createCustomerGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomerGroup

Deletes a customer group as identified by the `group_id` value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomerGroupRequest;
import org.openapis.openapi.models.operations.DeleteCustomerGroupResponse;
import org.openapis.openapi.models.operations.DeleteCustomerGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCustomerGroupRequest req = new DeleteCustomerGroupRequest("sapiente");            

            DeleteCustomerGroupResponse res = sdk.customerGroups.deleteCustomerGroup(req, new DeleteCustomerGroupSecurity("fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deleteCustomerGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomerGroups

Retrieves the list of customer groups of a business.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomerGroupsRequest;
import org.openapis.openapi.models.operations.ListCustomerGroupsResponse;
import org.openapis.openapi.models.operations.ListCustomerGroupsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCustomerGroupsRequest req = new ListCustomerGroupsRequest() {{
                cursor = "facere";
                limit = 138159L;
            }};            

            ListCustomerGroupsResponse res = sdk.customerGroups.listCustomerGroups(req, new ListCustomerGroupsSecurity("nam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCustomerGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveCustomerGroup

Retrieves a specific customer group as identified by the `group_id` value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveCustomerGroupRequest;
import org.openapis.openapi.models.operations.RetrieveCustomerGroupResponse;
import org.openapis.openapi.models.operations.RetrieveCustomerGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveCustomerGroupRequest req = new RetrieveCustomerGroupRequest("asperiores");            

            RetrieveCustomerGroupResponse res = sdk.customerGroups.retrieveCustomerGroup(req, new RetrieveCustomerGroupSecurity("quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveCustomerGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomerGroup

Updates a customer group as identified by the `group_id` value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomerGroupRequest;
import org.openapis.openapi.models.operations.UpdateCustomerGroupResponse;
import org.openapis.openapi.models.operations.UpdateCustomerGroupSecurity;
import org.openapis.openapi.models.shared.CustomerGroup;
import org.openapis.openapi.models.shared.UpdateCustomerGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCustomerGroupRequest req = new UpdateCustomerGroupRequest(                new UpdateCustomerGroupRequest(                new CustomerGroup("fugiat") {{
                                                createdAt = "ea";
                                                id = "7ca84ad9-9b41-4d61-a435-31870cf68b03";
                                                updatedAt = "fuga";
                                            }};);, "assumenda");            

            UpdateCustomerGroupResponse res = sdk.customerGroups.updateCustomerGroup(req, new UpdateCustomerGroupSecurity("modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateCustomerGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
