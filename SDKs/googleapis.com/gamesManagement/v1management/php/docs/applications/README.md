# applications

### Available Operations

* [gamesManagementApplicationsListHidden](#gamesmanagementapplicationslisthidden) - Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.

## gamesManagementApplicationsListHidden

Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementApplicationsListHiddenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementApplicationsListHiddenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesManagementApplicationsListHiddenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->applicationId = 'iste';
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->maxResults = 943749;
    $request->oauthToken = 'saepe';
    $request->pageToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new GamesManagementApplicationsListHiddenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applications->gamesManagementApplicationsListHidden($request, $requestSecurity);

    if ($response->hiddenPlayerList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
