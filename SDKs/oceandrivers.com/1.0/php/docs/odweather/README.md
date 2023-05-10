# odWeather

## Overview

ODWeather API service

### Available Operations

* [compareStation](#comparestation) - Get forecast and realtime information for known points<br/>None
* [getAemetStation](#getaemetstation) - Get data from the aemet stations<br/>None
* [getEasywind](#geteasywind) - Get data from the easywind weather stations<br/>None
* [getEventStations](#geteventstations) - Get stations in an event<br/>None
* [getForecastPoints](#getforecastpoints) - Get forecast points of a yatchclub<br/>None
* [getForecastTimeSeries](#getforecasttimeseries) - Get timeseries forecast information<br/>None
* [getForecastTimeSeriesWrf](#getforecasttimeserieswrf) - Get timeseries forecast information<br/>None
* [getSocibWeatherStation](#getsocibweatherstation) - Get data from the socib bahia de palma buoy<br/>None
* [getWeatherDisplay](#getweatherdisplay) - Get data from the weather display software<br/>None
* [getWebCams](#getwebcams) - Get forecast and realtime information for known points<br/>None

## compareStation

Get forecast and realtime information for known points<br/>None

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompareStationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompareStationRequest();
    $request->stationName = 'provident';

    $response = $sdk->odWeather->compareStation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAemetStation

Get data from the aemet stations<br/>None

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAemetStationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAemetStationRequest();
    $request->period = 'distinctio';
    $request->stationName = 'quibusdam';

    $response = $sdk->odWeather->getAemetStation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEasywind

Get data from the easywind weather stations<br/>None

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEasywindRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEasywindRequest();
    $request->easywindId = 'unde';
    $request->period = 'nulla';

    $response = $sdk->odWeather->getEasywind($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventStations

Get stations in an event<br/>None

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventStationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventStationsRequest();
    $request->eventId = 'corrupti';

    $response = $sdk->odWeather->getEventStations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getForecastPoints

Get forecast points of a yatchclub<br/>None

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetForecastPointsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetForecastPointsRequest();
    $request->language = 'illum';
    $request->yatchclubid = 'vel';

    $response = $sdk->odWeather->getForecastPoints($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getForecastTimeSeries

Get timeseries forecast information<br/>None

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetForecastTimeSeriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetForecastTimeSeriesRequest();
    $request->days = 623564;
    $request->endtime = 'deserunt';
    $request->entryid = 'suscipit';
    $request->hours = 437587;
    $request->inittime = 'magnam';
    $request->latitude = 8917.73;
    $request->longitude = 567.13;
    $request->wave = 'delectus';
    $request->weather = 'tempora';

    $response = $sdk->odWeather->getForecastTimeSeries($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getForecastTimeSeriesWrf

Get timeseries forecast information<br/>None

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetForecastTimeSeriesWrfRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetForecastTimeSeriesWrfRequest();
    $request->days = 383441;
    $request->endtime = 'molestiae';
    $request->entryid = 'minus';
    $request->hours = 812169;
    $request->inittime = 'voluptatum';
    $request->latitude = 4799.77;
    $request->longitude = 5680.45;
    $request->wave = 'nisi';
    $request->weather = 'recusandae';

    $response = $sdk->odWeather->getForecastTimeSeriesWrf($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSocibWeatherStation

Get data from the socib bahia de palma buoy<br/>None

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSocibWeatherStationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSocibWeatherStationRequest();
    $request->period = 'temporibus';
    $request->stationName = 'ab';

    $response = $sdk->odWeather->getSocibWeatherStation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWeatherDisplay

Get data from the weather display software<br/>None

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWeatherDisplayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWeatherDisplayRequest();
    $request->period = 'quis';
    $request->stationName = 'veritatis';

    $response = $sdk->odWeather->getWeatherDisplay($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebCams

Get forecast and realtime information for known points<br/>None

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->odWeather->getWebCams();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
