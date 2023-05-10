# documents

### Available Operations

* [mergeTemplate](#mergetemplate) - Generate document
* [mergeTemplates](#mergetemplates) - Generate document (multiple templates)

## mergeTemplate

Merges template with data and returns base64 encoded document or a public URL to a document. You can send json encoded data in request body or a public URL to your json file as the data parameter. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MergeTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Data;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MergeTemplateRequest();
    $request->data = new Data();
    $request->data->id = 12312;
    $request->data->name = 'Sample Data';
    $request->format = FormatEnum::PDF;
    $request->name = 'My document';
    $request->output = OutputEnum::BASE64;
    $request->templateId = 19375;

    $response = $sdk->documents->mergeTemplate($request);

    if ($response->mergeTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mergeTemplates

Allows to merge multiples template with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MergeTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchData;
use \OpenAPI\OpenAPI\Models\Shared\Data;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MergeTemplatesRequest();
    $request->requestBody = [
        new BatchData(),
        new BatchData(),
        new BatchData(),
    ];
    $request->format = FormatEnum::PDF;
    $request->name = 'My document';
    $request->output = OutputEnum::BASE64;

    $response = $sdk->documents->mergeTemplates($request);

    if ($response->mergeTemplates200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
