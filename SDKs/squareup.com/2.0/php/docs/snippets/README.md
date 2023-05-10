# snippets

### Available Operations

* [deleteSnippet](#deletesnippet) - DeleteSnippet
* [retrieveSnippet](#retrievesnippet) - RetrieveSnippet
* [upsertSnippet](#upsertsnippet) - UpsertSnippet

## deleteSnippet

Removes your snippet from a Square Online site.

You can call [ListSites](https://developer.squareup.com/reference/square_2021-08-18/sites-api/list-sites) to get the IDs of the sites that belong to a seller.


__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSnippetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSnippetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSnippetRequest();
    $request->siteId = 'quod';

    $requestSecurity = new DeleteSnippetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->snippets->deleteSnippet($request, $requestSecurity);

    if ($response->deleteSnippetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveSnippet

Retrieves your snippet from a Square Online site. A site can contain snippets from multiple snippet applications, but you can retrieve only the snippet that was added by your application.

You can call [ListSites](https://developer.squareup.com/reference/square_2021-08-18/sites-api/list-sites) to get the IDs of the sites that belong to a seller.


__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveSnippetRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveSnippetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveSnippetRequest();
    $request->siteId = 'voluptatibus';

    $requestSecurity = new RetrieveSnippetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->snippets->retrieveSnippet($request, $requestSecurity);

    if ($response->retrieveSnippetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upsertSnippet

Adds a snippet to a Square Online site or updates the existing snippet on the site. 
The snippet code is appended to the end of the `head` element on every page of the site, except checkout pages. A snippet application can add one snippet to a given site. 

You can call [ListSites](https://developer.squareup.com/reference/square_2021-08-18/sites-api/list-sites) to get the IDs of the sites that belong to a seller.


__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpsertSnippetRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpsertSnippetRequest;
use \OpenAPI\OpenAPI\Models\Shared\Snippet;
use \OpenAPI\OpenAPI\Models\Operations\UpsertSnippetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpsertSnippetRequest();
    $request->upsertSnippetRequest = new UpsertSnippetRequest();
    $request->upsertSnippetRequest->snippet = new Snippet();
    $request->upsertSnippetRequest->snippet->content = 'voluptas';
    $request->upsertSnippetRequest->snippet->createdAt = 'non';
    $request->upsertSnippetRequest->snippet->id = '5a6fae54-ebf6-40c3-a1f0-23b75d2367fe';
    $request->upsertSnippetRequest->snippet->siteId = 'vitae';
    $request->upsertSnippetRequest->snippet->updatedAt = 'est';
    $request->siteId = 'accusantium';

    $requestSecurity = new UpsertSnippetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->snippets->upsertSnippet($request, $requestSecurity);

    if ($response->upsertSnippetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
