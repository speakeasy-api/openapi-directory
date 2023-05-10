# v2

### Available Operations

* [averagesV2GetV2AveragesGet](#averagesv2getv2averagesget) - Averages V2 Get
* [citiesGetV2CitiesGet](#citiesgetv2citiesget) - Provides a simple listing of cities within the platform
* [countriesGetV2CountriesCountryIdGet](#countriesgetv2countriescountryidget) - Countries Get
* [countriesGetV2CountriesGet](#countriesgetv2countriesget) - Countries Get
* [demoV2LocationsTilesViewerGet](#demov2locationstilesviewerget) - Demo
* [getMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet](#getmobilegentilev2locationstilesmobilegeneralizedzxypbfget) - Get Mobilegentile
* [getMobiletileV2LocationsTilesMobileZXYPbfGet](#getmobiletilev2locationstilesmobilezxypbfget) - Get Mobiletile
* [getTileV2LocationsTilesZXYPbfGet](#gettilev2locationstileszxypbfget) - Get Tile
* [latestGetV2LatestLocationIdGet](#latestgetv2latestlocationidget) - Latest Get
* [latestGetV2LatestGet](#latestgetv2latestget) - Latest Get
* [locationsGetV2LocationsLocationIdGet](#locationsgetv2locationslocationidget) - Locations Get
* [locationsGetV2LocationsGet](#locationsgetv2locationsget) - Locations Get
* [measurementsGetV2MeasurementsGet](#measurementsgetv2measurementsget) - Measurements Get
* [mfrGetV2ManufacturersGet](#mfrgetv2manufacturersget) - Mfr Get
* [mobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet](#mobilegentilejsonv2locationstilesmobilegeneralizedtilesjsonget) - Mobilegentilejson
* [mobiletilejsonV2LocationsTilesMobileTilesJsonGet](#mobiletilejsonv2locationstilesmobiletilesjsonget) - Mobiletilejson
* [modelGetV2ModelsGet](#modelgetv2modelsget) - Model Get
* [parametersGetV2ParametersGet](#parametersgetv2parametersget) - Parameters Get
* [projectsGetV2ProjectsProjectIdGet](#projectsgetv2projectsprojectidget) - Projects Get
* [projectsGetV2ProjectsGet](#projectsgetv2projectsget) - Projects Get
* [readmeGetV2SourcesReadmeSlugGet](#readmegetv2sourcesreadmeslugget) - Readme Get
* [sourcesGetV2SourcesGet](#sourcesgetv2sourcesget) - Sources Get
* [summaryGetV2SummaryGet](#summarygetv2summaryget) - Summary Get
* [tilejsonV2LocationsTilesTilesJsonGet](#tilejsonv2locationstilestilesjsonget) - Tilejson

## averagesV2GetV2AveragesGet

Averages V2 Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AveragesV2GetV2AveragesGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\AveragesV2GetV2AveragesGetSortSortEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpatialEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemporalEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AveragesV2GetV2AveragesGetRequest();
    $request->country = [
        'ad',
        'eum',
        'dolor',
    ];
    $request->countryId = 'necessitatibus';
    $request->dateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-26T12:00:10.052Z');
    $request->dateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-29T08:15:14.819Z');
    $request->group = false;
    $request->limit = 260341;
    $request->location = [
        'deleniti',
        'facilis',
        'in',
        'architecto',
    ];
    $request->offset = 99569;
    $request->page = 919483;
    $request->parameter = [
        'nihil',
        'quibusdam',
    ];
    $request->parameterId = 149448;
    $request->project = [
        'accusantium',
        508315,
        'magni',
        779051,
    ];
    $request->projectId = 848009;
    $request->sort = AveragesV2GetV2AveragesGetSortSortEnum::DESC;
    $request->spatial = SpatialEnum::TOTAL;
    $request->temporal = TemporalEnum::YEAR;
    $request->unit = [
        'odit',
        'ea',
        'accusantium',
    ];

    $response = $sdk->v2->averagesV2GetV2AveragesGet($request);

    if ($response->openAQResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## citiesGetV2CitiesGet

Provides a simple listing of cities within the platform

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CitiesGetV2CitiesGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CitiesGetV2CitiesGetOrderByCitiesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\CitiesGetV2CitiesGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CitiesGetV2CitiesGetRequest();
    $request->city = [
        'maiores',
    ];
    $request->country = [
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->countryId = 'nam';
    $request->entity = 'eaque';
    $request->limit = 866383;
    $request->offset = 365496;
    $request->orderBy = CitiesGetV2CitiesGetOrderByCitiesOrderEnum::LAST_UPDATED;
    $request->page = 16627;
    $request->sort = CitiesGetV2CitiesGetSortSortEnum::DESC;

    $response = $sdk->v2->citiesGetV2CitiesGet($request);

    if ($response->openAQCitiesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## countriesGetV2CountriesCountryIdGet

Countries Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CountriesGetV2CountriesCountryIdGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CountriesGetV2CountriesCountryIdGetOrderByCountriesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\CountriesGetV2CountriesCountryIdGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CountriesGetV2CountriesCountryIdGetRequest();
    $request->country = [
        'aut',
    ];
    $request->countryId = 'cumque';
    $request->limit = 359978;
    $request->offset = 944124;
    $request->orderBy = CountriesGetV2CountriesCountryIdGetOrderByCountriesOrderEnum::LOCATIONS;
    $request->page = 749999;
    $request->sort = CountriesGetV2CountriesCountryIdGetSortSortEnum::ASC;

    $response = $sdk->v2->countriesGetV2CountriesCountryIdGet($request);

    if ($response->openAQCountriesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## countriesGetV2CountriesGet

Countries Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CountriesGetV2CountriesGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CountriesGetV2CountriesGetOrderByCountriesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\CountriesGetV2CountriesGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CountriesGetV2CountriesGetRequest();
    $request->country = [
        'totam',
        'dignissimos',
    ];
    $request->countryId = 'eaque';
    $request->limit = 338985;
    $request->offset = 199996;
    $request->orderBy = CountriesGetV2CountriesGetOrderByCountriesOrderEnum::COUNTRY;
    $request->page = 18521;
    $request->sort = CountriesGetV2CountriesGetSortSortEnum::ASC;

    $response = $sdk->v2->countriesGetV2CountriesGet($request);

    if ($response->openAQCountriesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## demoV2LocationsTilesViewerGet

Demo

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->v2->demoV2LocationsTilesViewerGet();

    if ($response->demoV2LocationsTilesViewerGet200TextHTMLString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet

Get Mobilegentile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest();
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->lastUpdatedFrom = DateTime::createFromFormat('Y-m-d', '2022-10-11');
    $request->lastUpdatedTo = DateTime::createFromFormat('Y-m-d', '2022-01-21');
    $request->location = [
        608253,
        704415,
        596656,
        31838,
    ];
    $request->parameter = 'consequuntur';
    $request->project = 500026;
    $request->x = 621479;
    $request->y = 50370;
    $request->z = 577229;

    $response = $sdk->v2->getMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMobiletileV2LocationsTilesMobileZXYPbfGet

Get Mobiletile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest();
    $request->dateFrom = DateTime::createFromFormat('Y-m-d', '2022-01-03');
    $request->dateTo = DateTime::createFromFormat('Y-m-d', '2022-05-21');
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->lastUpdatedFrom = DateTime::createFromFormat('Y-m-d', '2021-04-10');
    $request->lastUpdatedTo = DateTime::createFromFormat('Y-m-d', '2020-10-23');
    $request->location = [
        311945,
        554242,
        398221,
        212390,
    ];
    $request->parameter = 222443;
    $request->project = 186193;
    $request->x = 218749;
    $request->y = 944373;
    $request->z = 569574;

    $response = $sdk->v2->getMobiletileV2LocationsTilesMobileZXYPbfGet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTileV2LocationsTilesZXYPbfGet

Get Tile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTileV2LocationsTilesZXYPbfGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTileV2LocationsTilesZXYPbfGetRequest();
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->lastUpdatedFrom = DateTime::createFromFormat('Y-m-d', '2022-07-05');
    $request->lastUpdatedTo = DateTime::createFromFormat('Y-m-d', '2022-04-27');
    $request->location = [
        85295,
        58029,
    ];
    $request->parameter = 434417;
    $request->project = 487838;
    $request->x = 311796;
    $request->y = 881005;
    $request->z = 696344;

    $response = $sdk->v2->getTileV2LocationsTilesZXYPbfGet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## latestGetV2LatestLocationIdGet

Latest Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LatestGetV2LatestLocationIdGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\LatestGetV2LatestLocationIdGetOrderByLocationsOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SensorTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\LatestGetV2LatestLocationIdGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LatestGetV2LatestLocationIdGetRequest();
    $request->city = [
        'voluptas',
        'natus',
        'eos',
        'atque',
    ];
    $request->coordinates = 'sit';
    $request->country = [
        'ab',
        'soluta',
        'dolorum',
        'iusto',
    ];
    $request->countryId = 'voluptate';
    $request->dumpRaw = false;
    $request->entity = EntityTypesEnum::RESEARCH;
    $request->hasGeo = false;
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->limit = 536579;
    $request->location = [
        'distinctio',
        'nihil',
        456015,
    ];
    $request->locationId = 663078;
    $request->manufacturerName = [
        'eius',
        'aspernatur',
        'perferendis',
        'amet',
    ];
    $request->modelName = [
        'accusamus',
        'ad',
        'saepe',
        'suscipit',
    ];
    $request->offset = 645785;
    $request->orderBy = LatestGetV2LatestLocationIdGetOrderByLocationsOrderEnum::FIRST_UPDATED;
    $request->page = 324683;
    $request->parameter = [
        'similique',
        872651,
        273542,
        798047,
    ];
    $request->parameterId = 885338;
    $request->radius = 185636;
    $request->sensorType = SensorTypesEnum::LOW_COST_SENSOR;
    $request->sort = LatestGetV2LatestLocationIdGetSortSortEnum::DESC;
    $request->sourceName = [
        'harum',
        'iusto',
    ];
    $request->unit = [
        'quisquam',
    ];

    $response = $sdk->v2->latestGetV2LatestLocationIdGet($request);

    if ($response->openAQResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## latestGetV2LatestGet

Latest Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LatestGetV2LatestGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\LatestGetV2LatestGetOrderByLocationsOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SensorTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\LatestGetV2LatestGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LatestGetV2LatestGetRequest();
    $request->city = [
        'amet',
        'tempore',
        'accusamus',
        'numquam',
    ];
    $request->coordinates = 'enim';
    $request->country = [
        'sapiente',
    ];
    $request->countryId = 'totam';
    $request->dumpRaw = false;
    $request->entity = EntityTypesEnum::COMMUNITY;
    $request->hasGeo = false;
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->limit = 25662;
    $request->location = [
        153694,
        730442,
        646265,
    ];
    $request->locationId = 463575;
    $request->manufacturerName = [
        'incidunt',
    ];
    $request->modelName = [
        'cupiditate',
    ];
    $request->offset = 807581;
    $request->orderBy = LatestGetV2LatestGetOrderByLocationsOrderEnum::COUNT;
    $request->page = 747080;
    $request->parameter = [
        'totam',
    ];
    $request->parameterId = 276894;
    $request->radius = 132068;
    $request->sensorType = SensorTypesEnum::REFERENCE_GRADE;
    $request->sort = LatestGetV2LatestGetSortSortEnum::DESC;
    $request->sourceName = [
        'aliquid',
        'quam',
        'molestias',
    ];
    $request->unit = [
        'qui',
        'neque',
        'fugit',
        'magni',
    ];

    $response = $sdk->v2->latestGetV2LatestGet($request);

    if ($response->openAQResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## locationsGetV2LocationsLocationIdGet

Locations Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LocationsGetV2LocationsLocationIdGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\LocationsGetV2LocationsLocationIdGetOrderByLocationsOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SensorTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\LocationsGetV2LocationsLocationIdGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocationsGetV2LocationsLocationIdGetRequest();
    $request->city = [
        'sunt',
        'ullam',
    ];
    $request->coordinates = 'nam';
    $request->country = [
        'voluptatem',
        'cumque',
        'soluta',
        'nobis',
    ];
    $request->countryId = 'et';
    $request->dumpRaw = false;
    $request->entity = EntityTypesEnum::RESEARCH;
    $request->hasGeo = false;
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->limit = 217450;
    $request->location = [
        'quos',
    ];
    $request->locationId = 731694;
    $request->manufacturerName = [
        'aperiam',
        'delectus',
        'dolorem',
    ];
    $request->modelName = [
        'labore',
        'adipisci',
    ];
    $request->offset = 677263;
    $request->orderBy = LocationsGetV2LocationsLocationIdGetOrderByLocationsOrderEnum::CITY;
    $request->page = 63038;
    $request->parameter = [
        'itaque',
    ];
    $request->parameterId = 9240;
    $request->radius = 669917;
    $request->sensorType = SensorTypesEnum::LOW_COST_SENSOR;
    $request->sort = LocationsGetV2LocationsLocationIdGetSortSortEnum::DESC;
    $request->sourceName = [
        'ut',
        'facilis',
        'cupiditate',
        'qui',
    ];
    $request->unit = [
        'laudantium',
    ];

    $response = $sdk->v2->locationsGetV2LocationsLocationIdGet($request);

    if ($response->openAQResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## locationsGetV2LocationsGet

Locations Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LocationsGetV2LocationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\LocationsGetV2LocationsGetOrderByLocationsOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SensorTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\LocationsGetV2LocationsGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocationsGetV2LocationsGetRequest();
    $request->city = [
        'occaecati',
        'voluptatibus',
    ];
    $request->coordinates = 'quisquam';
    $request->country = [
        'omnis',
        'quis',
        'ipsum',
        'delectus',
    ];
    $request->countryId = 'voluptate';
    $request->dumpRaw = false;
    $request->entity = EntityTypesEnum::GOVERNMENT;
    $request->hasGeo = false;
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->limit = 878870;
    $request->location = [
        941378,
        'quod',
        630448,
        'vero',
    ];
    $request->locationId = 498140;
    $request->manufacturerName = [
        'quibusdam',
        'illum',
    ];
    $request->modelName = [
        'natus',
    ];
    $request->offset = 773326;
    $request->orderBy = LocationsGetV2LocationsGetOrderByLocationsOrderEnum::CITY;
    $request->page = 974259;
    $request->parameter = [
        'fugit',
        'maiores',
    ];
    $request->parameterId = 985033;
    $request->radius = 478370;
    $request->sensorType = SensorTypesEnum::LOW_COST_SENSOR;
    $request->sort = LocationsGetV2LocationsGetSortSortEnum::ASC;
    $request->sourceName = [
        'officia',
    ];
    $request->unit = [
        'ipsam',
        'ea',
    ];

    $response = $sdk->v2->locationsGetV2LocationsGet($request);

    if ($response->openAQResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## measurementsGetV2MeasurementsGet

Measurements Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MeasurementsGetV2MeasurementsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\MeasurementsGetV2MeasurementsGetOrderByMeasOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SensorTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\MeasurementsGetV2MeasurementsGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MeasurementsGetV2MeasurementsGetRequest();
    $request->city = [
        'vel',
    ];
    $request->coordinates = 'possimus';
    $request->country = [
        'ratione',
        'ex',
    ];
    $request->countryId = 'laudantium';
    $request->dateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-08T01:04:15.076Z');
    $request->dateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-20T07:12:08.273Z');
    $request->entity = EntityTypesEnum::COMMUNITY;
    $request->format = 'voluptatibus';
    $request->hasGeo = false;
    $request->includeFields = 'nostrum';
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->limit = 960835;
    $request->location = [
        'ea',
        'corporis',
        399499,
        301831,
    ];
    $request->locationId = 407241;
    $request->offset = 775220;
    $request->orderBy = MeasurementsGetV2MeasurementsGetOrderByMeasOrderEnum::CITY;
    $request->page = 926213;
    $request->parameter = [
        53427,
    ];
    $request->parameterId = 952871;
    $request->project = 725595;
    $request->radius = 13948;
    $request->sensorType = SensorTypesEnum::REFERENCE_GRADE;
    $request->sort = MeasurementsGetV2MeasurementsGetSortSortEnum::DESC;
    $request->unit = [
        'aliquam',
        'fugit',
        'accusamus',
        'inventore',
    ];
    $request->valueFrom = 2506.22;
    $request->valueTo = 896.03;

    $response = $sdk->v2->measurementsGetV2MeasurementsGet($request);

    if ($response->measurementsGetV2MeasurementsGet200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mfrGetV2ManufacturersGet

Mfr Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->v2->mfrGetV2ManufacturersGet();

    if ($response->openAQResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet

Mobilegentilejson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->v2->mobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet();

    if ($response->tileJSON !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mobiletilejsonV2LocationsTilesMobileTilesJsonGet

Mobiletilejson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->v2->mobiletilejsonV2LocationsTilesMobileTilesJsonGet();

    if ($response->tileJSON !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modelGetV2ModelsGet

Model Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->v2->modelGetV2ModelsGet();

    if ($response->openAQResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## parametersGetV2ParametersGet

Parameters Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ParametersGetV2ParametersGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ParametersGetV2ParametersGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ParametersGetV2ParametersGetRequest();
    $request->limit = 677412;
    $request->offset = 672048;
    $request->orderBy = 'velit';
    $request->page = 432148;
    $request->sort = ParametersGetV2ParametersGetSortSortEnum::ASC;
    $request->sourceId = [
        557369,
        829603,
        860552,
        379034,
    ];
    $request->sourceName = [
        'quasi',
        'tempora',
        'numquam',
    ];
    $request->sourceSlug = [
        'provident',
    ];

    $response = $sdk->v2->parametersGetV2ParametersGet($request);

    if ($response->openAQParametersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsGetV2ProjectsProjectIdGet

Projects Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsGetV2ProjectsProjectIdGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsGetV2ProjectsProjectIdGetOrderByProjectsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsGetV2ProjectsProjectIdGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsGetV2ProjectsProjectIdGetRequest();
    $request->country = [
        'molestiae',
    ];
    $request->countryId = 'magnam';
    $request->entity = 'odio';
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->limit = 262118;
    $request->offset = 458515;
    $request->orderBy = ProjectsGetV2ProjectsProjectIdGetOrderByProjectsOrderEnum::SUBTITLE;
    $request->page = 524593;
    $request->parameter = [
        695626,
        'ut',
        379927,
    ];
    $request->parameterId = 826871;
    $request->project = [
        'quisquam',
    ];
    $request->projectId = 86377;
    $request->sensorType = 'ipsa';
    $request->sort = ProjectsGetV2ProjectsProjectIdGetSortSortEnum::DESC;
    $request->sourceName = [
        'neque',
        'quo',
        'illum',
    ];
    $request->unit = [
        'fuga',
        'eius',
        'eos',
        'voluptas',
    ];

    $response = $sdk->v2->projectsGetV2ProjectsProjectIdGet($request);

    if ($response->openAQProjectsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsGetV2ProjectsGet

Projects Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsGetV2ProjectsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsGetV2ProjectsGetOrderByProjectsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsGetV2ProjectsGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsGetV2ProjectsGetRequest();
    $request->country = [
        'cupiditate',
    ];
    $request->countryId = 'consequatur';
    $request->entity = 'tempora';
    $request->isAnalysis = false;
    $request->isMobile = false;
    $request->limit = 892050;
    $request->offset = 370853;
    $request->orderBy = ProjectsGetV2ProjectsGetOrderByProjectsOrderEnum::ID;
    $request->page = 197054;
    $request->parameter = [
        925164,
        715179,
        'dignissimos',
        469498,
    ];
    $request->parameterId = 518835;
    $request->project = [
        488410,
        'commodi',
        'dolores',
        'molestiae',
    ];
    $request->projectId = 35362;
    $request->sensorType = 'porro';
    $request->sort = ProjectsGetV2ProjectsGetSortSortEnum::ASC;
    $request->sourceName = [
        'praesentium',
        'consequuntur',
        'deleniti',
    ];
    $request->unit = [
        'fuga',
    ];

    $response = $sdk->v2->projectsGetV2ProjectsGet($request);

    if ($response->openAQProjectsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## readmeGetV2SourcesReadmeSlugGet

Readme Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReadmeGetV2SourcesReadmeSlugGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReadmeGetV2SourcesReadmeSlugGetRequest();
    $request->slug = 'mollitia';

    $response = $sdk->v2->readmeGetV2SourcesReadmeSlugGet($request);

    if ($response->readmeGetV2SourcesReadmeSlugGet200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sourcesGetV2SourcesGet

Sources Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SourcesGetV2SourcesGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\SourcesGetV2SourcesGetOrderBySourcesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SourcesGetV2SourcesGetSortSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourcesGetV2SourcesGetRequest();
    $request->limit = 277596;
    $request->offset = 539224;
    $request->orderBy = SourcesGetV2SourcesGetOrderBySourcesOrderEnum::SOURCE_NAME;
    $request->page = 325685;
    $request->sort = SourcesGetV2SourcesGetSortSortEnum::ASC;
    $request->sourceId = [
        956406,
    ];
    $request->sourceName = [
        'ratione',
    ];
    $request->sourceSlug = [
        'saepe',
    ];

    $response = $sdk->v2->sourcesGetV2SourcesGet($request);

    if ($response->openAQResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## summaryGetV2SummaryGet

Summary Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->v2->summaryGetV2SummaryGet();

    if ($response->openAQResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tilejsonV2LocationsTilesTilesJsonGet

Tilejson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->v2->tilejsonV2LocationsTilesTilesJsonGet();

    if ($response->tileJSON !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
