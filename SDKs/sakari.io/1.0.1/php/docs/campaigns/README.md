# campaigns

## Overview

Define reusable message campaigns with a predefined contact list/filter, template and schedule

### Available Operations

* [campaignsCreate](#campaignscreate) - Create campaign
* [campaignsFetch](#campaignsfetch) - Fetch campaign by ID
* [campaignsFetchAll](#campaignsfetchall) - Fetch campaigns
* [campaignsRemove](#campaignsremove) - Deletes a campaign
* [campaignsUpdate](#campaignsupdate) - Updates a campaign

## campaignsCreate

Create campaign

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CampaignsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CampaignRequest;
use \OpenAPI\OpenAPI\Models\Shared\CampaignRequestFilters;
use \OpenAPI\OpenAPI\Models\Shared\CampaignRequestTrigger;
use \OpenAPI\OpenAPI\Models\Shared\CampaignRequestTriggerCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CampaignsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CampaignsCreateRequest();
    $request->campaignRequest = new CampaignRequest();
    $request->campaignRequest->filters = new CampaignRequestFilters();
    $request->campaignRequest->filters->attributes = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->campaignRequest->filters->contacts = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->campaignRequest->filters->tags = [
        'error',
        'deserunt',
    ];
    $request->campaignRequest->template = 'suscipit';
    $request->campaignRequest->trigger = new CampaignRequestTrigger();
    $request->campaignRequest->trigger->code = CampaignRequestTriggerCodeEnum::S;
    $request->accountId = 'magnam';

    $requestSecurity = new CampaignsCreateSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->campaigns->campaignsCreate($request, $requestSecurity);

    if ($response->campaignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## campaignsFetch

Fetch campaign by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CampaignsFetchRequest;
use \OpenAPI\OpenAPI\Models\Operations\CampaignsFetchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CampaignsFetchRequest();
    $request->accountId = 'debitis';
    $request->campaignId = 'ipsa';

    $requestSecurity = new CampaignsFetchSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->campaigns->campaignsFetch($request, $requestSecurity);

    if ($response->campaignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## campaignsFetchAll

Fetch campaigns

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CampaignsFetchAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\CampaignsFetchAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CampaignsFetchAllRequest();
    $request->accountId = 'delectus';
    $request->limit = 272656;
    $request->name = 'Minnie Schiller';
    $request->offset = 479977;

    $requestSecurity = new CampaignsFetchAllSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->campaigns->campaignsFetchAll($request, $requestSecurity);

    if ($response->campaignsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## campaignsRemove

Deletes a campaign

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CampaignsRemoveRequest;
use \OpenAPI\OpenAPI\Models\Operations\CampaignsRemoveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CampaignsRemoveRequest();
    $request->accountId = 'excepturi';
    $request->campaignId = 'nisi';

    $requestSecurity = new CampaignsRemoveSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->campaigns->campaignsRemove($request, $requestSecurity);

    if ($response->campaignsRemove200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## campaignsUpdate

Updates a campaign

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CampaignsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CampaignsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CampaignsUpdateRequest();
    $request->accountId = 'recusandae';
    $request->campaignId = 'temporibus';

    $requestSecurity = new CampaignsUpdateSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->campaigns->campaignsUpdate($request, $requestSecurity);

    if ($response->campaignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
