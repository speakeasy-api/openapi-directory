# accounts

### Available Operations

* [mybusinessbusinessinformationAccountsLocationsCreate](#mybusinessbusinessinformationaccountslocationscreate) - Creates a new Location that will be owned by the logged in user.
* [mybusinessbusinessinformationAccountsLocationsList](#mybusinessbusinessinformationaccountslocationslist) - Lists the locations for the specified account.

## mybusinessbusinessinformationAccountsLocationsCreate

Creates a new Location that will be owned by the logged in user.

### Example Usage

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
    $request->locationInput->adWordsLocationExtensions->adPhone = 'saepe';
    $request->locationInput->categories = new CategoriesInput();
    $request->locationInput->categories->additionalCategories = [
        new CategoryInput(),
        new CategoryInput(),
        new CategoryInput(),
    ];
    $request->locationInput->categories->primaryCategory = new CategoryInput();
    $request->locationInput->categories->primaryCategory->name = 'Stacy Moore';
    $request->locationInput->labels = [
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->locationInput->languageCode = 'est';
    $request->locationInput->latlng = new LatLng();
    $request->locationInput->latlng->latitude = 6531.4;
    $request->locationInput->latlng->longitude = 6706.38;
    $request->locationInput->moreHours = [
        new MoreHours(),
    ];
    $request->locationInput->name = 'Stacy Champlin';
    $request->locationInput->openInfo = new OpenInfoInput();
    $request->locationInput->openInfo->openingDate = new Date();
    $request->locationInput->openInfo->openingDate->day = 607831;
    $request->locationInput->openInfo->openingDate->month = 363711;
    $request->locationInput->openInfo->openingDate->year = 325047;
    $request->locationInput->openInfo->status = OpenInfoStatusEnum::CLOSED_PERMANENTLY;
    $request->locationInput->phoneNumbers = new PhoneNumbers();
    $request->locationInput->phoneNumbers->additionalPhones = [
        'iure',
    ];
    $request->locationInput->phoneNumbers->primaryPhone = 'culpa';
    $request->locationInput->profile = new Profile();
    $request->locationInput->profile->description = 'doloribus';
    $request->locationInput->regularHours = new BusinessHours();
    $request->locationInput->regularHours->periods = [
        new TimePeriod(),
        new TimePeriod(),
        new TimePeriod(),
        new TimePeriod(),
    ];
    $request->locationInput->relationshipData = new RelationshipData();
    $request->locationInput->relationshipData->childrenLocations = [
        new RelevantLocation(),
    ];
    $request->locationInput->relationshipData->parentChain = 'mollitia';
    $request->locationInput->relationshipData->parentLocation = new RelevantLocation();
    $request->locationInput->relationshipData->parentLocation->placeId = 'dolorem';
    $request->locationInput->relationshipData->parentLocation->relationType = RelevantLocationRelationTypeEnum::DEPARTMENT_OF;
    $request->locationInput->serviceArea = new ServiceAreaBusiness();
    $request->locationInput->serviceArea->businessType = ServiceAreaBusinessBusinessTypeEnum::BUSINESS_TYPE_UNSPECIFIED;
    $request->locationInput->serviceArea->places = new Places();
    $request->locationInput->serviceArea->places->placeInfos = [
        new PlaceInfo(),
        new PlaceInfo(),
        new PlaceInfo(),
        new PlaceInfo(),
    ];
    $request->locationInput->serviceArea->regionCode = 'mollitia';
    $request->locationInput->serviceItems = [
        new ServiceItem(),
        new ServiceItem(),
        new ServiceItem(),
    ];
    $request->locationInput->specialHours = new SpecialHours();
    $request->locationInput->specialHours->specialHourPeriods = [
        new SpecialHourPeriod(),
        new SpecialHourPeriod(),
    ];
    $request->locationInput->storeCode = 'commodi';
    $request->locationInput->storefrontAddress = new PostalAddress();
    $request->locationInput->storefrontAddress->addressLines = [
        'molestiae',
        'velit',
    ];
    $request->locationInput->storefrontAddress->administrativeArea = 'error';
    $request->locationInput->storefrontAddress->languageCode = 'quia';
    $request->locationInput->storefrontAddress->locality = 'quis';
    $request->locationInput->storefrontAddress->organization = 'vitae';
    $request->locationInput->storefrontAddress->postalCode = '63171-9368';
    $request->locationInput->storefrontAddress->recipients = [
        'quasi',
    ];
    $request->locationInput->storefrontAddress->regionCode = 'error';
    $request->locationInput->storefrontAddress->revision = 837945;
    $request->locationInput->storefrontAddress->sortingCode = 'laborum';
    $request->locationInput->storefrontAddress->sublocality = 'quasi';
    $request->locationInput->title = 'Dr.';
    $request->locationInput->websiteUri = 'voluptatibus';
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->oauthToken = 'omnis';
    $request->parent = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->requestId = 'perferendis';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'reprehenderit';
    $request->validateOnly = false;

    $response = $sdk->accounts->mybusinessbusinessinformationAccountsLocationsCreate($request);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessbusinessinformationAccountsLocationsList

Lists the locations for the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationAccountsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinessinformationAccountsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'dolore';
    $request->filter = 'iusto';
    $request->key = 'dicta';
    $request->oauthToken = 'harum';
    $request->orderBy = 'enim';
    $request->pageSize = 880476;
    $request->pageToken = 'commodi';
    $request->parent = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->readMask = 'ipsum';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'molestias';

    $response = $sdk->accounts->mybusinessbusinessinformationAccountsLocationsList($request);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
