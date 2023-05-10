# children

### Available Operations

* [driveChildrenDelete](#drivechildrendelete) - Removes a child from a folder.
* [driveChildrenGet](#drivechildrenget) - Gets a specific child reference.
* [driveChildrenInsert](#drivechildreninsert) - Inserts a file into a folder.
* [driveChildrenList](#drivechildrenlist) - Lists a folder's children.

## driveChildrenDelete

Removes a child from a folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveChildrenDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->childId = 'sint';
    $request->enforceSingleParent = false;
    $request->fields = 'veritatis';
    $request->folderId = 'itaque';
    $request->key = 'incidunt';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->userIp = 'est';

    $requestSecurity = new DriveChildrenDeleteSecurity();
    $requestSecurity->option1 = new DriveChildrenDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->children->driveChildrenDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveChildrenGet

Gets a specific child reference.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenGetSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenGetSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveChildrenGetRequest();
    $request->alt = AltEnum::JSON;
    $request->childId = 'quibusdam';
    $request->fields = 'explicabo';
    $request->folderId = 'deserunt';
    $request->key = 'distinctio';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->userIp = 'modi';

    $requestSecurity = new DriveChildrenGetSecurity();
    $requestSecurity->option1 = new DriveChildrenGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->children->driveChildrenGet($request, $requestSecurity);

    if ($response->childReference !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveChildrenInsert

Inserts a file into a folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChildReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenInsertSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveChildrenInsertRequest();
    $request->childReference = new ChildReference();
    $request->childReference->childLink = 'qui';
    $request->childReference->id = '69802d50-2a94-4bb4-b63c-969e9a3efa77';
    $request->childReference->kind = 'illum';
    $request->childReference->selfLink = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->enforceSingleParent = false;
    $request->fields = 'rerum';
    $request->folderId = 'dicta';
    $request->key = 'magnam';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->userIp = 'ea';

    $requestSecurity = new DriveChildrenInsertSecurity();
    $requestSecurity->option1 = new DriveChildrenInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->children->driveChildrenInsert($request, $requestSecurity);

    if ($response->childReference !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveChildrenList

Lists a folder's children.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenListSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveChildrenListSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveChildrenListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'aliquid';
    $request->folderId = 'laborum';
    $request->key = 'accusamus';
    $request->maxResults = 249796;
    $request->oauthToken = 'occaecati';
    $request->orderBy = 'enim';
    $request->pageToken = 'accusamus';
    $request->prettyPrint = false;
    $request->q = 'delectus';
    $request->quotaUser = 'quidem';
    $request->userIp = 'provident';

    $requestSecurity = new DriveChildrenListSecurity();
    $requestSecurity->option1 = new DriveChildrenListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->children->driveChildrenList($request, $requestSecurity);

    if ($response->childList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
