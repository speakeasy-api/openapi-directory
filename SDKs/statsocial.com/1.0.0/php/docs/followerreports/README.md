# followerReports

### Available Operations

* [getReportsTwitterCreate](#getreportstwittercreate) - Used to create twitter follower report
* [postReportsTwitterCreate](#postreportstwittercreate) - Used to create twitter follower report

## getReportsTwitterCreate

This report uses the twitter followers as the audience. To create custom or tweet reports other methods must be used. Any report older than two days will be automatically regenerated upon create.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsTwitterCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportsTwitterCreateRequest();
    $request->filter = 'minus';
    $request->twitterHandle = 'placeat';
    $request->twitterId = 528895;

    $response = $sdk->followerReports->getReportsTwitterCreate($request);

    if ($response->createTwitter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postReportsTwitterCreate

This report uses the twitter followers as the audience. To create custom or tweet reports other methods must be used. Any report older than two days will be automatically regenerated upon create.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostReportsTwitterCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostReportsTwitterCreateRequest();
    $request->filter = 'iusto';
    $request->twitterHandle = 'excepturi';
    $request->twitterId = 392785;

    $response = $sdk->followerReports->postReportsTwitterCreate($request);

    if ($response->createTwitter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
