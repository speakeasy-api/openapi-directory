# insightsAPI

## Overview

Endpoints to get insights of podcasts, e.g., audience demographics

### Available Operations

* [getPodcastAudience](#getpodcastaudience) - Fetch audience demographics for a podcast
* [getPodcastsByDomainName](#getpodcastsbydomainname) - Fetch podcasts by a publisher's domain name

## getPodcastAudience

Fetch audience demographics for a podcast - 1) directly measured on the Listen Notes platform; 2) only supports audience breakdown by regions for now; 3) not every podcast has data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPodcastAudienceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPodcastAudienceRequest();
    $request->xListenAPIKey = 'ipsam';
    $request->id = '02a94bb4-f63c-4969-a9a3-efa77dfb14cd';

    $response = $sdk->insightsAPI->getPodcastAudience($request);

    if ($response->podcastAudienceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPodcastsByDomainName

Fetch podcasts by a publisher's domain name, e.g., nytimes.com, wondery.com, npr.org...
Each request will return up to 10 podcasts. You can use the `page` parameter to paginate.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPodcastsByDomainNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPodcastsByDomainNameRequest();
    $request->xListenAPIKey = 'ea';
    $request->domainName = 'aliquid';
    $request->page = 675439;

    $response = $sdk->insightsAPI->getPodcastsByDomainName($request);

    if ($response->podcastDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
