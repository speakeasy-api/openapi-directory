# rootCsr

## Overview

Certificate signing requests.

### Available Operations

* [deleteCsr](#deletecsr) - Delete a certificate signing request
* [generateCsr](#generatecsr) - Generate a new private key and return a certificate signing request
* [getAllCsrs](#getallcsrs) - Get all certificate signing requests

## deleteCsr

Deletes a certificate signing request corresponding to the provided ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCsrRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCsrRequest();
    $request->id = '16db9954-5fc9-45fa-8897-0e189dbb30fc';

    $response = $sdk->rootCsr->deleteCsr($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generateCsr

Generates a new private key and returns a base64 encoded PKCS#10 certificate signing request (CSR).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\GenericCsrRequest;
use \OpenAPI\OpenAPI\Models\Shared\CsrRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenericCsrRequest();
    $request->csrRequest = new CsrRequest();
    $request->csrRequest->city = 'Emmerichburgh';
    $request->csrRequest->country = 'Trinidad and Tobago';
    $request->csrRequest->emailAddress = 'deserunt';
    $request->csrRequest->hostnames = [
        'quis',
    ];
    $request->csrRequest->organization = 'veniam';
    $request->csrRequest->organizationUnit = 'libero';
    $request->csrRequest->state = 'architecto';
    $request->csrRequest->surname = 'cupiditate';
    $request->csrRequest->uid = 'molestiae';
    $request->name = 'Rufus Friesen';

    $response = $sdk->rootCsr->generateCsr($request);

    if ($response->csrSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllCsrs

Returns a list of summaries for every outstanding certificate signing request (CSR).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->rootCsr->getAllCsrs();

    if ($response->csrSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
