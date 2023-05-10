# ideas

### Available Operations

* [ideahubIdeasList](#ideahubideaslist) - List ideas for a given Creator and filter and sort options.

## ideahubIdeasList

List ideas for a given Creator and filter and sort options.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdeahubIdeasListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdeahubIdeasListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->filter = 'minus';
    $request->key = 'placeat';
    $request->oauthToken = 'voluptatum';
    $request->orderBy = 'iusto';
    $request->pageSize = 568045;
    $request->pageToken = 'nisi';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $response = $sdk->ideas->ideahubIdeasList($request);

    if ($response->googleSearchIdeahubV1alphaListIdeasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
