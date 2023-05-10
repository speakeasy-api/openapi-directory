# wikis

### Available Operations

* [wikiContent](#wikicontent) - Retrieve the Content of a Wiki
* [wikiRead](#wikiread) - Retrieve a Wiki

## wikiContent

Retrieves the plaintext content of a wiki in markdown format.
#### Returns
Returns `text/markdown` of the wiki content itself.
If the request is unsuccessful, plaintext with the error message will be displayed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WikiContentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WikiContentRequest();
    $request->wikiId = 'eius';

    $response = $sdk->wikis->wikiContent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## wikiRead

Retrieves the details about a specific wiki.
A wiki is a collection of markdown text pages that can be used to describe the project or dataset of contained in the attached node.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested wiki, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WikiReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WikiReadRequest();
    $request->wikiId = 'aspernatur';

    $response = $sdk->wikis->wikiRead($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
