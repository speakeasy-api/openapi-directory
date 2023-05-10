# customers

### Available Operations

* [adminCustomersChromePrintServersBatchCreatePrintServers](#admincustomerschromeprintserversbatchcreateprintservers) - Creates multiple print servers.
* [adminCustomersChromePrintServersBatchDeletePrintServers](#admincustomerschromeprintserversbatchdeleteprintservers) - Deletes multiple print servers.
* [adminCustomersChromePrintServersCreate](#admincustomerschromeprintserverscreate) - Creates a print server.
* [adminCustomersChromePrintServersDelete](#admincustomerschromeprintserversdelete) - Deletes a print server.
* [adminCustomersChromePrintServersGet](#admincustomerschromeprintserversget) - Returns a print server's configuration.
* [adminCustomersChromePrintServersList](#admincustomerschromeprintserverslist) - Lists print server configurations.
* [adminCustomersChromePrintServersPatch](#admincustomerschromeprintserverspatch) - Updates a print server's configuration.
* [adminCustomersChromePrintersBatchCreatePrinters](#admincustomerschromeprintersbatchcreateprinters) - Creates printers under given Organization Unit.
* [adminCustomersChromePrintersBatchDeletePrinters](#admincustomerschromeprintersbatchdeleteprinters) - Deletes printers in batch.
* [adminCustomersChromePrintersCreate](#admincustomerschromeprinterscreate) - Creates a printer under given Organization Unit.
* [adminCustomersChromePrintersList](#admincustomerschromeprinterslist) - List printers configs.
* [adminCustomersChromePrintersListPrinterModels](#admincustomerschromeprinterslistprintermodels) - Lists the supported printer models.
* [directoryCustomersGet](#directorycustomersget) - Retrieves a customer.
* [directoryCustomersPatch](#directorycustomerspatch) - Patches a customer.
* [directoryCustomersUpdate](#directorycustomersupdate) - Updates a customer.

## adminCustomersChromePrintServersBatchCreatePrintServers

Creates multiple print servers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersBatchCreatePrintServersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchCreatePrintServersRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\CreatePrintServerRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\PrintServerInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersBatchCreatePrintServersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCustomersChromePrintServersBatchCreatePrintServersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchCreatePrintServersRequestInput = new BatchCreatePrintServersRequestInput();
    $request->batchCreatePrintServersRequestInput->requests = [
        new CreatePrintServerRequestInput(),
        new CreatePrintServerRequestInput(),
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nobis';
    $request->fields = 'dolores';
    $request->key = 'quis';
    $request->oauthToken = 'totam';
    $request->parent = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'nesciunt';

    $requestSecurity = new AdminCustomersChromePrintServersBatchCreatePrintServersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->adminCustomersChromePrintServersBatchCreatePrintServers($request, $requestSecurity);

    if ($response->batchCreatePrintServersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminCustomersChromePrintServersBatchDeletePrintServers

Deletes multiple print servers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersBatchDeletePrintServersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeletePrintServersRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersBatchDeletePrintServersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCustomersChromePrintServersBatchDeletePrintServersRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchDeletePrintServersRequest = new BatchDeletePrintServersRequest();
    $request->batchDeletePrintServersRequest->printServerIds = [
        'dolores',
    ];
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'vero';
    $request->key = 'nostrum';
    $request->oauthToken = 'hic';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'perspiciatis';

    $requestSecurity = new AdminCustomersChromePrintServersBatchDeletePrintServersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->adminCustomersChromePrintServersBatchDeletePrintServers($request, $requestSecurity);

    if ($response->batchDeletePrintServersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminCustomersChromePrintServersCreate

Creates a print server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrintServerInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCustomersChromePrintServersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->printServerInput = new PrintServerInput();
    $request->printServerInput->description = 'porro';
    $request->printServerInput->displayName = 'consequuntur';
    $request->printServerInput->id = '8909b3fe-49a8-4d9c-bf48-633323f9b77f';
    $request->printServerInput->name = 'Mr. Lee Funk III';
    $request->printServerInput->orgUnitId = 'odio';
    $request->printServerInput->uri = 'http://unaware-profession.org';
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eos';
    $request->fields = 'atque';
    $request->key = 'sit';
    $request->oauthToken = 'fugiat';
    $request->parent = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'soluta';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new AdminCustomersChromePrintServersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->adminCustomersChromePrintServersCreate($request, $requestSecurity);

    if ($response->printServer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminCustomersChromePrintServersDelete

Deletes a print server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCustomersChromePrintServersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'necessitatibus';
    $request->key = 'distinctio';
    $request->name = 'Jessie Emmerich';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new AdminCustomersChromePrintServersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->adminCustomersChromePrintServersDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminCustomersChromePrintServersGet

Returns a print server's configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCustomersChromePrintServersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ad';
    $request->fields = 'saepe';
    $request->key = 'suscipit';
    $request->name = 'Rene Hane';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new AdminCustomersChromePrintServersGetSecurity();
    $requestSecurity->option1 = new AdminCustomersChromePrintServersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->adminCustomersChromePrintServersGet($request, $requestSecurity);

    if ($response->printServer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminCustomersChromePrintServersList

Lists print server configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCustomersChromePrintServersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officiis';
    $request->fields = 'qui';
    $request->filter = 'dolorum';
    $request->key = 'a';
    $request->oauthToken = 'esse';
    $request->orderBy = 'harum';
    $request->orgUnitId = 'iusto';
    $request->pageSize = 215507;
    $request->pageToken = 'quisquam';
    $request->parent = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new AdminCustomersChromePrintServersListSecurity();
    $requestSecurity->option1 = new AdminCustomersChromePrintServersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->adminCustomersChromePrintServersList($request, $requestSecurity);

    if ($response->listPrintServersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminCustomersChromePrintServersPatch

Updates a print server's configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrintServerInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintServersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCustomersChromePrintServersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->printServerInput = new PrintServerInput();
    $request->printServerInput->description = 'enim';
    $request->printServerInput->displayName = 'dolorem';
    $request->printServerInput->id = 'f870b326-b5a7-4342-9cdb-1a8422bb679d';
    $request->printServerInput->name = 'Gladys Considine';
    $request->printServerInput->orgUnitId = 'sunt';
    $request->printServerInput->uri = 'http://scared-underpass.com';
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nobis';
    $request->fields = 'et';
    $request->key = 'saepe';
    $request->name = 'Carolyn Rohan';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'aperiam';
    $request->updateMask = 'delectus';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new AdminCustomersChromePrintServersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->adminCustomersChromePrintServersPatch($request, $requestSecurity);

    if ($response->printServer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminCustomersChromePrintersBatchCreatePrinters

Creates printers under given Organization Unit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintersBatchCreatePrintersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchCreatePrintersRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\CreatePrinterRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\PrinterInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintersBatchCreatePrintersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCustomersChromePrintersBatchCreatePrintersRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchCreatePrintersRequestInput = new BatchCreatePrintersRequestInput();
    $request->batchCreatePrintersRequestInput->requests = [
        new CreatePrinterRequestInput(),
    ];
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->fields = 'aut';
    $request->key = 'quas';
    $request->oauthToken = 'itaque';
    $request->parent = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new AdminCustomersChromePrintersBatchCreatePrintersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->adminCustomersChromePrintersBatchCreatePrinters($request, $requestSecurity);

    if ($response->batchCreatePrintersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminCustomersChromePrintersBatchDeletePrinters

Deletes printers in batch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintersBatchDeletePrintersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeletePrintersRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintersBatchDeletePrintersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCustomersChromePrintersBatchDeletePrintersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchDeletePrintersRequest = new BatchDeletePrintersRequest();
    $request->batchDeletePrintersRequest->printerIds = [
        'facilis',
        'cupiditate',
    ];
    $request->accessToken = 'qui';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laudantium';
    $request->fields = 'odio';
    $request->key = 'occaecati';
    $request->oauthToken = 'voluptatibus';
    $request->parent = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new AdminCustomersChromePrintersBatchDeletePrintersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->adminCustomersChromePrintersBatchDeletePrinters($request, $requestSecurity);

    if ($response->batchDeletePrintersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminCustomersChromePrintersCreate

Creates a printer under given Organization Unit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrinterInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCustomersChromePrintersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->printerInput = new PrinterInput();
    $request->printerInput->description = 'delectus';
    $request->printerInput->displayName = 'voluptate';
    $request->printerInput->id = '3ef7fbc7-abd7-44dd-b9c0-f5d2cff7c70a';
    $request->printerInput->makeAndModel = 'tempora';
    $request->printerInput->name = 'Terri Collins';
    $request->printerInput->orgUnitId = 'magnam';
    $request->printerInput->uri = 'http://ideal-licensing.com';
    $request->printerInput->useDriverlessConfig = false;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'ex';
    $request->key = 'nulla';
    $request->oauthToken = 'excepturi';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new AdminCustomersChromePrintersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->adminCustomersChromePrintersCreate($request, $requestSecurity);

    if ($response->printer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminCustomersChromePrintersList

List printers configs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCustomersChromePrintersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corporis';
    $request->fields = 'veniam';
    $request->filter = 'aliquid';
    $request->key = 'inventore';
    $request->oauthToken = 'magnam';
    $request->orderBy = 'ea';
    $request->orgUnitId = 'quo';
    $request->pageSize = 232234;
    $request->pageToken = 'recusandae';
    $request->parent = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'a';

    $requestSecurity = new AdminCustomersChromePrintersListSecurity();
    $requestSecurity->option1 = new AdminCustomersChromePrintersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->adminCustomersChromePrintersList($request, $requestSecurity);

    if ($response->listPrintersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminCustomersChromePrintersListPrinterModels

Lists the supported printer models.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintersListPrinterModelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintersListPrinterModelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintersListPrinterModelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomersChromePrintersListPrinterModelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCustomersChromePrintersListPrinterModelsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'impedit';
    $request->filter = 'aliquam';
    $request->key = 'fugit';
    $request->oauthToken = 'accusamus';
    $request->pageSize = 79522;
    $request->pageToken = 'non';
    $request->parent = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new AdminCustomersChromePrintersListPrinterModelsSecurity();
    $requestSecurity->option1 = new AdminCustomersChromePrintersListPrinterModelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->adminCustomersChromePrintersListPrinterModels($request, $requestSecurity);

    if ($response->listPrinterModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryCustomersGet

Retrieves a customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryCustomersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryCustomersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryCustomersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryCustomersGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryCustomersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->customerKey = 'quas';
    $request->fields = 'assumenda';
    $request->key = 'nulla';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new DirectoryCustomersGetSecurity();
    $requestSecurity->option1 = new DirectoryCustomersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->directoryCustomersGet($request, $requestSecurity);

    if ($response->customer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryCustomersPatch

Patches a customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryCustomersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Customer;
use \OpenAPI\OpenAPI\Models\Shared\CustomerPostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryCustomersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryCustomersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->customer = new Customer();
    $request->customer->alternateEmail = 'explicabo';
    $request->customer->customerCreationTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-21T13:50:30.142Z');
    $request->customer->customerDomain = 'molestiae';
    $request->customer->etag = 'magnam';
    $request->customer->id = '74778a7b-d466-4d28-810a-b3cdca425190';
    $request->customer->kind = 'tempora';
    $request->customer->language = 'debitis';
    $request->customer->phoneNumber = 'ipsam';
    $request->customer->postalAddress = new CustomerPostalAddress();
    $request->customer->postalAddress->addressLine1 = 'aspernatur';
    $request->customer->postalAddress->addressLine2 = 'sequi';
    $request->customer->postalAddress->addressLine3 = 'quo';
    $request->customer->postalAddress->contactName = 'esse';
    $request->customer->postalAddress->countryCode = 'UG';
    $request->customer->postalAddress->locality = 'aperiam';
    $request->customer->postalAddress->organizationName = 'distinctio';
    $request->customer->postalAddress->postalCode = '40458-3454';
    $request->customer->postalAddress->region = 'sapiente';
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->customerKey = 'accusantium';
    $request->fields = 'porro';
    $request->key = 'eum';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new DirectoryCustomersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->directoryCustomersPatch($request, $requestSecurity);

    if ($response->customer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryCustomersUpdate

Updates a customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryCustomersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Customer;
use \OpenAPI\OpenAPI\Models\Shared\CustomerPostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryCustomersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryCustomersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->customer = new Customer();
    $request->customer->alternateEmail = 'fuga';
    $request->customer->customerCreationTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T08:30:58.411Z');
    $request->customer->customerDomain = 'atque';
    $request->customer->etag = 'explicabo';
    $request->customer->id = '562f222e-9817-4ee1-bcbe-61e6b7b95bc0';
    $request->customer->kind = 'culpa';
    $request->customer->language = 'tempore';
    $request->customer->phoneNumber = 'adipisci';
    $request->customer->postalAddress = new CustomerPostalAddress();
    $request->customer->postalAddress->addressLine1 = 'cumque';
    $request->customer->postalAddress->addressLine2 = 'consequuntur';
    $request->customer->postalAddress->addressLine3 = 'consequatur';
    $request->customer->postalAddress->contactName = 'minus';
    $request->customer->postalAddress->countryCode = 'GB';
    $request->customer->postalAddress->locality = 'sapiente';
    $request->customer->postalAddress->organizationName = 'consectetur';
    $request->customer->postalAddress->postalCode = '55985';
    $request->customer->postalAddress->region = 'esse';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'error';
    $request->customerKey = 'sint';
    $request->fields = 'pariatur';
    $request->key = 'possimus';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->quotaUser = 'eveniet';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'facere';

    $requestSecurity = new DirectoryCustomersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->directoryCustomersUpdate($request, $requestSecurity);

    if ($response->customer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
