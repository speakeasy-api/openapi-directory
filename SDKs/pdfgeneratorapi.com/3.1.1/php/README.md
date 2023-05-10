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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [documents](docs/documents/README.md)

* [mergeTemplate](docs/documents/README.md#mergetemplate) - Generate document
* [mergeTemplates](docs/documents/README.md#mergetemplates) - Generate document (multiple templates)

### [templates](docs/templates/README.md)

* [copyTemplate](docs/templates/README.md#copytemplate) - Copy template
* [createTemplate](docs/templates/README.md#createtemplate) - Create template
* [deleteTemplate](docs/templates/README.md#deletetemplate) - Delete template
* [getEditorUrl](docs/templates/README.md#geteditorurl) - Open editor
* [getTemplate](docs/templates/README.md#gettemplate) - Get template
* [getTemplates](docs/templates/README.md#gettemplates) - Get templates
* [updateTemplate](docs/templates/README.md#updatetemplate) - Update template

### [workspaces](docs/workspaces/README.md)

* [deleteWorkspace](docs/workspaces/README.md#deleteworkspace) - Delete workspace
* [getWorkspace](docs/workspaces/README.md#getworkspace) - Get workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
