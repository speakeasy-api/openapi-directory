# databases

### Available Operations

* [sqlDatabasesDelete](#sqldatabasesdelete) - Deletes a database from a Cloud SQL instance.
* [sqlDatabasesGet](#sqldatabasesget) - Retrieves a resource containing information about a database inside a Cloud SQL instance.
* [sqlDatabasesInsert](#sqldatabasesinsert) - Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.
* [sqlDatabasesList](#sqldatabaseslist) - Lists databases in the specified Cloud SQL instance.
* [sqlDatabasesPatch](#sqldatabasespatch) - Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
* [sqlDatabasesUpdate](#sqldatabasesupdate) - Updates a resource containing information about a database inside a Cloud SQL instance.

## sqlDatabasesDelete

Deletes a database from a Cloud SQL instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlDatabasesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->database = 'eligendi';
    $request->fields = 'sint';
    $request->instance = 'aliquid';
    $request->key = 'provident';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'officia';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new SqlDatabasesDeleteSecurity();
    $requestSecurity->option1 = new SqlDatabasesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->databases->sqlDatabasesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlDatabasesGet

Retrieves a resource containing information about a database inside a Cloud SQL instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlDatabasesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->database = 'illum';
    $request->fields = 'maiores';
    $request->instance = 'rerum';
    $request->key = 'dicta';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'facere';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new SqlDatabasesGetSecurity();
    $requestSecurity->option1 = new SqlDatabasesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->databases->sqlDatabasesGet($request, $requestSecurity);

    if ($response->database !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlDatabasesInsert

Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Database;
use \OpenAPI\OpenAPI\Models\Shared\SqlServerDatabaseDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlDatabasesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->database = new Database();
    $request->database->charset = 'accusamus';
    $request->database->collation = 'non';
    $request->database->etag = 'occaecati';
    $request->database->instance = 'enim';
    $request->database->kind = 'accusamus';
    $request->database->name = 'Abraham McKenzie';
    $request->database->project = 'blanditiis';
    $request->database->selfLink = 'deleniti';
    $request->database->sqlserverDatabaseDetails = new SqlServerDatabaseDetails();
    $request->database->sqlserverDatabaseDetails->compatibilityLevel = 956084;
    $request->database->sqlserverDatabaseDetails->recoveryModel = 'amet';
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vel';
    $request->fields = 'natus';
    $request->instance = 'omnis';
    $request->key = 'molestiae';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'magnam';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'id';

    $requestSecurity = new SqlDatabasesInsertSecurity();
    $requestSecurity->option1 = new SqlDatabasesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->databases->sqlDatabasesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlDatabasesList

Lists databases in the specified Cloud SQL instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlDatabasesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'nobis';
    $request->instance = 'eum';
    $request->key = 'vero';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'magnam';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new SqlDatabasesListSecurity();
    $requestSecurity->option1 = new SqlDatabasesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->databases->sqlDatabasesList($request, $requestSecurity);

    if ($response->databasesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlDatabasesPatch

Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Database;
use \OpenAPI\OpenAPI\Models\Shared\SqlServerDatabaseDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlDatabasesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->database1 = new Database();
    $request->database1->charset = 'provident';
    $request->database1->collation = 'quos';
    $request->database1->etag = 'sint';
    $request->database1->instance = 'accusantium';
    $request->database1->kind = 'mollitia';
    $request->database1->name = 'Shaun Hammes';
    $request->database1->project = 'necessitatibus';
    $request->database1->selfLink = 'odit';
    $request->database1->sqlserverDatabaseDetails = new SqlServerDatabaseDetails();
    $request->database1->sqlserverDatabaseDetails->compatibilityLevel = 367562;
    $request->database1->sqlserverDatabaseDetails->recoveryModel = 'quasi';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->databasePathParameter = 'eius';
    $request->fields = 'maxime';
    $request->instance = 'deleniti';
    $request->key = 'facilis';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'architecto';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new SqlDatabasesPatchSecurity();
    $requestSecurity->option1 = new SqlDatabasesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->databases->sqlDatabasesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlDatabasesUpdate

Updates a resource containing information about a database inside a Cloud SQL instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Database;
use \OpenAPI\OpenAPI\Models\Shared\SqlServerDatabaseDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlDatabasesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlDatabasesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->database1 = new Database();
    $request->database1->charset = 'nihil';
    $request->database1->collation = 'repellat';
    $request->database1->etag = 'quibusdam';
    $request->database1->instance = 'sed';
    $request->database1->kind = 'saepe';
    $request->database1->name = 'Edward Crooks';
    $request->database1->project = 'magni';
    $request->database1->selfLink = 'sunt';
    $request->database1->sqlserverDatabaseDetails = new SqlServerDatabaseDetails();
    $request->database1->sqlserverDatabaseDetails->compatibilityLevel = 779051;
    $request->database1->sqlserverDatabaseDetails->recoveryModel = 'illum';
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->databasePathParameter = 'excepturi';
    $request->fields = 'odit';
    $request->instance = 'ea';
    $request->key = 'accusantium';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'quidem';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new SqlDatabasesUpdateSecurity();
    $requestSecurity->option1 = new SqlDatabasesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->databases->sqlDatabasesUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
