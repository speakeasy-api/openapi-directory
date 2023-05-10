# v1

### Available Operations

* [citiesGetv1V1CitiesGet](#citiesgetv1v1citiesget) - Provides a simple listing of cities within the platform
* [countriesGetV1CountriesCountryIdGet](#countriesgetv1countriescountryidget) - Countries Get
* [countriesGetv1V1CountriesGet](#countriesgetv1v1countriesget) - Countries Getv1
* [latestV1GetV1LatestLocationIdGet](#latestv1getv1latestlocationidget) - Latest V1 Get
* [latestV1GetV1LatestGet](#latestv1getv1latestget) - Latest V1 Get
* [locationsv1GetV1LocationsLocationIdGet](#locationsv1getv1locationslocationidget) - Locationsv1 Get
* [locationsv1GetV1LocationsGet](#locationsv1getv1locationsget) - Locationsv1 Get
* [measurementsGetV1V1MeasurementsGet](#measurementsgetv1v1measurementsget) - Measurements Get V1
* [parametersGetv1V1ParametersGet](#parametersgetv1v1parametersget) - Parameters Getv1
* [sourcesV1GetV1SourcesGet](#sourcesv1getv1sourcesget) - Sources V1 Get

## citiesGetv1V1CitiesGet

Provides a simple listing of cities within the platform

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CitiesGetv1V1CitiesGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CitiesGetv1V1CitiesGetOrderByCitiesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\CitiesGetv1V1CitiesGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CitiesGetv1V1CitiesGetRequest();
    $request->city = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->country = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->countryId = 'vel';
    $request->entity = 'error';
    $request->limit = 645894;
    $request->offset = 384382;
    $request->orderBy = CitiesGetv1V1CitiesGetOrderByCitiesOrderEnum::COUNTRY;
    $request->page = 297534;
    $request->sort = CitiesGetv1V1CitiesGetSortSortEnum::DESC;

    $response = $sdk->v1->citiesGetv1V1CitiesGet($request);

    if ($response->openAQCitiesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## countriesGetV1CountriesCountryIdGet

Countries Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CountriesGetV1CountriesCountryIdGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CountriesGetV1CountriesCountryIdGetOrderByCountriesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\CountriesGetV1CountriesCountryIdGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CountriesGetV1CountriesCountryIdGetRequest();
    $request->country = [
        'delectus',
    ];
    $request->countryId = 'tempora';
    $request->limit = 383441;
    $request->offset = 477665;
    $request->orderBy = CountriesGetV1CountriesCountryIdGetOrderByCountriesOrderEnum::LOCATIONS;
    $request->page = 812169;
    $request->sort = CountriesGetV1CountriesCountryIdGetSortSortEnum::DESC;

    $response = $sdk->v1->countriesGetV1CountriesCountryIdGet($request);

    if ($response->openAQCountriesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## countriesGetv1V1CountriesGet

Countries Getv1

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CountriesGetv1V1CountriesGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CountriesGetv1V1CountriesGetOrderByCountriesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\CountriesGetv1V1CountriesGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CountriesGetv1V1CountriesGetRequest();
    $request->country = [
        'excepturi',
        'nisi',
    ];
    $request->countryId = 'recusandae';
    $request->limit = 836079;
    $request->offset = 71036;
    $request->orderBy = CountriesGetv1V1CountriesGetOrderByCountriesOrderEnum::FIRST_UPDATED;
    $request->page = 87129;
    $request->sort = CountriesGetv1V1CountriesGetSortSortEnum::DESC;

    $response = $sdk->v1->countriesGetv1V1CountriesGet($request);

    if ($response->openAQCountriesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## latestV1GetV1LatestLocationIdGet

Latest V1 Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LatestV1GetV1LatestLocationIdGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\LatestV1GetV1LatestLocationIdGetOrderByLocationsOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SensorTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\LatestV1GetV1LatestLocationIdGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LatestV1GetV1LatestLocationIdGetRequest();
    $request->city = [
        'ipsam',
    ];
    $request->coordinates = 'repellendus';
    $request->country = [
        'quo',
        'odit',
        'at',
        'at',
    ];
    $request->countryId = 'maiores';
    $request->dumpRaw = false;
    $request->entity = EntityTypesEnum::COMMUNITY;
    $request->hasGeo = false;
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->limit = 799159;
    $request->location = [
        520478,
        'dolorum',
        720633,
        'occaecati',
    ];
    $request->locationId = 143353;
    $request->manufacturerName = [
        'hic',
        'optio',
        'totam',
    ];
    $request->modelName = [
        'commodi',
    ];
    $request->offset = 473600;
    $request->orderBy = LatestV1GetV1LatestLocationIdGetOrderByLocationsOrderEnum::LOCATION;
    $request->page = 186332;
    $request->parameter = [
        'esse',
        568434,
        18789,
        617636,
    ];
    $request->parameterId = 149675;
    $request->radius = 612096;
    $request->sensorType = SensorTypesEnum::REFERENCE_GRADE;
    $request->sort = LatestV1GetV1LatestLocationIdGetSortSortEnum::DESC;
    $request->sourceName = [
        'hic',
        'saepe',
    ];
    $request->unit = [
        'in',
        'corporis',
        'iste',
    ];

    $response = $sdk->v1->latestV1GetV1LatestLocationIdGet($request);

    if ($response->openAQResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## latestV1GetV1LatestGet

Latest V1 Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LatestV1GetV1LatestGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\LatestV1GetV1LatestGetOrderByLocationsOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SensorTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\LatestV1GetV1LatestGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LatestV1GetV1LatestGetRequest();
    $request->city = [
        'saepe',
        'quidem',
    ];
    $request->coordinates = 'architecto';
    $request->country = [
        'reiciendis',
    ];
    $request->countryId = 'est';
    $request->dumpRaw = false;
    $request->entity = EntityTypesEnum::COMMUNITY;
    $request->hasGeo = false;
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->limit = 670638;
    $request->location = [
        358152,
    ];
    $request->locationId = 128926;
    $request->manufacturerName = [
        'enim',
        'omnis',
        'nemo',
        'minima',
    ];
    $request->modelName = [
        'accusantium',
        'iure',
        'culpa',
    ];
    $request->offset = 988374;
    $request->orderBy = LatestV1GetV1LatestGetOrderByLocationsOrderEnum::RANDOM;
    $request->page = 102044;
    $request->parameter = [
        635059,
        995300,
        'occaecati',
    ];
    $request->parameterId = 253291;
    $request->radius = 414369;
    $request->sensorType = SensorTypesEnum::REFERENCE_GRADE;
    $request->sort = LatestV1GetV1LatestGetSortSortEnum::ASC;
    $request->sourceName = [
        'error',
    ];
    $request->unit = [
        'quis',
    ];

    $response = $sdk->v1->latestV1GetV1LatestGet($request);

    if ($response->openAQResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## locationsv1GetV1LocationsLocationIdGet

Locationsv1 Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Locationsv1GetV1LocationsLocationIdGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\Locationsv1GetV1LocationsLocationIdGetOrderByLocationsOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SensorTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\Locationsv1GetV1LocationsLocationIdGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Locationsv1GetV1LocationsLocationIdGetRequest();
    $request->city = [
        'laborum',
    ];
    $request->coordinates = 'animi';
    $request->country = [
        'odit',
        'quo',
    ];
    $request->countryId = 'sequi';
    $request->dumpRaw = false;
    $request->entity = EntityTypesEnum::RESEARCH;
    $request->hasGeo = false;
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->limit = 368725;
    $request->location = [
        'aut',
        622846,
        'laborum',
    ];
    $request->locationId = 96098;
    $request->manufacturerName = [
        'voluptatibus',
        'vero',
        'nihil',
        'praesentium',
    ];
    $request->modelName = [
        'ipsa',
        'omnis',
        'voluptate',
        'cum',
    ];
    $request->offset = 19987;
    $request->orderBy = Locationsv1GetV1LocationsLocationIdGetOrderByLocationsOrderEnum::CITY;
    $request->page = 441711;
    $request->parameter = [
        'dicta',
        296140,
    ];
    $request->parameterId = 480894;
    $request->radius = 118727;
    $request->sensorType = SensorTypesEnum::LOW_COST_SENSOR;
    $request->sort = Locationsv1GetV1LocationsLocationIdGetSortSortEnum::ASC;
    $request->sourceName = [
        'commodi',
        'repudiandae',
        'quae',
        'ipsum',
    ];
    $request->unit = [
        'molestias',
        'excepturi',
        'pariatur',
    ];

    $response = $sdk->v1->locationsv1GetV1LocationsLocationIdGet($request);

    if ($response->openAQResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## locationsv1GetV1LocationsGet

Locationsv1 Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Locationsv1GetV1LocationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\Locationsv1GetV1LocationsGetOrderByLocationsOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SensorTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\Locationsv1GetV1LocationsGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Locationsv1GetV1LocationsGetRequest();
    $request->city = [
        'praesentium',
        'rem',
    ];
    $request->coordinates = 'voluptates';
    $request->country = [
        'repudiandae',
    ];
    $request->countryId = 'sint';
    $request->dumpRaw = false;
    $request->entity = EntityTypesEnum::GOVERNMENT;
    $request->hasGeo = false;
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->limit = 929297;
    $request->location = [
        9356,
        'quibusdam',
    ];
    $request->locationId = 131797;
    $request->manufacturerName = [
        'distinctio',
        'quibusdam',
        'labore',
    ];
    $request->modelName = [
        'qui',
        'aliquid',
    ];
    $request->offset = 586513;
    $request->orderBy = Locationsv1GetV1LocationsGetOrderByLocationsOrderEnum::FIRST_UPDATED;
    $request->page = 20107;
    $request->parameter = [
        'ipsam',
    ];
    $request->parameterId = 4695;
    $request->radius = 146441;
    $request->sensorType = SensorTypesEnum::LOW_COST_SENSOR;
    $request->sort = Locationsv1GetV1LocationsGetSortSortEnum::DESC;
    $request->sourceName = [
        'facilis',
        'tempore',
    ];
    $request->unit = [
        'delectus',
        'eum',
    ];

    $response = $sdk->v1->locationsv1GetV1LocationsGet($request);

    if ($response->openAQResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## measurementsGetV1V1MeasurementsGet

Measurements Get V1

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MeasurementsGetV1V1MeasurementsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\MeasurementsGetV1V1MeasurementsGetOrderByMeasOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SensorTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\MeasurementsGetV1V1MeasurementsGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MeasurementsGetV1V1MeasurementsGetRequest();
    $request->city = [
        'eligendi',
    ];
    $request->coordinates = 'sint';
    $request->country = [
        'provident',
        'necessitatibus',
    ];
    $request->countryId = 'sint';
    $request->dateFrom = DateTime::createFromFormat('Y-m-d', '2022-02-09');
    $request->dateTo = DateTime::createFromFormat('Y-m-d', '2022-02-08');
    $request->entity = EntityTypesEnum::COMMUNITY;
    $request->format = 'illum';
    $request->hasGeo = false;
    $request->includeFields = 'maiores';
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->limit = 699479;
    $request->location = [
        767024,
    ];
    $request->locationId = 813798;
    $request->offset = 411820;
    $request->orderBy = MeasurementsGetV1V1MeasurementsGetOrderByMeasOrderEnum::COUNTRY;
    $request->page = 675439;
    $request->parameter = [
        581273,
        881736,
        'quidem',
        'nam',
    ];
    $request->parameterId = 659669;
    $request->project = 501324;
    $request->radius = 533206;
    $request->sensorType = SensorTypesEnum::LOW_COST_SENSOR;
    $request->sort = MeasurementsGetV1V1MeasurementsGetSortSortEnum::ASC;
    $request->unit = [
        'nisi',
        'vel',
        'natus',
    ];
    $request->valueFrom = 6063.93;
    $request->valueTo = 4748.67;

    $response = $sdk->v1->measurementsGetV1V1MeasurementsGet($request);

    if ($response->measurementsGetV1V1MeasurementsGet200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## parametersGetv1V1ParametersGet

Parameters Getv1

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ParametersGetv1V1ParametersGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ParametersGetv1V1ParametersGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ParametersGetv1V1ParametersGetRequest();
    $request->limit = 19193;
    $request->offset = 470132;
    $request->orderBy = 'distinctio';
    $request->page = 660174;
    $request->sort = ParametersGetv1V1ParametersGetSortSortEnum::ASC;
    $request->sourceId = [
        383462,
        618016,
    ];
    $request->sourceName = [
        'eum',
        'vero',
        'aspernatur',
    ];
    $request->sourceSlug = [
        'magnam',
    ];

    $response = $sdk->v1->parametersGetv1V1ParametersGet($request);

    if ($response->openAQParametersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sourcesV1GetV1SourcesGet

Sources V1 Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SourcesV1GetV1SourcesGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\SourcesV1GetV1SourcesGetOrderBySourcesV1OrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SourcesV1GetV1SourcesGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourcesV1GetV1SourcesGetRequest();
    $request->limit = 92373;
    $request->name = 'Derrick McLaughlin';
    $request->offset = 33625;
    $request->orderBy = SourcesV1GetV1SourcesGetOrderBySourcesV1OrderEnum::NAME;
    $request->page = 653201;
    $request->sort = SourcesV1GetV1SourcesGetSortSortEnum::DESC;

    $response = $sdk->v1->sourcesV1GetV1SourcesGet($request);

    if ($response->openAQResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
