<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsAccountLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountLink;
use \OpenAPI\OpenAPI\Models\Shared\AccountLinkTarget;
use \OpenAPI\OpenAPI\Models\Shared\HotelList;
use \OpenAPI\OpenAPI\Models\Shared\AccountLinkStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsAccountLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accountLink = new AccountLink();
    $request->accountLink->accountLinkTarget = new AccountLinkTarget();
    $request->accountLink->accountLinkTarget->allHotels = false;
    $request->accountLink->accountLinkTarget->hotelList = new HotelList();
    $request->accountLink->accountLinkTarget->hotelList->partnerHotelIds = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->accountLink->googleAdsCustomerName = 'nulla';
    $request->accountLink->name = 'Dallas Kassulke';
    $request->accountLink->status = AccountLinkStatusEnum::ACCOUNT_LINK_STATUS_UNKNOWN;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->oauthToken = 'tempora';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $response = $sdk->accounts->travelpartnerAccountsAccountLinksCreate($request);

    if ($response->accountLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->