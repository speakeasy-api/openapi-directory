# projects

### Available Operations

* [firebasedatabaseProjectsLocationsInstancesCreate](#firebasedatabaseprojectslocationsinstancescreate) - Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.
* [firebasedatabaseProjectsLocationsInstancesDelete](#firebasedatabaseprojectslocationsinstancesdelete) - Marks a DatabaseInstance to be deleted. The DatabaseInstance will be set to the DELETED state for 20 days, and will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.
* [firebasedatabaseProjectsLocationsInstancesDisable](#firebasedatabaseprojectslocationsinstancesdisable) - Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.
* [firebasedatabaseProjectsLocationsInstancesGet](#firebasedatabaseprojectslocationsinstancesget) - Gets the DatabaseInstance identified by the specified resource name.
* [firebasedatabaseProjectsLocationsInstancesList](#firebasedatabaseprojectslocationsinstanceslist) - Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.
* [firebasedatabaseProjectsLocationsInstancesReenable](#firebasedatabaseprojectslocationsinstancesreenable) - Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.
* [firebasedatabaseProjectsLocationsInstancesUndelete](#firebasedatabaseprojectslocationsinstancesundelete) - Restores a DatabaseInstance that was previously marked to be deleted. After the delete method is used, DatabaseInstances are set to the DELETED state for 20 days, and will be purged within 30 days. Databases in the DELETED state can be undeleted without losing any data. This method may only be used on a DatabaseInstance in the DELETED state. Purged DatabaseInstances may not be recovered.

## firebasedatabaseProjectsLocationsInstancesCreate

Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasedatabaseProjectsLocationsInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->databaseInstanceInput = new DatabaseInstanceInput();
    $request->databaseInstanceInput->name = 'Alexandra Schulist';
    $request->databaseInstanceInput->type = DatabaseInstanceTypeEnum::DEFAULT_DATABASE;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'temporibus';
    $request->databaseId = 'ab';
    $request->fields = 'quis';
    $request->key = 'veritatis';
    $request->oauthToken = 'deserunt';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';
    $request->validateOnly = false;

    $requestSecurity = new FirebasedatabaseProjectsLocationsInstancesCreateSecurity();
    $requestSecurity->option1 = new FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasedatabaseProjectsLocationsInstancesCreate($request, $requestSecurity);

    if ($response->databaseInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasedatabaseProjectsLocationsInstancesDelete

Marks a DatabaseInstance to be deleted. The DatabaseInstance will be set to the DELETED state for 20 days, and will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasedatabaseProjectsLocationsInstancesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->name = 'Forrest Koepp';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new FirebasedatabaseProjectsLocationsInstancesDeleteSecurity();
    $requestSecurity->option1 = new FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasedatabaseProjectsLocationsInstancesDelete($request, $requestSecurity);

    if ($response->databaseInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasedatabaseProjectsLocationsInstancesDisable

Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesDisableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesDisableSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasedatabaseProjectsLocationsInstancesDisableRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'deleniti' => 'hic',
    ];
    $request->accessToken = 'optio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->name = 'Norma Ryan';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new FirebasedatabaseProjectsLocationsInstancesDisableSecurity();
    $requestSecurity->option1 = new FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasedatabaseProjectsLocationsInstancesDisable($request, $requestSecurity);

    if ($response->databaseInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasedatabaseProjectsLocationsInstancesGet

Gets the DatabaseInstance identified by the specified resource name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasedatabaseProjectsLocationsInstancesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolor';
    $request->key = 'natus';
    $request->name = 'May Turcotte';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new FirebasedatabaseProjectsLocationsInstancesGetSecurity();
    $requestSecurity->option1 = new FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasedatabaseProjectsLocationsInstancesGet($request, $requestSecurity);

    if ($response->databaseInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasedatabaseProjectsLocationsInstancesList

Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasedatabaseProjectsLocationsInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'est';
    $request->key = 'mollitia';
    $request->oauthToken = 'laborum';
    $request->pageSize = 170909;
    $request->pageToken = 'dolorem';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->showDeleted = false;
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new FirebasedatabaseProjectsLocationsInstancesListSecurity();
    $requestSecurity->option1 = new FirebasedatabaseProjectsLocationsInstancesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasedatabaseProjectsLocationsInstancesList($request, $requestSecurity);

    if ($response->listDatabaseInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasedatabaseProjectsLocationsInstancesReenable

Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesReenableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesReenableSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasedatabaseProjectsLocationsInstancesReenableRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'minima' => 'excepturi',
        'accusantium' => 'iure',
    ];
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'architecto';
    $request->key = 'mollitia';
    $request->name = 'Cecilia Crooks';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new FirebasedatabaseProjectsLocationsInstancesReenableSecurity();
    $requestSecurity->option1 = new FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasedatabaseProjectsLocationsInstancesReenable($request, $requestSecurity);

    if ($response->databaseInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasedatabaseProjectsLocationsInstancesUndelete

Restores a DatabaseInstance that was previously marked to be deleted. After the delete method is used, DatabaseInstances are set to the DELETED state for 20 days, and will be purged within 30 days. Databases in the DELETED state can be undeleted without losing any data. This method may only be used on a DatabaseInstance in the DELETED state. Purged DatabaseInstances may not be recovered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesUndeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasedatabaseProjectsLocationsInstancesUndeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'error' => 'quia',
    ];
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'animi';
    $request->key = 'enim';
    $request->name = 'Angelica Dietrich';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity();
    $requestSecurity->option1 = new FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasedatabaseProjectsLocationsInstancesUndelete($request, $requestSecurity);

    if ($response->databaseInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
