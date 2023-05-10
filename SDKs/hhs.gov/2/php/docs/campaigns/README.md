# campaigns

## Overview

Information about campaigns

### Available Operations

* [getResourcesCampaignsJson](#getresourcescampaignsjson) - Get Campaigns
* [getResourcesCampaignsIdJson](#getresourcescampaignsidjson) - Get Campaign by ID
* [getResourcesCampaignsIdMediaJson](#getresourcescampaignsidmediajson) - Get MediaItems by Campaign ID
* [getResourcesCampaignsIdSyndicateFormat](#getresourcescampaignsidsyndicateformat) - Get MediaItems for Campaign

## getResourcesCampaignsJson

Media Listings for a specific campaign

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesCampaignsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesCampaignsJsonRequest();
    $request->max = 844266;
    $request->offset = 602763;
    $request->sort = 'nulla';

    $response = $sdk->campaigns->getResourcesCampaignsJson($request);

    if ($response->campaignWrapped !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesCampaignsIdJson

Information about a specific campaign

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesCampaignsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesCampaignsIdJsonRequest();
    $request->id = 544883;

    $response = $sdk->campaigns->getResourcesCampaignsIdJson($request);

    if ($response->campaignWrapped !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesCampaignsIdMediaJson

Campaign Listings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesCampaignsIdMediaJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesCampaignsIdMediaJsonRequest();
    $request->id = 847252;
    $request->max = 423655;
    $request->offset = 623564;
    $request->sort = 'deserunt';

    $response = $sdk->campaigns->getResourcesCampaignsIdMediaJson($request);

    if ($response->mediaItemWrapped !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesCampaignsIdSyndicateFormat

MediaItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesCampaignsIdSyndicateFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesCampaignsIdSyndicateFormatRequest();
    $request->displayMethod = 'suscipit';
    $request->format = 'iure';
    $request->id = 297534;

    $response = $sdk->campaigns->getResourcesCampaignsIdSyndicateFormat($request);

    if ($response->syndicateMarshallerWrapped !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
