# users

## Overview

Retrieve and update user data.

### Available Operations

* [getUserPosts](#getuserposts) - List posts by a user
* [searchUserPosts](#searchuserposts) - Search posts by a user

## getUserPosts

List posts by a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPostsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPostsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserPostsRequest();
    $request->dateMax = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-15T09:45:44.943Z');
    $request->dateMin = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T18:42:38.160Z');
    $request->devicePixelRatio = 6130.64;
    $request->groupIds = 'iure';
    $request->includeReposts = 902349;
    $request->latitude = 6976.31;
    $request->longitude = 992.8;
    $request->outcomes = 'ipsa';
    $request->page = 969810;
    $request->perPage = 666767;
    $request->radius = 6531.4;
    $request->sortBy = 'laborum';
    $request->sources = 'dolores';
    $request->types = 'dolorem';
    $request->userId = 'corporis';

    $requestSecurity = new GetUserPostsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUserPosts($request, $requestSecurity);

    if ($response->getUserPosts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchUserPosts

Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchUserPostsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchUserPostsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchUserPostsRequest();
    $request->dateMax = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-01T23:59:21.675Z');
    $request->dateMin = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-24T03:24:11.703Z');
    $request->devicePixelRatio = 3637.11;
    $request->groupIds = 'minima';
    $request->includeReposts = 570197;
    $request->latitude = 384.25;
    $request->longitude = 4386.01;
    $request->outcomes = 'culpa';
    $request->page = 988374;
    $request->perPage = 958950;
    $request->radius = 1020.44;
    $request->search = 'mollitia';
    $request->sortBy = 'dolorem';
    $request->sources = 'culpa';
    $request->types = 'consequuntur';
    $request->userId = 'repellat';

    $requestSecurity = new SearchUserPostsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->searchUserPosts($request, $requestSecurity);

    if ($response->searchUserPosts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
