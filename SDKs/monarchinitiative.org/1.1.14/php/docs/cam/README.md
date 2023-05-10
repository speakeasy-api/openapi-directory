# cam

## Overview

Operations on GO Causal Activity Models (GO-CAMs)

### Available Operations

* [getActivityCollection](#getactivitycollection) - Returns list of models
* [getInstanceObject](#getinstanceobject) - Returns list of matches
* [getModelCollection](#getmodelcollection) - Returns list of ALL models
* [getModelContributors](#getmodelcontributors) - Returns list of all contributors across all models
* [getModelInstances](#getmodelinstances) - Returns list of all instances
* [getModelObject](#getmodelobject) - Returns a complete model
* [getModelProperties](#getmodelproperties) - Returns list of all properties used across all models
* [getModelPropertyValues](#getmodelpropertyvalues) - Returns list property-values for all models
* [getModelQuery](#getmodelquery) - Returns list of models matching query
* [getPhysicalInteraction](#getphysicalinteraction) - Returns list of models

## getActivityCollection

Returns list of models

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetActivityCollectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActivityCollectionRequest();
    $request->contributor = 'deserunt';
    $request->title = 'Dr.';

    $response = $sdk->cam->getActivityCollection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstanceObject

Returns list of matches

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstanceObjectRequest();
    $request->contributor = 'distinctio';
    $request->id = '7799d22e-8c1f-4849-b825-fdc42c876c2c';
    $request->title = 'Mr.';

    $response = $sdk->cam->getInstanceObject($request);

    if ($response->associations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelCollection

Returns list of ALL models

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->cam->getModelCollection();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelContributors

Returns list of all contributors across all models

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->cam->getModelContributors();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelInstances

Returns list of all instances

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->cam->getModelInstances();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelObject

Returns a complete model

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetModelObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelObjectRequest();
    $request->id = 'dfb4cfc1-c762-430f-841f-b1bd23fdb14d';

    $response = $sdk->cam->getModelObject($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelProperties

Returns list of all properties used across all models

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetModelPropertiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelPropertiesRequest();
    $request->contributor = 'expedita';
    $request->title = 'Ms.';

    $response = $sdk->cam->getModelProperties($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelPropertyValues

Returns list property-values for all models

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetModelPropertyValuesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelPropertyValuesRequest();
    $request->contributor = 'tempore';
    $request->title = 'Dr.';

    $response = $sdk->cam->getModelPropertyValues($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelQuery

Returns list of models matching query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetModelQueryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelQueryRequest();
    $request->contributor = 'nostrum';
    $request->title = 'Miss';

    $response = $sdk->cam->getModelQuery($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPhysicalInteraction

Returns list of models

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPhysicalInteractionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPhysicalInteractionRequest();
    $request->contributor = 'voluptas';
    $request->title = 'Ms.';

    $response = $sdk->cam->getPhysicalInteraction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
