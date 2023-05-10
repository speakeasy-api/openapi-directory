# organization

## Overview

An organization is a Fitbit Plus customer. No data is accessible across organizations.

### Available Operations

* [fetchOrganization](#fetchorganization) - Get an organization

## fetchOrganization

Get an organization record by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchOrganizationRequest();
    $request->id = '5db6a660-659a-41ad-aaab-5851d6c645b0';

    $response = $sdk->organization->fetchOrganization($request);

    if ($response->fetchOrganizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
