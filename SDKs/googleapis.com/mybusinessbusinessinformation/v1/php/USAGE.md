<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationAccountsLocationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationInput;
use \OpenAPI\OpenAPI\Models\Shared\AdWordsLocationExtensions;
use \OpenAPI\OpenAPI\Models\Shared\CategoriesInput;
use \OpenAPI\OpenAPI\Models\Shared\CategoryInput;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\MoreHours;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriod;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriodCloseDayEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriodOpenDayEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpenInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\OpenInfoStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumbers;
use \OpenAPI\OpenAPI\Models\Shared\Profile;
use \OpenAPI\OpenAPI\Models\Shared\BusinessHours;
use \OpenAPI\OpenAPI\Models\Shared\RelationshipData;
use \OpenAPI\OpenAPI\Models\Shared\RelevantLocation;
use \OpenAPI\OpenAPI\Models\Shared\RelevantLocationRelationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAreaBusiness;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAreaBusinessBusinessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Places;
use \OpenAPI\OpenAPI\Models\Shared\PlaceInfo;
use \OpenAPI\OpenAPI\Models\Shared\ServiceItem;
use \OpenAPI\OpenAPI\Models\Shared\FreeFormServiceItem;
use \OpenAPI\OpenAPI\Models\Shared\Label;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\StructuredServiceItem;
use \OpenAPI\OpenAPI\Models\Shared\SpecialHours;
use \OpenAPI\OpenAPI\Models\Shared\SpecialHourPeriod;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinessinformationAccountsLocationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->locationInput = new LocationInput();
    $request->locationInput->adWordsLocationExtensions = new AdWordsLocationExtensions();
    $request->locationInput->adWordsLocationExtensions->adPhone = 'provident';
    $request->locationInput->categories = new CategoriesInput();
    $request->locationInput->categories->additionalCategories = [
        new CategoryInput(),
        new CategoryInput(),
        new CategoryInput(),
    ];
    $request->locationInput->categories->primaryCategory = new CategoryInput();
    $request->locationInput->categories->primaryCategory->name = 'Stuart Stiedemann';
    $request->locationInput->labels = [
        'error',
        'deserunt',
    ];
    $request->locationInput->languageCode = 'suscipit';
    $request->locationInput->latlng = new LatLng();
    $request->locationInput->latlng->latitude = 4375.87;
    $request->locationInput->latlng->longitude = 2975.34;
    $request->locationInput->moreHours = [
        new MoreHours(),
        new MoreHours(),
        new MoreHours(),
        new MoreHours(),
    ];
    $request->locationInput->name = 'Lucia Goldner';
    $request->locationInput->openInfo = new OpenInfoInput();
    $request->locationInput->openInfo->openingDate = new Date();
    $request->locationInput->openInfo->openingDate->day = 791725;
    $request->locationInput->openInfo->openingDate->month = 812169;
    $request->locationInput->openInfo->openingDate->year = 528895;
    $request->locationInput->openInfo->status = OpenInfoStatusEnum::OPEN;
    $request->locationInput->phoneNumbers = new PhoneNumbers();
    $request->locationInput->phoneNumbers->additionalPhones = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->locationInput->phoneNumbers->primaryPhone = 'ab';
    $request->locationInput->profile = new Profile();
    $request->locationInput->profile->description = 'quis';
    $request->locationInput->regularHours = new BusinessHours();
    $request->locationInput->regularHours->periods = [
        new TimePeriod(),
    ];
    $request->locationInput->relationshipData = new RelationshipData();
    $request->locationInput->relationshipData->childrenLocations = [
        new RelevantLocation(),
        new RelevantLocation(),
        new RelevantLocation(),
    ];
    $request->locationInput->relationshipData->parentChain = 'perferendis';
    $request->locationInput->relationshipData->parentLocation = new RelevantLocation();
    $request->locationInput->relationshipData->parentLocation->placeId = 'ipsam';
    $request->locationInput->relationshipData->parentLocation->relationType = RelevantLocationRelationTypeEnum::INDEPENDENT_ESTABLISHMENT_IN;
    $request->locationInput->serviceArea = new ServiceAreaBusiness();
    $request->locationInput->serviceArea->businessType = ServiceAreaBusinessBusinessTypeEnum::CUSTOMER_AND_BUSINESS_LOCATION;
    $request->locationInput->serviceArea->places = new Places();
    $request->locationInput->serviceArea->places->placeInfos = [
        new PlaceInfo(),
        new PlaceInfo(),
        new PlaceInfo(),
        new PlaceInfo(),
    ];
    $request->locationInput->serviceArea->regionCode = 'odit';
    $request->locationInput->serviceItems = [
        new ServiceItem(),
        new ServiceItem(),
        new ServiceItem(),
        new ServiceItem(),
    ];
    $request->locationInput->specialHours = new SpecialHours();
    $request->locationInput->specialHours->specialHourPeriods = [
        new SpecialHourPeriod(),
        new SpecialHourPeriod(),
        new SpecialHourPeriod(),
        new SpecialHourPeriod(),
    ];
    $request->locationInput->storeCode = 'maiores';
    $request->locationInput->storefrontAddress = new PostalAddress();
    $request->locationInput->storefrontAddress->addressLines = [
        'quod',
        'quod',
    ];
    $request->locationInput->storefrontAddress->administrativeArea = 'esse';
    $request->locationInput->storefrontAddress->languageCode = 'totam';
    $request->locationInput->storefrontAddress->locality = 'porro';
    $request->locationInput->storefrontAddress->organization = 'dolorum';
    $request->locationInput->storefrontAddress->postalCode = '76515';
    $request->locationInput->storefrontAddress->recipients = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->locationInput->storefrontAddress->regionCode = 'molestiae';
    $request->locationInput->storefrontAddress->revision = 264555;
    $request->locationInput->storefrontAddress->sortingCode = 'qui';
    $request->locationInput->storefrontAddress->sublocality = 'impedit';
    $request->locationInput->title = 'Miss';
    $request->locationInput->websiteUri = 'esse';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->key = 'ad';
    $request->oauthToken = 'natus';
    $request->parent = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->requestId = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';
    $request->validateOnly = false;

    $response = $sdk->accounts->mybusinessbusinessinformationAccountsLocationsCreate($request);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->