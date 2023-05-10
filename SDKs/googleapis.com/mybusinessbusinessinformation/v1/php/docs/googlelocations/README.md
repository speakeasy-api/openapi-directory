# googleLocations

### Available Operations

* [mybusinessbusinessinformationGoogleLocationsSearch](#mybusinessbusinessinformationgooglelocationssearch) - Search all of the possible locations that are a match to the specified request.

## mybusinessbusinessinformationGoogleLocationsSearch

Search all of the possible locations that are a match to the specified request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationGoogleLocationsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchGoogleLocationsRequestInput;
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
    $request = new MybusinessbusinessinformationGoogleLocationsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->searchGoogleLocationsRequestInput = new SearchGoogleLocationsRequestInput();
    $request->searchGoogleLocationsRequestInput->location = new LocationInput();
    $request->searchGoogleLocationsRequestInput->location->adWordsLocationExtensions = new AdWordsLocationExtensions();
    $request->searchGoogleLocationsRequestInput->location->adWordsLocationExtensions->adPhone = 'ea';
    $request->searchGoogleLocationsRequestInput->location->categories = new CategoriesInput();
    $request->searchGoogleLocationsRequestInput->location->categories->additionalCategories = [
        new CategoryInput(),
        new CategoryInput(),
    ];
    $request->searchGoogleLocationsRequestInput->location->categories->primaryCategory = new CategoryInput();
    $request->searchGoogleLocationsRequestInput->location->categories->primaryCategory->name = 'Tomas Friesen';
    $request->searchGoogleLocationsRequestInput->location->labels = [
        'delectus',
        'quidem',
        'provident',
        'nam',
    ];
    $request->searchGoogleLocationsRequestInput->location->languageCode = 'id';
    $request->searchGoogleLocationsRequestInput->location->latlng = new LatLng();
    $request->searchGoogleLocationsRequestInput->location->latlng->latitude = 5013.24;
    $request->searchGoogleLocationsRequestInput->location->latlng->longitude = 5332.06;
    $request->searchGoogleLocationsRequestInput->location->moreHours = [
        new MoreHours(),
        new MoreHours(),
        new MoreHours(),
        new MoreHours(),
    ];
    $request->searchGoogleLocationsRequestInput->location->name = 'Sandy Huels';
    $request->searchGoogleLocationsRequestInput->location->openInfo = new OpenInfoInput();
    $request->searchGoogleLocationsRequestInput->location->openInfo->openingDate = new Date();
    $request->searchGoogleLocationsRequestInput->location->openInfo->openingDate->day = 606393;
    $request->searchGoogleLocationsRequestInput->location->openInfo->openingDate->month = 474867;
    $request->searchGoogleLocationsRequestInput->location->openInfo->openingDate->year = 19193;
    $request->searchGoogleLocationsRequestInput->location->openInfo->status = OpenInfoStatusEnum::OPEN;
    $request->searchGoogleLocationsRequestInput->location->phoneNumbers = new PhoneNumbers();
    $request->searchGoogleLocationsRequestInput->location->phoneNumbers->additionalPhones = [
        'distinctio',
        'id',
    ];
    $request->searchGoogleLocationsRequestInput->location->phoneNumbers->primaryPhone = 'labore';
    $request->searchGoogleLocationsRequestInput->location->profile = new Profile();
    $request->searchGoogleLocationsRequestInput->location->profile->description = 'labore';
    $request->searchGoogleLocationsRequestInput->location->regularHours = new BusinessHours();
    $request->searchGoogleLocationsRequestInput->location->regularHours->periods = [
        new TimePeriod(),
        new TimePeriod(),
    ];
    $request->searchGoogleLocationsRequestInput->location->relationshipData = new RelationshipData();
    $request->searchGoogleLocationsRequestInput->location->relationshipData->childrenLocations = [
        new RelevantLocation(),
        new RelevantLocation(),
        new RelevantLocation(),
    ];
    $request->searchGoogleLocationsRequestInput->location->relationshipData->parentChain = 'nobis';
    $request->searchGoogleLocationsRequestInput->location->relationshipData->parentLocation = new RelevantLocation();
    $request->searchGoogleLocationsRequestInput->location->relationshipData->parentLocation->placeId = 'eum';
    $request->searchGoogleLocationsRequestInput->location->relationshipData->parentLocation->relationType = RelevantLocationRelationTypeEnum::INDEPENDENT_ESTABLISHMENT_IN;
    $request->searchGoogleLocationsRequestInput->location->serviceArea = new ServiceAreaBusiness();
    $request->searchGoogleLocationsRequestInput->location->serviceArea->businessType = ServiceAreaBusinessBusinessTypeEnum::BUSINESS_TYPE_UNSPECIFIED;
    $request->searchGoogleLocationsRequestInput->location->serviceArea->places = new Places();
    $request->searchGoogleLocationsRequestInput->location->serviceArea->places->placeInfos = [
        new PlaceInfo(),
    ];
    $request->searchGoogleLocationsRequestInput->location->serviceArea->regionCode = 'magnam';
    $request->searchGoogleLocationsRequestInput->location->serviceItems = [
        new ServiceItem(),
    ];
    $request->searchGoogleLocationsRequestInput->location->specialHours = new SpecialHours();
    $request->searchGoogleLocationsRequestInput->location->specialHours->specialHourPeriods = [
        new SpecialHourPeriod(),
        new SpecialHourPeriod(),
        new SpecialHourPeriod(),
    ];
    $request->searchGoogleLocationsRequestInput->location->storeCode = 'ullam';
    $request->searchGoogleLocationsRequestInput->location->storefrontAddress = new PostalAddress();
    $request->searchGoogleLocationsRequestInput->location->storefrontAddress->addressLines = [
        'quos',
        'sint',
        'accusantium',
    ];
    $request->searchGoogleLocationsRequestInput->location->storefrontAddress->administrativeArea = 'mollitia';
    $request->searchGoogleLocationsRequestInput->location->storefrontAddress->languageCode = 'reiciendis';
    $request->searchGoogleLocationsRequestInput->location->storefrontAddress->locality = 'mollitia';
    $request->searchGoogleLocationsRequestInput->location->storefrontAddress->organization = 'ad';
    $request->searchGoogleLocationsRequestInput->location->storefrontAddress->postalCode = '28130';
    $request->searchGoogleLocationsRequestInput->location->storefrontAddress->recipients = [
        'doloribus',
        'debitis',
    ];
    $request->searchGoogleLocationsRequestInput->location->storefrontAddress->regionCode = 'eius';
    $request->searchGoogleLocationsRequestInput->location->storefrontAddress->revision = 806194;
    $request->searchGoogleLocationsRequestInput->location->storefrontAddress->sortingCode = 'deleniti';
    $request->searchGoogleLocationsRequestInput->location->storefrontAddress->sublocality = 'facilis';
    $request->searchGoogleLocationsRequestInput->location->title = 'Ms.';
    $request->searchGoogleLocationsRequestInput->location->websiteUri = 'architecto';
    $request->searchGoogleLocationsRequestInput->pageSize = 99569;
    $request->searchGoogleLocationsRequestInput->query = 'repudiandae';
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'repellat';
    $request->key = 'quibusdam';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'accusantium';

    $response = $sdk->googleLocations->mybusinessbusinessinformationGoogleLocationsSearch($request);

    if ($response->searchGoogleLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
