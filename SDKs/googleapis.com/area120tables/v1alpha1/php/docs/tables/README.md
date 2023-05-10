# tables

### Available Operations

* [area120tablesTablesList](#area120tablestableslist) - Lists tables for the user.
* [area120tablesTablesRowsBatchCreate](#area120tablestablesrowsbatchcreate) - Creates multiple rows.
* [area120tablesTablesRowsBatchDelete](#area120tablestablesrowsbatchdelete) - Deletes multiple rows.
* [area120tablesTablesRowsBatchUpdate](#area120tablestablesrowsbatchupdate) - Updates multiple rows.
* [area120tablesTablesRowsCreate](#area120tablestablesrowscreate) - Creates a row.
* [area120tablesTablesRowsDelete](#area120tablestablesrowsdelete) - Deletes a row.
* [area120tablesTablesRowsList](#area120tablestablesrowslist) - Lists rows in a table. Returns NOT_FOUND if the table does not exist.
* [area120tablesTablesRowsPatch](#area120tablestablesrowspatch) - Updates a row.

## area120tablesTablesList

Lists tables for the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesListSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Area120tablesTablesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->orderBy = 'minus';
    $request->pageSize = 812169;
    $request->pageToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new Area120tablesTablesListSecurity();
    $requestSecurity->option1 = new Area120tablesTablesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->area120tablesTablesList($request, $requestSecurity);

    if ($response->listTablesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## area120tablesTablesRowsBatchCreate

Creates multiple rows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchCreateRowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRowRequest;
use \OpenAPI\OpenAPI\Models\Shared\Row;
use \OpenAPI\OpenAPI\Models\Shared\CreateRowRequestViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchCreateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchCreateSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Area120tablesTablesRowsBatchCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchCreateRowsRequest = new BatchCreateRowsRequest();
    $request->batchCreateRowsRequest->requests = [
        new CreateRowRequest(),
        new CreateRowRequest(),
        new CreateRowRequest(),
        new CreateRowRequest(),
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new Area120tablesTablesRowsBatchCreateSecurity();
    $requestSecurity->option1 = new Area120tablesTablesRowsBatchCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->area120tablesTablesRowsBatchCreate($request, $requestSecurity);

    if ($response->batchCreateRowsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## area120tablesTablesRowsBatchDelete

Deletes multiple rows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteRowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchDeleteSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchDeleteSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Area120tablesTablesRowsBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchDeleteRowsRequest = new BatchDeleteRowsRequest();
    $request->batchDeleteRowsRequest->names = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'dolorum';
    $request->key = 'dicta';
    $request->oauthToken = 'nam';
    $request->parent = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new Area120tablesTablesRowsBatchDeleteSecurity();
    $requestSecurity->option1 = new Area120tablesTablesRowsBatchDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->area120tablesTablesRowsBatchDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## area120tablesTablesRowsBatchUpdate

Updates multiple rows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateRowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRowRequest;
use \OpenAPI\OpenAPI\Models\Shared\Row;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRowRequestViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchUpdateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsBatchUpdateSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Area120tablesTablesRowsBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchUpdateRowsRequest = new BatchUpdateRowsRequest();
    $request->batchUpdateRowsRequest->requests = [
        new UpdateRowRequest(),
        new UpdateRowRequest(),
        new UpdateRowRequest(),
        new UpdateRowRequest(),
    ];
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->parent = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new Area120tablesTablesRowsBatchUpdateSecurity();
    $requestSecurity->option1 = new Area120tablesTablesRowsBatchUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->area120tablesTablesRowsBatchUpdate($request, $requestSecurity);

    if ($response->batchUpdateRowsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## area120tablesTablesRowsCreate

Creates a row.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Row;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsCreateViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsCreateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsCreateSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Area120tablesTablesRowsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->row = new Row();
    $request->row->createTime = 'aspernatur';
    $request->row->name = 'Cathy Mosciski';
    $request->row->updateTime = 'dolor';
    $request->row->values = [
        'laboriosam' => 'hic',
        'saepe' => 'fuga',
        'in' => 'corporis',
    ];
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'quidem';
    $request->key = 'architecto';
    $request->oauthToken = 'ipsa';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'laborum';
    $request->view = Area120tablesTablesRowsCreateViewEnum::VIEW_UNSPECIFIED;

    $requestSecurity = new Area120tablesTablesRowsCreateSecurity();
    $requestSecurity->option1 = new Area120tablesTablesRowsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->area120tablesTablesRowsCreate($request, $requestSecurity);

    if ($response->row !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## area120tablesTablesRowsDelete

Deletes a row.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsDeleteSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsDeleteSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Area120tablesTablesRowsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'enim';
    $request->key = 'omnis';
    $request->name = 'Ms. Cathy Marks';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new Area120tablesTablesRowsDeleteSecurity();
    $requestSecurity->option1 = new Area120tablesTablesRowsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->area120tablesTablesRowsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## area120tablesTablesRowsList

Lists rows in a table. Returns NOT_FOUND if the table does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsListSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Area120tablesTablesRowsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellat';
    $request->fields = 'mollitia';
    $request->filter = 'occaecati';
    $request->key = 'numquam';
    $request->oauthToken = 'commodi';
    $request->orderBy = 'quam';
    $request->pageSize = 474697;
    $request->pageToken = 'velit';
    $request->parent = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'quia';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'vitae';
    $request->view = Area120tablesTablesRowsListViewEnum::COLUMN_ID_VIEW;

    $requestSecurity = new Area120tablesTablesRowsListSecurity();
    $requestSecurity->option1 = new Area120tablesTablesRowsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->area120tablesTablesRowsList($request, $requestSecurity);

    if ($response->listRowsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## area120tablesTablesRowsPatch

Updates a row.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Row;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsPatchViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsPatchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsPatchSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\Area120tablesTablesRowsPatchSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Area120tablesTablesRowsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->row = new Row();
    $request->row->createTime = 'enim';
    $request->row->name = 'Angelica Dietrich';
    $request->row->updateTime = 'id';
    $request->row->values = [
        'aut' => 'quasi',
        'error' => 'temporibus',
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
    ];
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->name = 'Mr. Jared Ritchie';
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->updateMask = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';
    $request->view = Area120tablesTablesRowsPatchViewEnum::VIEW_UNSPECIFIED;

    $requestSecurity = new Area120tablesTablesRowsPatchSecurity();
    $requestSecurity->option1 = new Area120tablesTablesRowsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tables->area120tablesTablesRowsPatch($request, $requestSecurity);

    if ($response->row !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
