# codesOfConduct

## Overview

Insight into codes of conduct for your communities.

### Available Operations

* [codesOfConductGetAllCodesOfConduct](#codesofconductgetallcodesofconduct) - Get all codes of conduct
* [codesOfConductGetConductCode](#codesofconductgetconductcode) - Get a code of conduct

## codesOfConductGetAllCodesOfConduct

Get all codes of conduct

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/codes-of-conduct#get-all-codes-of-conduct>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->codesOfConduct->codesOfConductGetAllCodesOfConduct();

    if ($response->codeOfConducts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codesOfConductGetConductCode

Get a code of conduct

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/codes-of-conduct#get-a-code-of-conduct>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodesOfConductGetConductCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodesOfConductGetConductCodeRequest();
    $request->key = 'quo';

    $response = $sdk->codesOfConduct->codesOfConductGetConductCode($request);

    if ($response->codeOfConduct !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
