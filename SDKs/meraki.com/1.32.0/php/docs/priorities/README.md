# priorities

### Available Operations

* [getOrganizationBrandingPoliciesPriorities](#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [updateOrganizationBrandingPoliciesPriorities](#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.

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
    $request->organizationId = 'dolorum';

    $response = $sdk->priorities->getOrganizationBrandingPoliciesPriorities($request);

    if ($response->getOrganizationBrandingPoliciesPriorities200ApplicationJSONObject !== null) {
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
        'provident',
        'alias',
        'illum',
        'aspernatur',
    ];
    $request->organizationId = 'nihil';

    $response = $sdk->priorities->updateOrganizationBrandingPoliciesPriorities($request);

    if ($response->updateOrganizationBrandingPoliciesPriorities200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
