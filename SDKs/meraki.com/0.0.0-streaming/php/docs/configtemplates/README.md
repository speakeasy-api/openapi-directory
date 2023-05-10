# configTemplates

### Available Operations

* [deleteOrganizationConfigTemplate](#deleteorganizationconfigtemplate) - Remove a configuration template
* [getOrganizationConfigTemplates](#getorganizationconfigtemplates) - List the configuration templates for this organization

## deleteOrganizationConfigTemplate

Remove a configuration template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationConfigTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationConfigTemplateRequest();
    $request->configTemplateId = 'ea';
    $request->organizationId = 'accusantium';

    $response = $sdk->configTemplates->deleteOrganizationConfigTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplates

List the configuration templates for this organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplatesRequest();
    $request->organizationId = 'ab';

    $response = $sdk->configTemplates->getOrganizationConfigTemplates($request);

    if ($response->getOrganizationConfigTemplates200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
