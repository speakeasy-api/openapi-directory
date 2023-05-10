# genres

### Available Operations

* [genresList](#genreslist) - Get a list of video game genres.
* [genresRead](#genresread) - Get details of the genre.

## genresList

Get a list of video game genres.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenresListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenresListRequest();
    $request->ordering = 'expedita';
    $request->page = 469249;
    $request->pageSize = 998848;

    $response = $sdk->genres->genresList($request);

    if ($response->genresList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genresRead

Get details of the genre.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenresReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenresReadRequest();
    $request->id = 841140;

    $response = $sdk->genres->genresRead($request);

    if ($response->genreSingle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
