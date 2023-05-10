# blog

### Available Operations

* [getBlogPosts](#getblogposts) - Get blog posts - ordered by created desc by default

## getBlogPosts

Get blog posts - ordered by created desc by default

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBlogPostsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlogPostsRequest();
    $request->fallback = false;
    $request->locale = 'quod';
    $request->page = 461479;
    $request->perPage = 520478;

    $response = $sdk->blog->getBlogPosts($request);

    if ($response->blogArticleList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
