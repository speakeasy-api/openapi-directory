<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateConsentRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\Consents;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccess;
use \OpenAPI\OpenAPI\Models\Shared\AccountReference16CH;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalInformationAccess;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccessAllPsd2Enum;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccessAvailableAccountsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccessAvailableAccountsWithBalanceEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConsentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConsentRequest();
    $request->digest = 'corrupti';
    $request->psuAccept = 'provident';
    $request->psuAcceptCharset = 'distinctio';
    $request->psuAcceptEncoding = 'quibusdam';
    $request->psuAcceptLanguage = 'unde';
    $request->psuCorporateID = 'nulla';
    $request->psuCorporateIDType = 'corrupti';
    $request->psuDeviceID = 'illum';
    $request->psuGeoLocation = 'vel';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuId = 'deserunt';
    $request->psuIDType = 'suscipit';
    $request->psuIPAddress = '112.76.228.14';
    $request->psuIPPort = 'delectus';
    $request->psuUserAgent = 'tempora';
    $request->signature = 'suscipit';
    $request->tppBrandLoggingInformation = 'molestiae';
    $request->tppExplicitAuthorisationPreferred = false;
    $request->tppNokRedirectURI = 'https://studious-lynx.info';
    $request->tppNotificationContentPreferred = 'excepturi';
    $request->tppNotificationURI = 'nisi';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'https://tangible-bathroom.info';
    $request->tppSignatureCertificate = 'veritatis';
    $request->xRequestID = 'deserunt';
    $request->consents = new Consents();
    $request->consents->access = new AccountAccess();
    $request->consents->access->accounts = [
        new AccountReference16CH(),
    ];
    $request->consents->access->additionalInformation = new AdditionalInformationAccess();
    $request->consents->access->additionalInformation->ownerName = [
        new AccountReference16CH(),
        new AccountReference16CH(),
    ];
    $request->consents->access->additionalInformation->trustedBeneficiaries = [
        new AccountReference16CH(),
        new AccountReference16CH(),
        new AccountReference16CH(),
        new AccountReference16CH(),
    ];
    $request->consents->access->allPsd2 = AccountAccessAllPsd2Enum::ALL_ACCOUNTS_WITH_OWNER_NAME;
    $request->consents->access->availableAccounts = AccountAccessAvailableAccountsEnum::ALL_ACCOUNTS_WITH_OWNER_NAME;
    $request->consents->access->availableAccountsWithBalance = AccountAccessAvailableAccountsWithBalanceEnum::ALL_ACCOUNTS;
    $request->consents->access->balances = [
        new AccountReference16CH(),
        new AccountReference16CH(),
        new AccountReference16CH(),
        new AccountReference16CH(),
    ];
    $request->consents->access->restrictedTo = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->consents->access->transactions = [
        new AccountReference16CH(),
        new AccountReference16CH(),
    ];
    $request->consents->combinedServiceIndicator = false;
    $request->consents->frequencyPerDay = 4;
    $request->consents->recurringIndicator = false;
    $request->consents->validUntil = DateTime::createFromFormat('Y-m-d', '2020-12-31');

    $requestSecurity = new CreateConsentSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->createConsent($request, $requestSecurity);

    if ($response->consentsResponse201 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->