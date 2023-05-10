# definition

## Overview

The different subscription types that are defined in a portal.

### Available Operations

* [getCommunicationPreferencesV3DefinitionsGetPage](#getcommunicationpreferencesv3definitionsgetpage) - Get subscription definitions

## getCommunicationPreferencesV3DefinitionsGetPage

Get a list of all subscription definitions for the portal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCommunicationPreferencesV3DefinitionsGetPageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetCommunicationPreferencesV3DefinitionsGetPageSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->definition->getCommunicationPreferencesV3DefinitionsGetPage($requestSecurity);

    if ($response->subscriptionDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
