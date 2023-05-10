# archive

### Available Operations

* [groupsmigrationArchiveInsert](#groupsmigrationarchiveinsert) - Inserts a new mail into the archive of the Google group.

## groupsmigrationArchiveInsert

Inserts a new mail into the archive of the Google group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupsmigrationArchiveInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GroupsmigrationArchiveInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsmigrationArchiveInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->groupId = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new GroupsmigrationArchiveInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->archive->groupsmigrationArchiveInsert($request, $requestSecurity);

    if ($response->groups !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
