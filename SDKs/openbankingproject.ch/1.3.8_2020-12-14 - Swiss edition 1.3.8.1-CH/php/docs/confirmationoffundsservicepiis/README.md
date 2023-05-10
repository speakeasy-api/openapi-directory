# confirmationOfFundsServicePIIS

## Overview

Confirmation of Funds Service (PIIS) returns a confirmation of funds request at the ASPSP.


### Available Operations

* [checkAvailabilityOfFunds](#checkavailabilityoffunds) - Confirmation of funds request

## checkAvailabilityOfFunds

Creates a confirmation of funds request at the ASPSP. Checks whether a specific amount is available at point of time of the request on an account linked to a given tuple card issuer(TPP)/card number, or addressed by IBAN and TPP respectively.
If the related extended services are used a conditional Consent-ID is contained in the header. This field is contained but commented out in this specification.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CheckAvailabilityOfFundsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmationOfFunds;
use \OpenAPI\OpenAPI\Models\Shared\AccountReference16CH;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Operations\CheckAvailabilityOfFundsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckAvailabilityOfFundsRequest();
    $request->authorization = 'fugit';
    $request->digest = 'sapiente';
    $request->signature = 'consequuntur';
    $request->tppSignatureCertificate = 'ratione';
    $request->xRequestID = 'explicabo';
    $request->confirmationOfFunds = new ConfirmationOfFunds();
    $request->confirmationOfFunds->account = new AccountReference16CH();
    $request->confirmationOfFunds->account->cashAccountType = 'saepe';
    $request->confirmationOfFunds->account->currency = 'EUR';
    $request->confirmationOfFunds->account->iban = 'FR7612345987650123456789014';
    $request->confirmationOfFunds->account->otherAccountIdentification = '90-100100-0';
    $request->confirmationOfFunds->cardNumber = 'occaecati';
    $request->confirmationOfFunds->instructedAmount = new Amount();
    $request->confirmationOfFunds->instructedAmount->amount = '5877.78';
    $request->confirmationOfFunds->instructedAmount->currency = 'EUR';
    $request->confirmationOfFunds->payee = 'atque';

    $requestSecurity = new CheckAvailabilityOfFundsSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->confirmationOfFundsServicePIIS->checkAvailabilityOfFunds($request, $requestSecurity);

    if ($response->checkAvailabilityOfFunds200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
