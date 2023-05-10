# SDK

## Overview

Query our database of federal and state laws and incentives for alternative fuels and vehicles, air quality, fuel efficiency, and other transportation-related topics. This dataset powers the <a href="https://afdc.energy.gov/laws">Federal and State Laws and Incentives</a> on the Alternative Fuels Data Center.

### Available Operations

* [transportationIncentivesLawsAll](#transportationincentiveslawsall) - Return a full list of laws and incentives that match your query.
* [transportationIncentivesLawsCategories](#transportationincentiveslawscategories) - Return the law categories for a given category type.
* [transportationIncentivesLawsId](#transportationincentiveslawsid) - Fetch the details of a specific law given the law's ID.
* [transportationIncentivesLawsPocs](#transportationincentiveslawspocs) - Get the points of contact for a given jurisdiction.

## transportationIncentivesLawsAll

Return a full list of laws and incentives that match your query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TransportationIncentivesLawsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\TransportationIncentivesLawsAllOutputFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransportationIncentivesLawsAllRequest();
    $request->apiKey = 'deserunt';
    $request->expired = false;
    $request->incentiveType = 'suscipit';
    $request->jurisdiction = 'iure';
    $request->keyword = 'magnam';
    $request->lawType = 'debitis';
    $request->limit = 56713;
    $request->local = false;
    $request->outputFormat = TransportationIncentivesLawsAllOutputFormatEnum::CSV;
    $request->poc = false;
    $request->recent = false;
    $request->regulationType = 'tempora';
    $request->technology = 'suscipit';
    $request->userType = 'molestiae';

    $response = $sdk->sdk->transportationIncentivesLawsAll($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transportationIncentivesLawsCategories

Return the law categories for a given category type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TransportationIncentivesLawsCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\TransportationIncentivesLawsCategoriesOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\TransportationIncentivesLawsCategoriesTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransportationIncentivesLawsCategoriesRequest();
    $request->apiKey = 'minus';
    $request->outputFormat = TransportationIncentivesLawsCategoriesOutputFormatEnum::XML;
    $request->type = TransportationIncentivesLawsCategoriesTypeEnum::REGULATION;

    $response = $sdk->sdk->transportationIncentivesLawsCategories($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transportationIncentivesLawsId

Fetch the details of a specific law given the law's ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TransportationIncentivesLawsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\TransportationIncentivesLawsIdOutputFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransportationIncentivesLawsIdRequest();
    $request->apiKey = 'iusto';
    $request->expired = false;
    $request->id = 568045;
    $request->outputFormat = TransportationIncentivesLawsIdOutputFormatEnum::JSON;
    $request->poc = false;

    $response = $sdk->sdk->transportationIncentivesLawsId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transportationIncentivesLawsPocs

Get the points of contact for a given jurisdiction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TransportationIncentivesLawsPocsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TransportationIncentivesLawsPocsOutputFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransportationIncentivesLawsPocsRequest();
    $request->apiKey = 'recusandae';
    $request->jurisdiction = 'temporibus';
    $request->outputFormat = TransportationIncentivesLawsPocsOutputFormatEnum::JSON;

    $response = $sdk->sdk->transportationIncentivesLawsPocs($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
