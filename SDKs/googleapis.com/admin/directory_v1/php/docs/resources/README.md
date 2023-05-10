# resources

### Available Operations

* [directoryResourcesBuildingsDelete](#directoryresourcesbuildingsdelete) - Deletes a building.
* [directoryResourcesBuildingsGet](#directoryresourcesbuildingsget) - Retrieves a building.
* [directoryResourcesBuildingsInsert](#directoryresourcesbuildingsinsert) - Inserts a building.
* [directoryResourcesBuildingsList](#directoryresourcesbuildingslist) - Retrieves a list of buildings for an account.
* [directoryResourcesBuildingsPatch](#directoryresourcesbuildingspatch) - Patches a building.
* [directoryResourcesBuildingsUpdate](#directoryresourcesbuildingsupdate) - Updates a building.
* [directoryResourcesCalendarsDelete](#directoryresourcescalendarsdelete) - Deletes a calendar resource.
* [directoryResourcesCalendarsGet](#directoryresourcescalendarsget) - Retrieves a calendar resource.
* [directoryResourcesCalendarsInsert](#directoryresourcescalendarsinsert) - Inserts a calendar resource.
* [directoryResourcesCalendarsList](#directoryresourcescalendarslist) - Retrieves a list of calendar resources for an account.
* [directoryResourcesCalendarsPatch](#directoryresourcescalendarspatch) - Patches a calendar resource.
* [directoryResourcesCalendarsUpdate](#directoryresourcescalendarsupdate) - Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
* [directoryResourcesFeaturesDelete](#directoryresourcesfeaturesdelete) - Deletes a feature.
* [directoryResourcesFeaturesGet](#directoryresourcesfeaturesget) - Retrieves a feature.
* [directoryResourcesFeaturesInsert](#directoryresourcesfeaturesinsert) - Inserts a feature.
* [directoryResourcesFeaturesList](#directoryresourcesfeatureslist) - Retrieves a list of features for an account.
* [directoryResourcesFeaturesPatch](#directoryresourcesfeaturespatch) - Patches a feature.
* [directoryResourcesFeaturesRename](#directoryresourcesfeaturesrename) - Renames a feature.
* [directoryResourcesFeaturesUpdate](#directoryresourcesfeaturesupdate) - Updates a feature.

## directoryResourcesBuildingsDelete

Deletes a building.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesBuildingsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->buildingId = 'vel';
    $request->callback = 'magnam';
    $request->customer = 'quibusdam';
    $request->fields = 'inventore';
    $request->key = 'facere';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'quia';

    $requestSecurity = new DirectoryResourcesBuildingsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesBuildingsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesBuildingsGet

Retrieves a building.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesBuildingsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::JSON;
    $request->buildingId = 'illo';
    $request->callback = 'accusantium';
    $request->customer = 'vel';
    $request->fields = 'ea';
    $request->key = 'beatae';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new DirectoryResourcesBuildingsGetSecurity();
    $requestSecurity->option1 = new DirectoryResourcesBuildingsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesBuildingsGet($request, $requestSecurity);

    if ($response->building !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesBuildingsInsert

Inserts a building.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Building;
use \OpenAPI\OpenAPI\Models\Shared\BuildingAddress;
use \OpenAPI\OpenAPI\Models\Shared\BuildingCoordinates;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsInsertCoordinatesSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesBuildingsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->building = new Building();
    $request->building->address = new BuildingAddress();
    $request->building->address->addressLines = [
        'earum',
        'dicta',
        'impedit',
    ];
    $request->building->address->administrativeArea = 'voluptatibus';
    $request->building->address->languageCode = 'iste';
    $request->building->address->locality = 'itaque';
    $request->building->address->postalCode = '39262';
    $request->building->address->regionCode = 'dolor';
    $request->building->address->sublocality = 'iusto';
    $request->building->buildingId = 'sit';
    $request->building->buildingName = 'doloremque';
    $request->building->coordinates = new BuildingCoordinates();
    $request->building->coordinates->latitude = 74.68;
    $request->building->coordinates->longitude = 6397.05;
    $request->building->description = 'recusandae';
    $request->building->etags = 'ea';
    $request->building->floorNames = [
        'voluptas',
        'facilis',
        'placeat',
    ];
    $request->building->kind = 'perspiciatis';
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'a';
    $request->coordinatesSource = DirectoryResourcesBuildingsInsertCoordinatesSourceEnum::RESOLVED_FROM_ADDRESS;
    $request->customer = 'ullam';
    $request->fields = 'unde';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new DirectoryResourcesBuildingsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesBuildingsInsert($request, $requestSecurity);

    if ($response->building !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesBuildingsList

Retrieves a list of buildings for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesBuildingsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->customer = 'veritatis';
    $request->fields = 'vero';
    $request->key = 'consectetur';
    $request->maxResults = 112427;
    $request->oauthToken = 'inventore';
    $request->pageToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new DirectoryResourcesBuildingsListSecurity();
    $requestSecurity->option1 = new DirectoryResourcesBuildingsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesBuildingsList($request, $requestSecurity);

    if ($response->buildings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesBuildingsPatch

Patches a building.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Building;
use \OpenAPI\OpenAPI\Models\Shared\BuildingAddress;
use \OpenAPI\OpenAPI\Models\Shared\BuildingCoordinates;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsPatchCoordinatesSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesBuildingsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->building = new Building();
    $request->building->address = new BuildingAddress();
    $request->building->address->addressLines = [
        'soluta',
        'libero',
    ];
    $request->building->address->administrativeArea = 'rem';
    $request->building->address->languageCode = 'dolorum';
    $request->building->address->locality = 'odio';
    $request->building->address->postalCode = '01400';
    $request->building->address->regionCode = 'modi';
    $request->building->address->sublocality = 'neque';
    $request->building->buildingId = 'exercitationem';
    $request->building->buildingName = 'itaque';
    $request->building->coordinates = new BuildingCoordinates();
    $request->building->coordinates->latitude = 882.48;
    $request->building->coordinates->longitude = 2153.98;
    $request->building->description = 'unde';
    $request->building->etags = 'nulla';
    $request->building->floorNames = [
        'maxime',
        'quia',
        'quia',
    ];
    $request->building->kind = 'nostrum';
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->buildingId = 'dicta';
    $request->callback = 'id';
    $request->coordinatesSource = DirectoryResourcesBuildingsPatchCoordinatesSourceEnum::SOURCE_UNSPECIFIED;
    $request->customer = 'fugiat';
    $request->fields = 'officia';
    $request->key = 'quos';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new DirectoryResourcesBuildingsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesBuildingsPatch($request, $requestSecurity);

    if ($response->building !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesBuildingsUpdate

Updates a building.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Building;
use \OpenAPI\OpenAPI\Models\Shared\BuildingAddress;
use \OpenAPI\OpenAPI\Models\Shared\BuildingCoordinates;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesBuildingsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesBuildingsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->building = new Building();
    $request->building->address = new BuildingAddress();
    $request->building->address->addressLines = [
        'aperiam',
    ];
    $request->building->address->administrativeArea = 'totam';
    $request->building->address->languageCode = 'dolore';
    $request->building->address->locality = 'eligendi';
    $request->building->address->postalCode = '04418-1685';
    $request->building->address->regionCode = 'molestiae';
    $request->building->address->sublocality = 'provident';
    $request->building->buildingId = 'accusamus';
    $request->building->buildingName = 'necessitatibus';
    $request->building->coordinates = new BuildingCoordinates();
    $request->building->coordinates->latitude = 7332.89;
    $request->building->coordinates->longitude = 5750.78;
    $request->building->description = 'ea';
    $request->building->etags = 'autem';
    $request->building->floorNames = [
        'rerum',
        'laudantium',
    ];
    $request->building->kind = 'corporis';
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::PROTO;
    $request->buildingId = 'cum';
    $request->callback = 'at';
    $request->coordinatesSource = DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum::CLIENT_SPECIFIED;
    $request->customer = 'quia';
    $request->fields = 'quidem';
    $request->key = 'fuga';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'officiis';

    $requestSecurity = new DirectoryResourcesBuildingsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesBuildingsUpdate($request, $requestSecurity);

    if ($response->building !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesCalendarsDelete

Deletes a calendar resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesCalendarsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->calendarResourceId = 'praesentium';
    $request->callback = 'odit';
    $request->customer = 'explicabo';
    $request->fields = 'corporis';
    $request->key = 'error';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new DirectoryResourcesCalendarsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesCalendarsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesCalendarsGet

Retrieves a calendar resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesCalendarsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->calendarResourceId = 'beatae';
    $request->callback = 'unde';
    $request->customer = 'molestiae';
    $request->fields = 'delectus';
    $request->key = 'cupiditate';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'nesciunt';

    $requestSecurity = new DirectoryResourcesCalendarsGetSecurity();
    $requestSecurity->option1 = new DirectoryResourcesCalendarsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesCalendarsGet($request, $requestSecurity);

    if ($response->calendarResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesCalendarsInsert

Inserts a calendar resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CalendarResource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesCalendarsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->calendarResource = new CalendarResource();
    $request->calendarResource->buildingId = 'officia';
    $request->calendarResource->capacity = 491892;
    $request->calendarResource->etags = 'optio';
    $request->calendarResource->featureInstances = 'necessitatibus';
    $request->calendarResource->floorName = 'corporis';
    $request->calendarResource->floorSection = 'qui';
    $request->calendarResource->generatedResourceName = 'expedita';
    $request->calendarResource->kind = 'voluptatum';
    $request->calendarResource->resourceCategory = 'cupiditate';
    $request->calendarResource->resourceDescription = 'minima';
    $request->calendarResource->resourceEmail = 'placeat';
    $request->calendarResource->resourceId = 'enim';
    $request->calendarResource->resourceName = 'neque';
    $request->calendarResource->resourceType = 'in';
    $request->calendarResource->userVisibleDescription = 'minus';
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->customer = 'magnam';
    $request->fields = 'voluptates';
    $request->key = 'maiores';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'ratione';

    $requestSecurity = new DirectoryResourcesCalendarsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesCalendarsInsert($request, $requestSecurity);

    if ($response->calendarResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesCalendarsList

Retrieves a list of calendar resources for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesCalendarsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptas';
    $request->customer = 'quo';
    $request->fields = 'velit';
    $request->key = 'minus';
    $request->maxResults = 684553;
    $request->oauthToken = 'nostrum';
    $request->orderBy = 'est';
    $request->pageToken = 'impedit';
    $request->prettyPrint = false;
    $request->query = 'delectus';
    $request->quotaUser = 'tempore';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new DirectoryResourcesCalendarsListSecurity();
    $requestSecurity->option1 = new DirectoryResourcesCalendarsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesCalendarsList($request, $requestSecurity);

    if ($response->calendarResources !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesCalendarsPatch

Patches a calendar resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CalendarResource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesCalendarsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->calendarResource = new CalendarResource();
    $request->calendarResource->buildingId = 'pariatur';
    $request->calendarResource->capacity = 362888;
    $request->calendarResource->etags = 'reprehenderit';
    $request->calendarResource->featureInstances = 'aperiam';
    $request->calendarResource->floorName = 'odio';
    $request->calendarResource->floorSection = 'minima';
    $request->calendarResource->generatedResourceName = 'in';
    $request->calendarResource->kind = 'ducimus';
    $request->calendarResource->resourceCategory = 'excepturi';
    $request->calendarResource->resourceDescription = 'dolores';
    $request->calendarResource->resourceEmail = 'error';
    $request->calendarResource->resourceId = 'veritatis';
    $request->calendarResource->resourceName = 'ducimus';
    $request->calendarResource->resourceType = 'voluptate';
    $request->calendarResource->userVisibleDescription = 'pariatur';
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::MEDIA;
    $request->calendarResourceId = 'optio';
    $request->callback = 'ex';
    $request->customer = 'quaerat';
    $request->fields = 'commodi';
    $request->key = 'officiis';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new DirectoryResourcesCalendarsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesCalendarsPatch($request, $requestSecurity);

    if ($response->calendarResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesCalendarsUpdate

Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CalendarResource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesCalendarsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesCalendarsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->calendarResource = new CalendarResource();
    $request->calendarResource->buildingId = 'modi';
    $request->calendarResource->capacity = 59383;
    $request->calendarResource->etags = 'sint';
    $request->calendarResource->featureInstances = 'vero';
    $request->calendarResource->floorName = 'sequi';
    $request->calendarResource->floorSection = 'repudiandae';
    $request->calendarResource->generatedResourceName = 'cum';
    $request->calendarResource->kind = 'dicta';
    $request->calendarResource->resourceCategory = 'earum';
    $request->calendarResource->resourceDescription = 'veniam';
    $request->calendarResource->resourceEmail = 'animi';
    $request->calendarResource->resourceId = 'dolores';
    $request->calendarResource->resourceName = 'nam';
    $request->calendarResource->resourceType = 'dicta';
    $request->calendarResource->userVisibleDescription = 'consequuntur';
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->calendarResourceId = 'ipsa';
    $request->callback = 'ducimus';
    $request->customer = 'maiores';
    $request->fields = 'veritatis';
    $request->key = 'quasi';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new DirectoryResourcesCalendarsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesCalendarsUpdate($request, $requestSecurity);

    if ($response->calendarResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesFeaturesDelete

Deletes a feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesFeaturesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nostrum';
    $request->customer = 'doloribus';
    $request->featureKey = 'eligendi';
    $request->fields = 'sint';
    $request->key = 'enim';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new DirectoryResourcesFeaturesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesFeaturesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesFeaturesGet

Retrieves a feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesFeaturesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->customer = 'architecto';
    $request->featureKey = 'quos';
    $request->fields = 'iste';
    $request->key = 'assumenda';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'doloremque';

    $requestSecurity = new DirectoryResourcesFeaturesGetSecurity();
    $requestSecurity->option1 = new DirectoryResourcesFeaturesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesFeaturesGet($request, $requestSecurity);

    if ($response->feature !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesFeaturesInsert

Inserts a feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Feature;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesFeaturesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->feature = new Feature();
    $request->feature->etags = 'impedit';
    $request->feature->kind = 'cum';
    $request->feature->name = 'Sylvia Turner II';
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->customer = 'cupiditate';
    $request->fields = 'molestiae';
    $request->key = 'eligendi';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'itaque';

    $requestSecurity = new DirectoryResourcesFeaturesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesFeaturesInsert($request, $requestSecurity);

    if ($response->feature !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesFeaturesList

Retrieves a list of features for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesFeaturesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->customer = 'facere';
    $request->fields = 'laudantium';
    $request->key = 'odit';
    $request->maxResults = 863477;
    $request->oauthToken = 'amet';
    $request->pageToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new DirectoryResourcesFeaturesListSecurity();
    $requestSecurity->option1 = new DirectoryResourcesFeaturesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesFeaturesList($request, $requestSecurity);

    if ($response->features !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesFeaturesPatch

Patches a feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Feature;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesFeaturesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->feature = new Feature();
    $request->feature->etags = 'nisi';
    $request->feature->kind = 'voluptatibus';
    $request->feature->name = 'Mattie Raynor';
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'minus';
    $request->customer = 'facere';
    $request->featureKey = 'facilis';
    $request->fields = 'ipsum';
    $request->key = 'ad';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new DirectoryResourcesFeaturesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesFeaturesPatch($request, $requestSecurity);

    if ($response->feature !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesFeaturesRename

Renames a feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesRenameRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureRename;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesRenameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesFeaturesRenameRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->featureRename = new FeatureRename();
    $request->featureRename->newName = 'rerum';
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nostrum';
    $request->customer = 'neque';
    $request->fields = 'iusto';
    $request->key = 'est';
    $request->oauthToken = 'rem';
    $request->oldName = 'eligendi';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'officiis';

    $requestSecurity = new DirectoryResourcesFeaturesRenameSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesFeaturesRename($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryResourcesFeaturesUpdate

Updates a feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Feature;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryResourcesFeaturesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryResourcesFeaturesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->feature = new Feature();
    $request->feature->etags = 'dolor';
    $request->feature->kind = 'dicta';
    $request->feature->name = 'Sherman Brown';
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->customer = 'enim';
    $request->featureKey = 'delectus';
    $request->fields = 'iusto';
    $request->key = 'dignissimos';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'illo';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'incidunt';

    $requestSecurity = new DirectoryResourcesFeaturesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->directoryResourcesFeaturesUpdate($request, $requestSecurity);

    if ($response->feature !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
