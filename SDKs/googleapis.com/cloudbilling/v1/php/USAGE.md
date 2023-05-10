<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillingAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingBillingAccountsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->billingAccountInput = new BillingAccountInput();
    $request->billingAccountInput->displayName = 'provident';
    $request->billingAccountInput->masterBillingAccount = 'distinctio';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new CloudbillingBillingAccountsCreateSecurity();
    $requestSecurity->option1 = new CloudbillingBillingAccountsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->cloudbillingBillingAccountsCreate($request, $requestSecurity);

    if ($response->billingAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->