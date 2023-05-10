# marketplacedeals

### Available Operations

* [adexchangebuyerMarketplacedealsDelete](#adexchangebuyermarketplacedealsdelete) - Delete the specified deals from the proposal
* [adexchangebuyerMarketplacedealsInsert](#adexchangebuyermarketplacedealsinsert) - Add new deals for the specified proposal
* [adexchangebuyerMarketplacedealsList](#adexchangebuyermarketplacedealslist) - List all the deals for a given proposal
* [adexchangebuyerMarketplacedealsUpdate](#adexchangebuyermarketplacedealsupdate) - Replaces all the deals in the proposal with the passed in deals

## adexchangebuyerMarketplacedealsDelete

Delete the specified deals from the proposal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerMarketplacedealsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteOrderDealsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerMarketplacedealsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerMarketplacedealsDeleteRequest();
    $request->deleteOrderDealsRequest = new DeleteOrderDealsRequest();
    $request->deleteOrderDealsRequest->dealIds = [
        'deleniti',
        'facilis',
        'in',
        'architecto',
    ];
    $request->deleteOrderDealsRequest->proposalRevisionNumber = 'architecto';
    $request->deleteOrderDealsRequest->updateAction = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->fields = 'ullam';
    $request->key = 'expedita';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->proposalId = 'repellat';
    $request->quotaUser = 'quibusdam';
    $request->userIp = 'sed';

    $requestSecurity = new AdexchangebuyerMarketplacedealsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketplacedeals->adexchangebuyerMarketplacedealsDelete($request, $requestSecurity);

    if ($response->deleteOrderDealsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerMarketplacedealsInsert

Add new deals for the specified proposal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerMarketplacedealsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOrderDealsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceDeal;
use \OpenAPI\OpenAPI\Models\Shared\PrivateData;
use \OpenAPI\OpenAPI\Models\Shared\DealServingMetadata;
use \OpenAPI\OpenAPI\Models\Shared\DealServingMetadataDealPauseStatus;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryControl;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryControlFrequencyCap;
use \OpenAPI\OpenAPI\Models\Shared\ContactInformation;
use \OpenAPI\OpenAPI\Models\Shared\SharedTargeting;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValue;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValueCreativeSize;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValueSize;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValueDayPartTargeting;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValueDayPartTargetingDayPart;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValueDemogAgeCriteria;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValueDemogGenderCriteria;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValueRequestPlatformTargeting;
use \OpenAPI\OpenAPI\Models\Shared\DealTerms;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\DealTermsGuaranteedFixedPriceTerms;
use \OpenAPI\OpenAPI\Models\Shared\DealTermsGuaranteedFixedPriceTermsBillingInfo;
use \OpenAPI\OpenAPI\Models\Shared\PricePerBuyer;
use \OpenAPI\OpenAPI\Models\Shared\Buyer;
use \OpenAPI\OpenAPI\Models\Shared\DealTermsNonGuaranteedAuctionTerms;
use \OpenAPI\OpenAPI\Models\Shared\DealTermsNonGuaranteedFixedPriceTerms;
use \OpenAPI\OpenAPI\Models\Shared\DealTermsRubiconNonGuaranteedTerms;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerMarketplacedealsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerMarketplacedealsInsertRequest();
    $request->addOrderDealsRequest = new AddOrderDealsRequest();
    $request->addOrderDealsRequest->deals = [
        new MarketplaceDeal(),
        new MarketplaceDeal(),
        new MarketplaceDeal(),
        new MarketplaceDeal(),
    ];
    $request->addOrderDealsRequest->proposalRevisionNumber = 'pariatur';
    $request->addOrderDealsRequest->updateAction = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->fields = 'consequuntur';
    $request->key = 'praesentium';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->proposalId = 'magni';
    $request->quotaUser = 'sunt';
    $request->userIp = 'quo';

    $requestSecurity = new AdexchangebuyerMarketplacedealsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketplacedeals->adexchangebuyerMarketplacedealsInsert($request, $requestSecurity);

    if ($response->addOrderDealsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerMarketplacedealsList

List all the deals for a given proposal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerMarketplacedealsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerMarketplacedealsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerMarketplacedealsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'illum';
    $request->key = 'pariatur';
    $request->oauthToken = 'maxime';
    $request->pqlQuery = 'ea';
    $request->prettyPrint = false;
    $request->proposalId = 'excepturi';
    $request->quotaUser = 'odit';
    $request->userIp = 'ea';

    $requestSecurity = new AdexchangebuyerMarketplacedealsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketplacedeals->adexchangebuyerMarketplacedealsList($request, $requestSecurity);

    if ($response->getOrderDealsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerMarketplacedealsUpdate

Replaces all the deals in the proposal with the passed in deals

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerMarketplacedealsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\EditAllOrderDealsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceDeal;
use \OpenAPI\OpenAPI\Models\Shared\PrivateData;
use \OpenAPI\OpenAPI\Models\Shared\DealServingMetadata;
use \OpenAPI\OpenAPI\Models\Shared\DealServingMetadataDealPauseStatus;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryControl;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryControlFrequencyCap;
use \OpenAPI\OpenAPI\Models\Shared\ContactInformation;
use \OpenAPI\OpenAPI\Models\Shared\SharedTargeting;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValue;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValueCreativeSize;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValueSize;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValueDayPartTargeting;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValueDayPartTargetingDayPart;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValueDemogAgeCriteria;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValueDemogGenderCriteria;
use \OpenAPI\OpenAPI\Models\Shared\TargetingValueRequestPlatformTargeting;
use \OpenAPI\OpenAPI\Models\Shared\DealTerms;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\DealTermsGuaranteedFixedPriceTerms;
use \OpenAPI\OpenAPI\Models\Shared\DealTermsGuaranteedFixedPriceTermsBillingInfo;
use \OpenAPI\OpenAPI\Models\Shared\PricePerBuyer;
use \OpenAPI\OpenAPI\Models\Shared\Buyer;
use \OpenAPI\OpenAPI\Models\Shared\DealTermsNonGuaranteedAuctionTerms;
use \OpenAPI\OpenAPI\Models\Shared\DealTermsNonGuaranteedFixedPriceTerms;
use \OpenAPI\OpenAPI\Models\Shared\DealTermsRubiconNonGuaranteedTerms;
use \OpenAPI\OpenAPI\Models\Shared\Proposal;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceLabel;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceDealParty;
use \OpenAPI\OpenAPI\Models\Shared\Seller;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerMarketplacedealsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerMarketplacedealsUpdateRequest();
    $request->editAllOrderDealsRequest = new EditAllOrderDealsRequest();
    $request->editAllOrderDealsRequest->deals = [
        new MarketplaceDeal(),
    ];
    $request->editAllOrderDealsRequest->proposal = new Proposal();
    $request->editAllOrderDealsRequest->proposal->billedBuyer = new Buyer();
    $request->editAllOrderDealsRequest->proposal->billedBuyer->accountId = 'ab';
    $request->editAllOrderDealsRequest->proposal->buyer = new Buyer();
    $request->editAllOrderDealsRequest->proposal->buyer->accountId = 'maiores';
    $request->editAllOrderDealsRequest->proposal->buyerContacts = [
        new ContactInformation(),
        new ContactInformation(),
        new ContactInformation(),
    ];
    $request->editAllOrderDealsRequest->proposal->buyerPrivateData = new PrivateData();
    $request->editAllOrderDealsRequest->proposal->buyerPrivateData->referenceId = 'ipsam';
    $request->editAllOrderDealsRequest->proposal->buyerPrivateData->referencePayload = 'voluptate';
    $request->editAllOrderDealsRequest->proposal->dbmAdvertiserIds = [
        'nam',
        'eaque',
    ];
    $request->editAllOrderDealsRequest->proposal->hasBuyerSignedOff = false;
    $request->editAllOrderDealsRequest->proposal->hasSellerSignedOff = false;
    $request->editAllOrderDealsRequest->proposal->inventorySource = 'pariatur';
    $request->editAllOrderDealsRequest->proposal->isRenegotiating = false;
    $request->editAllOrderDealsRequest->proposal->isSetupComplete = false;
    $request->editAllOrderDealsRequest->proposal->kind = 'nemo';
    $request->editAllOrderDealsRequest->proposal->labels = [
        new MarketplaceLabel(),
        new MarketplaceLabel(),
        new MarketplaceLabel(),
        new MarketplaceLabel(),
    ];
    $request->editAllOrderDealsRequest->proposal->lastUpdaterOrCommentorRole = 'perferendis';
    $request->editAllOrderDealsRequest->proposal->name = 'Vincent Anderson';
    $request->editAllOrderDealsRequest->proposal->negotiationId = 'hic';
    $request->editAllOrderDealsRequest->proposal->originatorRole = 'libero';
    $request->editAllOrderDealsRequest->proposal->privateAuctionId = 'nobis';
    $request->editAllOrderDealsRequest->proposal->proposalId = 'dolores';
    $request->editAllOrderDealsRequest->proposal->proposalState = 'quis';
    $request->editAllOrderDealsRequest->proposal->revisionNumber = 'totam';
    $request->editAllOrderDealsRequest->proposal->revisionTimeMs = 'dignissimos';
    $request->editAllOrderDealsRequest->proposal->seller = new Seller();
    $request->editAllOrderDealsRequest->proposal->seller->accountId = 'eaque';
    $request->editAllOrderDealsRequest->proposal->seller->subAccountId = 'quis';
    $request->editAllOrderDealsRequest->proposal->sellerContacts = [
        new ContactInformation(),
    ];
    $request->editAllOrderDealsRequest->proposalRevisionNumber = 'eos';
    $request->editAllOrderDealsRequest->updateAction = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->fields = 'dolores';
    $request->key = 'minus';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->proposalId = 'dolor';
    $request->quotaUser = 'vero';
    $request->userIp = 'nostrum';

    $requestSecurity = new AdexchangebuyerMarketplacedealsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketplacedeals->adexchangebuyerMarketplacedealsUpdate($request, $requestSecurity);

    if ($response->editAllOrderDealsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
