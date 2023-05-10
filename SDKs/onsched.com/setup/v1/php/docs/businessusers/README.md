# businessUsers

### Available Operations

* [deleteSetupV1BusinessusersId](#deletesetupv1businessusersid) - Delete User
* [getSetupV1Businessusers](#getsetupv1businessusers) - List Users
* [getSetupV1BusinessusersPermissions](#getsetupv1businessuserspermissions) - List User Permissions
* [getSetupV1BusinessusersEmailCompanies](#getsetupv1businessusersemailcompanies) - List User Companies
* [getSetupV1BusinessusersId](#getsetupv1businessusersid) - Get User
* [postSetupV1Businessusers](#postsetupv1businessusers) - Create User
* [putSetupV1BusinessusersId](#putsetupv1businessusersid) - Update User

## deleteSetupV1BusinessusersId

<p>Use this endpoint to permanently <b>Delete</b> a Business User. A valid <b>businessUser id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1BusinessusersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1BusinessusersIdRequest();
    $request->id = 'ff1a3a2f-a946-4773-9251-aa52c3f5ad01';

    $response = $sdk->businessUsers->deleteSetupV1BusinessusersId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1Businessusers

<p>Use this endpoint to return a <b>List of Business Users and their Roles</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1BusinessusersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1BusinessusersRequest();
    $request->email = 'Rodrigo97@yahoo.com';
    $request->limit = 976460;
    $request->locationId = 'vero';
    $request->offset = 468651;
    $request->role = 'praesentium';

    $response = $sdk->businessUsers->getSetupV1Businessusers($request);

    if ($response->businessUserListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1BusinessusersPermissions

<p>Use this endpoint to return a <b>List of Business User Permissions by Role</b>. Results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1BusinessusersPermissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1BusinessusersPermissionsRequest();
    $request->limit = 976762;
    $request->offset = 55714;
    $request->role = 'omnis';

    $response = $sdk->businessUsers->getSetupV1BusinessusersPermissions($request);

    if ($response->businessPermissionListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1BusinessusersEmailCompanies

<p>Use this endpoint to return a <b>List of Companies</b> associated with the business users email requested. A business user <b>email</b> address is required. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1BusinessusersEmailCompaniesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1BusinessusersEmailCompaniesRequest();
    $request->email = 'Myrtis44@yahoo.com';
    $request->limit = 282807;
    $request->offset = 979587;
    $request->searchText = 'dicta';

    $response = $sdk->businessUsers->getSetupV1BusinessusersEmailCompanies($request);

    if ($response->authorizedCompanyListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1BusinessusersId

<p>Use this endpoint to return a <b>Business User</b> object. A valid <b>businessUser id</b> is required. Find businessUser id's using the <i>GET /setup/v1/businessusers</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1BusinessusersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1BusinessusersIdRequest();
    $request->id = '5471b5e6-e13b-499d-888e-1e91e450ad2a';

    $response = $sdk->businessUsers->getSetupV1BusinessusersId($request);

    if ($response->businessUserViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1Businessusers

<p>Use this endpoint to <b>Create</b> a Business User. If not specified, the business location defaults to the primary business location. </p>
<p>Required fields: <b>Name</b>, <b>Email</b> and <b>Role</b><b>Note:</b> If the businessUser is a bookable resource (bizresource) then a resourceId is required.</p>
<p>For role, use one of the values listed. <b>Business Roles Include: bizowner</b> (Business Owner), <b>bizadmin</b> (Business Administrator), <b>bizresource</b> (Business User - Bookable Resource).</p>
<p>The <b>sendRegistrationInvite</b> parameter is available to API consumers for their own use. It provides no added functionality in OnSched.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BusinessUserInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BusinessUserInputModel();
    $request->email = 'Ron18@hotmail.com';
    $request->locationId = 'aliquid';
    $request->name = 'Isaac Aufderhar';
    $request->resourceId = 'ipsam';
    $request->role = 'alias';
    $request->sendRegistrationInvite = false;

    $response = $sdk->businessUsers->postSetupV1Businessusers($request);

    if ($response->businessUserViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1BusinessusersId

<p>Use this endpoint to <b>Update</b> a Business User. A valid <b>businessUser id</b> is required.</p>
<p>
  <b>Business Roles Include: bizowner</b> (Business Owner), <b>bizadmin</b> (Business Administrator), <b>bizresource</b> (Business User - Bookable Resource).</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1BusinessusersIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\BusinessUserUpdateModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1BusinessusersIdRequest();
    $request->businessUserUpdateModel = new BusinessUserUpdateModel();
    $request->businessUserUpdateModel->email = 'Mariano70@gmail.com';
    $request->businessUserUpdateModel->name = 'Francisco Windler';
    $request->businessUserUpdateModel->resourceId = 'eligendi';
    $request->businessUserUpdateModel->role = 'sint';
    $request->businessUserUpdateModel->sendRegistrationInvite = false;
    $request->id = '69e9a3ef-a77d-4fb1-8cd6-6ae395efb9ba';

    $response = $sdk->businessUsers->putSetupV1BusinessusersId($request);

    if ($response->businessUserViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
