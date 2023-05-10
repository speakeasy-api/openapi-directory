# rootCertificate

## Overview

Certificates.

### Available Operations

* [deleteCertificate](#deletecertificate) - Delete imported certificate object
* [exportCertificate](#exportcertificate) - Get a certificate summary to export
* [importCertificate](#importcertificate) - Import a certificate
* [queryCertificates](#querycertificates) - Get all certificates
* [updateCertificate](#updatecertificate) - Update a certificate entry

## deleteCertificate

Deletes an imported certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCertificateRequest();
    $request->id = 'a94bb4f6-3c96-49e9-a3ef-a77dfb14cd66';

    $response = $sdk->rootCertificate->deleteCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportCertificate

Get a certificate summary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\ExportCertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportCertificateRequest();
    $request->id = 'ae395efb-9ba8-48f3-a669-97074ba4469b';

    $response = $sdk->rootCertificate->exportCertificate($request);

    if ($response->certificateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importCertificate

Import a certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\CertificateImportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateImportRequest();
    $request->csrId = 'eum';
    $request->description = 'vero';
    $request->name = 'Ms. Julie Gusikowski';
    $request->pemFile = 'provident';
    $request->privateKey = 'quos';

    $response = $sdk->rootCertificate->importCertificate($request);

    if ($response->certificateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryCertificates

Get all certificates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryCertificatesSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryCertificatesSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryCertificatesRequest();
    $request->description = 'sint';
    $request->expiration = 'accusantium';
    $request->hasKey = false;
    $request->includeExpired = false;
    $request->name = 'Abel O'Hara';
    $request->sortBy = QueryCertificatesSortByEnum::NAME;
    $request->sortOrder = QueryCertificatesSortOrderEnum::DESC;

    $response = $sdk->rootCertificate->queryCertificates($request);

    if ($response->certificateSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCertificate

Provide updated information for a certificate object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificatePatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCertificateRequest();
    $request->certificatePatchRequest = new CertificatePatchRequest();
    $request->certificatePatchRequest->description = 'odit';
    $request->certificatePatchRequest->name = 'Joyce Kertzmann';
    $request->certificatePatchRequest->pemFile = 'eius';
    $request->id = 'c8b711e5-b7fd-42ed-8289-21cddc692601';

    $response = $sdk->rootCertificate->updateCertificate($request);

    if ($response->certificateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
