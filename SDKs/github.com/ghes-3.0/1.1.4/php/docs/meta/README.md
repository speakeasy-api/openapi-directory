# meta

## Overview

Endpoints that give information about the API.

### Available Operations

* [metaGet](#metaget) - Get GitHub Enterprise Server meta information
* [metaGetOctocat](#metagetoctocat) - Get Octocat
* [metaGetZen](#metagetzen) - Get the Zen of GitHub
* [metaRoot](#metaroot) - GitHub API Root

## metaGet

Get GitHub Enterprise Server meta information

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/meta#get-github-meta-information>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->meta->metaGet();

    if ($response->apiOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metaGetOctocat

Get the octocat as ASCII art

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/meta#get-octocat>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetaGetOctocatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetaGetOctocatRequest();
    $request->s = 'ipsa';

    $response = $sdk->meta->metaGetOctocat($request);

    if ($response->metaGetOctocat200ApplicationOctocatStreamString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metaGetZen

Get a random sentence from the Zen of GitHub

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->meta->metaGetZen();

    if ($response->metaGetZen200TextPlainString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metaRoot

Get Hypermedia links to resources accessible in GitHub's REST API

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#root-endpoint>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->meta->metaRoot();

    if ($response->metaRoot200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
