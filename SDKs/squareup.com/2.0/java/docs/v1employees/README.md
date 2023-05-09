# v1Employees

### Available Operations

* [createEmployee](#createemployee) - CreateEmployee
* [createEmployeeRole](#createemployeerole) - CreateEmployeeRole
* [listEmployeeRoles](#listemployeeroles) - ListEmployeeRoles
* [listEmployees](#listemployees) - ListEmployees
* [retrieveEmployee](#retrieveemployee) - RetrieveEmployee
* [retrieveEmployeeRole](#retrieveemployeerole) - RetrieveEmployeeRole
* [updateEmployee](#updateemployee) - UpdateEmployee
* [updateEmployeeRole](#updateemployeerole) - UpdateEmployeeRole

## createEmployee

 Use the CreateEmployee endpoint to add an employee to a Square
account. Employees created with the Connect API have an initial status
of `INACTIVE`. Inactive employees cannot sign in to Square Point of Sale
until they are activated from the Square Dashboard. Employee status
cannot be changed with the Connect API.

Employee entities cannot be deleted. To disable employee profiles,
set the employee's status to <code>INACTIVE</code>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEmployeeResponse;
import org.openapis.openapi.models.operations.CreateEmployeeSecurity;
import org.openapis.openapi.models.shared.V1Employee;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.V1Employee req = new V1Employee("rem", "commodi") {{
                authorizedLocationIds = new String[]{{
                    add("quasi"),
                }};
                createdAt = "ad";
                email = "Ceasar_Bogan@hotmail.com";
                externalId = "fuga";
                id = "040707fa-7398-4247-a872-17fed962df3e";
                roleIds = new String[]{{
                    add("recusandae"),
                    add("dignissimos"),
                    add("porro"),
                    add("consectetur"),
                }};
                status = "molestias";
                updatedAt = "nostrum";
            }};            

            CreateEmployeeResponse res = sdk.v1Employees.createEmployee(req, new CreateEmployeeSecurity("quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Employee != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEmployeeRole

Creates an employee role you can then assign to employees.

Square accounts can include any number of roles that can be assigned to
employees. These roles define the actions and permissions granted to an
employee with that role. For example, an employee with a "Shift Manager"
role might be able to issue refunds in Square Point of Sale, whereas an
employee with a "Clerk" role might not.

Roles are assigned with the [V1UpdateEmployee](https://developer.squareup.com/reference/square_2021-08-18/v1-employees-api/update-employee-role)
endpoint. An employee can have only one role at a time.

If an employee has no role, they have none of the permissions associated
with roles. All employees can accept payments with Square Point of Sale.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEmployeeRoleResponse;
import org.openapis.openapi.models.operations.CreateEmployeeRoleSecurity;
import org.openapis.openapi.models.shared.V1EmployeeRole;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.V1EmployeeRole req = new V1EmployeeRole("in",                 new String[]{{
                                add("in"),
                                add("consequatur"),
                                add("officiis"),
                            }}) {{
                createdAt = "dicta";
                id = "a1a8dbcf-6e19-4b90-92c4-44e231ba1477";
                isOwner = false;
                updatedAt = "sed";
            }};            

            CreateEmployeeRoleResponse res = sdk.v1Employees.createEmployeeRole(req, new CreateEmployeeRoleSecurity("iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1EmployeeRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEmployeeRoles

Provides summary information for all of a business's employee roles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEmployeeRolesRequest;
import org.openapis.openapi.models.operations.ListEmployeeRolesResponse;
import org.openapis.openapi.models.operations.ListEmployeeRolesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEmployeeRolesRequest req = new ListEmployeeRolesRequest() {{
                batchToken = "quibusdam";
                limit = 908115L;
                order = "iste";
            }};            

            ListEmployeeRolesResponse res = sdk.v1Employees.listEmployeeRoles(req, new ListEmployeeRolesSecurity("ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1EmployeeRoles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEmployees

Provides summary information for all of a business's employees.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEmployeesRequest;
import org.openapis.openapi.models.operations.ListEmployeesResponse;
import org.openapis.openapi.models.operations.ListEmployeesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEmployeesRequest req = new ListEmployeesRequest() {{
                batchToken = "voluptatibus";
                beginCreatedAt = "esse";
                beginUpdatedAt = "odit";
                endCreatedAt = "fuga";
                endUpdatedAt = "fugiat";
                externalId = "fuga";
                limit = 734310L;
                order = "hic";
                status = "laboriosam";
            }};            

            ListEmployeesResponse res = sdk.v1Employees.listEmployees(req, new ListEmployeesSecurity("rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Employees != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveEmployee

Provides the details for a single employee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveEmployeeRequest;
import org.openapis.openapi.models.operations.RetrieveEmployeeResponse;
import org.openapis.openapi.models.operations.RetrieveEmployeeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveEmployeeRequest req = new RetrieveEmployeeRequest("perferendis");            

            RetrieveEmployeeResponse res = sdk.v1Employees.retrieveEmployee(req, new RetrieveEmployeeSecurity("eaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Employee != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveEmployeeRole

Provides the details for a single employee role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveEmployeeRoleRequest;
import org.openapis.openapi.models.operations.RetrieveEmployeeRoleResponse;
import org.openapis.openapi.models.operations.RetrieveEmployeeRoleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveEmployeeRoleRequest req = new RetrieveEmployeeRoleRequest("tempore");            

            RetrieveEmployeeRoleResponse res = sdk.v1Employees.retrieveEmployeeRole(req, new RetrieveEmployeeRoleSecurity("eaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1EmployeeRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEmployee

UpdateEmployee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEmployeeRequest;
import org.openapis.openapi.models.operations.UpdateEmployeeResponse;
import org.openapis.openapi.models.operations.UpdateEmployeeSecurity;
import org.openapis.openapi.models.shared.V1Employee;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateEmployeeRequest req = new UpdateEmployeeRequest(                new V1Employee("quasi", "tempore") {{
                                authorizedLocationIds = new String[]{{
                                    add("tempore"),
                                    add("quod"),
                                    add("aperiam"),
                                    add("ipsum"),
                                }};
                                createdAt = "sunt";
                                email = "Caitlyn60@hotmail.com";
                                externalId = "quibusdam";
                                id = "bf7111a9-6df2-4152-be37-1365217a6e59";
                                roleIds = new String[]{{
                                    add("officia"),
                                    add("laborum"),
                                }};
                                status = "dolore";
                                updatedAt = "dicta";
                            }};, "facilis");            

            UpdateEmployeeResponse res = sdk.v1Employees.updateEmployee(req, new UpdateEmployeeSecurity("cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Employee != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEmployeeRole

Modifies the details of an employee role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEmployeeRoleRequest;
import org.openapis.openapi.models.operations.UpdateEmployeeRoleResponse;
import org.openapis.openapi.models.operations.UpdateEmployeeRoleSecurity;
import org.openapis.openapi.models.shared.V1EmployeeRole;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateEmployeeRoleRequest req = new UpdateEmployeeRoleRequest(                new V1EmployeeRole("voluptates",                 new String[]{{
                                                add("aperiam"),
                                            }}) {{
                                createdAt = "nostrum";
                                id = "3ae8c315-325b-45e0-a294-725d88138dac";
                                isOwner = false;
                                updatedAt = "itaque";
                            }};, "laboriosam");            

            UpdateEmployeeRoleResponse res = sdk.v1Employees.updateEmployeeRole(req, new UpdateEmployeeRoleSecurity("vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1EmployeeRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
