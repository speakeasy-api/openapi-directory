# posts

## Overview

Retrieve and update posts.

### Available Operations

* [getAllPosts](#getallposts) - List all posts
* [getAllPostsChanges](#getallpostschanges) - List all post changes
* [getPost](#getpost) - Retrieve a post
* [getPostAndRelatedData](#getpostandrelateddata) - Retrieve post display data
* [getPosts](#getposts) - List posts
* [getPostsByIds](#getpostsbyids) - Retrieve multiple posts
* [searchPosts](#searchposts) - Search posts

## getAllPosts

This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPostsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPostsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllPostsRequest();
    $request->dateMax = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-28T03:46:24.500Z');
    $request->dateMin = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-15T05:10:19.629Z');
    $request->devicePixelRatio = 3373.96;
    $request->page = 87129;
    $request->perPage = 648172;
    $request->types = 'perferendis';

    $requestSecurity = new GetAllPostsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->posts->getAllPosts($request, $requestSecurity);

    if ($response->getAllPosts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllPostsChanges

This endpoint provides an easy way to get a feed of all the changes that have been made to publicly published posts on trash nothing.  Similar to the /posts/all endpoint, only data from the last 30 days is available and the changes are sorted by date (newest first).  Every change includes the date of the change, the post_id of the post that was changed and the type of change. <br /><br /> The different types of changes that are returned are listed below. <br /><br /> - deleted<br /> - undeleted<br /> - satisfied<br /> - promised<br /> - unpromised<br /> - withdrawn<br /> - edited<br /> <br /> For edited changes, clients can use the retrieve post API endpoint to get the edits that have been made to the post.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPostsChangesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPostsChangesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllPostsChangesRequest();
    $request->dateMax = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-03T02:15:00.468Z');
    $request->dateMin = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-31T22:02:25.322Z');
    $request->page = 140350;
    $request->perPage = 870013;

    $requestSecurity = new GetAllPostsChangesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->posts->getAllPostsChanges($request, $requestSecurity);

    if ($response->getAllPostsChanges200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPost

Retrieve a post

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPostRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPostRequest();
    $request->postId = 'at';

    $requestSecurity = new GetPostSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->posts->getPost($request, $requestSecurity);

    if ($response->post !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPostAndRelatedData

Retrieve a post and other data related to the post that is useful for displaying the post such as data about the user who posted the post and the groups the post was posted on.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPostAndRelatedDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPostAndRelatedDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPostAndRelatedDataRequest();
    $request->postId = 'maiores';

    $requestSecurity = new GetPostAndRelatedDataSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->posts->getPostAndRelatedData($request, $requestSecurity);

    if ($response->getPostAndRelatedData200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPosts

NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
NOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPostsRequest();
    $request->dateMax = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-15T07:22:15.330Z');
    $request->dateMin = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-13T16:19:19.906Z');
    $request->devicePixelRatio = 5204.78;
    $request->groupIds = 'porro';
    $request->includeReposts = 678880;
    $request->latitude = 1182.74;
    $request->longitude = 7206.33;
    $request->outcomes = 'officia';
    $request->page = 582020;
    $request->perPage = 143353;
    $request->radius = 5373.73;
    $request->sortBy = 'hic';
    $request->sources = 'optio';
    $request->types = 'totam';
    $request->userState = 'beatae';

    $requestSecurity = new GetPostsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->posts->getPosts($request, $requestSecurity);

    if ($response->getPosts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPostsByIds

Retrieve multiple posts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsByIdsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsByIdsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPostsByIdsRequest();
    $request->postIds = 'commodi';

    $requestSecurity = new GetPostsByIdsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->posts->getPostsByIds($request, $requestSecurity);

    if ($response->getPostsByIds200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchPosts

Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchPostsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchPostsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchPostsRequest();
    $request->dateMax = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-26T10:29:33.503Z');
    $request->dateMin = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T09:42:46.236Z');
    $request->devicePixelRatio = 7369.18;
    $request->groupIds = 'esse';
    $request->includeReposts = 216550;
    $request->latitude = 5684.34;
    $request->longitude = 1352.18;
    $request->outcomes = 'perferendis';
    $request->page = 324141;
    $request->perPage = 617636;
    $request->radius = 1496.75;
    $request->search = 'iste';
    $request->sortBy = 'dolor';
    $request->sources = 'natus';
    $request->types = 'laboriosam';
    $request->userState = 'hic';

    $requestSecurity = new SearchPostsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->posts->searchPosts($request, $requestSecurity);

    if ($response->searchPosts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
