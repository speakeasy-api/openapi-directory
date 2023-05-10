# rootManagedVolume

## Overview

Managed volumes.

### Available Operations

* [createManagedVolumeGenerateScriptJob](#createmanagedvolumegeneratescriptjob) - Generate and download unified view script

## createManagedVolumeGenerateScriptJob

Start an asynchronous job to generate and download a script to unify export paths across channels in managed volume export.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateManagedVolumeGenerateScriptJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateManagedVolumeGenerateScriptJobRequest();
    $request->id = 'b979ef20-3873-4205-90cc-c1096400313b';

    $response = $sdk->rootManagedVolume->createManagedVolumeGenerateScriptJob($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
