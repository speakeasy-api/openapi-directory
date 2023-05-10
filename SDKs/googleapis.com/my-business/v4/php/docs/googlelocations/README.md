# googleLocations

### Available Operations

* [mybusinessGoogleLocationsReport](#mybusinessgooglelocationsreport) - Report a GoogleLocation.
* [mybusinessGoogleLocationsSearch](#mybusinessgooglelocationssearch) - Search all of the possible locations that are a match to the specified request.

## mybusinessGoogleLocationsReport

Report a GoogleLocation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessGoogleLocationsReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportGoogleLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportGoogleLocationRequestReportReasonBadLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportGoogleLocationRequestReportReasonBadRecommendationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessGoogleLocationsReportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reportGoogleLocationRequest = new ReportGoogleLocationRequest();
    $request->reportGoogleLocationRequest->locationGroupName = 'atque';
    $request->reportGoogleLocationRequest->reportReasonBadLocation = ReportGoogleLocationRequestReportReasonBadLocationEnum::NOT_A_BUSINESS;
    $request->reportGoogleLocationRequest->reportReasonBadRecommendation = ReportGoogleLocationRequestReportReasonBadRecommendationEnum::NOT_PART_OF_SUGGESTED_CHAIN;
    $request->reportGoogleLocationRequest->reportReasonElaboration = 'tenetur';
    $request->reportGoogleLocationRequest->reportReasonLanguageCode = 'laboriosam';
    $request->accessToken = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'voluptate';
    $request->key = 'unde';
    $request->name = 'Rene Skiles';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'reprehenderit';

    $response = $sdk->googleLocations->mybusinessGoogleLocationsReport($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessGoogleLocationsSearch

Search all of the possible locations that are a match to the specified request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessGoogleLocationsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchGoogleLocationsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\LocationInput;
use \OpenAPI\OpenAPI\Models\Shared\AdWordsLocationExtensions;
use \OpenAPI\OpenAPI\Models\Shared\CategoryInput;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\Attribute;
use \OpenAPI\OpenAPI\Models\Shared\RepeatedEnumAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\UrlAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\LocationKey;
use \OpenAPI\OpenAPI\Models\Shared\LocationStateInput;
use \OpenAPI\OpenAPI\Models\Shared\Metadata;
use \OpenAPI\OpenAPI\Models\Shared\Duplicate;
use \OpenAPI\OpenAPI\Models\Shared\DuplicateAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\MoreHours;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriod;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriodCloseDayEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriodOpenDayEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpenInfo;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\OpenInfoStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PriceList;
use \OpenAPI\OpenAPI\Models\Shared\Label;
use \OpenAPI\OpenAPI\Models\Shared\Section;
use \OpenAPI\OpenAPI\Models\Shared\Item;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\SectionSectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Profile;
use \OpenAPI\OpenAPI\Models\Shared\BusinessHours;
use \OpenAPI\OpenAPI\Models\Shared\RelationshipData;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAreaBusiness;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAreaBusinessBusinessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Places;
use \OpenAPI\OpenAPI\Models\Shared\PlaceInfo;
use \OpenAPI\OpenAPI\Models\Shared\PointRadius;
use \OpenAPI\OpenAPI\Models\Shared\SpecialHours;
use \OpenAPI\OpenAPI\Models\Shared\SpecialHourPeriod;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessGoogleLocationsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->searchGoogleLocationsRequestInput = new SearchGoogleLocationsRequestInput();
    $request->searchGoogleLocationsRequestInput->location = new LocationInput();
    $request->searchGoogleLocationsRequestInput->location->adWordsLocationExtensions = new AdWordsLocationExtensions();
    $request->searchGoogleLocationsRequestInput->location->adWordsLocationExtensions->adPhone = 'fuga';
    $request->searchGoogleLocationsRequestInput->location->additionalCategories = [
        new CategoryInput(),
        new CategoryInput(),
        new CategoryInput(),
    ];
    $request->searchGoogleLocationsRequestInput->location->additionalPhones = [
        'veniam',
        'voluptatem',
        'quisquam',
    ];
    $request->searchGoogleLocationsRequestInput->location->address = new PostalAddress();
    $request->searchGoogleLocationsRequestInput->location->address->addressLines = [
        'quasi',
        'atque',
        'reprehenderit',
        'asperiores',
    ];
    $request->searchGoogleLocationsRequestInput->location->address->administrativeArea = 'totam';
    $request->searchGoogleLocationsRequestInput->location->address->languageCode = 'suscipit';
    $request->searchGoogleLocationsRequestInput->location->address->locality = 'quidem';
    $request->searchGoogleLocationsRequestInput->location->address->organization = 'maxime';
    $request->searchGoogleLocationsRequestInput->location->address->postalCode = '42845';
    $request->searchGoogleLocationsRequestInput->location->address->recipients = [
        'officiis',
        'officiis',
        'accusamus',
    ];
    $request->searchGoogleLocationsRequestInput->location->address->regionCode = 'natus';
    $request->searchGoogleLocationsRequestInput->location->address->revision = 328303;
    $request->searchGoogleLocationsRequestInput->location->address->sortingCode = 'aspernatur';
    $request->searchGoogleLocationsRequestInput->location->address->sublocality = 'ex';
    $request->searchGoogleLocationsRequestInput->location->attributes = [
        new Attribute(),
        new Attribute(),
        new Attribute(),
        new Attribute(),
    ];
    $request->searchGoogleLocationsRequestInput->location->labels = [
        'at',
        'error',
        'blanditiis',
    ];
    $request->searchGoogleLocationsRequestInput->location->languageCode = 'suscipit';
    $request->searchGoogleLocationsRequestInput->location->latlng = new LatLng();
    $request->searchGoogleLocationsRequestInput->location->latlng->latitude = 9223.48;
    $request->searchGoogleLocationsRequestInput->location->latlng->longitude = 5421.29;
    $request->searchGoogleLocationsRequestInput->location->locationKey = new LocationKey();
    $request->searchGoogleLocationsRequestInput->location->locationKey->explicitNoPlaceId = false;
    $request->searchGoogleLocationsRequestInput->location->locationKey->placeId = 'atque';
    $request->searchGoogleLocationsRequestInput->location->locationKey->plusPageId = 'sunt';
    $request->searchGoogleLocationsRequestInput->location->locationKey->requestId = 'recusandae';
    $request->searchGoogleLocationsRequestInput->location->locationName = 'dolorum';
    $request->searchGoogleLocationsRequestInput->location->locationState = new LocationStateInput();
    $request->searchGoogleLocationsRequestInput->location->locationState->canDelete = false;
    $request->searchGoogleLocationsRequestInput->location->locationState->canUpdate = false;
    $request->searchGoogleLocationsRequestInput->location->locationState->hasPendingEdits = false;
    $request->searchGoogleLocationsRequestInput->location->locationState->hasPendingVerification = false;
    $request->searchGoogleLocationsRequestInput->location->locationState->isDisabled = false;
    $request->searchGoogleLocationsRequestInput->location->locationState->isDisconnected = false;
    $request->searchGoogleLocationsRequestInput->location->locationState->isDuplicate = false;
    $request->searchGoogleLocationsRequestInput->location->locationState->isGoogleUpdated = false;
    $request->searchGoogleLocationsRequestInput->location->locationState->isLocalPostApiDisabled = false;
    $request->searchGoogleLocationsRequestInput->location->locationState->isPendingReview = false;
    $request->searchGoogleLocationsRequestInput->location->locationState->isPublished = false;
    $request->searchGoogleLocationsRequestInput->location->locationState->isSuspended = false;
    $request->searchGoogleLocationsRequestInput->location->locationState->isVerified = false;
    $request->searchGoogleLocationsRequestInput->location->locationState->needsReverification = false;
    $request->searchGoogleLocationsRequestInput->location->metadata = new Metadata();
    $request->searchGoogleLocationsRequestInput->location->metadata->duplicate = new Duplicate();
    $request->searchGoogleLocationsRequestInput->location->metadata->duplicate->access = DuplicateAccessEnum::INSUFFICIENT;
    $request->searchGoogleLocationsRequestInput->location->metadata->duplicate->locationName = 'labore';
    $request->searchGoogleLocationsRequestInput->location->metadata->duplicate->placeId = 'reiciendis';
    $request->searchGoogleLocationsRequestInput->location->metadata->mapsUrl = 'doloremque';
    $request->searchGoogleLocationsRequestInput->location->metadata->newReviewUrl = 'repudiandae';
    $request->searchGoogleLocationsRequestInput->location->moreHours = [
        new MoreHours(),
    ];
    $request->searchGoogleLocationsRequestInput->location->name = 'Teresa Daniel';
    $request->searchGoogleLocationsRequestInput->location->openInfo = new OpenInfo();
    $request->searchGoogleLocationsRequestInput->location->openInfo->canReopen = false;
    $request->searchGoogleLocationsRequestInput->location->openInfo->openingDate = new Date();
    $request->searchGoogleLocationsRequestInput->location->openInfo->openingDate->day = 246535;
    $request->searchGoogleLocationsRequestInput->location->openInfo->openingDate->month = 952143;
    $request->searchGoogleLocationsRequestInput->location->openInfo->openingDate->year = 562783;
    $request->searchGoogleLocationsRequestInput->location->openInfo->status = OpenInfoStatusEnum::OPEN;
    $request->searchGoogleLocationsRequestInput->location->priceLists = [
        new PriceList(),
        new PriceList(),
        new PriceList(),
        new PriceList(),
    ];
    $request->searchGoogleLocationsRequestInput->location->primaryCategory = new CategoryInput();
    $request->searchGoogleLocationsRequestInput->location->primaryCategory->categoryId = 'consequuntur';
    $request->searchGoogleLocationsRequestInput->location->primaryCategory->displayName = 'occaecati';
    $request->searchGoogleLocationsRequestInput->location->primaryPhone = 'officiis';
    $request->searchGoogleLocationsRequestInput->location->profile = new Profile();
    $request->searchGoogleLocationsRequestInput->location->profile->description = 'perspiciatis';
    $request->searchGoogleLocationsRequestInput->location->regularHours = new BusinessHours();
    $request->searchGoogleLocationsRequestInput->location->regularHours->periods = [
        new TimePeriod(),
        new TimePeriod(),
    ];
    $request->searchGoogleLocationsRequestInput->location->relationshipData = new RelationshipData();
    $request->searchGoogleLocationsRequestInput->location->relationshipData->parentChain = 'adipisci';
    $request->searchGoogleLocationsRequestInput->location->serviceArea = new ServiceAreaBusiness();
    $request->searchGoogleLocationsRequestInput->location->serviceArea->businessType = ServiceAreaBusinessBusinessTypeEnum::CUSTOMER_AND_BUSINESS_LOCATION;
    $request->searchGoogleLocationsRequestInput->location->serviceArea->places = new Places();
    $request->searchGoogleLocationsRequestInput->location->serviceArea->places->placeInfos = [
        new PlaceInfo(),
        new PlaceInfo(),
        new PlaceInfo(),
    ];
    $request->searchGoogleLocationsRequestInput->location->serviceArea->radius = new PointRadius();
    $request->searchGoogleLocationsRequestInput->location->serviceArea->radius->latlng = new LatLng();
    $request->searchGoogleLocationsRequestInput->location->serviceArea->radius->latlng->latitude = 1602.3;
    $request->searchGoogleLocationsRequestInput->location->serviceArea->radius->latlng->longitude = 1458.7;
    $request->searchGoogleLocationsRequestInput->location->serviceArea->radius->radiusKm = 6611.18;
    $request->searchGoogleLocationsRequestInput->location->specialHours = new SpecialHours();
    $request->searchGoogleLocationsRequestInput->location->specialHours->specialHourPeriods = [
        new SpecialHourPeriod(),
        new SpecialHourPeriod(),
    ];
    $request->searchGoogleLocationsRequestInput->location->storeCode = 'reprehenderit';
    $request->searchGoogleLocationsRequestInput->location->websiteUrl = 'error';
    $request->searchGoogleLocationsRequestInput->query = 'illo';
    $request->searchGoogleLocationsRequestInput->resultCount = 361306;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'non';
    $request->fields = 'vero';
    $request->key = 'doloremque';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'quae';

    $response = $sdk->googleLocations->mybusinessGoogleLocationsSearch($request);

    if ($response->searchGoogleLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
