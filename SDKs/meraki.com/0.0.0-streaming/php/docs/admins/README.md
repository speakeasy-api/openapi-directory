# admins

### Available Operations

* [createOrganizationAdmin](#createorganizationadmin) - Create a new dashboard administrator
* [deleteOrganizationAdmin](#deleteorganizationadmin) - Revoke all access for a dashboard administrator within this organization
* [getOrganizationAdmins](#getorganizationadmins) - List the dashboard administrators in this organization
* [updateOrganizationAdmin](#updateorganizationadmin) - Update an administrator

## createOrganizationAdmin

Create a new dashboard administrator

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdminRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdminRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdminRequestBodyAuthenticationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdminRequestBodyNetworks;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdminRequestBodyOrgAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdminRequestBodyTags;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationAdminRequest();
    $request->requestBody = new CreateOrganizationAdminRequestBody();
    $request->requestBody->authenticationMethod = CreateOrganizationAdminRequestBodyAuthenticationMethodEnum::EMAIL;
    $request->requestBody->email = 'Sarah.Strosin79@gmail.com';
    $request->requestBody->name = 'Erik Lebsack';
    $request->requestBody->networks = [
        new CreateOrganizationAdminRequestBodyNetworks(),
    ];
    $request->requestBody->orgAccess = CreateOrganizationAdminRequestBodyOrgAccessEnum::NONE;
    $request->requestBody->tags = [
        new CreateOrganizationAdminRequestBodyTags(),
        new CreateOrganizationAdminRequestBodyTags(),
        new CreateOrganizationAdminRequestBodyTags(),
    ];
    $request->organizationId = 'occaecati';

    $response = $sdk->admins->createOrganizationAdmin($request);

    if ($response->createOrganizationAdmin201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationAdmin

Revoke all access for a dashboard administrator within this organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationAdminRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationAdminRequest();
    $request->adminId = 'fugit';
    $request->organizationId = 'deleniti';

    $response = $sdk->admins->deleteOrganizationAdmin($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdmins

List the dashboard administrators in this organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdminsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdminsRequest();
    $request->organizationId = 'hic';

    $response = $sdk->admins->getOrganizationAdmins($request);

    if ($response->getOrganizationAdmins200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAdmin

Update an administrator

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdminRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdminRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdminRequestBodyNetworks;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdminRequestBodyOrgAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdminRequestBodyTags;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAdminRequest();
    $request->requestBody = new UpdateOrganizationAdminRequestBody();
    $request->requestBody->name = 'Everett Breitenberg';
    $request->requestBody->networks = [
        new UpdateOrganizationAdminRequestBodyNetworks(),
        new UpdateOrganizationAdminRequestBodyNetworks(),
    ];
    $request->requestBody->orgAccess = UpdateOrganizationAdminRequestBodyOrgAccessEnum::ENTERPRISE;
    $request->requestBody->tags = [
        new UpdateOrganizationAdminRequestBodyTags(),
        new UpdateOrganizationAdminRequestBodyTags(),
        new UpdateOrganizationAdminRequestBodyTags(),
        new UpdateOrganizationAdminRequestBodyTags(),
    ];
    $request->adminId = 'cum';
    $request->organizationId = 'esse';

    $response = $sdk->admins->updateOrganizationAdmin($request);

    if ($response->updateOrganizationAdmin200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
