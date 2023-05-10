# mart

## Overview

Perform bulk operations

### Available Operations

* [getMartCaseAssociationsResource](#getmartcaseassociationsresource) - Bulk download of case associations
* [getMartDiseaseAssociationsResource](#getmartdiseaseassociationsresource) - Bulk download of disease associations
* [getMartGeneAssociationsResource](#getmartgeneassociationsresource) - Bulk download of gene associations
* [getMartOrthologAssociationsResource](#getmartorthologassociationsresource) - Bulk download of orthologs
* [getMartParalogAssociationsResource](#getmartparalogassociationsresource) - Bulk download of paralogs

## getMartCaseAssociationsResource

NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMartCaseAssociationsResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMartCaseAssociationsResourceRequest();
    $request->objectCategory = 'voluptatibus';
    $request->slim = [
        'dolorum',
        'soluta',
    ];
    $request->taxon = 'cum';

    $response = $sdk->mart->getMartCaseAssociationsResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMartDiseaseAssociationsResource

NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMartDiseaseAssociationsResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMartDiseaseAssociationsResourceRequest();
    $request->objectCategory = 'in';
    $request->slim = [
        'commodi',
        'commodi',
        'fugit',
        'ullam',
    ];
    $request->taxon = 'ullam';

    $response = $sdk->mart->getMartDiseaseAssociationsResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMartGeneAssociationsResource

NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMartGeneAssociationsResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMartGeneAssociationsResourceRequest();
    $request->objectCategory = 'doloremque';
    $request->slim = [
        'qui',
        'praesentium',
        'adipisci',
    ];
    $request->taxon = 'totam';

    $response = $sdk->mart->getMartGeneAssociationsResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMartOrthologAssociationsResource

Bulk download of orthologs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMartOrthologAssociationsResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMartOrthologAssociationsResourceRequest();
    $request->taxon1 = 'qui';
    $request->taxon2 = 'deserunt';

    $response = $sdk->mart->getMartOrthologAssociationsResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMartParalogAssociationsResource

Bulk download of paralogs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMartParalogAssociationsResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMartParalogAssociationsResourceRequest();
    $request->taxon1 = 'eligendi';
    $request->taxon2 = 'incidunt';

    $response = $sdk->mart->getMartParalogAssociationsResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
