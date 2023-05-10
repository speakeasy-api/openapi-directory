# orgunits

### Available Operations

* [directoryOrgunitsDelete](#directoryorgunitsdelete) - Removes an organizational unit.
* [directoryOrgunitsGet](#directoryorgunitsget) - Retrieves an organizational unit.
* [directoryOrgunitsInsert](#directoryorgunitsinsert) - Adds an organizational unit.
* [directoryOrgunitsList](#directoryorgunitslist) - Retrieves a list of all organizational units for an account.
* [directoryOrgunitsPatch](#directoryorgunitspatch) - Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)
* [directoryOrgunitsUpdate](#directoryorgunitsupdate) - Updates an organizational unit.

## directoryOrgunitsDelete

Removes an organizational unit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryOrgunitsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequuntur';
    $request->customerId = 'voluptatem';
    $request->fields = 'exercitationem';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'quasi';
    $request->orgUnitPath = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'est';

    $requestSecurity = new DirectoryOrgunitsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orgunits->directoryOrgunitsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryOrgunitsGet

Retrieves an organizational unit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryOrgunitsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'repudiandae';
    $request->customerId = 'optio';
    $request->fields = 'occaecati';
    $request->key = 'nemo';
    $request->oauthToken = 'voluptate';
    $request->orgUnitPath = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new DirectoryOrgunitsGetSecurity();
    $requestSecurity->option1 = new DirectoryOrgunitsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orgunits->directoryOrgunitsGet($request, $requestSecurity);

    if ($response->orgUnit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryOrgunitsInsert

Adds an organizational unit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrgUnit;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryOrgunitsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->orgUnit = new OrgUnit();
    $request->orgUnit->blockInheritance = false;
    $request->orgUnit->description = 'quos';
    $request->orgUnit->etag = 'eius';
    $request->orgUnit->kind = 'aspernatur';
    $request->orgUnit->name = 'Peggy Parker';
    $request->orgUnit->orgUnitId = 'quasi';
    $request->orgUnit->orgUnitPath = 'rem';
    $request->orgUnit->parentOrgUnitId = 'fugiat';
    $request->orgUnit->parentOrgUnitPath = 'dicta';
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consectetur';
    $request->customerId = 'aperiam';
    $request->fields = 'cupiditate';
    $request->key = 'reiciendis';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'eos';

    $requestSecurity = new DirectoryOrgunitsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orgunits->directoryOrgunitsInsert($request, $requestSecurity);

    if ($response->orgUnit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryOrgunitsList

Retrieves a list of all organizational units for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsListTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryOrgunitsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'inventore';
    $request->customerId = 'fuga';
    $request->fields = 'accusamus';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'distinctio';
    $request->orgUnitPath = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->type = DirectoryOrgunitsListTypeEnum::ALL;
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'maxime';

    $requestSecurity = new DirectoryOrgunitsListSecurity();
    $requestSecurity->option1 = new DirectoryOrgunitsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orgunits->directoryOrgunitsList($request, $requestSecurity);

    if ($response->orgUnits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryOrgunitsPatch

Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrgUnit;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryOrgunitsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->orgUnit = new OrgUnit();
    $request->orgUnit->blockInheritance = false;
    $request->orgUnit->description = 'temporibus';
    $request->orgUnit->etag = 'quos';
    $request->orgUnit->kind = 'commodi';
    $request->orgUnit->name = 'Leslie Lebsack';
    $request->orgUnit->orgUnitId = 'nam';
    $request->orgUnit->orgUnitPath = 'vero';
    $request->orgUnit->parentOrgUnitId = 'voluptatem';
    $request->orgUnit->parentOrgUnitPath = 'ipsam';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->customerId = 'non';
    $request->fields = 'maiores';
    $request->key = 'enim';
    $request->oauthToken = 'sint';
    $request->orgUnitPath = 'nulla';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new DirectoryOrgunitsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orgunits->directoryOrgunitsPatch($request, $requestSecurity);

    if ($response->orgUnit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryOrgunitsUpdate

Updates an organizational unit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrgUnit;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryOrgunitsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryOrgunitsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->orgUnit = new OrgUnit();
    $request->orgUnit->blockInheritance = false;
    $request->orgUnit->description = 'est';
    $request->orgUnit->etag = 'quis';
    $request->orgUnit->kind = 'sint';
    $request->orgUnit->name = 'Garrett Welch';
    $request->orgUnit->orgUnitId = 'ex';
    $request->orgUnit->orgUnitPath = 'voluptas';
    $request->orgUnit->parentOrgUnitId = 'debitis';
    $request->orgUnit->parentOrgUnitPath = 'delectus';
    $request->accessToken = 'quae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->customerId = 'laborum';
    $request->fields = 'consectetur';
    $request->key = 'velit';
    $request->oauthToken = 'atque';
    $request->orgUnitPath = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new DirectoryOrgunitsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orgunits->directoryOrgunitsUpdate($request, $requestSecurity);

    if ($response->orgUnit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
