# licenses

## Overview

View various OSS licenses.

### Available Operations

* [licensesGet](#licensesget) - Get a license
* [licensesGetAllCommonlyUsed](#licensesgetallcommonlyused) - Get all commonly used licenses
* [licensesGetForRepo](#licensesgetforrepo) - Get the license for a repository

## licensesGet

Get a license

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/licenses#get-a-license>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicensesGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicensesGetRequest();
    $request->license = 'doloremque';

    $response = $sdk->licenses->licensesGet($request);

    if ($response->license !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licensesGetAllCommonlyUsed

Get all commonly used licenses

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/licenses#get-all-commonly-used-licenses>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicensesGetAllCommonlyUsedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicensesGetAllCommonlyUsedRequest();
    $request->featured = false;
    $request->page = 117315;
    $request->perPage = 483706;

    $response = $sdk->licenses->licensesGetAllCommonlyUsed($request);

    if ($response->licenseSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licensesGetForRepo

This method returns the contents of the repository's license file, if one is detected.

Similar to [Get repository content](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-repository-content), this method also supports [custom media types](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types) for retrieving the raw license content or rendered license HTML.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/licenses/#get-the-license-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicensesGetForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicensesGetForRepoRequest();
    $request->owner = 'tempora';
    $request->repo = 'esse';

    $response = $sdk->licenses->licensesGetForRepo($request);

    if ($response->licenseContent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
