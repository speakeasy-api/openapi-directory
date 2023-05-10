# brandingPolicies

### Available Operations

* [createOrganizationBrandingPolicy](#createorganizationbrandingpolicy) - Add a new branding policy to an organization
* [deleteOrganizationBrandingPolicy](#deleteorganizationbrandingpolicy) - Delete a branding policy
* [getOrganizationBrandingPolicies](#getorganizationbrandingpolicies) - List the branding policies of an organization
* [getOrganizationBrandingPoliciesPriorities](#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [getOrganizationBrandingPolicy](#getorganizationbrandingpolicy) - Return a branding policy
* [updateOrganizationBrandingPoliciesPriorities](#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.
* [updateOrganizationBrandingPolicy](#updateorganizationbrandingpolicy) - Update a branding policy

## createOrganizationBrandingPolicy

Add a new branding policy to an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyAdminSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyCustomLogo;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyCustomLogoImage;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationBrandingPolicyRequest();
    $request->requestBody = new CreateOrganizationBrandingPolicyRequestBody();
    $request->requestBody->adminSettings = new CreateOrganizationBrandingPolicyRequestBodyAdminSettings();
    $request->requestBody->adminSettings->appliesTo = CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum::ALL_ENTERPRISE_ADMINS;
    $request->requestBody->adminSettings->values = [
        'modi',
        'nam',
        'vero',
        'voluptatem',
    ];
    $request->requestBody->customLogo = new CreateOrganizationBrandingPolicyRequestBodyCustomLogo();
    $request->requestBody->customLogo->enabled = false;
    $request->requestBody->customLogo->image = new CreateOrganizationBrandingPolicyRequestBodyCustomLogoImage();
    $request->requestBody->customLogo->image->contents = 'ipsam';
    $request->requestBody->customLogo->image->format = CreateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnum::JPG;
    $request->requestBody->enabled = false;
    $request->requestBody->helpSettings = new CreateOrganizationBrandingPolicyRequestBodyHelpSettings();
    $request->requestBody->helpSettings->apiDocsSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->casesSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->ciscoMerakiProductDocumentation = 'non';
    $request->requestBody->helpSettings->communitySubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum::SHOW;
    $request->requestBody->helpSettings->dataProtectionRequestsSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->firewallInfoSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum::HIDE;
    $request->requestBody->helpSettings->getHelpSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum::SHOW;
    $request->requestBody->helpSettings->getHelpSubtabKnowledgeBaseSearch = 'deserunt';
    $request->requestBody->helpSettings->hardwareReplacementsSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum::HIDE;
    $request->requestBody->helpSettings->helpTab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum::HIDE;
    $request->requestBody->helpSettings->helpWidget = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnum::HIDE;
    $request->requestBody->helpSettings->newFeaturesSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum::SHOW;
    $request->requestBody->helpSettings->smForums = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum::HIDE;
    $request->requestBody->helpSettings->supportContactInfo = 'sint';
    $request->requestBody->helpSettings->universalSearchKnowledgeBaseSearch = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum::SHOW;
    $request->requestBody->name = 'Irvin Tromp';
    $request->organizationId = 'voluptas';

    $response = $sdk->brandingPolicies->createOrganizationBrandingPolicy($request);

    if ($response->createOrganizationBrandingPolicy201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationBrandingPolicy

Delete a branding policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationBrandingPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationBrandingPolicyRequest();
    $request->brandingPolicyId = 'debitis';
    $request->organizationId = 'delectus';

    $response = $sdk->brandingPolicies->deleteOrganizationBrandingPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationBrandingPolicies

List the branding policies of an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationBrandingPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationBrandingPoliciesRequest();
    $request->organizationId = 'quae';

    $response = $sdk->brandingPolicies->getOrganizationBrandingPolicies($request);

    if ($response->getOrganizationBrandingPolicies200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationBrandingPoliciesPriorities

Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationBrandingPoliciesPrioritiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationBrandingPoliciesPrioritiesRequest();
    $request->organizationId = 'minus';

    $response = $sdk->brandingPolicies->getOrganizationBrandingPoliciesPriorities($request);

    if ($response->getOrganizationBrandingPoliciesPriorities200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationBrandingPolicy

Return a branding policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationBrandingPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationBrandingPolicyRequest();
    $request->brandingPolicyId = 'fuga';
    $request->organizationId = 'laborum';

    $response = $sdk->brandingPolicies->getOrganizationBrandingPolicy($request);

    if ($response->getOrganizationBrandingPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationBrandingPoliciesPriorities

Update the priority ordering of an organization's branding policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPoliciesPrioritiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPoliciesPrioritiesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationBrandingPoliciesPrioritiesRequest();
    $request->requestBody = new UpdateOrganizationBrandingPoliciesPrioritiesRequestBody();
    $request->requestBody->brandingPolicyIds = [
        'velit',
    ];
    $request->organizationId = 'atque';

    $response = $sdk->brandingPolicies->updateOrganizationBrandingPoliciesPriorities($request);

    if ($response->updateOrganizationBrandingPoliciesPriorities200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationBrandingPolicy

Update a branding policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyAdminSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyCustomLogo;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationBrandingPolicyRequest();
    $request->requestBody = new UpdateOrganizationBrandingPolicyRequestBody();
    $request->requestBody->adminSettings = new UpdateOrganizationBrandingPolicyRequestBodyAdminSettings();
    $request->requestBody->adminSettings->appliesTo = UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum::ALL_ADMINS;
    $request->requestBody->adminSettings->values = [
        'magni',
        'soluta',
        'repudiandae',
        'nam',
    ];
    $request->requestBody->customLogo = new UpdateOrganizationBrandingPolicyRequestBodyCustomLogo();
    $request->requestBody->customLogo->enabled = false;
    $request->requestBody->customLogo->image = new UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImage();
    $request->requestBody->customLogo->image->contents = 'dolore';
    $request->requestBody->customLogo->image->format = UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnum::JPG;
    $request->requestBody->enabled = false;
    $request->requestBody->helpSettings = new UpdateOrganizationBrandingPolicyRequestBodyHelpSettings();
    $request->requestBody->helpSettings->apiDocsSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum::HIDE;
    $request->requestBody->helpSettings->casesSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->ciscoMerakiProductDocumentation = 'dignissimos';
    $request->requestBody->helpSettings->communitySubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->dataProtectionRequestsSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum::SHOW;
    $request->requestBody->helpSettings->firewallInfoSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum::HIDE;
    $request->requestBody->helpSettings->getHelpSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum::SHOW;
    $request->requestBody->helpSettings->getHelpSubtabKnowledgeBaseSearch = 'iure';
    $request->requestBody->helpSettings->hardwareReplacementsSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->helpTab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum::SHOW;
    $request->requestBody->helpSettings->helpWidget = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnum::HIDE;
    $request->requestBody->helpSettings->newFeaturesSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->smForums = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum::SHOW;
    $request->requestBody->helpSettings->supportContactInfo = 'inventore';
    $request->requestBody->helpSettings->universalSearchKnowledgeBaseSearch = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum::SHOW;
    $request->requestBody->name = 'Juan Wolf';
    $request->brandingPolicyId = 'aliquam';
    $request->organizationId = 'velit';

    $response = $sdk->brandingPolicies->updateOrganizationBrandingPolicy($request);

    if ($response->updateOrganizationBrandingPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
