# general

### Available Operations

* [nameType](#nametype) - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* [nameTypeBatch](#nametypebatch) - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
* [nameTypeGeo](#nametypegeo) - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* [nameTypeGeoBatch](#nametypegeobatch) - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

## nameType

Infer the likely type of a proper noun (personal name, brand name, place name etc.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NameTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\NameTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NameTypeRequest();
    $request->properNoun = 'repellendus';

    $requestSecurity = new NameTypeSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->nameType($request, $requestSecurity);

    if ($response->properNounCategorizedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## nameTypeBatch

Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchNameIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\NameIn;
use \OpenAPI\OpenAPI\Models\Operations\NameTypeBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchNameIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->properNouns = [
        new NameIn(),
        new NameIn(),
        new NameIn(),
        new NameIn(),
    ];

    $requestSecurity = new NameTypeBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->nameTypeBatch($request, $requestSecurity);

    if ($response->batchProperNounCategorizedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## nameTypeGeo

Infer the likely type of a proper noun (personal name, brand name, place name etc.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NameTypeGeoRequest;
use \OpenAPI\OpenAPI\Models\Operations\NameTypeGeoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NameTypeGeoRequest();
    $request->countryIso2 = 'odit';
    $request->properNoun = 'at';

    $requestSecurity = new NameTypeGeoSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->nameTypeGeo($request, $requestSecurity);

    if ($response->properNounCategorizedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## nameTypeGeoBatch

Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BatchNameGeoIn;
use \OpenAPI\OpenAPI\Models\Shared\FactIn;
use \OpenAPI\OpenAPI\Models\Shared\NameGeoIn;
use \OpenAPI\OpenAPI\Models\Operations\NameTypeGeoBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchNameGeoIn();
    $request->facts = [
        new FactIn(),
        new FactIn(),
        new FactIn(),
        new FactIn(),
    ];
    $request->properNouns = [
        new NameGeoIn(),
        new NameGeoIn(),
        new NameGeoIn(),
        new NameGeoIn(),
    ];

    $requestSecurity = new NameTypeGeoBatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->nameTypeGeoBatch($request, $requestSecurity);

    if ($response->batchProperNounCategorizedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
