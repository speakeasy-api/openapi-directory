# cadenceMemberships

## Overview

Cadence Membership

### Available Operations

* [deleteV2CadenceMembershipsIdJson](#deletev2cadencemembershipsidjson) - Delete a cadence membership
* [getV2CadenceMembershipsJson](#getv2cadencemembershipsjson) - List cadence memberships
* [getV2CadenceMembershipsIdJson](#getv2cadencemembershipsidjson) - Fetch a cadence membership
* [postV2CadenceMembershipsJson](#postv2cadencemembershipsjson) - Create a cadence membership

## deleteV2CadenceMembershipsIdJson

Cadence Membership


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteV2CadenceMembershipsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteV2CadenceMembershipsIdJsonRequest();
    $request->id = '4f157560-82d6-48ea-99f1-d17051339d08';

    $response = $sdk->cadenceMemberships->deleteV2CadenceMembershipsIdJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2CadenceMembershipsJson

Fetches multiple cadence membership records. The records can be filtered, paged, and sorted according to
the respective parameters. A cadence membership is the association between a person and their current and
historical time on a cadence. Cadence membership records are mutable and change over time. If a person is
added to a cadence and re-added to the same cadence in the future, there is a single membership record.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CadenceMembershipsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CadenceMembershipsJsonRequest();
    $request->cadenceId = 15606;
    $request->currentlyOnCadence = false;
    $request->ids = [
        428796,
        649832,
        68074,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 544591;
    $request->perPage = 251941;
    $request->personId = 32465;
    $request->sortBy = 'dolor';
    $request->sortDirection = 'occaecati';
    $request->updatedAt = [
        'impedit',
        'explicabo',
    ];

    $response = $sdk->cadenceMemberships->getV2CadenceMembershipsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2CadenceMembershipsIdJson

Fetches a cadence membership, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CadenceMembershipsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CadenceMembershipsIdJsonRequest();
    $request->id = '6071f93f-5f06-442d-ac7a-f515cc413aa6';

    $response = $sdk->cadenceMemberships->getV2CadenceMembershipsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2CadenceMembershipsJson

Adds a person to a cadence. person_id and cadence_id are required, and must be visible to the authenticated user. user_id will
default to the authenticated user, but can be set to any visible user on the authenticated team.

A person cannot be added to a cadence on behalf of a teammate unless the cadence is a team cadence, the cadence is owned by
the teammate, or the teammate has the Personal Cadence Admin permission.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2CadenceMembershipsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2CadenceMembershipsJsonRequest();
    $request->cadenceId = 246063;
    $request->personId = 633931;
    $request->stepId = 665859;
    $request->userId = 926880;

    $response = $sdk->cadenceMemberships->postV2CadenceMembershipsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
