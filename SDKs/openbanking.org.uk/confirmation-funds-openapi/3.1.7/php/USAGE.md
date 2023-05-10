<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFundsConfirmationConsentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBFundsConfirmationConsent1;
use \OpenAPI\OpenAPI\Models\Shared\OBFundsConfirmationConsent1Data;
use \OpenAPI\OpenAPI\Models\Shared\OBFundsConfirmationConsent1DataDebtorAccount;
use \OpenAPI\OpenAPI\Models\Operations\CreateFundsConfirmationConsentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFundsConfirmationConsentsRequest();
    $request->authorization = 'corrupti';
    $request->obFundsConfirmationConsent1 = new OBFundsConfirmationConsent1();
    $request->obFundsConfirmationConsent1->data = new OBFundsConfirmationConsent1Data();
    $request->obFundsConfirmationConsent1->data->debtorAccount = new OBFundsConfirmationConsent1DataDebtorAccount();
    $request->obFundsConfirmationConsent1->data->debtorAccount->identification = 'provident';
    $request->obFundsConfirmationConsent1->data->debtorAccount->name = 'Ellis Mitchell';
    $request->obFundsConfirmationConsent1->data->debtorAccount->schemeName = 'illum';
    $request->obFundsConfirmationConsent1->data->debtorAccount->secondaryIdentification = 'vel';
    $request->obFundsConfirmationConsent1->data->expirationDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-16T11:56:06.019Z');
    $request->xCustomerUserAgent = 'suscipit';
    $request->xFapiAuthDate = 'iure';
    $request->xFapiCustomerIpAddress = 'magnam';
    $request->xFapiInteractionId = 'debitis';

    $requestSecurity = new CreateFundsConfirmationConsentsSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fundsConfirmations->createFundsConfirmationConsents($request, $requestSecurity);

    if ($response->obFundsConfirmationConsentResponse1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->