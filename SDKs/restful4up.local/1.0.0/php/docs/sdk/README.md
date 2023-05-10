# SDK

## Overview

RESTful API 4 Unipacker

### Available Operations

* [applyYaraRules](#applyyararules) - apply given YARA rules to the given executable. (upto 10 rules)
* [clean](#clean) - clean up the uploaded files
* [emulationOutput](#emulationoutput) - try to get the emulation output after unpacking the file
* [generatePartialYaraRule](#generatepartialyararule) - generate partial YARA rules for give executable. (Rule without the condition section)
* [unpack](#unpack) - try to unpack the given file

## applyYaraRules

apply given YARA rules to the given executable. (upto 10 rules)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApplyYaraRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ApplyYaraRulesRequestBodyFile;
use \OpenAPI\OpenAPI\Models\Operations\ApplyYaraRulesRequestBodyIsUnpackingRequiredEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplyYaraRulesRequestBody();
    $request->file = new ApplyYaraRulesRequestBodyFile();
    $request->file->content = 'vel';
    $request->file->file = 'error';
    $request->isUnpackingRequired = ApplyYaraRulesRequestBodyIsUnpackingRequiredEnum::FALSE;
    $request->rules = [
        'iure',
        'magnam',
    ];

    $response = $sdk->sdk->applyYaraRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clean

clean up the uploaded files

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->clean();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## emulationOutput

try to get the emulation output after unpacking the file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EmulationOutputRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\EmulationOutputRequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmulationOutputRequestBody();
    $request->file = new EmulationOutputRequestBodyFile();
    $request->file->content = 'debitis';
    $request->file->file = 'ipsa';

    $response = $sdk->sdk->emulationOutput($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generatePartialYaraRule

generate partial YARA rules for give executable. (Rule without the condition section)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GeneratePartialYaraRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GeneratePartialYaraRuleRequestBodyFile;
use \OpenAPI\OpenAPI\Models\Operations\GeneratePartialYaraRuleRequestBodyIsUnpackingRequiredEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GeneratePartialYaraRuleRequestBody();
    $request->file = new GeneratePartialYaraRuleRequestBodyFile();
    $request->file->content = 'delectus';
    $request->file->file = 'tempora';
    $request->isUnpackingRequired = GeneratePartialYaraRuleRequestBodyIsUnpackingRequiredEnum::TRUE;
    $request->minimumStringLength = 'molestiae';
    $request->stringsToIgnore = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];

    $response = $sdk->sdk->generatePartialYaraRule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unpack

try to unpack the given file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UnpackRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UnpackRequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnpackRequestBody();
    $request->file = new UnpackRequestBodyFile();
    $request->file->content = 'nisi';
    $request->file->file = 'recusandae';

    $response = $sdk->sdk->unpack($request);

    if ($response->unpack200WildcardBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
