# licenseTemplate

## Overview

License Template operations

License Template Services
<https://netlicensing.io/wiki/license-template-services>
### Available Operations

* [createLicenseTemplate](#createlicensetemplate) - Create License Template
* [deleteLicenseTemplate](#deletelicensetemplate) - Delete License Template
* [getLicenseTemplate](#getlicensetemplate) - Get License Template
* [listLicenseTemplates](#listlicensetemplates) - List License Templates
* [updateLicenseTemplate](#updatelicensetemplate) - Update License Template

## createLicenseTemplate

Creates a new License Template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLicenseTemplateRequestBody();
    $request->active = false;
    $request->automatic = false;
    $request->currency = 'fugit';
    $request->hidden = false;
    $request->hideLicenses = false;
    $request->licenseType = 'deleniti';
    $request->maxSessions = 'hic';
    $request->name = 'Everett Breitenberg';
    $request->number = 'modi';
    $request->price = 1863.32;
    $request->productModuleNumber = 'impedit';
    $request->quantity = 'cum';
    $request->quota = 'esse';
    $request->timeVolume = 'ipsum';
    $request->timeVolumePeriod = 'excepturi';

    $requestSecurity = new CreateLicenseTemplateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->licenseTemplate->createLicenseTemplate($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLicenseTemplate

Delete a License Template by 'number'.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLicenseTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLicenseTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLicenseTemplateRequest();
    $request->forceCascade = false;
    $request->licenseTemplateNumber = 'aspernatur';

    $requestSecurity = new DeleteLicenseTemplateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->licenseTemplate->deleteLicenseTemplate($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLicenseTemplate

Return a License Template by 'licenseTemplateNumber'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLicenseTemplateRequest();
    $request->licenseTemplateNumber = 'perferendis';

    $requestSecurity = new GetLicenseTemplateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->licenseTemplate->getLicenseTemplate($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLicenseTemplates

Return a list of all License Templates for the current Vendor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListLicenseTemplatesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListLicenseTemplatesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->licenseTemplate->listLicenseTemplates($requestSecurity);

    if ($response->netlicensings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLicenseTemplate

Sets the provided properties to a License Template. Return an updated License Template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLicenseTemplateRequest();
    $request->requestBody = new UpdateLicenseTemplateRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->automatic = false;
    $request->requestBody->currency = 'ad';
    $request->requestBody->hidden = false;
    $request->requestBody->hideLicenses = false;
    $request->requestBody->licenseType = 'natus';
    $request->requestBody->maxSessions = 'sed';
    $request->requestBody->name = 'Curtis Morissette';
    $request->requestBody->number = 'saepe';
    $request->requestBody->price = 6818.2;
    $request->requestBody->quantity = 'in';
    $request->requestBody->quota = 'corporis';
    $request->requestBody->timeVolume = 'iste';
    $request->requestBody->timeVolumePeriod = 'iure';
    $request->licenseTemplateNumber = 'saepe';

    $requestSecurity = new UpdateLicenseTemplateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->licenseTemplate->updateLicenseTemplate($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
