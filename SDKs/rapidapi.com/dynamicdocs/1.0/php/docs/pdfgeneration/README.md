# pdfGeneration

### Available Operations

* [compile](#compile) - Compile New Document PDF

## compile

Compile a PDF document from a specific template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompileLatexCompilerEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompileRequest();
    $request->contentType = 'application/json';
    $request->requestBody = [
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->docFileName = 'brilliantDocument';
    $request->docUrlExpiresIn = 3600;
    $request->latexCompiler = CompileLatexCompilerEnum::LUALATEX;
    $request->latexRuns = 272656;
    $request->mainFileName = 'inputFile.tex';
    $request->templateToken = '7a582350acb835ed';

    $response = $sdk->pdfGeneration->compile($request);

    if ($response->compile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
