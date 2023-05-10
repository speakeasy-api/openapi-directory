# liveWebsiteTrackingParameters

## Overview

Live Website Tracking Parameters

### Available Operations

* [postV2LiveWebsiteTrackingParametersJson](#postv2livewebsitetrackingparametersjson) - Create an Live Website Tracking Parameter

## postV2LiveWebsiteTrackingParametersJson

Creates a Live Website Tracking parameter to identify a person


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2LiveWebsiteTrackingParametersJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2LiveWebsiteTrackingParametersJsonRequestBody();
    $request->personId = 102413;

    $response = $sdk->liveWebsiteTrackingParameters->postV2LiveWebsiteTrackingParametersJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
