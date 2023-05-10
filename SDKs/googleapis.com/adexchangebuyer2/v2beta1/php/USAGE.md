<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Client;
use \OpenAPI\OpenAPI\Models\Shared\ClientEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2AccountsClientsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2AccountsClientsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->client = new Client();
    $request->client->clientAccountId = 'provident';
    $request->client->clientName = 'distinctio';
    $request->client->entityId = 'quibusdam';
    $request->client->entityName = 'unde';
    $request->client->entityType = ClientEntityTypeEnum::ENTITY_TYPE_UNCLASSIFIED;
    $request->client->partnerClientId = 'corrupti';
    $request->client->role = ClientRoleEnum::CLIENT_DEAL_APPROVER;
    $request->client->status = ClientStatusEnum::DISABLED;
    $request->client->visibleToSeller = false;
    $request->accessToken = 'error';
    $request->accountId = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'magnam';
    $request->key = 'debitis';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new Adexchangebuyer2AccountsClientsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->adexchangebuyer2AccountsClientsCreate($request, $requestSecurity);

    if ($response->client !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->