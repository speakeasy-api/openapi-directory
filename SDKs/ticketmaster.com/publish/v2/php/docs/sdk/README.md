# SDK

## Overview

Publish API

### Available Operations

* [patchAttraction](#patchattraction) - Publish a patch on an attraction
* [patchEvent](#patchevent) - Publish a patch on an event
* [patchVenue](#patchvenue) - Publish a patch on a venue
* [publishAttraction](#publishattraction) - Publish an attractions
* [publishAttractionVideos](#publishattractionvideos) - Publish a video on an attraction
* [publishEntitlements](#publishentitlements) - Publish entitlements on an entity
* [publishEvent](#publishevent) - Publish an event
* [publishEventVideos](#publisheventvideos) - Publish a video on an event
* [publishExtension](#publishextension) - Publish extension on an entity
* [publishVenue](#publishvenue) - Publish a venue

## patchAttraction

Since 1.0.0

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchAttractionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AugmentationData;
use \OpenAPI\OpenAPI\Models\Shared\Change;
use \OpenAPI\OpenAPI\Models\Shared\ChangeOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\AugmentationDataRelatedEntityTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchAttractionRequest();
    $request->augmentationData = new AugmentationData();
    $request->augmentationData->changes = [
        new Change(),
        new Change(),
        new Change(),
        new Change(),
    ];
    $request->augmentationData->relatedEntityId = 'at';
    $request->augmentationData->relatedEntityType = AugmentationDataRelatedEntityTypeEnum::VENUE;
    $request->augmentationData->score = 4736.08;
    $request->augmentationData->source = 'quod';
    $request->augmentationData->versionNumber = 800911;
    $request->tmpsCorrelationId = 'esse';
    $request->id = '8ca1ba92-8fc8-4167-82cb-739205929396';

    $response = $sdk->sdk->patchAttraction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchEvent

Since 1.0.0

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchEventRequest;
use \OpenAPI\OpenAPI\Models\Shared\AugmentationData;
use \OpenAPI\OpenAPI\Models\Shared\Change;
use \OpenAPI\OpenAPI\Models\Shared\ChangeOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\AugmentationDataRelatedEntityTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchEventRequest();
    $request->augmentationData = new AugmentationData();
    $request->augmentationData->changes = [
        new Change(),
        new Change(),
        new Change(),
        new Change(),
    ];
    $request->augmentationData->relatedEntityId = 'saepe';
    $request->augmentationData->relatedEntityType = AugmentationDataRelatedEntityTypeEnum::VENUE;
    $request->augmentationData->score = 4499.5;
    $request->augmentationData->source = 'corporis';
    $request->augmentationData->versionNumber = 613064;
    $request->tmpsCorrelationId = 'iure';
    $request->id = 'eb10faaa-2352-4c59-9590-7aff1a3a2fa9';

    $response = $sdk->sdk->patchEvent($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchVenue

Since 1.0.0

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchVenueRequest;
use \OpenAPI\OpenAPI\Models\Shared\AugmentationData;
use \OpenAPI\OpenAPI\Models\Shared\Change;
use \OpenAPI\OpenAPI\Models\Shared\ChangeOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\AugmentationDataRelatedEntityTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchVenueRequest();
    $request->augmentationData = new AugmentationData();
    $request->augmentationData->changes = [
        new Change(),
        new Change(),
    ];
    $request->augmentationData->relatedEntityId = 'commodi';
    $request->augmentationData->relatedEntityType = AugmentationDataRelatedEntityTypeEnum::ATTRACTION;
    $request->augmentationData->score = 4746.97;
    $request->augmentationData->source = 'velit';
    $request->augmentationData->versionNumber = 623510;
    $request->tmpsCorrelationId = 'quia';
    $request->id = '51aa52c3-f5ad-4019-9a1f-fe78f097b007';

    $response = $sdk->sdk->patchVenue($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishAttraction

Since 1.0.0

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishAttractionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Attraction;
use \OpenAPI\OpenAPI\Models\Shared\Classification;
use \OpenAPI\OpenAPI\Models\Shared\Level;
use \OpenAPI\OpenAPI\Models\Shared\Segment;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\ImageRatioEnum;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\AttractionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishAttractionRequest();
    $request->attraction = new Attraction();
    $request->attraction->active = false;
    $request->attraction->additionalInfos = [
        'maiores' => 'dicta',
        'corporis' => 'dolore',
    ];
    $request->attraction->classifications = [
        new Classification(),
        new Classification(),
    ];
    $request->attraction->descriptions = [
        'harum' => 'enim',
    ];
    $request->attraction->discoverable = false;
    $request->attraction->images = [
        new Image(),
        new Image(),
        new Image(),
        new Image(),
    ];
    $request->attraction->names = [
        'repudiandae' => 'quae',
        'ipsum' => 'quidem',
    ];
    $request->attraction->references = [
        'excepturi' => 'pariatur',
        'modi' => 'praesentium',
        'rem' => 'voluptates',
    ];
    $request->attraction->relationships = [
        [
            'sint' => 'veritatis',
            'itaque' => 'incidunt',
            'enim' => 'consequatur',
            'est' => 'quibusdam',
        ],
    ];
    $request->attraction->source = new Source();
    $request->attraction->source->id = '2abd4426-9802-4d50-aa94-bb4f63c969e9';
    $request->attraction->source->name = 'Curtis Toy';
    $request->attraction->test = false;
    $request->attraction->type = AttractionTypeEnum::VENUE;
    $request->attraction->url = 'in';
    $request->attraction->version = 846409;
    $request->tmpsCorrelationId = 'maiores';

    $response = $sdk->sdk->publishAttraction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishAttractionVideos

Since 1.0.0

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishAttractionVideosRequest;
use \OpenAPI\OpenAPI\Models\Shared\Video;
use \OpenAPI\OpenAPI\Models\Shared\LicensingInformation;
use \OpenAPI\OpenAPI\Models\Shared\RegionRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\Source;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishAttractionVideosRequest();
    $request->tmpsCorrelationId = 'rerum';
    $request->video = new Video();
    $request->video->embedUrl = 'dicta';
    $request->video->licensingInformation = new LicensingInformation();
    $request->video->licensingInformation->license = 'magnam';
    $request->video->licensingInformation->regionRestriction = new RegionRestrictions();
    $request->video->licensingInformation->regionRestriction->allowed = [
        'facere',
        'ea',
        'aliquid',
        'laborum',
    ];
    $request->video->source = new Source();
    $request->video->source->id = 'e395efb9-ba88-4f3a-a699-7074ba4469b6';
    $request->video->source->name = 'Brandon Brakus V';
    $request->video->url = 'ullam';
    $request->id = '9890afa5-63e2-4516-be4c-8b711e5b7fd2';

    $response = $sdk->sdk->publishAttractionVideos($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishEntitlements

Since 2.0.0

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishEntitlementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Entitlement;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\EntitlementRelatedEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntitlementSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishEntitlementsRequest();
    $request->entitlement = new Entitlement();
    $request->entitlement->data = [
        'pariatur' => 'accusantium',
        'consequuntur' => 'praesentium',
        'natus' => 'magni',
        'sunt' => 'quo',
    ];
    $request->entitlement->relatedEntityId = 'illum';
    $request->entitlement->relatedEntitySource = new Source();
    $request->entitlement->relatedEntitySource->id = 'dc692601-fb57-46b0-95f0-d30c5fbb2587';
    $request->entitlement->relatedEntitySource->name = 'Beatrice Dooley Sr.';
    $request->entitlement->relatedEntityType = EntitlementRelatedEntityTypeEnum::ATTRACTION;
    $request->entitlement->source = EntitlementSourceEnum::TICKETMASTER;
    $request->entitlement->versionNumber = 463451;
    $request->tmpsCorrelationId = 'dolor';

    $response = $sdk->sdk->publishEntitlements($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishEvent

Since 1.0.0

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishEventRequest;
use \OpenAPI\OpenAPI\Models\Shared\Event;
use \OpenAPI\OpenAPI\Models\Shared\Attraction;
use \OpenAPI\OpenAPI\Models\Shared\Classification;
use \OpenAPI\OpenAPI\Models\Shared\Level;
use \OpenAPI\OpenAPI\Models\Shared\Segment;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\ImageRatioEnum;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\AttractionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventDates;
use \OpenAPI\OpenAPI\Models\Shared\AccessDates;
use \OpenAPI\OpenAPI\Models\Shared\EndDates;
use \OpenAPI\OpenAPI\Models\Shared\LocalTime;
use \OpenAPI\OpenAPI\Models\Shared\Chronology;
use \OpenAPI\OpenAPI\Models\Shared\DateTimeZone;
use \OpenAPI\OpenAPI\Models\Shared\DateTimeFieldType;
use \OpenAPI\OpenAPI\Models\Shared\DurationFieldType;
use \OpenAPI\OpenAPI\Models\Shared\DateTimeField;
use \OpenAPI\OpenAPI\Models\Shared\DurationField;
use \OpenAPI\OpenAPI\Models\Shared\StartDates;
use \OpenAPI\OpenAPI\Models\Shared\EventStatus;
use \OpenAPI\OpenAPI\Models\Shared\EventStatusCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\Place;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Area;
use \OpenAPI\OpenAPI\Models\Shared\City;
use \OpenAPI\OpenAPI\Models\Shared\Country;
use \OpenAPI\OpenAPI\Models\Shared\State;
use \OpenAPI\OpenAPI\Models\Shared\PriceRange;
use \OpenAPI\OpenAPI\Models\Shared\PriceRangeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Promoter;
use \OpenAPI\OpenAPI\Models\Shared\PublicVisibility;
use \OpenAPI\OpenAPI\Models\Shared\EventSalesDates;
use \OpenAPI\OpenAPI\Models\Shared\Presale;
use \OpenAPI\OpenAPI\Models\Shared\PublicSaleDates;
use \OpenAPI\OpenAPI\Models\Shared\EventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Venue;
use \OpenAPI\OpenAPI\Models\Shared\VenueBoxOfficeInfo;
use \OpenAPI\OpenAPI\Models\Shared\Dma;
use \OpenAPI\OpenAPI\Models\Shared\VenueGeneralInfo;
use \OpenAPI\OpenAPI\Models\Shared\Market;
use \OpenAPI\OpenAPI\Models\Shared\Social;
use \OpenAPI\OpenAPI\Models\Shared\Twitter;
use \OpenAPI\OpenAPI\Models\Shared\TwitterHandleEnum;
use \OpenAPI\OpenAPI\Models\Shared\VenueTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishEventRequest();
    $request->event = new Event();
    $request->event->active = false;
    $request->event->additionalInfos = [
        'nostrum' => 'hic',
        'recusandae' => 'omnis',
        'facilis' => 'perspiciatis',
        'voluptatem' => 'porro',
    ];
    $request->event->attractions = [
        new Attraction(),
    ];
    $request->event->classifications = [
        new Classification(),
        new Classification(),
        new Classification(),
    ];
    $request->event->dates = new EventDates();
    $request->event->dates->access = new AccessDates();
    $request->event->dates->access->endApproximate = true;
    $request->event->dates->access->endDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', 'yyyy-MM-ddThh-mm-ssZ');
    $request->event->dates->access->startApproximate = false;
    $request->event->dates->access->startDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', 'yyyy-MM-ddThh-mm-ssZ');
    $request->event->dates->end = new EndDates();
    $request->event->dates->end->approximate = false;
    $request->event->dates->end->dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', 'yyyy-MM-ddThh-mm-ssZ');
    $request->event->dates->end->localTime = new LocalTime();
    $request->event->dates->end->localTime->chronology = new Chronology();
    $request->event->dates->end->localTime->chronology->zone = new DateTimeZone();
    $request->event->dates->end->localTime->chronology->zone->fixed = false;
    $request->event->dates->end->localTime->chronology->zone->id = '909b3fe4-9a8d-49cb-b486-33323f9b77f3';
    $request->event->dates->end->localTime->fieldTypes = [
        new DateTimeFieldType(),
        new DateTimeFieldType(),
        new DateTimeFieldType(),
    ];
    $request->event->dates->end->localTime->fields = [
        new DateTimeField(),
        new DateTimeField(),
    ];
    $request->event->dates->end->localTime->hourOfDay = 85295;
    $request->event->dates->end->localTime->millisOfDay = 58029;
    $request->event->dates->end->localTime->millisOfSecond = 56418;
    $request->event->dates->end->localTime->minuteOfHour = 434417;
    $request->event->dates->end->localTime->secondOfMinute = 487838;
    $request->event->dates->end->localTime->values = [
        881005,
        696344,
    ];
    $request->event->dates->start = new StartDates();
    $request->event->dates->start->dateTBA = false;
    $request->event->dates->start->dateTBD = false;
    $request->event->dates->start->dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', 'yyyy-MM-ddThh:mm:ssZ');
    $request->event->dates->start->localDate = DateTime::createFromFormat('Y-m-d', 'yyyy-MM-dd');
    $request->event->dates->start->localTime = new LocalTime();
    $request->event->dates->start->localTime->chronology = new Chronology();
    $request->event->dates->start->localTime->chronology->zone = new DateTimeZone();
    $request->event->dates->start->localTime->chronology->zone->fixed = false;
    $request->event->dates->start->localTime->chronology->zone->id = 'f69280d1-ba77-4a89-abf7-37ae4203ce5e';
    $request->event->dates->start->localTime->fieldTypes = [
        new DateTimeFieldType(),
        new DateTimeFieldType(),
    ];
    $request->event->dates->start->localTime->fields = [
        new DateTimeField(),
        new DateTimeField(),
        new DateTimeField(),
    ];
    $request->event->dates->start->localTime->hourOfDay = 588317;
    $request->event->dates->start->localTime->millisOfDay = 324683;
    $request->event->dates->start->localTime->millisOfSecond = 831049;
    $request->event->dates->start->localTime->minuteOfHour = 519711;
    $request->event->dates->start->localTime->secondOfMinute = 628982;
    $request->event->dates->start->localTime->values = [
        872651,
    ];
    $request->event->dates->start->noSpecificTime = false;
    $request->event->dates->start->timeTBA = false;
    $request->event->dates->status = new EventStatus();
    $request->event->dates->status->code = EventStatusCodeEnum::OFFSALE;
    $request->event->dates->timezone = 'tempora';
    $request->event->descriptions = [
        'quod' => 'officiis',
        'qui' => 'dolorum',
    ];
    $request->event->discoverable = false;
    $request->event->distance = 9527.92;
    $request->event->images = [
        new Image(),
        new Image(),
    ];
    $request->event->infos = [
        'iusto' => 'ipsum',
        'quisquam' => 'tenetur',
        'amet' => 'tempore',
    ];
    $request->event->location = new Location();
    $request->event->location->latitude = 8802.98;
    $request->event->location->longitude = 2539.41;
    $request->event->names = [
        'dolorem' => 'sapiente',
        'totam' => 'nihil',
    ];
    $request->event->place = new Place();
    $request->event->place->address = new Address();
    $request->event->place->address->line1s = [
        'expedita' => 'neque',
    ];
    $request->event->place->address->line2s = [
        'vel' => 'libero',
    ];
    $request->event->place->address->line3s = [
        'deserunt' => 'quam',
        'ipsum' => 'incidunt',
    ];
    $request->event->place->area = new Area();
    $request->event->place->area->names = [
        'cupiditate' => 'maxime',
    ];
    $request->event->place->city = new City();
    $request->event->place->city->names = [
        'soluta' => 'dicta',
        'laborum' => 'totam',
        'incidunt' => 'aspernatur',
        'dolores' => 'distinctio',
    ];
    $request->event->place->country = new Country();
    $request->event->place->country->countryCode = 'PG';
    $request->event->place->country->names = [
        'quam' => 'molestias',
        'temporibus' => 'qui',
    ];
    $request->event->place->location = new Location();
    $request->event->place->location->latitude = 2048.65;
    $request->event->place->location->longitude = 1448.47;
    $request->event->place->names = [
        'odio' => 'sunt',
    ];
    $request->event->place->postalCode = '79077';
    $request->event->place->state = new State();
    $request->event->place->state->names = [
        'et' => 'saepe',
        'ipsum' => 'veritatis',
        'nobis' => 'quos',
    ];
    $request->event->place->state->stateCode = 'tempore';
    $request->event->pleaseNotes = [
        'aperiam' => 'delectus',
        'dolorem' => 'dolore',
        'labore' => 'adipisci',
    ];
    $request->event->priceRanges = [
        new PriceRange(),
        new PriceRange(),
        new PriceRange(),
    ];
    $request->event->promoter = new Promoter();
    $request->event->promoter->descriptions = [
        'quae' => 'aut',
    ];
    $request->event->promoter->id = '8e0adcf4-b921-4879-bce9-53f73ef7fbc7';
    $request->event->promoter->names = [
        'facilis' => 'vero',
        'ducimus' => 'dolore',
        'quibusdam' => 'illum',
    ];
    $request->event->publicVisibility = new PublicVisibility();
    $request->event->publicVisibility->endDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T11:24:00.260Z');
    $request->event->publicVisibility->startDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T12:08:06.467Z');
    $request->event->publicVisibility->visible = false;
    $request->event->references = [
        'exercitationem' => 'nulla',
        'fugit' => 'porro',
        'maiores' => 'doloribus',
        'iusto' => 'eligendi',
    ];
    $request->event->relationships = [
        [
            'officia' => 'tempora',
        ],
        [
            'ea' => 'aspernatur',
            'vel' => 'possimus',
        ],
    ];
    $request->event->sales = new EventSalesDates();
    $request->event->sales->presales = [
        new Presale(),
        new Presale(),
    ];
    $request->event->sales->public = new PublicSaleDates();
    $request->event->sales->public->endDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-07T14:04:49.880Z');
    $request->event->sales->public->startDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-04T22:05:21.038Z');
    $request->event->sales->public->startTBD = false;
    $request->event->source = new Source();
    $request->event->source->id = '3f16d9f5-fce6-4c55-a146-c3e250fb008c';
    $request->event->source->name = 'Mrs. Denise Tillman MD';
    $request->event->test = false;
    $request->event->type = EventTypeEnum::ATTRACTION;
    $request->event->units = 'placeat';
    $request->event->url = 'velit';
    $request->event->venue = new Venue();
    $request->event->venue->accessibleSeatingDetails = [
        'autem' => 'nobis',
        'quas' => 'assumenda',
    ];
    $request->event->venue->active = false;
    $request->event->venue->additionalInfos = [
        'voluptas' => 'libero',
        'quasi' => 'tempora',
        'numquam' => 'explicabo',
        'provident' => 'ipsa',
    ];
    $request->event->venue->address = new Address();
    $request->event->venue->address->line1s = [
        'magnam' => 'odio',
        'eius' => 'esse',
    ];
    $request->event->venue->address->line2s = [
        'rem' => 'fuga',
        'reprehenderit' => 'quidem',
    ];
    $request->event->venue->address->line3s = [
        'ut' => 'eum',
        'suscipit' => 'assumenda',
        'eos' => 'praesentium',
        'quisquam' => 'veritatis',
    ];
    $request->event->venue->boxOfficeInfo = new VenueBoxOfficeInfo();
    $request->event->venue->boxOfficeInfo->acceptedPaymentDetails = [
        'id' => 'quidem',
    ];
    $request->event->venue->boxOfficeInfo->openHoursDetails = [
        'quo' => 'illum',
    ];
    $request->event->venue->boxOfficeInfo->phoneNumberDetails = [
        'fuga' => 'eius',
        'eos' => 'voluptas',
        'ab' => 'cupiditate',
        'consequatur' => 'tempora',
    ];
    $request->event->venue->boxOfficeInfo->willCallDetails = [
        'ipsam' => 'aspernatur',
        'sequi' => 'quo',
        'esse' => 'recusandae',
        'aperiam' => 'distinctio',
    ];
    $request->event->venue->city = new City();
    $request->event->venue->city->names = [
        'dignissimos' => 'inventore',
        'nihil' => 'totam',
        'accusamus' => 'aliquam',
        'odio' => 'occaecati',
    ];
    $request->event->venue->country = new Country();
    $request->event->venue->country->countryCode = 'IM';
    $request->event->venue->country->names = [
        'dolores' => 'deserunt',
        'molestiae' => 'accusantium',
        'porro' => 'eum',
        'quas' => 'praesentium',
    ];
    $request->event->venue->currency = 'consequuntur';
    $request->event->venue->descriptions = [
        'fugit' => 'fuga',
        'mollitia' => 'incidunt',
        'atque' => 'explicabo',
    ];
    $request->event->venue->discoverable = false;
    $request->event->venue->distance = 3256.85;
    $request->event->venue->dma = [
        new Dma(),
        new Dma(),
    ];
    $request->event->venue->generalInfo = new VenueGeneralInfo();
    $request->event->venue->generalInfo->childRules = [
        'sapiente' => 'consequuntur',
    ];
    $request->event->venue->generalInfo->generalRules = [
        'explicabo' => 'saepe',
    ];
    $request->event->venue->images = [
        new Image(),
        new Image(),
        new Image(),
    ];
    $request->event->venue->location = new Location();
    $request->event->venue->location->latitude = 5438.06;
    $request->event->venue->location->longitude = 922.6;
    $request->event->venue->markets = [
        new Market(),
        new Market(),
    ];
    $request->event->venue->names = [
        'accusamus' => 'veritatis',
        'esse' => 'quod',
        'nam' => 'vero',
        'aliquid' => 'quasi',
    ];
    $request->event->venue->parkingDetails = [
        'vel' => 'harum',
        'molestiae' => 'rerum',
        'occaecati' => 'minima',
        'distinctio' => 'eligendi',
    ];
    $request->event->venue->postalCode = '67271';
    $request->event->venue->references = [
        'minus' => 'quaerat',
    ];
    $request->event->venue->relationships = [
        [
            'esse' => 'blanditiis',
        ],
        [
            'a' => 'nulla',
            'quas' => 'esse',
            'quasi' => 'a',
        ],
        [
            'sint' => 'pariatur',
            'possimus' => 'quia',
            'eveniet' => 'asperiores',
        ],
        [
            'veritatis' => 'consequuntur',
            'quasi' => 'similique',
            'culpa' => 'aliquid',
            'tenetur' => 'quae',
        ],
    ];
    $request->event->venue->social = new Social();
    $request->event->venue->social->twitter = new Twitter();
    $request->event->venue->social->twitter->handle = TwitterHandleEnum::AT_A_TWITTER_HANDLE;
    $request->event->venue->social->twitter->hashtags = [
        'vel',
        'in',
        'eius',
        'libero',
    ];
    $request->event->venue->source = new Source();
    $request->event->venue->source->id = 'db04f157-5608-42d6-8ea1-9f1d17051339';
    $request->event->venue->source->name = 'Ms. Kenneth Ledner';
    $request->event->venue->state = new State();
    $request->event->venue->state->names = [
        'ab' => 'corrupti',
        'non' => 'voluptatem',
        'dolor' => 'occaecati',
    ];
    $request->event->venue->state->stateCode = 'numquam';
    $request->event->venue->test = false;
    $request->event->venue->timezone = 'impedit';
    $request->event->venue->type = VenueTypeEnum::EVENT;
    $request->event->venue->units = 'voluptas';
    $request->event->venue->url = 'aut';
    $request->event->venue->version = 491025;
    $request->event->version = 115484;
    $request->tmpsCorrelationId = 'maiores';

    $response = $sdk->sdk->publishEvent($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishEventVideos

Since 1.0.0

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishEventVideosRequest;
use \OpenAPI\OpenAPI\Models\Shared\Video;
use \OpenAPI\OpenAPI\Models\Shared\LicensingInformation;
use \OpenAPI\OpenAPI\Models\Shared\RegionRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\Source;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishEventVideosRequest();
    $request->tmpsCorrelationId = 'natus';
    $request->video = new Video();
    $request->video->embedUrl = 'velit';
    $request->video->licensingInformation = new LicensingInformation();
    $request->video->licensingInformation->license = 'voluptatibus';
    $request->video->licensingInformation->regionRestriction = new RegionRestrictions();
    $request->video->licensingInformation->regionRestriction->allowed = [
        'asperiores',
        'aperiam',
    ];
    $request->video->source = new Source();
    $request->video->source->id = '642dac7a-f515-4cc4-93aa-63aae8d67864';
    $request->video->source->name = 'Johnathan Ritchie';
    $request->video->url = 'corporis';
    $request->id = 'fd5e60b3-75ed-44f6-bbee-41f33317fe35';

    $response = $sdk->sdk->publishEventVideos($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishExtension

Since 1.0.0

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishExtensionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtensionData;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\ExtensionDataRelatedEntityTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishExtensionRequest();
    $request->extensionData = new ExtensionData();
    $request->extensionData->data = [
        'laboriosam' => 'ipsa',
        'voluptates' => 'libero',
        'vitae' => 'accusamus',
    ];
    $request->extensionData->relatedEntityId = 'similique';
    $request->extensionData->relatedEntitySource = new Source();
    $request->extensionData->relatedEntitySource->id = '426555ba-3c28-4744-ad53-b88f3a8d8f5c';
    $request->extensionData->relatedEntitySource->name = 'Luz Cormier';
    $request->extensionData->relatedEntityType = ExtensionDataRelatedEntityTypeEnum::ATTRACTION;
    $request->extensionData->source = 'facilis';
    $request->extensionData->type = 'voluptate';
    $request->extensionData->versionNumber = 709072;
    $request->tmpsCorrelationId = 'ab';

    $response = $sdk->sdk->publishExtension($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishVenue

Since 1.0.0

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishVenueRequest;
use \OpenAPI\OpenAPI\Models\Shared\Venue;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\VenueBoxOfficeInfo;
use \OpenAPI\OpenAPI\Models\Shared\City;
use \OpenAPI\OpenAPI\Models\Shared\Country;
use \OpenAPI\OpenAPI\Models\Shared\Dma;
use \OpenAPI\OpenAPI\Models\Shared\VenueGeneralInfo;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\ImageRatioEnum;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\Market;
use \OpenAPI\OpenAPI\Models\Shared\Social;
use \OpenAPI\OpenAPI\Models\Shared\Twitter;
use \OpenAPI\OpenAPI\Models\Shared\TwitterHandleEnum;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\State;
use \OpenAPI\OpenAPI\Models\Shared\VenueTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishVenueRequest();
    $request->tmpsCorrelationId = 'iste';
    $request->venue = new Venue();
    $request->venue->accessibleSeatingDetails = [
        'laborum' => 'sed',
        'in' => 'commodi',
    ];
    $request->venue->active = false;
    $request->venue->additionalInfos = [
        'explicabo' => 'voluptas',
        'unde' => 'architecto',
        'suscipit' => 'sapiente',
    ];
    $request->venue->address = new Address();
    $request->venue->address->line1s = [
        'illo' => 'reiciendis',
        'perferendis' => 'corrupti',
        'maiores' => 'incidunt',
        'sed' => 'provident',
    ];
    $request->venue->address->line2s = [
        'necessitatibus' => 'ipsum',
        'ea' => 'occaecati',
    ];
    $request->venue->address->line3s = [
        'voluptatibus' => 'tempora',
        'tempora' => 'voluptate',
        'reiciendis' => 'ex',
    ];
    $request->venue->boxOfficeInfo = new VenueBoxOfficeInfo();
    $request->venue->boxOfficeInfo->acceptedPaymentDetails = [
        'non' => 'officiis',
    ];
    $request->venue->boxOfficeInfo->openHoursDetails = [
        'facilis' => 'quaerat',
        'incidunt' => 'ipsam',
        'debitis' => 'rem',
    ];
    $request->venue->boxOfficeInfo->phoneNumberDetails = [
        'nobis' => 'error',
    ];
    $request->venue->boxOfficeInfo->willCallDetails = [
        'minima' => 'recusandae',
        'reiciendis' => 'nulla',
    ];
    $request->venue->city = new City();
    $request->venue->city->names = [
        'aperiam' => 'saepe',
    ];
    $request->venue->country = new Country();
    $request->venue->country->countryCode = 'EE';
    $request->venue->country->names = [
        'in' => 'officiis',
        'beatae' => 'laudantium',
    ];
    $request->venue->currency = 'exercitationem';
    $request->venue->descriptions = [
        'cum' => 'laboriosam',
        'dolorum' => 'voluptatum',
        'error' => 'hic',
    ];
    $request->venue->discoverable = false;
    $request->venue->distance = 7105.29;
    $request->venue->dma = [
        new Dma(),
        new Dma(),
        new Dma(),
        new Dma(),
    ];
    $request->venue->generalInfo = new VenueGeneralInfo();
    $request->venue->generalInfo->childRules = [
        'dolorum' => 'nostrum',
    ];
    $request->venue->generalInfo->generalRules = [
        'dolorum' => 'corrupti',
        'accusamus' => 'tempora',
        'atque' => 'fugit',
    ];
    $request->venue->images = [
        new Image(),
        new Image(),
    ];
    $request->venue->location = new Location();
    $request->venue->location->latitude = 8563.03;
    $request->venue->location->longitude = 302.35;
    $request->venue->markets = [
        new Market(),
        new Market(),
        new Market(),
    ];
    $request->venue->names = [
        'magnam' => 'consequatur',
        'esse' => 'ipsam',
        'sit' => 'voluptatum',
    ];
    $request->venue->parkingDetails = [
        'repudiandae' => 'corporis',
        'et' => 'blanditiis',
        'ex' => 'sed',
    ];
    $request->venue->postalCode = '43960';
    $request->venue->references = [
        'reiciendis' => 'dolorem',
        'harum' => 'dicta',
    ];
    $request->venue->relationships = [
        [
            'labore' => 'quidem',
            'atque' => 'laborum',
            'nam' => 'tenetur',
        ],
    ];
    $request->venue->social = new Social();
    $request->venue->social->twitter = new Twitter();
    $request->venue->social->twitter->handle = TwitterHandleEnum::AT_A_TWITTER_HANDLE;
    $request->venue->social->twitter->hashtags = [
        'alias',
        'amet',
    ];
    $request->venue->source = new Source();
    $request->venue->source->id = 'a79f9dfe-0ab7-4da8-a50c-e187f86bc173';
    $request->venue->source->name = 'Nathaniel Lindgren';
    $request->venue->state = new State();
    $request->venue->state->names = [
        'accusamus' => 'natus',
        'minima' => 'aspernatur',
        'ex' => 'maiores',
        'corrupti' => 'at',
    ];
    $request->venue->state->stateCode = 'error';
    $request->venue->test = false;
    $request->venue->timezone = 'blanditiis';
    $request->venue->type = VenueTypeEnum::VENUE;
    $request->venue->units = 'repudiandae';
    $request->venue->url = 'atque';
    $request->venue->version = 541381;

    $response = $sdk->sdk->publishVenue($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
