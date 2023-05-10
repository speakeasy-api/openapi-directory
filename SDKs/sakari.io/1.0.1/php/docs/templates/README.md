# templates

## Overview

Define reusable message or web templates

### Available Operations

* [templatesCreate](#templatescreate) - Create template
* [templatesFetch](#templatesfetch) - Fetch template by ID
* [templatesFetchAll](#templatesfetchall) - Fetch templates
* [templatesRemove](#templatesremove) - Deletes a template
* [templatesUpdate](#templatesupdate) - Updates a template

## templatesCreate

Create template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TemplatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TemplateRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\TemplatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TemplatesCreateRequest();
    $request->templateRequest = new TemplateRequest();
    $request->templateRequest->name = 'Eric Emmerich';
    $request->templateRequest->template = 'Hi {{{firstName}}}. Grab 20% off today only at ABC Shoes';
    $request->templateRequest->type = TemplateRequestTypeEnum::SMS;
    $request->accountId = 'excepturi';

    $requestSecurity = new TemplatesCreateSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->templates->templatesCreate($request, $requestSecurity);

    if ($response->templatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## templatesFetch

Fetch template by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TemplatesFetchRequest;
use \OpenAPI\OpenAPI\Models\Operations\TemplatesFetchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TemplatesFetchRequest();
    $request->accountId = 'pariatur';
    $request->templateId = 'modi';

    $requestSecurity = new TemplatesFetchSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->templates->templatesFetch($request, $requestSecurity);

    if ($response->templateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## templatesFetchAll

Fetch templates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TemplatesFetchAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\TemplatesFetchAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TemplatesFetchAllRequest();
    $request->accountId = 'praesentium';
    $request->limit = 523248;
    $request->name = 'Carl Waelchi DVM';
    $request->offset = 277718;

    $requestSecurity = new TemplatesFetchAllSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->templates->templatesFetchAll($request, $requestSecurity);

    if ($response->templatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## templatesRemove

Deletes a template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TemplatesRemoveRequest;
use \OpenAPI\OpenAPI\Models\Operations\TemplatesRemoveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TemplatesRemoveRequest();
    $request->accountId = 'enim';
    $request->templateId = 'consequatur';

    $requestSecurity = new TemplatesRemoveSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->templates->templatesRemove($request, $requestSecurity);

    if ($response->templatesRemove200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## templatesUpdate

Updates a template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TemplatesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TemplatesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TemplatesUpdateRequest();
    $request->accountId = 'est';
    $request->templateId = 'quibusdam';

    $requestSecurity = new TemplatesUpdateSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->templates->templatesUpdate($request, $requestSecurity);

    if ($response->templateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
