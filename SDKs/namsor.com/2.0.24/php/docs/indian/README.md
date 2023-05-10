# indian

## Overview

INDIAN special features

### Available Operations

* [castegroupIndianFull](#castegroupindianfull) - [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.
* [castegroupIndianFullBatch](#castegroupindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names. 
* [religion](#religion) - [USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).
* [religionIndianFullBatch](#religionindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).
* [subclassificationIndian](#subclassificationindian) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
* [subclassificationIndianBatch](#subclassificationindianbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.
* [subclassificationIndianFull](#subclassificationindianfull) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
* [subclassificationIndianFullBatch](#subclassificationindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.

## castegroupIndianFull

[USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CastegroupIndianFullRequest;
use \OpenAPI\OpenAPI\Models\Operations\CastegroupIndianFullSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CastegroupIndianFullRequest();
    $request->personalNameFull = 'molestiae';
    $request->subDivisionIso31662 = 'quod';

    $requestSecurity = new CastegroupIndianFullSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->indian->castegroupIndianFull($request, $requestSecurity);

    if ($response->personalNameCastegroupOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## castegroupIndianFullBatch

[USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchPersonalNameSubdivisionIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\PersonalNameSubdivisionIn;
use \OpenAPI\OpenAPI\Models\Operations\CastegroupIndianFullBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPersonalNameSubdivisionIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new PersonalNameSubdivisionIn(),
        new PersonalNameSubdivisionIn(),
    ];

    $requestSecurity = new CastegroupIndianFullBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->indian->castegroupIndianFullBatch($request, $requestSecurity);

    if ($response->batchPersonalNameCastegroupOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## religion

[USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReligionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReligionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReligionRequest();
    $request->personalNameFull = 'totam';
    $request->subDivisionIso31662 = 'porro';

    $requestSecurity = new ReligionSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->indian->religion($request, $requestSecurity);

    if ($response->personalNameReligionedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## religionIndianFullBatch

[USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchPersonalNameSubdivisionIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\PersonalNameSubdivisionIn;
use \OpenAPI\OpenAPI\Models\Operations\ReligionIndianFullBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPersonalNameSubdivisionIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new PersonalNameSubdivisionIn(),
    ];

    $requestSecurity = new ReligionIndianFullBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->indian->religionIndianFullBatch($request, $requestSecurity);

    if ($response->batchPersonalNameReligionedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subclassificationIndian

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubclassificationIndianRequest;
use \OpenAPI\OpenAPI\Models\Operations\SubclassificationIndianSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubclassificationIndianRequest();
    $request->firstName = 'Minerva';
    $request->lastName = 'Nikolaus';

    $requestSecurity = new SubclassificationIndianSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->indian->subclassificationIndian($request, $requestSecurity);

    if ($response->firstLastNameGeoSubclassificationOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subclassificationIndianBatch

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchFirstLastNameGeoIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\FirstLastNameGeoIn;
use \OpenAPI\OpenAPI\Models\Operations\SubclassificationIndianBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchFirstLastNameGeoIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new FirstLastNameGeoIn(),
    ];

    $requestSecurity = new SubclassificationIndianBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->indian->subclassificationIndianBatch($request, $requestSecurity);

    if ($response->batchFirstLastNameGeoSubclassificationOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subclassificationIndianFull

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubclassificationIndianFullRequest;
use \OpenAPI\OpenAPI\Models\Operations\SubclassificationIndianFullSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubclassificationIndianFullRequest();
    $request->fullName = 'deleniti';

    $requestSecurity = new SubclassificationIndianFullSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->indian->subclassificationIndianFull($request, $requestSecurity);

    if ($response->personalNameGeoSubclassificationOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subclassificationIndianFullBatch

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchPersonalNameGeoIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\PersonalNameGeoIn;
use \OpenAPI\OpenAPI\Models\Operations\SubclassificationIndianFullBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPersonalNameGeoIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->personalNames = [
        new PersonalNameGeoIn(),
        new PersonalNameGeoIn(),
        new PersonalNameGeoIn(),
        new PersonalNameGeoIn(),
    ];

    $requestSecurity = new SubclassificationIndianFullBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->indian->subclassificationIndianFullBatch($request, $requestSecurity);

    if ($response->batchPersonalNameGeoSubclassificationOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
