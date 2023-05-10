# translate

### Available Operations

* [getLanguages](#getlanguages) - Retrieve list of supported languages
* [postDetect](#postdetect) - Detect the language of a single text
* [postTranslate](#posttranslate) - Translate text from a language to another
* [postTranslateFile](#posttranslatefile) - Translate file from a language to another

## getLanguages

Retrieve list of supported languages

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->translate->getLanguages();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDetect

Detect the language of a single text

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'

    $response = $sdk->translate->postDetect($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTranslate

Translate text from a language to another

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'

    $response = $sdk->translate->postTranslate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTranslateFile

Translate file from a language to another

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'

    $response = $sdk->translate->postTranslateFile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
