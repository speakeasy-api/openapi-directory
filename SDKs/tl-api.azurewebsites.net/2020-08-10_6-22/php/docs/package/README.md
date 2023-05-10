# package

### Available Operations

* [packageDelete](#packagedelete) - Delete existing package
            
* [packageGet](#packageget) - Get package details by packageId
            
* [packagePost](#packagepost) - Insert new package into the system
            
* [packagePut](#packageput) - Update existing package by its ID
            
* [packageSearch](#packagesearch) - Search packages
            
* [packageUpdateStatus](#packageupdatestatus) - Status update of existing package 

## packageDelete

Delete existing package
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PackageDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageDeleteRequest();
    $request->packageId = 325047;

    $response = $sdk->package->packageDelete($request);

    if ($response->defaultResponseDTOOfBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## packageGet

Get package details by packageId
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PackageGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageGetRequest();
    $request->packageId = 570197;

    $response = $sdk->package->packageGet($request);

    if ($response->defaultResponseDTOOfPackageDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## packagePost

Insert new package into the system
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PackageDTO;
use \OpenAPI\OpenAPI\Models\Shared\PackageItemDTO;
use \OpenAPI\OpenAPI\Models\Shared\GymDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageDTO();
    $request->addOns = [
        new PackageItemDTO(),
    ];
    $request->addonFee = 4386.01;
    $request->applyForAllGyms = false;
    $request->availableGyms = [
        new GymDTO(),
        new GymDTO(),
        new GymDTO(),
    ];
    $request->bindingPeriod = 988374;
    $request->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-11T06:15:44.019Z');
    $request->createdUser = 'mollitia';
    $request->description = 'dolorem';
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-05T05:51:25.673Z');
    $request->expireInMonths = 995300;
    $request->features = 'mollitia';
    $request->freeMonths = 581850;
    $request->instructionsToGymUsers = 'numquam';
    $request->instructionsToWebUsers = 'commodi';
    $request->isActive = false;
    $request->isAtg = false;
    $request->isAutoRenew = false;
    $request->isFirstMonthFree = false;
    $request->isRegistrationFee = false;
    $request->isRestAmount = false;
    $request->isShownInMobile = false;
    $request->isSponsorPackage = false;
    $request->maximumGiveAwayRestAmount = 4663.11;
    $request->memberCanAddAddOns = false;
    $request->memberCanLeaveWithinFreePeriod = false;
    $request->memberCanRemoveAddOns = false;
    $request->modifiedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-03T18:49:53.900Z');
    $request->modifiedUser = 'error';
    $request->monthlyFee = 1589.69;
    $request->nextPackageNumber = 338007;
    $request->numberOfInstallments = 110375;
    $request->numberOfVisits = 674752;
    $request->packageId = 656330;
    $request->packageName = 'enim';
    $request->packageNumber = 'odit';
    $request->packageType = 'quo';
    $request->perVisitPrice = 1965.82;
    $request->registrationFee = 9495.72;
    $request->serviceFee = 3687.25;
    $request->shownInWeb = false;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-11T16:11:54.761Z');
    $request->tags = 'aut';
    $request->totalPrice = 971.01;

    $response = $sdk->package->packagePost($request);

    if ($response->defaultResponseDTOOfStatusDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## packagePut

Update existing package by its ID
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PackageDTO;
use \OpenAPI\OpenAPI\Models\Shared\PackageItemDTO;
use \OpenAPI\OpenAPI\Models\Shared\GymDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageDTO();
    $request->addOns = [
        new PackageItemDTO(),
        new PackageItemDTO(),
        new PackageItemDTO(),
    ];
    $request->addonFee = 8379.45;
    $request->applyForAllGyms = false;
    $request->availableGyms = [
        new GymDTO(),
        new GymDTO(),
        new GymDTO(),
    ];
    $request->bindingPeriod = 96098;
    $request->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-27T18:38:42.890Z');
    $request->createdUser = 'vero';
    $request->description = 'nihil';
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-17T23:08:44.457Z');
    $request->expireInMonths = 55714;
    $request->features = 'omnis';
    $request->freeMonths = 451159;
    $request->instructionsToGymUsers = 'cum';
    $request->instructionsToWebUsers = 'perferendis';
    $request->isActive = false;
    $request->isAtg = false;
    $request->isAutoRenew = false;
    $request->isFirstMonthFree = false;
    $request->isRegistrationFee = false;
    $request->isRestAmount = false;
    $request->isShownInMobile = false;
    $request->isSponsorPackage = false;
    $request->maximumGiveAwayRestAmount = 391.87;
    $request->memberCanAddAddOns = false;
    $request->memberCanLeaveWithinFreePeriod = false;
    $request->memberCanRemoveAddOns = false;
    $request->modifiedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-19T18:36:39.009Z');
    $request->modifiedUser = 'maiores';
    $request->monthlyFee = 1201.96;
    $request->nextPackageNumber = 359444;
    $request->numberOfInstallments = 296140;
    $request->numberOfVisits = 480894;
    $request->packageId = 118727;
    $request->packageName = 'harum';
    $request->packageNumber = 'enim';
    $request->packageType = 'accusamus';
    $request->perVisitPrice = 4142.63;
    $request->registrationFee = 9182.36;
    $request->serviceFee = 641.47;
    $request->shownInWeb = false;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-23T05:56:38.936Z');
    $request->tags = 'molestias';
    $request->totalPrice = 5666.02;

    $response = $sdk->package->packagePut($request);

    if ($response->defaultResponseDTOOfStatusDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## packageSearch

Search packages
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PackageSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageSearchRequest();
    $request->activeStatus = 865103;
    $request->categoryId = 265389;
    $request->endPrice = 5089.69;
    $request->gymId = 523248;
    $request->limit = 916723;
    $request->offset = 93940;
    $request->orderBy = 'repudiandae';
    $request->requestSource = 575947;
    $request->searchText = 'veritatis';
    $request->startpPrice = 9292.97;
    $request->type = 'incidunt';

    $response = $sdk->package->packageSearch($request);

    if ($response->defaultResponseDTOOfPackageSearchDTOS !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## packageUpdateStatus

Status update of existing package 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PackageUpdateStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageUpdateStatusRequest();
    $request->packageId = 318569;
    $request->status = 9356;
    $request->userName = 'Marc64';

    $response = $sdk->package->packageUpdateStatus($request);

    if ($response->defaultResponseDTOOfBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
