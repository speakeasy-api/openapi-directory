# budget

### Available Operations

* [adexchangebuyerBudgetGet](#adexchangebuyerbudgetget) - Returns the budget information for the adgroup specified by the accountId and billingId.
* [adexchangebuyerBudgetPatch](#adexchangebuyerbudgetpatch) - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
* [adexchangebuyerBudgetUpdate](#adexchangebuyerbudgetupdate) - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

## adexchangebuyerBudgetGet

Returns the budget information for the adgroup specified by the accountId and billingId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerBudgetGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerBudgetGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerBudgetGetRequest();
    $request->accountId = 'totam';
    $request->alt = AltEnum::JSON;
    $request->billingId = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->userIp = 'impedit';

    $requestSecurity = new AdexchangebuyerBudgetGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->budget->adexchangebuyerBudgetGet($request, $requestSecurity);

    if ($response->budget !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerBudgetPatch

Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerBudgetPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Budget;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerBudgetPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerBudgetPatchRequest();
    $request->budget = new Budget();
    $request->budget->accountId = 'cum';
    $request->budget->billingId = 'esse';
    $request->budget->budgetAmount = 'ipsum';
    $request->budget->currencyCode = 'excepturi';
    $request->budget->id = '20592939-6fea-4759-aeb1-0faaa2352c59';
    $request->budget->kind = 'nemo';
    $request->accountId = 'minima';
    $request->alt = AltEnum::JSON;
    $request->billingId = 'excepturi';
    $request->fields = 'accusantium';
    $request->key = 'iure';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->userIp = 'sapiente';

    $requestSecurity = new AdexchangebuyerBudgetPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->budget->adexchangebuyerBudgetPatch($request, $requestSecurity);

    if ($response->budget !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerBudgetUpdate

Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerBudgetUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Budget;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerBudgetUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerBudgetUpdateRequest();
    $request->budget = new Budget();
    $request->budget->accountId = 'architecto';
    $request->budget->billingId = 'mollitia';
    $request->budget->budgetAmount = 'dolorem';
    $request->budget->currencyCode = 'culpa';
    $request->budget->id = '2fa94677-3925-41aa-92c3-f5ad019da1ff';
    $request->budget->kind = 'vero';
    $request->accountId = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->billingId = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->userIp = 'cum';

    $requestSecurity = new AdexchangebuyerBudgetUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->budget->adexchangebuyerBudgetUpdate($request, $requestSecurity);

    if ($response->budget !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
