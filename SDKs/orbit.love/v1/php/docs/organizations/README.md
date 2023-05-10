# organizations

### Available Operations

* [getWorkspaceSlugOrganizations](#getworkspaceslugorganizations) - List organizations in a workspace
* [getWorkspaceSlugOrganizationsOrganizationId](#getworkspaceslugorganizationsorganizationid) - Get an organization
* [putWorkspaceSlugOrganizationsOrganizationId](#putworkspaceslugorganizationsorganizationid) - Update an organization

## getWorkspaceSlugOrganizations

List organizations in a workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsItemsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugOrganizationsRequest();
    $request->direction = GetWorkspaceSlugOrganizationsDirectionEnum::DESC;
    $request->items = GetWorkspaceSlugOrganizationsItemsEnum::TEN;
    $request->page = 'dolorum';
    $request->query = 'a';
    $request->sort = GetWorkspaceSlugOrganizationsSortEnum::WEBSITE;
    $request->workspaceSlug = 'harum';

    $requestSecurity = new GetWorkspaceSlugOrganizationsSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organizations->getWorkspaceSlugOrganizations($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceSlugOrganizationsOrganizationId

Get an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsOrganizationIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsOrganizationIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugOrganizationsOrganizationIdRequest();
    $request->organizationId = 'iusto';
    $request->workspaceSlug = 'ipsum';

    $requestSecurity = new GetWorkspaceSlugOrganizationsOrganizationIdSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organizations->getWorkspaceSlugOrganizationsOrganizationId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWorkspaceSlugOrganizationsOrganizationId

Update an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspaceSlugOrganizationsOrganizationIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Organization;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspaceSlugOrganizationsOrganizationIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWorkspaceSlugOrganizationsOrganizationIdRequest();
    $request->organization = new Organization();
    $request->organization->crmUid = 'quisquam';
    $request->organization->crmUrl = 'tenetur';
    $request->organization->dealClosedDate = 'amet';
    $request->organization->lifecycleStage = 'tempore';
    $request->organization->ownerEmail = 'accusamus';
    $request->organization->ownerName = 'numquam';
    $request->organization->pricePlan = 'enim';
    $request->organization->source = 'dolorem';
    $request->organizationId = 'sapiente';
    $request->workspaceSlug = 'totam';

    $requestSecurity = new PutWorkspaceSlugOrganizationsOrganizationIdSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->organizations->putWorkspaceSlugOrganizationsOrganizationId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
