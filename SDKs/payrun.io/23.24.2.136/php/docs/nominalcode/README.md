# nominalCode

### Available Operations

* [deleteNominalCode](#deletenominalcode) - Deletes the nominal codes
* [getNominalCodeFromEmployer](#getnominalcodefromemployer) - Gets the nominal code
* [getNominalCodesFromEmployer](#getnominalcodesfromemployer) - Gets the nominal codes
* [postNominalCode](#postnominalcode) - Insert nominal code
* [putNominalCode](#putnominalcode) - Insert nominal code

## deleteNominalCode

Deletes the nominal code

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNominalCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNominalCodeRequest();
    $request->apiVersion = 'inventore';
    $request->authorization = 'fuga';
    $request->employerId = 'accusamus';
    $request->nominalCodeId = 'voluptatibus';

    $response = $sdk->nominalCode->deleteNominalCode($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNominalCodeFromEmployer

Gets the nominal code

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNominalCodeFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNominalCodeFromEmployerRequest();
    $request->apiVersion = 'distinctio';
    $request->authorization = 'omnis';
    $request->employerId = 'delectus';
    $request->nominalCodeId = 'minima';

    $response = $sdk->nominalCode->getNominalCodeFromEmployer($request);

    if ($response->nominalCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNominalCodesFromEmployer

Gets the nominal code links

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNominalCodesFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNominalCodesFromEmployerRequest();
    $request->apiVersion = 'praesentium';
    $request->authorization = 'maxime';
    $request->employerId = 'magnam';

    $response = $sdk->nominalCode->getNominalCodesFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNominalCode

Inserts a new nominal code

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNominalCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\NominalCode;
use \OpenAPI\OpenAPI\Models\Shared\NominalCodeNominalCode;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNominalCodeRequest();
    $request->apiVersion = 'temporibus';
    $request->authorization = 'quos';
    $request->employerId = 'commodi';
    $request->nominalCode = new NominalCode();
    $request->nominalCode->nominalCode = new NominalCodeNominalCode();
    $request->nominalCode->nominalCode->description = 'itaque';
    $request->nominalCode->nominalCode->key = 'commodi';

    $response = $sdk->nominalCode->postNominalCode($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putNominalCode

Inserts a new nominal code at the specified resource location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutNominalCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\NominalCode;
use \OpenAPI\OpenAPI\Models\Shared\NominalCodeNominalCode;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutNominalCodeRequest();
    $request->apiVersion = 'totam';
    $request->authorization = 'earum';
    $request->employerId = 'modi';
    $request->nominalCode = new NominalCode();
    $request->nominalCode->nominalCode = new NominalCodeNominalCode();
    $request->nominalCode->nominalCode->description = 'nam';
    $request->nominalCode->nominalCode->key = 'vero';
    $request->nominalCodeId = 'voluptatem';

    $response = $sdk->nominalCode->putNominalCode($request);

    if ($response->nominalCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
