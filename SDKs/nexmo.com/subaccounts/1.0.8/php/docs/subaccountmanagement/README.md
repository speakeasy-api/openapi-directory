# subaccountManagement

## Overview

This section shows how you can create, retrieve and modify subaccounts of a primary account.

### Available Operations

* [createSubAccount](#createsubaccount) - Create subaccount
* [modifySubaccount](#modifysubaccount) - Modify a subaccount
* [retrieveSubaccount](#retrievesubaccount) - Retrieve a subaccount
* [retrieveSubaccountsList](#retrievesubaccountslist) - Retrieve list of subaccounts

## createSubAccount

Create a subaccount for a given primary account.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewSubaccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubAccountRequest();
    $request->newSubaccountRequest = new NewSubaccountRequest();
    $request->newSubaccountRequest->name = 'Subaccount department A';
    $request->newSubaccountRequest->secret = 'Password123';
    $request->newSubaccountRequest->usePrimaryAccountBalance = false;
    $request->apiKey = 'provident';

    $requestSecurity = new CreateSubAccountSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->subaccountManagement->createSubAccount($request, $requestSecurity);

    if ($response->subaccountCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifySubaccount

Change one or more properties of a subaccount.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ModifySubaccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifySubaccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\ModifySubaccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifySubaccountRequest();
    $request->modifySubaccountRequest = new ModifySubaccountRequest();
    $request->modifySubaccountRequest->name = 'Subaccount department B';
    $request->modifySubaccountRequest->suspended = true;
    $request->modifySubaccountRequest->usePrimaryAccountBalance = false;
    $request->apiKey = 'distinctio';
    $request->subaccountKey = 'quibusdam';

    $requestSecurity = new ModifySubaccountSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->subaccountManagement->modifySubaccount($request, $requestSecurity);

    if ($response->subaccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveSubaccount

Get the information of a subaccount specified with its API key.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveSubaccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveSubaccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveSubaccountRequest();
    $request->apiKey = 'unde';
    $request->subaccountKey = 'nulla';

    $requestSecurity = new RetrieveSubaccountSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->subaccountManagement->retrieveSubaccount($request, $requestSecurity);

    if ($response->subaccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveSubaccountsList

Get the information of all the subaccounts owned by the primary account.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveSubaccountsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveSubaccountsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveSubaccountsListRequest();
    $request->apiKey = 'corrupti';

    $requestSecurity = new RetrieveSubaccountsListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->subaccountManagement->retrieveSubaccountsList($request, $requestSecurity);

    if ($response->subaccountsAllResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
