# parents

### Available Operations

* [driveParentsDelete](#driveparentsdelete) - Removes a parent from a file.
* [driveParentsGet](#driveparentsget) - Gets a specific parent reference.
* [driveParentsInsert](#driveparentsinsert) - Adds a parent folder for a file.
* [driveParentsList](#driveparentslist) - Lists a file's parents.

## driveParentsDelete

Removes a parent from a file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveParentsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->enforceSingleParent = false;
    $request->fields = 'accusantium';
    $request->fileId = 'beatae';
    $request->key = 'dolores';
    $request->oauthToken = 'enim';
    $request->parentId = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->userIp = 'a';

    $requestSecurity = new DriveParentsDeleteSecurity();
    $requestSecurity->option1 = new DriveParentsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->parents->driveParentsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveParentsGet

Gets a specific parent reference.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsGetSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsGetSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveParentsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'molestias';
    $request->fileId = 'magnam';
    $request->key = 'saepe';
    $request->oauthToken = 'consequuntur';
    $request->parentId = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->userIp = 'perspiciatis';

    $requestSecurity = new DriveParentsGetSecurity();
    $requestSecurity->option1 = new DriveParentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->parents->driveParentsGet($request, $requestSecurity);

    if ($response->parentReference !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveParentsInsert

Adds a parent folder for a file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\ParentReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsInsertSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveParentsInsertRequest();
    $request->parentReference = new ParentReference();
    $request->parentReference->id = '73e922a5-7a15-4be3-a060-807e2b6e3ab8';
    $request->parentReference->isRoot = false;
    $request->parentReference->kind = 'rem';
    $request->parentReference->parentLink = 'aliquam';
    $request->parentReference->selfLink = 'ad';
    $request->alt = AltEnum::JSON;
    $request->enforceSingleParent = false;
    $request->fields = 'repellat';
    $request->fileId = 'alias';
    $request->key = 'corporis';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->userIp = 'mollitia';

    $requestSecurity = new DriveParentsInsertSecurity();
    $requestSecurity->option1 = new DriveParentsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->parents->driveParentsInsert($request, $requestSecurity);

    if ($response->parentReference !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveParentsList

Lists a file's parents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsListSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveParentsListSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveParentsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'voluptas';
    $request->fileId = 'alias';
    $request->key = 'maiores';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->userIp = 'id';

    $requestSecurity = new DriveParentsListSecurity();
    $requestSecurity->option1 = new DriveParentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->parents->driveParentsList($request, $requestSecurity);

    if ($response->parentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
