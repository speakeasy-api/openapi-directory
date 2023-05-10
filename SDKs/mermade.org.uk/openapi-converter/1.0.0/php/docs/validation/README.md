# validation

## Overview

Validation functions

### Available Operations

* [getBadge](#getbadge) - Return a redirect to a badge svg file depending on a source definition's validity
* [validate](#validate) - Validate an OpenAPI 3.0.x definition supplied in the body of the request
* [validateUrl](#validateurl) - Validate an OpenAPI 3.0.x definition

## getBadge

Return a redirect to a badge svg file depending on a source definition's validity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBadgeRequest();
    $request->url = 'http://physical-pegboard.info';

    $response = $sdk->validation->getBadge($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validate

Validate an OpenAPI 3.0.x definition supplied in the body of the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ValidateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidateRequestBody();
    $request->filename = 'iure';
    $request->source = 'magnam';

    $response = $sdk->validation->validate($request);

    if ($response->validationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validateUrl

Validate an OpenAPI 3.0.x definition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ValidateUrlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidateUrlRequest();
    $request->url = 'https://awesome-voter.biz';

    $response = $sdk->validation->validateUrl($request);

    if ($response->validationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
