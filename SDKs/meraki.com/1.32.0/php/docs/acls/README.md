# acls

### Available Operations

* [createOrganizationAdaptivePolicyAcl](#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [deleteOrganizationAdaptivePolicyAcl](#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [getOrganizationAdaptivePolicyAcl](#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [getOrganizationAdaptivePolicyAcls](#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [updateOrganizationAdaptivePolicyAcl](#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL

## createOrganizationAdaptivePolicyAcl

Creates new adaptive policy ACL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationAdaptivePolicyAclRequest();
    $request->requestBody = new CreateOrganizationAdaptivePolicyAclRequestBody();
    $request->requestBody->description = 'deleniti';
    $request->requestBody->ipVersion = CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum::IPV6;
    $request->requestBody->name = 'Everett Breitenberg';
    $request->requestBody->rules = [
        new CreateOrganizationAdaptivePolicyAclRequestBodyRules(),
        new CreateOrganizationAdaptivePolicyAclRequestBodyRules(),
    ];
    $request->organizationId = 'qui';

    $response = $sdk->acls->createOrganizationAdaptivePolicyAcl($request);

    if ($response->createOrganizationAdaptivePolicyAcl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationAdaptivePolicyAcl

Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationAdaptivePolicyAclRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationAdaptivePolicyAclRequest();
    $request->aclId = 'impedit';
    $request->organizationId = 'cum';

    $response = $sdk->acls->deleteOrganizationAdaptivePolicyAcl($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyAcl

Returns the adaptive policy ACL information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyAclRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyAclRequest();
    $request->aclId = 'esse';
    $request->organizationId = 'ipsum';

    $response = $sdk->acls->getOrganizationAdaptivePolicyAcl($request);

    if ($response->getOrganizationAdaptivePolicyAcl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyAcls

List adaptive policy ACLs in a organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyAclsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyAclsRequest();
    $request->organizationId = 'excepturi';

    $response = $sdk->acls->getOrganizationAdaptivePolicyAcls($request);

    if ($response->getOrganizationAdaptivePolicyAcls200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAdaptivePolicyAcl

Updates an adaptive policy ACL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAdaptivePolicyAclRequest();
    $request->requestBody = new UpdateOrganizationAdaptivePolicyAclRequestBody();
    $request->requestBody->description = 'aspernatur';
    $request->requestBody->ipVersion = UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum::ANY;
    $request->requestBody->name = 'Faye Cormier';
    $request->requestBody->rules = [
        new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(),
        new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(),
        new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(),
    ];
    $request->aclId = 'laboriosam';
    $request->organizationId = 'hic';

    $response = $sdk->acls->updateOrganizationAdaptivePolicyAcl($request);

    if ($response->updateOrganizationAdaptivePolicyAcl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
