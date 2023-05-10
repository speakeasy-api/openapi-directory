# samlRoles

### Available Operations

* [createOrganizationSamlRole](#createorganizationsamlrole) - Create a SAML role
* [deleteOrganizationSamlRole](#deleteorganizationsamlrole) - Remove a SAML role
* [getOrganizationSamlRole](#getorganizationsamlrole) - Return a SAML role
* [getOrganizationSamlRoles](#getorganizationsamlroles) - List the SAML roles for this organization
* [updateOrganizationSamlRole](#updateorganizationsamlrole) - Update a SAML role

## createOrganizationSamlRole

Create a SAML role

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlRoleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlRoleRequestBodyNetworks;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlRoleRequestBodyOrgAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlRoleRequestBodyTags;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlRoleRequestBodyTagsAccessEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationSamlRoleRequest();
    $request->requestBody = new CreateOrganizationSamlRoleRequestBody();
    $request->requestBody->networks = [
        new CreateOrganizationSamlRoleRequestBodyNetworks(),
        new CreateOrganizationSamlRoleRequestBodyNetworks(),
        new CreateOrganizationSamlRoleRequestBodyNetworks(),
        new CreateOrganizationSamlRoleRequestBodyNetworks(),
    ];
    $request->requestBody->orgAccess = CreateOrganizationSamlRoleRequestBodyOrgAccessEnum::NONE;
    $request->requestBody->role = 'aperiam';
    $request->requestBody->tags = [
        new CreateOrganizationSamlRoleRequestBodyTags(),
        new CreateOrganizationSamlRoleRequestBodyTags(),
        new CreateOrganizationSamlRoleRequestBodyTags(),
    ];
    $request->organizationId = 'nobis';

    $response = $sdk->samlRoles->createOrganizationSamlRole($request);

    if ($response->createOrganizationSamlRole201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationSamlRole

Remove a SAML role

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationSamlRoleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationSamlRoleRequest();
    $request->organizationId = 'totam';
    $request->samlRoleId = 'distinctio';

    $response = $sdk->samlRoles->deleteOrganizationSamlRole($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSamlRole

Return a SAML role

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSamlRoleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSamlRoleRequest();
    $request->organizationId = 'modi';
    $request->samlRoleId = 'aperiam';

    $response = $sdk->samlRoles->getOrganizationSamlRole($request);

    if ($response->getOrganizationSamlRole200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSamlRoles

List the SAML roles for this organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSamlRolesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSamlRolesRequest();
    $request->organizationId = 'praesentium';

    $response = $sdk->samlRoles->getOrganizationSamlRoles($request);

    if ($response->getOrganizationSamlRoles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationSamlRole

Update a SAML role

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRoleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRoleRequestBodyNetworks;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRoleRequestBodyTags;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationSamlRoleRequest();
    $request->requestBody = new UpdateOrganizationSamlRoleRequestBody();
    $request->requestBody->networks = [
        new UpdateOrganizationSamlRoleRequestBodyNetworks(),
        new UpdateOrganizationSamlRoleRequestBodyNetworks(),
        new UpdateOrganizationSamlRoleRequestBodyNetworks(),
        new UpdateOrganizationSamlRoleRequestBodyNetworks(),
    ];
    $request->requestBody->orgAccess = UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum::ENTERPRISE;
    $request->requestBody->role = 'nihil';
    $request->requestBody->tags = [
        new UpdateOrganizationSamlRoleRequestBodyTags(),
    ];
    $request->organizationId = 'adipisci';
    $request->samlRoleId = 'molestiae';

    $response = $sdk->samlRoles->updateOrganizationSamlRole($request);

    if ($response->updateOrganizationSamlRole200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
