# monetization

### Available Operations

* [androidpublisherMonetizationConvertRegionPrices](#androidpublishermonetizationconvertregionprices) - Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
* [androidpublisherMonetizationSubscriptionsArchive](#androidpublishermonetizationsubscriptionsarchive) - Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.
* [androidpublisherMonetizationSubscriptionsBasePlansActivate](#androidpublishermonetizationsubscriptionsbaseplansactivate) - Activates a base plan. Once activated, base plans will be available to new subscribers.
* [androidpublisherMonetizationSubscriptionsBasePlansDeactivate](#androidpublishermonetizationsubscriptionsbaseplansdeactivate) - Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
* [androidpublisherMonetizationSubscriptionsBasePlansDelete](#androidpublishermonetizationsubscriptionsbaseplansdelete) - Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
* [androidpublisherMonetizationSubscriptionsBasePlansMigratePrices](#androidpublishermonetizationsubscriptionsbaseplansmigrateprices) - Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersActivate](#androidpublishermonetizationsubscriptionsbaseplansoffersactivate) - Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersCreate](#androidpublishermonetizationsubscriptionsbaseplansofferscreate) - Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate](#androidpublishermonetizationsubscriptionsbaseplansoffersdeactivate) - Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersDelete](#androidpublishermonetizationsubscriptionsbaseplansoffersdelete) - Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersGet](#androidpublishermonetizationsubscriptionsbaseplansoffersget) - Reads a single offer
* [androidpublisherMonetizationSubscriptionsBasePlansOffersList](#androidpublishermonetizationsubscriptionsbaseplansofferslist) - Lists all offers under a given subscription.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersPatch](#androidpublishermonetizationsubscriptionsbaseplansofferspatch) - Updates an existing subscription offer.
* [androidpublisherMonetizationSubscriptionsCreate](#androidpublishermonetizationsubscriptionscreate) - Creates a new subscription. Newly added base plans will remain in draft state until activated.
* [androidpublisherMonetizationSubscriptionsDelete](#androidpublishermonetizationsubscriptionsdelete) - Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
* [androidpublisherMonetizationSubscriptionsGet](#androidpublishermonetizationsubscriptionsget) - Reads a single subscription.
* [androidpublisherMonetizationSubscriptionsList](#androidpublishermonetizationsubscriptionslist) - Lists all subscriptions under a given app.
* [androidpublisherMonetizationSubscriptionsPatch](#androidpublishermonetizationsubscriptionspatch) - Updates an existing subscription.

## androidpublisherMonetizationConvertRegionPrices

Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationConvertRegionPricesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConvertRegionPricesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationConvertRegionPricesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationConvertRegionPricesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->convertRegionPricesRequest = new ConvertRegionPricesRequest();
    $request->convertRegionPricesRequest->price = new Money();
    $request->convertRegionPricesRequest->price->currencyCode = 'totam';
    $request->convertRegionPricesRequest->price->nanos = 853940;
    $request->convertRegionPricesRequest->price->units = 'vel';
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vel';
    $request->fields = 'labore';
    $request->key = 'possimus';
    $request->oauthToken = 'facilis';
    $request->packageName = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new AndroidpublisherMonetizationConvertRegionPricesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationConvertRegionPrices($request, $requestSecurity);

    if ($response->convertRegionPricesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsArchive

Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsArchiveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsArchiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsArchiveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'nemo' => 'recusandae',
        'aliquid' => 'aperiam',
        'cum' => 'consectetur',
        'in' => 'exercitationem',
    ];
    $request->accessToken = 'earum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'doloribus';
    $request->key = 'suscipit';
    $request->oauthToken = 'reiciendis';
    $request->packageName = 'quidem';
    $request->prettyPrint = false;
    $request->productId = 'saepe';
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'sunt';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsArchiveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsArchive($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsBasePlansActivate

Activates a base plan. Once activated, base plans will be available to new subscribers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansActivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansActivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsBasePlansActivateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'non' => 'amet',
    ];
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->basePlanId = 'a';
    $request->callback = 'debitis';
    $request->fields = 'consectetur';
    $request->key = 'corporis';
    $request->oauthToken = 'harum';
    $request->packageName = 'laboriosam';
    $request->prettyPrint = false;
    $request->productId = 'ipsa';
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'vitae';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsBasePlansActivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsBasePlansActivate($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsBasePlansDeactivate

Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'tempora' => 'aspernatur',
        'voluptas' => 'voluptas',
        'voluptas' => 'minima',
    ];
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::PROTO;
    $request->basePlanId = 'adipisci';
    $request->callback = 'minus';
    $request->fields = 'dolores';
    $request->key = 'blanditiis';
    $request->oauthToken = 'in';
    $request->packageName = 'dolore';
    $request->prettyPrint = false;
    $request->productId = 'aliquam';
    $request->quotaUser = 'officiis';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsBasePlansDeactivate($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsBasePlansDelete

Deletes a base plan. Can only be done for draft base plans. This action is irreversible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsBasePlansDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->basePlanId = 'quas';
    $request->callback = 'hic';
    $request->fields = 'nesciunt';
    $request->key = 'culpa';
    $request->oauthToken = 'corrupti';
    $request->packageName = 'pariatur';
    $request->prettyPrint = false;
    $request->productId = 'totam';
    $request->quotaUser = 'hic';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsBasePlansDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsBasePlansDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsBasePlansMigratePrices

Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MigrateBasePlanPricesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegionalPriceMigrationConfig;
use \OpenAPI\OpenAPI\Models\Shared\RegionsVersion;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->migrateBasePlanPricesRequest = new MigrateBasePlanPricesRequest();
    $request->migrateBasePlanPricesRequest->regionalPriceMigrations = [
        new RegionalPriceMigrationConfig(),
        new RegionalPriceMigrationConfig(),
        new RegionalPriceMigrationConfig(),
    ];
    $request->migrateBasePlanPricesRequest->regionsVersion = new RegionsVersion();
    $request->migrateBasePlanPricesRequest->regionsVersion->version = 'sed';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->basePlanId = 'asperiores';
    $request->callback = 'facilis';
    $request->fields = 'voluptate';
    $request->key = 'expedita';
    $request->oauthToken = 'ab';
    $request->packageName = 'iste';
    $request->prettyPrint = false;
    $request->productId = 'dolore';
    $request->quotaUser = 'laborum';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'in';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsBasePlansMigratePrices($request, $requestSecurity);

    if ($response->migrateBasePlanPricesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsBasePlansOffersActivate

Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'explicabo' => 'voluptas',
        'unde' => 'architecto',
        'suscipit' => 'sapiente',
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->basePlanId = 'reiciendis';
    $request->callback = 'perferendis';
    $request->fields = 'corrupti';
    $request->key = 'maiores';
    $request->oauthToken = 'incidunt';
    $request->offerId = 'sed';
    $request->packageName = 'provident';
    $request->prettyPrint = false;
    $request->productId = 'eius';
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsBasePlansOffersActivate($request, $requestSecurity);

    if ($response->subscriptionOffer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsBasePlansOffersCreate

Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionOfferInput;
use \OpenAPI\OpenAPI\Models\Shared\OfferTag;
use \OpenAPI\OpenAPI\Models\Shared\OtherRegionsSubscriptionOfferConfig;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionOfferPhase;
use \OpenAPI\OpenAPI\Models\Shared\OtherRegionsSubscriptionOfferPhaseConfig;
use \OpenAPI\OpenAPI\Models\Shared\OtherRegionsSubscriptionOfferPhasePrices;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\RegionalSubscriptionOfferPhaseConfig;
use \OpenAPI\OpenAPI\Models\Shared\RegionalSubscriptionOfferConfig;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionOfferTargeting;
use \OpenAPI\OpenAPI\Models\Shared\AcquisitionTargetingRule;
use \OpenAPI\OpenAPI\Models\Shared\TargetingRuleScope;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeTargetingRule;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->subscriptionOfferInput = new SubscriptionOfferInput();
    $request->subscriptionOfferInput->basePlanId = 'quos';
    $request->subscriptionOfferInput->offerId = 'voluptatibus';
    $request->subscriptionOfferInput->offerTags = [
        new OfferTag(),
        new OfferTag(),
    ];
    $request->subscriptionOfferInput->otherRegionsConfig = new OtherRegionsSubscriptionOfferConfig();
    $request->subscriptionOfferInput->otherRegionsConfig->otherRegionsNewSubscriberAvailability = false;
    $request->subscriptionOfferInput->packageName = 'tempora';
    $request->subscriptionOfferInput->phases = [
        new SubscriptionOfferPhase(),
        new SubscriptionOfferPhase(),
    ];
    $request->subscriptionOfferInput->productId = 'reiciendis';
    $request->subscriptionOfferInput->regionalConfigs = [
        new RegionalSubscriptionOfferConfig(),
        new RegionalSubscriptionOfferConfig(),
    ];
    $request->subscriptionOfferInput->targeting = new SubscriptionOfferTargeting();
    $request->subscriptionOfferInput->targeting->acquisitionRule = new AcquisitionTargetingRule();
    $request->subscriptionOfferInput->targeting->acquisitionRule->scope = new TargetingRuleScope();
    $request->subscriptionOfferInput->targeting->acquisitionRule->scope->specificSubscriptionInApp = 'sit';
    $request->subscriptionOfferInput->targeting->upgradeRule = new UpgradeTargetingRule();
    $request->subscriptionOfferInput->targeting->upgradeRule->billingPeriodDuration = 'non';
    $request->subscriptionOfferInput->targeting->upgradeRule->oncePerUser = false;
    $request->subscriptionOfferInput->targeting->upgradeRule->scope = new TargetingRuleScope();
    $request->subscriptionOfferInput->targeting->upgradeRule->scope->specificSubscriptionInApp = 'officiis';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->basePlanId = 'quaerat';
    $request->callback = 'incidunt';
    $request->fields = 'ipsam';
    $request->key = 'debitis';
    $request->oauthToken = 'rem';
    $request->offerId = 'sit';
    $request->packageName = 'nobis';
    $request->prettyPrint = false;
    $request->productId = 'error';
    $request->quotaUser = 'veniam';
    $request->regionsVersionVersion = 'minima';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsBasePlansOffersCreate($request, $requestSecurity);

    if ($response->subscriptionOffer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate

Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'aperiam' => 'saepe',
    ];
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->basePlanId = 'in';
    $request->callback = 'officiis';
    $request->fields = 'beatae';
    $request->key = 'laudantium';
    $request->oauthToken = 'exercitationem';
    $request->offerId = 'praesentium';
    $request->packageName = 'cum';
    $request->prettyPrint = false;
    $request->productId = 'laboriosam';
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'error';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate($request, $requestSecurity);

    if ($response->subscriptionOffer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsBasePlansOffersDelete

Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::PROTO;
    $request->basePlanId = 'neque';
    $request->callback = 'dolorum';
    $request->fields = 'nostrum';
    $request->key = 'officia';
    $request->oauthToken = 'dolorum';
    $request->offerId = 'corrupti';
    $request->packageName = 'accusamus';
    $request->prettyPrint = false;
    $request->productId = 'tempora';
    $request->quotaUser = 'atque';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsBasePlansOffersDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsBasePlansOffersGet

Reads a single offer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::MEDIA;
    $request->basePlanId = 'expedita';
    $request->callback = 'magnam';
    $request->fields = 'consequatur';
    $request->key = 'esse';
    $request->oauthToken = 'ipsam';
    $request->offerId = 'sit';
    $request->packageName = 'voluptatum';
    $request->prettyPrint = false;
    $request->productId = 'quas';
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'et';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsBasePlansOffersGet($request, $requestSecurity);

    if ($response->subscriptionOffer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsBasePlansOffersList

Lists all offers under a given subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansOffersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansOffersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ex';
    $request->alt = AltEnum::JSON;
    $request->basePlanId = 'sit';
    $request->callback = 'vel';
    $request->fields = 'nostrum';
    $request->key = 'saepe';
    $request->oauthToken = 'error';
    $request->packageName = 'consequatur';
    $request->pageSize = 279068;
    $request->pageToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->productId = 'dolorem';
    $request->quotaUser = 'harum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsBasePlansOffersList($request, $requestSecurity);

    if ($response->listSubscriptionOffersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsBasePlansOffersPatch

Updates an existing subscription offer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionOfferInput;
use \OpenAPI\OpenAPI\Models\Shared\OfferTag;
use \OpenAPI\OpenAPI\Models\Shared\OtherRegionsSubscriptionOfferConfig;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionOfferPhase;
use \OpenAPI\OpenAPI\Models\Shared\OtherRegionsSubscriptionOfferPhaseConfig;
use \OpenAPI\OpenAPI\Models\Shared\OtherRegionsSubscriptionOfferPhasePrices;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\RegionalSubscriptionOfferPhaseConfig;
use \OpenAPI\OpenAPI\Models\Shared\RegionalSubscriptionOfferConfig;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionOfferTargeting;
use \OpenAPI\OpenAPI\Models\Shared\AcquisitionTargetingRule;
use \OpenAPI\OpenAPI\Models\Shared\TargetingRuleScope;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeTargetingRule;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->subscriptionOfferInput = new SubscriptionOfferInput();
    $request->subscriptionOfferInput->basePlanId = 'labore';
    $request->subscriptionOfferInput->offerId = 'quidem';
    $request->subscriptionOfferInput->offerTags = [
        new OfferTag(),
        new OfferTag(),
        new OfferTag(),
    ];
    $request->subscriptionOfferInput->otherRegionsConfig = new OtherRegionsSubscriptionOfferConfig();
    $request->subscriptionOfferInput->otherRegionsConfig->otherRegionsNewSubscriberAvailability = false;
    $request->subscriptionOfferInput->packageName = 'laborum';
    $request->subscriptionOfferInput->phases = [
        new SubscriptionOfferPhase(),
        new SubscriptionOfferPhase(),
        new SubscriptionOfferPhase(),
    ];
    $request->subscriptionOfferInput->productId = 'tenetur';
    $request->subscriptionOfferInput->regionalConfigs = [
        new RegionalSubscriptionOfferConfig(),
        new RegionalSubscriptionOfferConfig(),
    ];
    $request->subscriptionOfferInput->targeting = new SubscriptionOfferTargeting();
    $request->subscriptionOfferInput->targeting->acquisitionRule = new AcquisitionTargetingRule();
    $request->subscriptionOfferInput->targeting->acquisitionRule->scope = new TargetingRuleScope();
    $request->subscriptionOfferInput->targeting->acquisitionRule->scope->specificSubscriptionInApp = 'alias';
    $request->subscriptionOfferInput->targeting->upgradeRule = new UpgradeTargetingRule();
    $request->subscriptionOfferInput->targeting->upgradeRule->billingPeriodDuration = 'amet';
    $request->subscriptionOfferInput->targeting->upgradeRule->oncePerUser = false;
    $request->subscriptionOfferInput->targeting->upgradeRule->scope = new TargetingRuleScope();
    $request->subscriptionOfferInput->targeting->upgradeRule->scope->specificSubscriptionInApp = 'deserunt';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->basePlanId = 'reiciendis';
    $request->callback = 'provident';
    $request->fields = 'repellendus';
    $request->key = 'delectus';
    $request->oauthToken = 'voluptates';
    $request->offerId = 'perferendis';
    $request->packageName = 'est';
    $request->prettyPrint = false;
    $request->productId = 'quidem';
    $request->quotaUser = 'reprehenderit';
    $request->regionsVersionVersion = 'facere';
    $request->updateMask = 'fuga';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsBasePlansOffersPatch($request, $requestSecurity);

    if ($response->subscriptionOffer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsCreate

Creates a new subscription. Newly added base plans will remain in draft state until activated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionInput;
use \OpenAPI\OpenAPI\Models\Shared\BasePlanInput;
use \OpenAPI\OpenAPI\Models\Shared\AutoRenewingBasePlanType;
use \OpenAPI\OpenAPI\Models\Shared\AutoRenewingBasePlanTypeProrationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoRenewingBasePlanTypeResubscribeStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\OfferTag;
use \OpenAPI\OpenAPI\Models\Shared\OtherRegionsBasePlanConfig;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\PrepaidBasePlanType;
use \OpenAPI\OpenAPI\Models\Shared\PrepaidBasePlanTypeTimeExtensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalBasePlanConfig;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionListing;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTaxAndComplianceSettings;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfo;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfoStreamingTaxTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfoTaxTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->subscriptionInput = new SubscriptionInput();
    $request->subscriptionInput->basePlans = [
        new BasePlanInput(),
    ];
    $request->subscriptionInput->listings = [
        new SubscriptionListing(),
        new SubscriptionListing(),
        new SubscriptionListing(),
        new SubscriptionListing(),
    ];
    $request->subscriptionInput->packageName = 'repudiandae';
    $request->subscriptionInput->productId = 'quasi';
    $request->subscriptionInput->taxAndComplianceSettings = new SubscriptionTaxAndComplianceSettings();
    $request->subscriptionInput->taxAndComplianceSettings->eeaWithdrawalRightType = SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum::WITHDRAWAL_RIGHT_DIGITAL_CONTENT;
    $request->subscriptionInput->taxAndComplianceSettings->taxRateInfoByRegionCode = [
        'asperiores' => new RegionalTaxRateInfo(),
        'totam' => new RegionalTaxRateInfo(),
    ];
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'et';
    $request->key = 'esse';
    $request->oauthToken = 'amet';
    $request->packageName = 'assumenda';
    $request->prettyPrint = false;
    $request->productId = 'ea';
    $request->quotaUser = 'atque';
    $request->regionsVersionVersion = 'error';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'officiis';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsCreate($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsDelete

Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->fields = 'ex';
    $request->key = 'maiores';
    $request->oauthToken = 'corrupti';
    $request->packageName = 'at';
    $request->prettyPrint = false;
    $request->productId = 'error';
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsGet

Reads a single subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'recusandae';
    $request->fields = 'dolorum';
    $request->key = 'repellendus';
    $request->oauthToken = 'labore';
    $request->packageName = 'reiciendis';
    $request->prettyPrint = false;
    $request->productId = 'doloremque';
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsGet($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsList

Lists all subscriptions under a given app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laboriosam';
    $request->fields = 'velit';
    $request->key = 'a';
    $request->oauthToken = 'molestias';
    $request->packageName = 'magnam';
    $request->pageSize = 906355;
    $request->pageToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->showArchived = false;
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'perspiciatis';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsList($request, $requestSecurity);

    if ($response->listSubscriptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherMonetizationSubscriptionsPatch

Updates an existing subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionInput;
use \OpenAPI\OpenAPI\Models\Shared\BasePlanInput;
use \OpenAPI\OpenAPI\Models\Shared\AutoRenewingBasePlanType;
use \OpenAPI\OpenAPI\Models\Shared\AutoRenewingBasePlanTypeProrationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoRenewingBasePlanTypeResubscribeStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\OfferTag;
use \OpenAPI\OpenAPI\Models\Shared\OtherRegionsBasePlanConfig;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\PrepaidBasePlanType;
use \OpenAPI\OpenAPI\Models\Shared\PrepaidBasePlanTypeTimeExtensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalBasePlanConfig;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionListing;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTaxAndComplianceSettings;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfo;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfoStreamingTaxTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfoTaxTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherMonetizationSubscriptionsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherMonetizationSubscriptionsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->subscriptionInput = new SubscriptionInput();
    $request->subscriptionInput->basePlans = [
        new BasePlanInput(),
    ];
    $request->subscriptionInput->listings = [
        new SubscriptionListing(),
        new SubscriptionListing(),
        new SubscriptionListing(),
        new SubscriptionListing(),
    ];
    $request->subscriptionInput->packageName = 'occaecati';
    $request->subscriptionInput->productId = 'consequuntur';
    $request->subscriptionInput->taxAndComplianceSettings = new SubscriptionTaxAndComplianceSettings();
    $request->subscriptionInput->taxAndComplianceSettings->eeaWithdrawalRightType = SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum::WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED;
    $request->subscriptionInput->taxAndComplianceSettings->taxRateInfoByRegionCode = [
        'quis' => new RegionalTaxRateInfo(),
        'reprehenderit' => new RegionalTaxRateInfo(),
        'error' => new RegionalTaxRateInfo(),
    ];
    $request->accessToken = 'illo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->fields = 'eveniet';
    $request->key = 'non';
    $request->oauthToken = 'vero';
    $request->packageName = 'doloremque';
    $request->prettyPrint = false;
    $request->productId = 'iure';
    $request->quotaUser = 'ipsa';
    $request->regionsVersionVersion = 'totam';
    $request->updateMask = 'quae';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'eveniet';

    $requestSecurity = new AndroidpublisherMonetizationSubscriptionsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->monetization->androidpublisherMonetizationSubscriptionsPatch($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
