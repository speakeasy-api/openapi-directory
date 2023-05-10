# policyObjects

### Available Operations

* [createOrganizationPolicyObject](#createorganizationpolicyobject) - Creates a new Policy Object.
* [createOrganizationPolicyObjectsGroup](#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [deleteOrganizationPolicyObject](#deleteorganizationpolicyobject) - Deletes a Policy Object.
* [deleteOrganizationPolicyObjectsGroup](#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [getOrganizationPolicyObject](#getorganizationpolicyobject) - Shows details of a Policy Object.
* [getOrganizationPolicyObjects](#getorganizationpolicyobjects) - Lists Policy Objects belonging to the organization.
* [getOrganizationPolicyObjectsGroup](#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [getOrganizationPolicyObjectsGroups](#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [updateOrganizationPolicyObject](#updateorganizationpolicyobject) - Updates a Policy Object.
* [updateOrganizationPolicyObjectsGroup](#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.

## createOrganizationPolicyObject

Creates a new Policy Object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationPolicyObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationPolicyObjectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationPolicyObjectRequest();
    $request->requestBody = new CreateOrganizationPolicyObjectRequestBody();
    $request->requestBody->category = 'unde';
    $request->requestBody->cidr = 'eius';
    $request->requestBody->fqdn = 'id';
    $request->requestBody->groupIds = [
        523055,
        756998,
    ];
    $request->requestBody->ip = 'optio';
    $request->requestBody->mask = 'deleniti';
    $request->requestBody->name = 'Dr. Antonia Dicki';
    $request->requestBody->type = 'ducimus';
    $request->organizationId = 'dolores';

    $response = $sdk->policyObjects->createOrganizationPolicyObject($request);

    if ($response->createOrganizationPolicyObject201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationPolicyObjectsGroup

Creates a new Policy Object Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationPolicyObjectsGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationPolicyObjectsGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationPolicyObjectsGroupRequest();
    $request->requestBody = new CreateOrganizationPolicyObjectsGroupRequestBody();
    $request->requestBody->category = 'illo';
    $request->requestBody->name = 'Miss Gail Smith';
    $request->requestBody->objectIds = [
        999479,
    ];
    $request->organizationId = 'voluptates';

    $response = $sdk->policyObjects->createOrganizationPolicyObjectsGroup($request);

    if ($response->createOrganizationPolicyObjectsGroup201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationPolicyObject

Deletes a Policy Object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationPolicyObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationPolicyObjectRequest();
    $request->organizationId = 'provident';
    $request->policyObjectId = 'illum';

    $response = $sdk->policyObjects->deleteOrganizationPolicyObject($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationPolicyObjectsGroup

Deletes a Policy Object Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationPolicyObjectsGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationPolicyObjectsGroupRequest();
    $request->organizationId = 'iste';
    $request->policyObjectGroupId = 'autem';

    $response = $sdk->policyObjects->deleteOrganizationPolicyObjectsGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationPolicyObject

Shows details of a Policy Object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationPolicyObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationPolicyObjectRequest();
    $request->organizationId = 'minima';
    $request->policyObjectId = 'nemo';

    $response = $sdk->policyObjects->getOrganizationPolicyObject($request);

    if ($response->getOrganizationPolicyObject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationPolicyObjects

Lists Policy Objects belonging to the organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationPolicyObjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationPolicyObjectsRequest();
    $request->endingBefore = 'adipisci';
    $request->organizationId = 'tempore';
    $request->perPage = 508157;
    $request->startingAfter = 'excepturi';

    $response = $sdk->policyObjects->getOrganizationPolicyObjects($request);

    if ($response->getOrganizationPolicyObjects200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationPolicyObjectsGroup

Shows details of a Policy Object Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationPolicyObjectsGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationPolicyObjectsGroupRequest();
    $request->organizationId = 'necessitatibus';
    $request->policyObjectGroupId = 'perferendis';

    $response = $sdk->policyObjects->getOrganizationPolicyObjectsGroup($request);

    if ($response->getOrganizationPolicyObjectsGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationPolicyObjectsGroups

Lists Policy Object Groups belonging to the organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationPolicyObjectsGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationPolicyObjectsGroupsRequest();
    $request->endingBefore = 'consequatur';
    $request->organizationId = 'doloremque';
    $request->perPage = 569651;
    $request->startingAfter = 'quod';

    $response = $sdk->policyObjects->getOrganizationPolicyObjectsGroups($request);

    if ($response->getOrganizationPolicyObjectsGroups200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationPolicyObject

Updates a Policy Object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationPolicyObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationPolicyObjectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationPolicyObjectRequest();
    $request->requestBody = new UpdateOrganizationPolicyObjectRequestBody();
    $request->requestBody->cidr = 'vel';
    $request->requestBody->fqdn = 'ea';
    $request->requestBody->groupIds = [
        131130,
        839958,
        893005,
    ];
    $request->requestBody->ip = 'in';
    $request->requestBody->mask = 'nam';
    $request->requestBody->name = 'Brittany Hodkiewicz';
    $request->organizationId = 'eaque';
    $request->policyObjectId = 'veritatis';

    $response = $sdk->policyObjects->updateOrganizationPolicyObject($request);

    if ($response->updateOrganizationPolicyObject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationPolicyObjectsGroup

Updates a Policy Object Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationPolicyObjectsGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationPolicyObjectsGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationPolicyObjectsGroupRequest();
    $request->requestBody = new UpdateOrganizationPolicyObjectsGroupRequestBody();
    $request->requestBody->name = 'Glen Murazik';
    $request->requestBody->objectIds = [
        647788,
        915685,
    ];
    $request->organizationId = 'in';
    $request->policyObjectGroupId = 'harum';

    $response = $sdk->policyObjects->updateOrganizationPolicyObjectsGroup($request);

    if ($response->updateOrganizationPolicyObjectsGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
