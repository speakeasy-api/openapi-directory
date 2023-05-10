<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessaccountmanagementAccountsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\AccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessaccountmanagementAccountsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accountInput = new AccountInput();
    $request->accountInput->accountName = 'provident';
    $request->accountInput->name = 'Ellis Mitchell';
    $request->accountInput->organizationInfo = new OrganizationInfoInput();
    $request->accountInput->organizationInfo->address = new PostalAddress();
    $request->accountInput->organizationInfo->address->addressLines = [
        'vel',
        'error',
        'deserunt',
        'suscipit',
    ];
    $request->accountInput->organizationInfo->address->administrativeArea = 'iure';
    $request->accountInput->organizationInfo->address->languageCode = 'magnam';
    $request->accountInput->organizationInfo->address->locality = 'debitis';
    $request->accountInput->organizationInfo->address->organization = 'ipsa';
    $request->accountInput->organizationInfo->address->postalCode = '23478-5453';
    $request->accountInput->organizationInfo->address->recipients = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->accountInput->organizationInfo->address->regionCode = 'deserunt';
    $request->accountInput->organizationInfo->address->revision = 20218;
    $request->accountInput->organizationInfo->address->sortingCode = 'ipsam';
    $request->accountInput->organizationInfo->address->sublocality = 'repellendus';
    $request->accountInput->primaryOwner = 'sapiente';
    $request->accountInput->type = AccountTypeEnum::USER_GROUP;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';

    $response = $sdk->accounts->mybusinessaccountmanagementAccountsCreate($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->