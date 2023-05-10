# phoneNumberAssignments

## Overview

Phone Number Assignments

### Available Operations

* [getV2PhoneNumberAssignmentsJson](#getv2phonenumberassignmentsjson) - List phone number assignments
* [getV2PhoneNumberAssignmentsIdJson](#getv2phonenumberassignmentsidjson) - Fetch a phone number assignment

## getV2PhoneNumberAssignmentsJson

Fetches multiple phone number assignment records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2PhoneNumberAssignmentsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2PhoneNumberAssignmentsJsonRequest();
    $request->ids = [
        983854,
        703966,
        697330,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 932080;
    $request->perPage = 389548;
    $request->sortBy = 'unde';
    $request->sortDirection = 'modi';

    $response = $sdk->phoneNumberAssignments->getV2PhoneNumberAssignmentsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2PhoneNumberAssignmentsIdJson

Fetches a phone number assignment, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2PhoneNumberAssignmentsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2PhoneNumberAssignmentsIdJsonRequest();
    $request->id = '9fb2bb4e-cae6-4c3d-9db3-adebd5daea4c';

    $response = $sdk->phoneNumberAssignments->getV2PhoneNumberAssignmentsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
