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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\V1Employee;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmployeeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new V1Employee();
    $request->authorizedLocationIds = [
        'ducimus',
        'libero',
    ];
    $request->createdAt = 'molestias';
    $request->email = 'Dagmar_Russel@hotmail.com';
    $request->externalId = 'distinctio';
    $request->firstName = 'Alexanne';
    $request->id = '3408d6d3-64ff-4d45-9906-d1263d48e935';
    $request->lastName = 'Schmeler';
    $request->roleIds = [
        'placeat',
    ];
    $request->status = 'excepturi';
    $request->updatedAt = 'recusandae';

    $requestSecurity = new CreateEmployeeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Employees->createEmployee($request, $requestSecurity);

    if ($response->v1Employee !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\V1EmployeeRole;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmployeeRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new V1EmployeeRole();
    $request->createdAt = 'quos';
    $request->id = '1f30be3e-4320-42d7-a165-76506641870d';
    $request->isOwner = false;
    $request->name = 'Dr. Owen Cremin';
    $request->permissions = [
        'repellendus',
        'consequatur',
        'adipisci',
    ];
    $request->updatedAt = 'doloremque';

    $requestSecurity = new CreateEmployeeRoleSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Employees->createEmployeeRole($request, $requestSecurity);

    if ($response->v1EmployeeRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEmployeeRoles

Provides summary information for all of a business's employee roles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEmployeeRolesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEmployeeRolesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEmployeeRolesRequest();
    $request->batchToken = 'optio';
    $request->limit = 269731;
    $request->order = 'debitis';

    $requestSecurity = new ListEmployeeRolesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Employees->listEmployeeRoles($request, $requestSecurity);

    if ($response->v1EmployeeRoles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEmployees

Provides summary information for all of a business's employees.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEmployeesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEmployeesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEmployeesRequest();
    $request->batchToken = 'cumque';
    $request->beginCreatedAt = 'maxime';
    $request->beginUpdatedAt = 'et';
    $request->endCreatedAt = 'beatae';
    $request->endUpdatedAt = 'id';
    $request->externalId = 'consequatur';
    $request->limit = 551576;
    $request->order = 'ratione';
    $request->status = 'iure';

    $requestSecurity = new ListEmployeesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Employees->listEmployees($request, $requestSecurity);

    if ($response->v1Employees !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveEmployee

Provides the details for a single employee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveEmployeeRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveEmployeeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveEmployeeRequest();
    $request->employeeId = 'tempora';

    $requestSecurity = new RetrieveEmployeeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Employees->retrieveEmployee($request, $requestSecurity);

    if ($response->v1Employee !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveEmployeeRole

Provides the details for a single employee role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveEmployeeRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveEmployeeRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveEmployeeRoleRequest();
    $request->roleId = 'eos';

    $requestSecurity = new RetrieveEmployeeRoleSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Employees->retrieveEmployeeRole($request, $requestSecurity);

    if ($response->v1EmployeeRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEmployee

UpdateEmployee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmployeeRequest;
use \OpenAPI\OpenAPI\Models\Shared\V1Employee;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmployeeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEmployeeRequest();
    $request->v1Employee = new V1Employee();
    $request->v1Employee->authorizedLocationIds = [
        'voluptatem',
        'suscipit',
        'laudantium',
    ];
    $request->v1Employee->createdAt = 'facilis';
    $request->v1Employee->email = 'Fermin64@yahoo.com';
    $request->v1Employee->externalId = 'quaerat';
    $request->v1Employee->firstName = 'Foster';
    $request->v1Employee->id = 'e7f73bc8-45e3-420a-b19f-4badf947c9a8';
    $request->v1Employee->lastName = 'Jacobs';
    $request->v1Employee->roleIds = [
        'facilis',
        'optio',
    ];
    $request->v1Employee->status = 'incidunt';
    $request->v1Employee->updatedAt = 'eos';
    $request->employeeId = 'magnam';

    $requestSecurity = new UpdateEmployeeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Employees->updateEmployee($request, $requestSecurity);

    if ($response->v1Employee !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEmployeeRole

Modifies the details of an employee role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmployeeRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\V1EmployeeRole;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmployeeRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEmployeeRoleRequest();
    $request->v1EmployeeRole = new V1EmployeeRole();
    $request->v1EmployeeRole->createdAt = 'dolores';
    $request->v1EmployeeRole->id = '6665816d-dca8-4ef5-9fcb-4c593ec12cda';
    $request->v1EmployeeRole->isOwner = false;
    $request->v1EmployeeRole->name = 'Marty Beer';
    $request->v1EmployeeRole->permissions = [
        'similique',
        'delectus',
    ];
    $request->v1EmployeeRole->updatedAt = 'saepe';
    $request->roleId = 'facere';

    $requestSecurity = new UpdateEmployeeRoleSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Employees->updateEmployeeRole($request, $requestSecurity);

    if ($response->v1EmployeeRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
