# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->docFileName = 'brilliantDocument';
    $request->docUrlExpiresIn = 3600;
    $request->latexCompiler = CompileLatexCompilerEnum::LUALATEX;
    $request->latexRuns = 423655;
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [pdfGeneration](docs/pdfgeneration/README.md)

* [compile](docs/pdfgeneration/README.md#compile) - Compile New Document PDF
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
