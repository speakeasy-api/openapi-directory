# configTemplates

### Available Operations

* [createOrganizationConfigTemplate](#createorganizationconfigtemplate) - Create a new configuration template
* [deleteOrganizationConfigTemplate](#deleteorganizationconfigtemplate) - Remove a configuration template
* [getOrganizationConfigTemplate](#getorganizationconfigtemplate) - Return a single configuration template
* [getOrganizationConfigTemplateSwitchProfilePort](#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [getOrganizationConfigTemplateSwitchProfilePorts](#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [getOrganizationConfigTemplateSwitchProfiles](#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [getOrganizationConfigTemplates](#getorganizationconfigtemplates) - List the configuration templates for this organization
* [updateOrganizationConfigTemplate](#updateorganizationconfigtemplate) - Update a configuration template
* [updateOrganizationConfigTemplateSwitchProfilePort](#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

## createOrganizationConfigTemplate

Create a new configuration template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationConfigTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationConfigTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationConfigTemplateRequest();
    $request->requestBody = new CreateOrganizationConfigTemplateRequestBody();
    $request->requestBody->copyFromNetworkId = 'consequuntur';
    $request->requestBody->name = 'Ignacio Wyman';
    $request->requestBody->timeZone = 'accusamus';
    $request->organizationId = 'totam';

    $response = $sdk->configTemplates->createOrganizationConfigTemplate($request);

    if ($response->createOrganizationConfigTemplate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->configTemplateId = 'reiciendis';
    $request->organizationId = 'ab';

    $response = $sdk->configTemplates->deleteOrganizationConfigTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplate

Return a single configuration template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateRequest();
    $request->configTemplateId = 'sint';
    $request->organizationId = 'nihil';

    $response = $sdk->configTemplates->getOrganizationConfigTemplate($request);

    if ($response->getOrganizationConfigTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplateSwitchProfilePort

Return a switch profile port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilePortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilePortRequest();
    $request->configTemplateId = 'esse';
    $request->organizationId = 'iure';
    $request->portId = 'odio';
    $request->profileId = 'nesciunt';

    $response = $sdk->configTemplates->getOrganizationConfigTemplateSwitchProfilePort($request);

    if ($response->getOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplateSwitchProfilePorts

Return all the ports of a switch profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilePortsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilePortsRequest();
    $request->configTemplateId = 'debitis';
    $request->organizationId = 'vel';
    $request->profileId = 'neque';

    $response = $sdk->configTemplates->getOrganizationConfigTemplateSwitchProfilePorts($request);

    if ($response->getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplateSwitchProfiles

List the switch profiles for your switch template configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilesRequest();
    $request->configTemplateId = 'corporis';
    $request->organizationId = 'voluptas';

    $response = $sdk->configTemplates->getOrganizationConfigTemplateSwitchProfiles($request);

    if ($response->getOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject !== null) {
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
    $request->organizationId = 'consequuntur';

    $response = $sdk->configTemplates->getOrganizationConfigTemplates($request);

    if ($response->getOrganizationConfigTemplates200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationConfigTemplate

Update a configuration template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationConfigTemplateRequest();
    $request->requestBody = new UpdateOrganizationConfigTemplateRequestBody();
    $request->requestBody->name = 'Ron Rau IV';
    $request->requestBody->timeZone = 'maiores';
    $request->configTemplateId = 'accusantium';
    $request->organizationId = 'veniam';

    $response = $sdk->configTemplates->updateOrganizationConfigTemplate($request);

    if ($response->updateOrganizationConfigTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationConfigTemplateSwitchProfilePort

Update a switch profile port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationConfigTemplateSwitchProfilePortRequest();
    $request->requestBody = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody();
    $request->requestBody->accessPolicyNumber = 906232;
    $request->requestBody->accessPolicyType = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum::CUSTOM_ACCESS_POLICY;
    $request->requestBody->allowedVlans = 'facere';
    $request->requestBody->daiTrusted = false;
    $request->requestBody->enabled = false;
    $request->requestBody->flexibleStackingEnabled = false;
    $request->requestBody->isolationEnabled = false;
    $request->requestBody->linkNegotiation = 'aliquam';
    $request->requestBody->macAllowList = [
        'doloribus',
        'fugiat',
        'est',
    ];
    $request->requestBody->name = 'Lee Brown';
    $request->requestBody->poeEnabled = false;
    $request->requestBody->portScheduleId = 'illo';
    $request->requestBody->profile = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile();
    $request->requestBody->profile->enabled = false;
    $request->requestBody->profile->id = 'f5fd9425-9c0b-436f-a5ea-944f3b756c11';
    $request->requestBody->profile->iname = 'hic';
    $request->requestBody->rstpEnabled = false;
    $request->requestBody->stickyMacAllowList = [
        'quisquam',
        'dolor',
    ];
    $request->requestBody->stickyMacAllowListLimit = 496548;
    $request->requestBody->stormControlEnabled = false;
    $request->requestBody->stpGuard = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum::LOOP_GUARD;
    $request->requestBody->tags = [
        'architecto',
        'qui',
    ];
    $request->requestBody->type = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum::ACCESS;
    $request->requestBody->udld = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum::ALERT_ONLY;
    $request->requestBody->vlan = 276650;
    $request->requestBody->voiceVlan = 240490;
    $request->configTemplateId = 'praesentium';
    $request->organizationId = 'dolor';
    $request->portId = 'exercitationem';
    $request->profileId = 'expedita';

    $response = $sdk->configTemplates->updateOrganizationConfigTemplateSwitchProfilePort($request);

    if ($response->updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
