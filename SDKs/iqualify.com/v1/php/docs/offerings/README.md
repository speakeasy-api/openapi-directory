# offerings

### Available Operations

* [getOfferings](#getofferings) - Find current, past and future offerings
* [getOfferingsCurrent](#getofferingscurrent) - Find active offerings
* [getOfferingsFuture](#getofferingsfuture) - Find scheduled offerings
* [getOfferingsInfoTextPattern](#getofferingsinfotextpattern) - Find offerings where info field matches the specified textPattern
* [getOfferingsPast](#getofferingspast) - Find past offerings
* [getOfferingsOfferingId](#getofferingsofferingid) - Find offering by ID
* [patchOfferingsOfferingId](#patchofferingsofferingid) - Update offering
* [postOfferings](#postofferings) - Create offering

## getOfferings

Responds with all offerings for your organisation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->offerings->getOfferings();

    if ($response->offeringMetadataResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsCurrent

Responds with active offerings for your organisation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->offerings->getOfferingsCurrent();

    if ($response->offeringMetadataResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsFuture

Responds with scheduled offerings for your organisation. Scheduled offerings have a start date after today's date (inclusive).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->offerings->getOfferingsFuture();

    if ($response->offeringMetadataResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsInfoTextPattern

Find offerings where info field matches the specified text pattern.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsInfoTextPatternRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsInfoTextPatternRequest();
    $request->textPattern = 'modi';

    $response = $sdk->offerings->getOfferingsInfoTextPattern($request);

    if ($response->portfolioActivations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsPast

Responds with past offerings for your organisation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->offerings->getOfferingsPast();

    if ($response->offeringMetadataResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingId

Responds with an offering matching the offeringId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdRequest();
    $request->offeringId = 'qui';

    $response = $sdk->offerings->getOfferingsOfferingId($request);

    if ($response->offeringMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchOfferingsOfferingId

Updates the offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchOfferingsOfferingIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Offering;
use \OpenAPI\OpenAPI\Models\Shared\OfferingBadge;
use \OpenAPI\OpenAPI\Models\Shared\BadgeExpiry;
use \OpenAPI\OpenAPI\Models\Shared\BadgeExpiryExpiryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BadgeExpiryTimeframeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\OfferingMetadata1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchOfferingsOfferingIdRequest();
    $request->offering = new Offering();
    $request->offering->badge = new OfferingBadge();
    $request->offering->badge->badgeExpiry = new BadgeExpiry();
    $request->offering->badge->badgeExpiry->expirationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-31T22:08:47.731Z');
    $request->offering->badge->badgeExpiry->expires = false;
    $request->offering->badge->badgeExpiry->expiryType = BadgeExpiryExpiryTypeEnum::TIMEFRAME;
    $request->offering->badge->badgeExpiry->timeframeAmount = 201.07;
    $request->offering->badge->badgeExpiry->timeframeUnit = BadgeExpiryTimeframeUnitEnum::DAYS;
    $request->offering->badge->description = 'assumenda';
    $request->offering->badge->requiresApproval = false;
    $request->offering->badge->title = 'Mrs.';
    $request->offering->contentId = 'alias';
    $request->offering->description = 'fugit';
    $request->offering->earlyCloseOffDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-11T04:17:07.569Z');
    $request->offering->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-19T03:15:40.816Z');
    $request->offering->hasEarlyCloseOff = false;
    $request->offering->identifier = 'tempore';
    $request->offering->isReadonly = false;
    $request->offering->metadata = new OfferingMetadata1();
    $request->offering->metadata->category = 'labore';
    $request->offering->metadata->level = 'delectus';
    $request->offering->metadata->tags = [
        'non',
        'eligendi',
    ];
    $request->offering->metadata->topic = 'sint';
    $request->offering->name = 'Sherri Tremblay';
    $request->offering->overview = 'dolor';
    $request->offering->rootContentId = 'debitis';
    $request->offering->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-17T08:08:22.040Z');
    $request->offering->trailerVideoUrl = 'in';
    $request->offering->useRelativeDates = false;
    $request->offeringId = 'in';

    $response = $sdk->offerings->patchOfferingsOfferingId($request);

    if ($response->offeringMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOfferings

Creates a new offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\OfferingRequired;
use \OpenAPI\OpenAPI\Models\Shared\OfferingRequiredBadge;
use \OpenAPI\OpenAPI\Models\Shared\BadgeExpiry;
use \OpenAPI\OpenAPI\Models\Shared\BadgeExpiryExpiryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BadgeExpiryTimeframeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\OfferingRequiredMetadata;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OfferingRequired();
    $request->badge = new OfferingRequiredBadge();
    $request->badge->badgeExpiry = new BadgeExpiry();
    $request->badge->badgeExpiry->expirationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-25T11:09:22.009Z');
    $request->badge->badgeExpiry->expires = false;
    $request->badge->badgeExpiry->expiryType = BadgeExpiryExpiryTypeEnum::TIMEFRAME;
    $request->badge->badgeExpiry->timeframeAmount = 1162.02;
    $request->badge->badgeExpiry->timeframeUnit = BadgeExpiryTimeframeUnitEnum::DAYS;
    $request->badge->description = 'cumque';
    $request->badge->requiresApproval = false;
    $request->badge->title = 'Dr.';
    $request->contentId = 'ea';
    $request->createDefaultChannels = false;
    $request->description = 'aliquid';
    $request->earlyCloseOffDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-28T19:04:18.797Z');
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-02T20:02:58.167Z');
    $request->hasEarlyCloseOff = false;
    $request->identifier = 'enim';
    $request->isReadonly = false;
    $request->metadata = new OfferingRequiredMetadata();
    $request->metadata->category = 'accusamus';
    $request->metadata->level = 'delectus';
    $request->metadata->tags = [
        'provident',
        'nam',
        'id',
    ];
    $request->metadata->topic = 'blanditiis';
    $request->name = 'Timmy Feeney';
    $request->rootContentId = 'vel';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-15T07:59:26.631Z');
    $request->trailerVideoUrl = 'molestiae';
    $request->useRelativeDates = false;

    $response = $sdk->offerings->postOfferings($request);

    if ($response->offeringMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
